import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  subscribeTasks,
  addTask as addSvc,
  updateTask as updateSvc,
  removeTask as removeSvc,
} from "../services/taskService";

const MAX_TASAS = 50;

function getErrorMessage(err) {
  if (!err) return "Error desconocido";
  if (err.code === "permission-denied") return "Permiso denegado.";
  if (err.code === "unavailable") return "Firestore no disponible.";
  return err.message || "Error desconocido";
}

export function useTasks() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    setError("");
    setLoading(true);
    const unsubscribe = subscribeTasks(
      user.uid,
      (data) => {
        setTasks(data);
        setLoading(false);
      },
      (err) => {
        setError("Error al cargar tareas: " + getErrorMessage(err));
        setLoading(false);
      }
    );
    return unsubscribe;
  }, [user]);

  const addTask = useCallback(
    async (data) => {
      if (!user) return;
      setError("");
      if (tasks.length >= MAX_TASAS) {
        setError(`Límite alcanzado: máximo ${MAX_TASAS} tareas.`);
        return;
      }
      try {
        await addSvc(data, user.uid);
      } catch (err) {
        setError("Error al añadir tarea: " + getErrorMessage(err));
      }
    },
    [user, tasks.length]
  );

  const updateTask = useCallback(async (id, fields) => {
    setError("");
    try {
      await updateSvc(id, fields);
    } catch (err) {
      setError("Error al actualizar tarea: " + getErrorMessage(err));
    }
  }, []);

  const toggleTaskStatus = useCallback(
    async (id) => {
      const task = tasks.find((t) => t.id === id);
      if (!task) return;
      const nextStatus = task.status === "pending" ? "completed" : "pending";
      await updateTask(id, { status: nextStatus });
    },
    [tasks, updateTask]
  );

  const removeTask = useCallback(async (id) => {
    setError("");
    try {
      await removeSvc(id);
    } catch (err) {
      setError("Error al eliminar tarea: " + getErrorMessage(err));
    }
  }, []);

  return {
    tasks,
    error,
    loading,
    maxTasks: MAX_TASAS,
    addTask,
    updateTask,
    toggleTaskStatus,
    removeTask,
  };
}
