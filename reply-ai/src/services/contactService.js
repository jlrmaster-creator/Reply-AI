import { collection, addDoc, deleteDoc, doc, onSnapshot, query, where, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION = "contacts";

export function subscribeContacts(userId, callback, onError) {
  const q = query(
    collection(db, COLLECTION),
    where("userId", "==", userId)
  );
  return onSnapshot(q, (snapshot) => {
    const contacts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    callback(contacts);
  }, (error) => {
    console.error("Firestore subscribe error:", error);
    if (onError) onError(error);
  });
}

export async function addContact({ name, phone, email, city, webpage, occupation, rating, address, nif }, userId) {
  const data = {
    name,
    phone: phone || "",
    email: email || "",
    city: city || "",
    webpage: webpage || "",
    occupation: occupation || "",
    rating: rating || 1,
    address: address || "",
    nif: nif || "",
    userId,
    createdAt: new Date().toISOString(),
  };
  const docRef = await addDoc(collection(db, COLLECTION), data);
  return { id: docRef.id, ...data };
}

export async function removeContact(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function updateContact(id, data) {
  const docRef = doc(db, COLLECTION, id);
  await updateDoc(docRef, data);
}
