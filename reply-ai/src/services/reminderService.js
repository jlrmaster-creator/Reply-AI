import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION = "reminders";

export function subscribeReminders(userId, callback, onError) {
  const q = query(collection(db, COLLECTION), where("userId", "==", userId));
  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    callback(items);
  }, (error) => {
    console.error("Firestore subscribe error:", error);
    if (onError) onError(error);
  });
}

export async function addReminder(data, userId) {
  const docData = { ...data, userId, createdAt: new Date().toISOString(), lastFiredAt: null };
  const docRef = await addDoc(collection(db, COLLECTION), docData);
  return { id: docRef.id, ...docData };
}

export async function updateReminder(id, data) {
  await updateDoc(doc(db, COLLECTION, id), data);
}

export async function removeReminder(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}
