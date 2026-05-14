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

  useEffect(() => {
    if (!user) return;
    const unsubscribe = subscribeFriends(user.uid, (data) => {
      setFriends(data);
    });
    return unsubscribe;
  }, [user]);

  useEffect(() => {
    const today = getToday();
    const matches = friends.filter((f) => f.date === today);
    setTodayBirthdays(matches);
  }, [friends]);

  const addFriend = useCallback(async (name, date, gender, phone) => {
    if (!user) return;
    try {
      await addFriendService({ name, date, gender, phone }, user.uid);
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  }, [user]);

  const removeFriend = useCallback(async (id) => {
    try {
      await removeFriendService(id);
    } catch (error) {
      console.error("Error removing friend:", error);
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
    addFriend,
    removeFriend,
    sendGreeting,
    sendReminder,
  };
}
