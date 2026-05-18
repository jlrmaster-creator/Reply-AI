import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION = "notes";

export function subscribeNotes(userId, callback, onError) {
  const q = query(collection(db, COLLECTION), where("userId", "==", userId));
  return onSnapshot(
    q,
    (snapshot) => {
      const notes = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      // Sort by pinned first, then by updatedAt descending
      notes.sort((a, b) => {
        if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
      callback(notes);
    },
    (error) => {
      console.error("Firestore notes subscribe error:", error);
      if (onError) onError(error);
    }
  );
}

export async function addNote({ title, body, color }, userId) {
  const now = new Date().toISOString();
  const data = {
    title: title || "",
    body: body || "",
    color: color || "#ffffff",
    pinned: false,
    userId,
    createdAt: now,
    updatedAt: now,
  };
  const docRef = await addDoc(collection(db, COLLECTION), data);
  return { id: docRef.id, ...data };
}

export async function updateNote(id, fields) {
  await updateDoc(doc(db, COLLECTION, id), {
    ...fields,
    updatedAt: new Date().toISOString(),
  });
}

export async function removeNote(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}
