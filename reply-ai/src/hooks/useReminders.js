import { useState, useEffect, useCallback, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  subscribeReminders,
  subscribeSharedReminders,
  addReminder as addSvc,
  updateReminder as updateSvc,
  removeReminder as removeSvc,
  shareReminder as shareSvc,
  unshareReminder as unshareSvc,
  ensureUserDocument,
  lookupUidByEmail,
} from "../services/reminderService";

const MAX = 5;

// ─── Audio ────────────────────────────────────────────────────────────────────

let audioCtx = null;

function getAudioCtx() {
  if (audioCtx) return audioCtx;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) {
    console.warn("AudioContext not supported:", e);
  }
  return audioCtx;
}

let silentOscillator = null;
let silentGain = null;

function startSilentAudio() {
  try {
    const ctx = getAudioCtx();
    if (!ctx) return;
    if (silentOscillator) return;

    silentOscillator = ctx.createOscillator();
    silentGain = ctx.createGain();
    
    silentOscillator.frequency.setValueAtTime(20, ctx.currentTime);
    silentGain.gain.setValueAtTime(0.00001, ctx.currentTime);
    
    silentOscillator.connect(silentGain);
    silentGain.connect(ctx.destination);
    
    silentOscillator.start();
  } catch (e) {
    console.warn("Silent audio failed:", e);
  }
}

function stopSilentAudio() {
  if (silentOscillator) {
    try {
      silentOscillator.stop();
    } catch (e) {}
    silentOscillator = null;
    silentGain = null;
  }
}

// Resume AudioContext on ANY user interaction (not just once)
function resumeAudio() {
  const c = getAudioCtx();
  if (c && c.state === "suspended") {
    c.resume().catch(() => {});
  }
}
document.addEventListener("click", resumeAudio);
document.addEventListener("touchstart", resumeAudio);
document.addEventListener("keydown", resumeAudio);

async function playNotificationSound() {
  try {
    const ctx = getAudioCtx();
    if (!ctx) return;

    // Always try to resume before playing
    if (ctx.state === "suspended") {
      await ctx.resume();
    }
    if (ctx.state !== "running") return;

    const play = (freq, start, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.35, start);
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

let activeAlarmInterval = null;

function startAlarmSound() {
  const ctx = getAudioCtx();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }

  stopAlarmSound();

  activeAlarmInterval = setInterval(() => {
    try {
      const nowTime = ctx.currentTime;
      
      const playBeep = (timeOffset) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, nowTime + timeOffset); // A5 note
        
        gain.gain.setValueAtTime(0, nowTime + timeOffset);
        gain.gain.linearRampToValueAtTime(0.3, nowTime + timeOffset + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, nowTime + timeOffset + 0.25);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(nowTime + timeOffset);
        osc.stop(nowTime + timeOffset + 0.25);
      };

      playBeep(0);
      playBeep(0.3);
    } catch (e) {
      console.warn("Alarm play error:", e);
    }
  }, 1000);
}

