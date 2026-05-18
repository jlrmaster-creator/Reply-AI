import { useState, useEffect, useCallback, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  subscribeProjects,
  subscribeEntries,
  addProject as addProjectSvc,
  removeProject as removeProjectSvc,
  addEntry as addEntrySvc,
  removeEntry as removeEntrySvc,
} from "../services/timeService";

const MAX_PROJECTS = 10;

function getErrorMessage(err) {
  if (!err) return "Error desconocido";
  if (err.code === "permission-denied") return "Permiso denegado.";
  if (err.code === "unavailable") return "Firestore no disponible.";
  if (err.code === "failed-precondition") return "Índice de Firestore pendiente. Espera un momento.";
  return err.message || "Error desconocido";
}

export function useTime() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");

  // Active timer state
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [timerStart, setTimerStart] = useState(null);   // Date object
  const [elapsed, setElapsed] = useState(0);            // seconds
  const intervalRef = useRef(null);

  // ── Subscriptions ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!user) return;
    setError("");
    const u1 = subscribeProjects(user.uid, setProjects, (e) =>
      setError("Error al cargar proyectos: " + getErrorMessage(e))
    );
    const u2 = subscribeEntries(user.uid, setEntries, (e) =>
      setError("Error al cargar registros: " + getErrorMessage(e))
    );
    return () => { u1(); u2(); };
  }, [user]);

  // ── Live ticker ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (activeProjectId && timerStart) {
      intervalRef.current = setInterval(() => {
        setElapsed(Math.floor((Date.now() - timerStart.getTime()) / 1000));
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setElapsed(0);
    }
    return () => clearInterval(intervalRef.current);
  }, [activeProjectId, timerStart]);

  // ── Projects CRUD ──────────────────────────────────────────────────────────
  const addProject = useCallback(async (data) => {
    if (!user) return;
    setError("");
    if (projects.length >= MAX_PROJECTS) {
      setError(`Límite alcanzado: máximo ${MAX_PROJECTS} proyectos.`);
      return;
    }
    try {
      await addProjectSvc(data, user.uid);
    } catch (err) {
      setError("Error al añadir proyecto: " + getErrorMessage(err));
    }
  }, [user, projects.length]);

  const removeProject = useCallback(async (id) => {
    setError("");
    if (activeProjectId === id) stopTimer();
    try {
      await removeProjectSvc(id);
    } catch (err) {
      setError("Error al eliminar proyecto: " + getErrorMessage(err));
    }
  }, [activeProjectId]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Timer controls ─────────────────────────────────────────────────────────
  const startTimer = useCallback((projectId) => {
    setActiveProjectId(projectId);
    setTimerStart(new Date());
    setElapsed(0);
  }, []);

  const stopTimer = useCallback(async (notes = "") => {
    if (!activeProjectId || !timerStart) return;
    const endedAt = new Date();
    const durationSec = Math.floor((endedAt - timerStart) / 1000);
    if (durationSec < 5) {
      // Ignore accidental taps < 5s
      setActiveProjectId(null);
      setTimerStart(null);
      return;
    }
    const project = projects.find((p) => p.id === activeProjectId);
    setActiveProjectId(null);
    setTimerStart(null);
    try {
      await addEntrySvc({
        projectId: activeProjectId,
        projectName: project?.name || "Sin proyecto",
        rate: project?.rate || 0,
        currency: project?.currency || "EUR",
        startedAt: timerStart.toISOString(),
        endedAt: endedAt.toISOString(),
        durationSec,
        notes,
      }, user.uid);
    } catch (err) {
      setError("Error al guardar registro: " + getErrorMessage(err));
    }
  }, [activeProjectId, timerStart, projects, user]);

  const removeEntry = useCallback(async (id) => {
    setError("");
    try {
      await removeEntrySvc(id);
    } catch (err) {
      setError("Error al eliminar registro: " + getErrorMessage(err));
    }
  }, []);

  // ── Computed helpers ───────────────────────────────────────────────────────
  // Total seconds logged per project
  const secondsByProject = projects.reduce((acc, p) => {
    acc[p.id] = entries
      .filter((e) => e.projectId === p.id)
      .reduce((s, e) => s + (e.durationSec || 0), 0);
    return acc;
  }, {});

  return {
    projects,
    entries,
    error,
    maxProjects: MAX_PROJECTS,
    activeProjectId,
    elapsed,
    secondsByProject,
    addProject,
    removeProject,
    startTimer,
    stopTimer,
    removeEntry,
  };
}
