import { useState, useEffect, useCallback, useMemo } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  subscribeFinances,
  addFinanceEntry as addSvc,
  removeFinanceEntry as removeSvc,
} from "../services/financeService";

const MAX_ENTRIES = 150;

function getErrorMessage(err) {
  if (!err) return "Error desconocido";
  if (err.code === "permission-denied") return "Permiso denegado.";
  if (err.code === "unavailable") return "Firestore no disponible.";
  if (err.code === "failed-precondition") return "Índice de Firestore pendiente. Espera un momento.";
  return err.message || "Error desconocido";
}

export function useFinance() {
  const { user } = useAuth();
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Subscribe to updates in real time
  useEffect(() => {
    if (!user) return;
    setError("");
    setLoading(true);
    const unsubscribe = subscribeFinances(
      user.uid,
      (data) => {
        setEntries(data);
        setLoading(false);
      },
      (err) => {
        setError("Error al cargar contabilidad: " + getErrorMessage(err));
        setLoading(false);
      }
    );
    return unsubscribe;
  }, [user]);

  // Add finance entry
  const addEntry = useCallback(
    async (data) => {
      if (!user) return;
      setError("");
      if (entries.length >= MAX_ENTRIES) {
        setError(`Límite alcanzado: máximo ${MAX_ENTRIES} asientos contables.`);
        return;
      }
      try {
        await addSvc(data, user.uid);
      } catch (err) {
        setError("Error al registrar asiento: " + getErrorMessage(err));
      }
    },
    [user, entries.length]
  );

  // Remove finance entry
  const removeEntry = useCallback(async (id) => {
    setError("");
    try {
      await removeSvc(id);
    } catch (err) {
      setError("Error al eliminar asiento: " + getErrorMessage(err));
    }
  }, []);

  // Compute stats and aggregations
  const stats = useMemo(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    let vatRepercutido = 0; // VAT from incomes
    let vatSoportado = 0;   // VAT from expenses
    let irpfRetained = 0;   // IRPF from incomes

    entries.forEach((e) => {
      if (e.type === "income") {
        totalIncomes += e.amount || 0;
        vatRepercutido += e.vatAmount || 0;
        irpfRetained += e.irpfAmount || 0;
      } else {
        totalExpenses += e.amount || 0;
        vatSoportado += e.vatAmount || 0;
      }
    });

    const netProfit = totalIncomes - totalExpenses;
    const vatBalance = vatRepercutido - vatSoportado; // positive = to pay, negative = refund

    return {
      totalIncomes,
      totalExpenses,
      vatRepercutido,
      vatSoportado,
      irpfRetained,
      netProfit,
      vatBalance,
    };
  }, [entries]);

  return {
    entries,
    error,
    loading,
    maxEntries: MAX_ENTRIES,
    stats,
    addEntry,
    removeEntry,
  };
}