function stopAlarmSound() {
  if (activeAlarmInterval) {
    clearInterval(activeAlarmInterval);
    activeAlarmInterval = null;
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getErrorMessage(err) {
  if (!err) return "Error desconocido";
  if (err.code === "permission-denied") return "Permiso denegado.";
  if (err.code === "unavailable") return "Firestore no disponible.";
  return err.message || "Error desconocido";
}

function getNow() {
  const d = new Date();
  return {
    h: d.getHours(),
    m: d.getMinutes(),
    dow: d.getDay(),
    day: d.getDate(),
    month: d.getMonth() + 1,
  };
}

function shouldFireNow(r) {
  if (!r.active) return false;
  const now = getNow();

  // Check schedule
  if (r.frequency === "daily") {
    // ok – fires every day
  } else if (r.frequency === "weekly") {
    if (r.weekday !== now.dow) return false;
  } else if (r.frequency === "monthly") {
    if (r.day !== now.day) return false;
  } else if (r.frequency === "once") {
    if (r.day !== now.day || r.month !== now.month) return false;
  } else {
    return false;
  }

  // Check start hour or specific alarm time
  if (r.hasAlarm) {
    const alarmHour = r.alarmHour ?? 9;
    const alarmMinute = r.alarmMinute ?? 0;
    if (now.h !== alarmHour || Math.abs(now.m - alarmMinute) > 1) return false;
  } else {
    const startHour = r.earlyBird ? 7 : 9;
    if (now.h < startHour) return false;
  }

  // Check cooldown: don't fire if fired in the last 55 min
  // (use 55 min so the 1-hour interval doesn't miss a beat)
  if (r.lastFiredAt) {
    const elapsed = Date.now() - new Date(r.lastFiredAt).getTime();
    if (elapsed < 55 * 60 * 1000) return false;
  }

  return true;
}

async function requestNotificationPermission() {
  if (!("Notification" in window)) return "denied";
  if (Notification.permission !== "default") return Notification.permission;
  try {
    return await Notification.requestPermission();
  } catch {
    return "denied";
  }
}

function showNativeNotification(reminder) {
  if (!("Notification" in window)) return;
  if (Notification.permission !== "granted") return;
  try {
    const body = reminder.name + (reminder.note ? " — " + reminder.note : "");
    if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.ready.then((reg) => {
        reg.showNotification("🔔 Toolbox AI", {
          body,
          icon: "./icons/icon-192.svg",
          badge: "./icons/icon-192.svg",
          tag: reminder.id,
          renotify: true,
          vibrate: [200, 100, 200],
        });
      }).catch((err) => {
        console.warn("SW notification failed, falling back:", err);
        new Notification("🔔 Toolbox AI", { body, icon: "./icons/icon-192.svg", tag: reminder.id, renotify: true });
      });
    } else {
      new Notification("🔔 Toolbox AI", {
        body,
        icon: "./icons/icon-192.svg",
        tag: reminder.id,
        renotify: true,
      });
    }
  } catch (e) {
    console.warn("Notification error:", e);
  }
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useReminders() {
  const { user } = useAuth();
  const [reminders, setReminders] = useState([]);
  const [error, setError] = useState("");
  const [justFired, setJustFired] = useState(null);
  const [ringingReminder, setRingingReminder] = useState(null);

  // Keep a ref that always has the latest reminders so the interval
  // closure doesn't go stale.
  const remindersRef = useRef([]);
  remindersRef.current = reminders;

  // Track which reminder IDs are currently being fired to avoid double-fire
  const firingRef = useRef(new Set());

  // ── Subscribe to Firestore ─────────────────────────────────────────────────
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

    const unsub1 = subscribeReminders(
      user.uid,
      (items) => { owned = items; merge(); },
      (e) => setError("Error al cargar recordatorios: " + getErrorMessage(e))
    );

    const unsub2 = subscribeSharedReminders(
      user.uid,
      (items) => { shared = items; merge(); },
      (e) => console.error("Shared reminders error:", e)
    );

    return () => { unsub1(); unsub2(); };
  }, [user]);

  // ── Notification permission request (once, after reminders load) ───────────
  useEffect(() => {
    if (!user || reminders.length === 0) return;
    // Request permission proactively when the user has reminders
    requestNotificationPermission().then((perm) => {
      console.log("[Reminders] Notification permission:", perm);
    });
  }, [user, reminders.length > 0]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Silent audio loop to keep tab active in background ────────────────────
  useEffect(() => {
    if (!user) return;
    const hasActiveAlarms = reminders.some((r) => r.active && r.hasAlarm && !r.isShared);
    if (hasActiveAlarms) {
      startSilentAudio();
    } else {
      stopSilentAudio();
    }
    return () => {
      stopSilentAudio();
    };
  }, [user, reminders]);

  // ── Timer / notification engine ───────────────────────────────────────────
  useEffect(() => {
    if (!user) return;

    const tryFire = async (r) => {
      // Shared reminders don't fire (owner handles it)
      if (r.isShared) return;
      if (!shouldFireNow(r)) return;
      // Prevent double-firing within the same tick
      if (firingRef.current.has(r.id)) return;

      firingRef.current.add(r.id);
      try {
        // Persist the fire timestamp immediately so cooldown works across reloads
        await updateSvc(r.id, { lastFiredAt: new Date().toISOString() });

        // Sound
        if (r.hasAlarm) {
          startAlarmSound();
          setRingingReminder(r);
        } else {
          await playNotificationSound();
        }

        // Native notification – request permission first if needed
        if (Notification.permission === "default") {
          await requestNotificationPermission();
        }
        showNativeNotification(r);

        // Visual feedback in UI
        setJustFired(r.id);
        setTimeout(() => setJustFired(null), 5000);
      } catch (e) {
        console.warn("Reminder fire error:", e);
      } finally {
        // Remove from in-flight set after a short delay so Firestore snapshot
        // can update lastFiredAt before we check again
        setTimeout(() => firingRef.current.delete(r.id), 5000);
      }
    };

    const fireAll = () => {
      remindersRef.current.forEach(tryFire);
    };

    // Fire once on mount / user login
    fireAll();

    // Use Web Worker to bypass main thread timer throttling in background
    let worker = null;
    try {
      const workerCode = `
        let timer = null;
        self.onmessage = function(e) {
          if (e.data === 'start') {
            if (timer) clearInterval(timer);
            timer = setInterval(() => {
              self.postMessage('tick');
            }, 30000);
          } else if (e.data === 'stop') {
            if (timer) clearInterval(timer);
            timer = null;
          }
        };
      `;
      const blob = new Blob([workerCode], { type: "application/javascript" });
      const workerUrl = URL.createObjectURL(blob);
      worker = new Worker(workerUrl);
      worker.onmessage = (e) => {
        if (e.data === "tick") {
          fireAll();
        }
      };
      worker.postMessage("start");
    } catch (e) {
      console.warn("Worker timer creation failed, falling back:", e);
    }

    // Also run standard interval fallback (main thread)
    const interval = setInterval(fireAll, 60_000);

    // Also fire when the tab becomes visible again
    const onVisible = () => {
      if (document.visibilityState === "visible") fireAll();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      if (worker) {
        worker.postMessage("stop");
        worker.terminate();
      }
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisible);
      stopAlarmSound();
    };
  }, [user]); // ← depends only on `user`, NOT on `reminders`

  const stopAlarm = useCallback(() => {
    stopAlarmSound();
    setRingingReminder(null);
  }, []);

  // ─── CRUD callbacks ────────────────────────────────────────────────────────

  const addReminder = useCallback(async (data) => {
    if (!user) return;
    setError("");
    const ownedCount = remindersRef.current.filter((r) => !r.isShared).length;
    if (ownedCount >= MAX) {
      setError(`Límite alcanzado: máximo ${MAX} recordatorios.`);
      return;
    }
    try {
      await addSvc(data, user.uid, user.email);
    } catch (err) {
      setError("Error al añadir recordatorio: " + getErrorMessage(err));
    }
  }, [user]);

  const updateReminder = useCallback(async (id, data) => {
    setError("");
    try {
      const merged = { ...data };
      if (merged.active === true) {
        merged.lastFiredAt = null;
      }
      await updateSvc(id, merged);
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

  return {
    reminders,
    error,
    justFired,
    setJustFired,
    userEmail: user?.email,
    addReminder,
    updateReminder,
    removeReminder,
    shareReminder,
    unshareReminder,
    ringingReminder,
    stopAlarm,
  };
}
