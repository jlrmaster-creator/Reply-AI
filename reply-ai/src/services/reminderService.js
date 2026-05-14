import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, where, arrayUnion, arrayRemove } from "firebase/firestore";
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

export function subscribeSharedReminders(userEmail, callback, onError) {
  const q = query(collection(db, COLLECTION), where("sharedWith", "array-contains", userEmail));
  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data(), isShared: true }));
    callback(items);
  }, (error) => {
    console.error("Firestore shared subscribe error:", error);
    if (onError) onError(error);
  });
}

export async function addReminder(data, userId, userEmail) {
  const docData = { ...data, userId, ownerEmail: userEmail, createdAt: new Date().toISOString(), lastFiredAt: null, sharedWith: [] };
  const docRef = await addDoc(collection(db, COLLECTION), docData);
  return { id: docRef.id, ...docData };
}

export async function updateReminder(id, data) {
  await updateDoc(doc(db, COLLECTION, id), data);
}

export async function removeReminder(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function shareReminder(id, email) {
  await updateDoc(doc(db, COLLECTION, id), { sharedWith: arrayUnion(email) });
}

export async function unshareReminder(id, email) {
  await updateDoc(doc(db, COLLECTION, id), { sharedWith: arrayRemove(email) });
}
