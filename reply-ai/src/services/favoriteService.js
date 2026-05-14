import { collection, addDoc, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION = "favorites";

export function subscribeFavorites(userId, callback, onError) {
  const q = query(collection(db, COLLECTION), where("userId", "==", userId));
  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    callback(items);
  }, (error) => {
    console.error("Firestore subscribe error:", error);
    if (onError) onError(error);
  });
}

export async function addFavorite({ name, url, description }, userId) {
  const data = { name, url: url || "", description: description || "", userId, createdAt: new Date().toISOString() };
  const docRef = await addDoc(collection(db, COLLECTION), data);
  return { id: docRef.id, ...data };
}

export async function removeFavorite(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}
