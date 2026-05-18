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

const COLLECTION = "tasks";

export function subscribeTasks(userId, callback, onError) {
  const q = query(
    collection(db, COLLECTION),
    where("userId", "==", userId)
  );
  return onSnapshot(
    q,
    (snap) => {
      const tasks = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      
      // Sort: 
      // 1. Status: pending first, then completed
      // 2. Priority: high first, then medium, then low
      // 3. Due Date: earliest first (null dates last)
      tasks.sort((a, b) => {
        if (a.status !== b.status) {
          return a.status === "pending" ? -1 : 1;
        }
        
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        const pA = priorityOrder[a.priority] || 1;
        const pB = priorityOrder[b.priority] || 1;
        if (pA !== pB) return pB - pA;

        if (a.dueDate && b.dueDate) {
          return new Date(a.dueDate) - new Date(b.dueDate);
        }
        if (a.dueDate) return -1;
        if (b.dueDate) return 1;

        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      callback(tasks);
    },
    (err) => {
      console.error("tasks subscribe error:", err);
      if (onError) onError(err);
    }
  );
}

export async function addTask({ title, description, dueDate, priority, clientName }, userId) {
  const now = new Date().toISOString();
  const data = {
    title: title.trim(),
    description: description?.trim() || "",
    dueDate: dueDate || "",
    priority: priority || "medium",
    status: "pending",
    clientName: clientName?.trim() || "",
    userId,
    createdAt: now,
    updatedAt: now,
  };
  const ref = await addDoc(collection(db, COLLECTION), data);
  return { id: ref.id, ...data };
}

export async function updateTask(id, fields) {
  await updateDoc(doc(db, COLLECTION, id), {
    ...fields,
    updatedAt: new Date().toISOString(),
  });
}

export async function removeTask(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}
