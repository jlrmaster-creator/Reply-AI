import { useState, useEffect, useCallback, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { subscribeReminders, addReminder as addSvc, updateReminder as updateSvc, removeReminder as removeSvc } from "../services/reminderService";

const MAX = 5;

function getErrorMessage(err) {
  if (!err) return "Error desconocido";
  if (err.code === "permission-denied") return "Permiso denegado.";
  if (err.code === "unavailable") return "Firestore no disponible.";
  return err.message || "Error desconocido";
}

function getNow() {
  const d = new Date();
  return { h: d.getHours(), m: d.getMinutes(), dow: d.getDay(), day: d.getDate(), month: d.getMonth() + 1, dateStr: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}` };
}

function shouldFireNow(r) {
  if (!r.active) return false;
  const now = getNow();
  if (r.hour !== now.h || r.minute !== now.m) return false;
  if (r.frequency === "daily") return true;
  if (r.frequency === "weekly") return r.weekday === now.dow;
  if (r.frequency === "monthly") return r.day === now.day;
  if (r.frequency === "once") return r.day === now.day && r.month === now.month;
  return false;
}

function getNextFire(r) {
  const now = getNow();
  const today = new Date();
  let next = new Date(today.getFullYear(), today.getMonth(), today.getDate(), r.hour || 0, r.minute || 0);

  if (!r.active) return null;

  if (r.frequency === "daily") {
    if (next <= today) next.setDate(next.getDate() + 1);
  } else if (r.frequency === "weekly") {
    const diff = (r.weekday - now.dow + 7) % 7;
    next.setDate(next.getDate() + (diff === 0 && next <= today ? 7 : diff));
  } else if (r.frequency === "monthly") {
    next.setDate(r.day);
    if (next <= today) next.setMonth(next.getMonth() + 1);
  } else if (r.frequency === "once") {
    next.setMonth(r.month - 1);
    next.setDate(r.day);
    if (next <= today) return null;
  }
  return next;
}

function formatFireTime(r) {
  const h = String(r.hour || 0).padStart(2, "0");
  const m = String(r.minute || 0).padStart(2, "0");
  let text = `${h}:${m}`;
  if (r.frequency === "daily") text += " (a diario)";
  else if (r.frequency === "weekly") text += ` (cada ${["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"][r.weekday]})`;
  else if (r.frequency === "monthly") text += ` (día ${r.day})`;
  else if (r.frequency === "once") text += ` (${r.day}/${r.month})`;
  return text;
}

function firedToday(r) {
  if (!r.lastFiredAt) return false;
  const fired = new Date(r.lastFiredAt);
  const now = new Date();
  return fired.getDate() === now.getDate() && fired.getMonth() === now.getMonth() && fired.getFullYear() === now.getFullYear();
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
    const unsub = subscribeReminders(user.uid, setReminders, (err) => {
      setError("Error al cargar recordatorios: " + getErrorMessage(err));
    });
    return unsub;
  }, [user]);

  useEffect(() => {
    if (!user || reminders.length === 0) return;

    if (!permAsked.current && "Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
      permAsked.current = true;
    }

    intervalRef.current = setInterval(async () => {
      for (const r of reminders) {
        if (!shouldFireNow(r)) continue;
        const now = getNow();
        if (r.lastFiredAt) {
          const fired = new Date(r.lastFiredAt);
          if (fired.getDate() === now.day && fired.getMonth() + 1 === now.month && fired.getFullYear() === new Date().getFullYear()) continue;
        }

        try {
          await updateSvc(r.id, { lastFiredAt: new Date().toISOString() });
          setJustFired(r.id);
          setTimeout(() => setJustFired(null), 5000);

          if ("Notification" in window && Notification.permission === "granted") {
            new Notification("🔔 Toolbox AI", {
              body: r.name + (r.note ? " — " + r.note : ""),
              icon: "./icons/icon-192.svg",
              tag: r.id,
            });
          }
        } catch {}
      }
    }, 30000);

    return () => clearInterval(intervalRef.current);
  }, [user, reminders]);

  const addReminder = useCallback(async (data) => {
    if (!user) return;
    setError("");
    if (reminders.length >= MAX) {
      setError(`Límite alcanzado: máximo ${MAX} recordatorios.`);
      return;
    }
    try {
      await addSvc(data, user.uid);
    } catch (err) {
      setError("Error al añadir recordatorio: " + getErrorMessage(err));
    }
  }, [user, reminders.length]);

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

  return { reminders, error, justFired, addReminder, updateReminder, removeReminder, firedToday, formatFireTime, getNextFire };
}
