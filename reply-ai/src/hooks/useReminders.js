import { useState, useEffect, useCallback, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { subscribeReminders, subscribeSharedReminders, addReminder as addSvc, updateReminder as updateSvc, removeReminder as removeSvc, shareReminder as shareSvc, unshareReminder as unshareSvc, ensureUserDocument, lookupUidByEmail } from "../services/reminderService";

const MAX = 5;

function getErrorMessage(err) {
  if (!err) return "Error desconocido";
  if (err.code === "permission-denied") return "Permiso denegado.";
  if (err.code === "unavailable") return "Firestore no disponible.";
  return err.message || "Error desconocido";
}

let audioCtx = null;

function getAudioCtx() {
  if (audioCtx) return audioCtx;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  } catch {}
  return audioCtx;
}

document.addEventListener("click", () => { const c = getAudioCtx(); if (c?.state === "suspended") c.resume(); }, { once: true });
document.addEventListener("touchstart", () => { const c = getAudioCtx(); if (c?.state === "suspended") c.resume(); }, { once: true });

async function playNotificationSound() {
  try {
    const ctx = getAudioCtx();
    if (!ctx) return;
    if (ctx.state === "suspended") await ctx.resume();
    if (ctx.state !== "running") return;
    const play = (freq, start, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.3, start);
      gain.gain.exponentialRampToValueAtTime(0.01, start + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + duration);
    };
    const t = ctx.currentTime;
    play(523, t, 0.15);
    play(659, t + 0.15, 0.15);
    play(784, t + 0.3, 0.3);
  } catch (e) {
    console.warn("Sound error:", e);
  }
}

function getNow() {
  const d = new Date();
  return { h: d.getHours(), m: d.getMinutes(), dow: d.getDay(), day: d.getDate(), month: d.getMonth() + 1, dateStr: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}` };
}

function shouldFireToday(r) {
  if (!r.active) return false;
  const now = getNow();
  if (r.frequency === "daily") return true;
  if (r.frequency === "weekly") return r.weekday === now.dow;
  if (r.frequency === "monthly") return r.day === now.day;
  if (r.frequency === "once") return r.day === now.day && r.month === now.month;
  return false;
}

export function useReminders() {
  const { user } = useAuth();
  const [reminders, setReminders] = useState([]);
  const [error, setError] = useState("");
  const [justFired, setJustFired] = useState(null);
  const intervalRef = useRef(null);
  const permAsked = useRef(false);

  useEffect(() => {
    if (!user) return;
    setError("");
    if (user.email) ensureUserDocument(user.uid, user.email).catch(() => {});

    let owned = [];
    let shared = [];

    const merge = () => {
      const seen = new Set();
      const merged = [];
      for (const r of [...owned, ...shared]) {
        if (!seen.has(r.id)) {
          seen.add(r.id);
          merged.push(r);
        }
      }
      setReminders(merged);
    };

    const unsub1 = subscribeReminders(user.uid, (items) => {
      owned = items;
      merge();
    }, (e) => {
      setError("Error al cargar recordatorios: " + getErrorMessage(e));
    });

    const unsub2 = subscribeSharedReminders(user.uid, (items) => {
      shared = items;
      merge();
    }, (e) => {
      console.error("Shared reminders error:", e);
    });

    return () => {
      unsub1();
      unsub2();
    };
  }, [user]);

  useEffect(() => {
    if (!user || reminders.length === 0) return;

    if (!permAsked.current && "Notification" in window) {
      if (Notification.permission === "default") {
        Notification.requestPermission().then((r) => {
          if (r !== "default") permAsked.current = true;
          console.log("Notification permission:", r);
        });
        permAsked.current = true;
      } else {
        permAsked.current = true;
        console.log("Notification permission:", Notification.permission);
      }
    }

    const tryFire = async (r) => {
      if (r.isShared) return;
      if (!shouldFireToday(r)) return;
      const startHour = r.earlyBird ? 7 : 9;
      if (new Date().getHours() < startHour) return;
      if (r.lastFiredAt && Date.now() - new Date(r.lastFiredAt).getTime() < 3600000) return;
      try {
        await updateSvc(r.id, { lastFiredAt: new Date().toISOString() });
        setJustFired(r.id);
        setTimeout(() => setJustFired(null), 5000);

        playNotificationSound();

        const notifBody = r.name + (r.note ? " — " + r.note : "");
        if ("Notification" in window && Notification.permission === "granted") {
          try {
            new Notification("🔔 Toolbox AI", { body: notifBody, icon: "./icons/icon-192.svg", tag: r.id });
          } catch (nErr) {
            console.warn("Notification error:", nErr);
          }
        } else if ("Notification" in window && Notification.permission === "default") {
          Notification.requestPermission().then((p) => {
            if (p === "granted") {
              new Notification("🔔 Toolbox AI", { body: notifBody, icon: "./icons/icon-192.svg", tag: r.id });
            }
          });
        }
      } catch (e) {
        console.warn("Reminder fire error:", e);
      }
    };

    const fireAll = () => { reminders.forEach(tryFire); };

    fireAll();

    const onVisible = () => {
      if (document.visibilityState === "visible") fireAll();
    };
    document.addEventListener("visibilitychange", onVisible);

    intervalRef.current = setInterval(fireAll, 30000);

    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [user, reminders]);

  const addReminder = useCallback(async (data) => {
    if (!user) return;
    setError("");
    const ownedCount = reminders.filter((r) => !r.isShared).length;
    if (ownedCount >= MAX) {
      setError(`Límite alcanzado: máximo ${MAX} recordatorios.`);
      return;
    }
    try {
      await addSvc(data, user.uid, user.email);
    } catch (err) {
      setError("Error al añadir recordatorio: " + getErrorMessage(err));
    }
  }, [user, reminders]);

  const updateReminder = useCallback(async (id, data) => {
    setError("");
    try {
      await updateSvc(id, data);
    } catch (err) {
      setError("Error al actualizar recordatorio: " + getErrorMessage(err));
    }
  }, []);

  const removeReminder = useCallback(async (id) => {
    setError("");
    try {
      await removeSvc(id);
    } catch (err) {
      setError("Error al eliminar recordatorio: " + getErrorMessage(err));
    }
  }, []);

  const shareReminder = useCallback(async (id, email) => {
    setError("");
    if (!email || !email.includes("@")) {
      setError("Introduce un email válido.");
      return;
    }
    try {
      const uid = await lookupUidByEmail(email);
      if (!uid) {
        setError("Ese usuario no está registrado en Toolbox AI.");
        return;
      }
      if (uid === user.uid) {
        setError("No puedes compartir un recordatorio contigo mismo.");
        return;
      }
      await shareSvc(id, uid, email);
    } catch (err) {
      setError("Error al compartir recordatorio: " + getErrorMessage(err));
    }
  }, [user]);

  const unshareReminder = useCallback(async (id, uid, email) => {
    setError("");
    try {
      await unshareSvc(id, uid, email);
    } catch (err) {
      setError("Error al eliminar uso compartido: " + getErrorMessage(err));
    }
  }, []);

  return { reminders, error, justFired, userEmail: user?.email, addReminder, updateReminder, removeReminder, shareReminder, unshareReminder };
}
