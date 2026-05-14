import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import { subscribeFriends, addFriend as addFriendService, removeFriend as removeFriendService } from "../services/birthdayService";

function getToday() {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  return `${day}-${month}`;
}

export function useBirthdays() {
  const { user } = useAuth();
  const [friends, setFriends] = useState([]);
  const [todayBirthdays, setTodayBirthdays] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;
    setError("");
    const unsubscribe = subscribeFriends(
      user.uid,
      (data) => {
        setFriends(data);
      },
      (err) => {
        setError("Error al cargar amigos: " + getErrorMessage(err));
      }
    );
    return unsubscribe;
  }, [user]);

  useEffect(() => {
    const today = getToday();
    const matches = friends.filter((f) => f.date === today);
    setTodayBirthdays(matches);
  }, [friends]);

  const MAX = 100;

  const addFriend = useCallback(async (name, date, gender, phone) => {
    if (!user) return;
    setError("");
    if (friends.length >= MAX) {
      setError(`Límite alcanzado: máximo ${MAX} cumpleaños. Elimina algunos para añadir más.`);
      return;
    }
    try {
      await addFriendService({ name, date, gender, phone }, user.uid);
    } catch (err) {
      setError("Error al añadir amigo: " + getErrorMessage(err));
    }
  }, [user, friends.length]);

  const removeFriend = useCallback(async (id) => {
    setError("");
    try {
      await removeFriendService(id);
    } catch (err) {
      setError("Error al eliminar amigo: " + getErrorMessage(err));
    }
  }, []);

  const sendGreeting = useCallback((friend) => {
    let message;
    if (friend.gender === "male") {
      message = `¡Feliz cumpleaños, amigo ${friend.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`;
    } else if (friend.gender === "female") {
      message = `¡Feliz cumpleaños, amiga ${friend.name}! 🎂🎉 Que tengas un día espectacular. ¡Un fuerte abrazo!`;
    } else {
      message = `¡Feliz cumpleaños, ${friend.name}! 🎂🎉 Que tengas un día espectacular. ¡Salud y éxitos!`;
    }
    const phone = friend.phone ? friend.phone.replace(/[^0-9]/g, "") : "";
    const url = phone
      ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
      : `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }, []);

  const sendReminder = useCallback((friend) => {
    const pronoun =
      friend.gender === "male"
        ? "lo"
        : friend.gender === "female"
          ? "la"
          : "le";
    const message = `📅 Recordatorio: Hoy es el cumpleaños de ${friend.name}! No olvides felicit${pronoun}. 🎂🎉`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }, []);

  return {
    friends,
    todayBirthdays,
    error,
    addFriend,
    removeFriend,
    sendGreeting,
    sendReminder,
  };
}

function getErrorMessage(err) {
  if (!err) return "Error desconocido";
  if (err.code === "permission-denied") return "Permiso denegado. Revisa las reglas de Firestore.";
  if (err.code === "unavailable") return "Firestore no disponible. Revisa los índices.";
  if (err.code === "not-found") return "No encontrado";
  if (typeof err === "string") return err;
  return err.message || "Error desconocido";
}
