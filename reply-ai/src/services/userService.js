import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION = "users";

export async function getUserConfig(userId) {
  try {
    const docRef = doc(db, COLLECTION, userId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data();
    }
    return null;
  } catch (err) {
    console.error("Error reading user config:", err);
    return null;
  }
}

export async function saveUserConfig(userId, data) {
  const docRef = doc(db, COLLECTION, userId);
  await setDoc(docRef, data, { merge: true });
}
