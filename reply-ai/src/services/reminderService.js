import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, where, arrayUnion, arrayRemove, setDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION = "reminders";
const USERS_COLLECTION = "users";

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

export function subscribeSharedReminders(userId, callback, onError) {
  const q = query(collection(db, COLLECTION), where("sharedWithUids", "array-contains", userId));
  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data(), isShared: true }));
    callback(items);
  }, (error) => {
    console.error("Firestore shared subscribe error:", error);
    if (onError) onError(error);
  });
}

export async function addReminder(data, userId, userEmail) {
  const docData = { ...data, userId, ownerEmail: userEmail, createdAt: new Date().toISOString(), lastFiredAt: null, sharedWithUids: [], sharedWithEmails: [] };
  const docRef = await addDoc(collection(db, COLLECTION), docData);
  return { id: docRef.id, ...docData };
}

export async function updateReminder(id, data) {
  await updateDoc(doc(db, COLLECTION, id), data);
}

export async function removeReminder(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function shareReminder(id, uid, email) {
  await updateDoc(doc(db, COLLECTION, id), {
    sharedWithUids: arrayUnion(uid),
    sharedWithEmails: arrayUnion(email),
  });
}

export async function unshareReminder(id, uid) {
  const ref = doc(db, COLLECTION, id);
  const snap = await getDoc(ref);
  const data = snap.data();
  const emails = data?.sharedWithEmails || [];
  const idx = data?.sharedWithUids?.indexOf(uid) ?? -1;
  const email = idx >= 0 ? emails[idx] : null;
  await updateDoc(ref, {
    sharedWithUids: arrayRemove(uid),
    sharedWithEmails: email ? arrayRemove(email) : [],
  });
}

export async function ensureUserDocument(uid, email) {
  const ref = doc(db, USERS_COLLECTION, uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, { email, uid });
  }
}

export async function lookupUidByEmail(email) {
  const q = query(collection(db, USERS_COLLECTION), where("email", "==", email));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return snap.docs[0].id;
}
