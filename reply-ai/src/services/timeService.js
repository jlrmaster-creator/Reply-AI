import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";

const PROJECTS_COL = "projects";
const ENTRIES_COL  = "timeEntries";

// ─── Projects ─────────────────────────────────────────────────────────────────

export function subscribeProjects(userId, callback, onError) {
  const q = query(
    collection(db, PROJECTS_COL),
    where("userId", "==", userId)
  );
  return onSnapshot(
    q,
    (snap) => callback(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
    (err) => { console.error("projects subscribe error:", err); if (onError) onError(err); }
  );
}

export async function addProject({ name, clientName, rate, currency, color }, userId) {
  const data = {
    name,
    clientName: clientName || "",
    rate: parseFloat(rate) || 0,
    currency: currency || "EUR",
    color: color || "#2d6a4f",
    userId,
    createdAt: new Date().toISOString(),
  };
  const ref = await addDoc(collection(db, PROJECTS_COL), data);
  return { id: ref.id, ...data };
}

export async function removeProject(id) {
  await deleteDoc(doc(db, PROJECTS_COL, id));
}

// ─── Time Entries ──────────────────────────────────────────────────────────────

export function subscribeEntries(userId, callback, onError) {
  const q = query(
    collection(db, ENTRIES_COL),
    where("userId", "==", userId),
    orderBy("startedAt", "desc")
  );
  return onSnapshot(
    q,
    (snap) => callback(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
    (err) => { console.error("entries subscribe error:", err); if (onError) onError(err); }
  );
}

export async function addEntry({ projectId, projectName, rate, currency, startedAt, endedAt, durationSec, notes }, userId) {
  const data = {
    projectId,
    projectName,
    rate,
    currency,
    startedAt,
    endedAt,
    durationSec,
    notes: notes || "",
    userId,
    createdAt: new Date().toISOString(),
  };
  const ref = await addDoc(collection(db, ENTRIES_COL), data);
  return { id: ref.id, ...data };
}

export async function removeEntry(id) {
  await deleteDoc(doc(db, ENTRIES_COL, id));
}
