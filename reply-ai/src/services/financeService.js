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

const COLLECTION = "finances";

export function subscribeFinances(userId, callback, onError) {
  const q = query(
    collection(db, COLLECTION),
    where("userId", "==", userId),
    orderBy("date", "desc")
  );
  return onSnapshot(
    q,
    (snap) => callback(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
    (err) => {
      console.error("finances subscribe error:", err);
      if (onError) onError(err);
    }
  );
}

export async function addFinanceEntry({
  type, // "income" | "expense"
  concept,
  clientOrProvider,
  amount, // base amount
  vatRate, // e.g. 21, 10, 4, 0
  irpfRate, // e.g. 15, 7, 0
  date,
}, userId) {
  const baseAmount = parseFloat(amount) || 0;
  const vRate = parseFloat(vatRate) || 0;
  const iRate = parseFloat(irpfRate) || 0;

  const vatAmount = parseFloat(((baseAmount * vRate) / 100).toFixed(2));
  const irpfAmount = parseFloat(((baseAmount * iRate) / 100).toFixed(2));
  
  // For incomes: Total = Base + VAT - IRPF
  // For expenses: Total = Base + VAT (usually no IRPF deduction, but let's keep it standard)
  const total = type === "income" 
    ? parseFloat((baseAmount + vatAmount - irpfAmount).toFixed(2))
    : parseFloat((baseAmount + vatAmount).toFixed(2));

  const data = {
    type,
    concept: concept.trim(),
    clientOrProvider: clientOrProvider.trim() || "",
    amount: baseAmount,
    vatRate: vRate,
    vatAmount,
    irpfRate: iRate,
    irpfAmount,
    total,
    date, // YYYY-MM-DD
    userId,
    createdAt: new Date().toISOString(),
  };

  const ref = await addDoc(collection(db, COLLECTION), data);
  return { id: ref.id, ...data };
}

export async function removeFinanceEntry(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}
