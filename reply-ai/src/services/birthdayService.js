import { collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, where } from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION = "birthdays";

export function subscribeFriends(userId, callback) {
  const q = query(
    collection(db, COLLECTION),
    where("userId", "==", userId),
    orderBy("createdAt", "asc")
  );
  return onSnapshot(q, (snapshot) => {
    const friends = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    callback(friends);
  }, (error) => {
    console.error("Firestore subscribe error:", error);
  });
}

export async function addFriend({ name, date, gender, phone }, userId) {
  const uuid = crypto.randomUUID();
  const data = {
    uuid,
    name,
    date,
    gender,
    phone: phone || "",
    userId,
    createdAt: new Date().toISOString(),
  };
  const docRef = await addDoc(collection(db, COLLECTION), data);
  return { id: docRef.id, ...data };
}

export async function removeFriend(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}
