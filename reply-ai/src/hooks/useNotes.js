import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  subscribeNotes,
  addNote as addSvc,
  updateNote as updateSvc,
  removeNote as removeSvc,
} from "../services/noteService";

const MAX_NOTES = 6;

function getErrorMessage(err) {
  if (!err) return "Error desconocido";
  if (err.code === "permission-denied") return "Permiso denegado.";
  if (err.code === "unavailable") return "Firestore no disponible.";
  return err.message || "Error desconocido";
}

export function useNotes() {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  // Subscribe to Firestore real-time updates
  useEffect(() => {
    if (!user) return;
    setError("");
    const unsubscribe = subscribeNotes(
      user.uid,
      (data) => setNotes(data),
      (err) => setError("Error al cargar notas: " + getErrorMessage(err))
    );
    return unsubscribe;
  }, [user]);

  const addNote = useCallback(
    async ({ title, body, color }) => {
      if (!user) return;
      setError("");
      if (notes.length >= MAX_NOTES) {
        setError(`Límite alcanzado: máximo ${MAX_NOTES} notas.`);
        return;
      }
      try {
        await addSvc({ title, body, color }, user.uid);
      } catch (err) {
        setError("Error al añadir nota: " + getErrorMessage(err));
      }
    },
    [user, notes.length]
  );

  const updateNote = useCallback(async (id, fields) => {
    setError("");
    try {
      await updateSvc(id, fields);
    } catch (err) {
      setError("Error al actualizar nota: " + getErrorMessage(err));
    }
  }, []);

  const removeNote = useCallback(async (id) => {
    setError("");
    try {
      await removeSvc(id);
    } catch (err) {
      setError("Error al eliminar nota: " + getErrorMessage(err));
    }
  }, []);

  const togglePin = useCallback(
    async (id) => {
      const note = notes.find((n) => n.id === id);
      if (!note) return;
      await updateSvc(id, { pinned: !note.pinned });
    },
    [notes]
  );

  return { notes, error, maxNotes: MAX_NOTES, addNote, updateNote, removeNote, togglePin };
}
