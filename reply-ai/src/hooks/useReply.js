import { useState, useCallback, useEffect } from "react";
import { generateReply } from "../services/api";

const DAILY_LIMIT = 3;
const STORAGE_KEY = "reply-ai-history";
const COUNT_KEY = "reply-ai-count";
const DATE_KEY = "reply-ai-date";

function getToday() {
  return new Date().toDateString();
}

function getDailyCount() {
  const saved = localStorage.getItem(COUNT_KEY);
  const date = localStorage.getItem(DATE_KEY);
  if (date !== getToday()) {
    localStorage.setItem(COUNT_KEY, "0");
    localStorage.setItem(DATE_KEY, getToday());
    return 0;
  }
  return saved ? parseInt(saved, 10) : 0;
}

export function useReply() {
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("funny");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [dailyCount, setDailyCount] = useState(getDailyCount);
  const [premium, setPremium] = useState(false);

  useEffect(() => {
    const count = getDailyCount();
    setDailyCount(count);
  }, []);

  const incrementCount = useCallback(() => {
    const newCount = dailyCount + 1;
    setDailyCount(newCount);
    localStorage.setItem(COUNT_KEY, String(newCount));
    localStorage.setItem(DATE_KEY, getToday());
  }, [dailyCount]);

  const canGenerate = premium || dailyCount < DAILY_LIMIT;

  const generate = useCallback(
    async (overrideMode) => {
      if (!message.trim()) {
        setError("Pega un mensaje primero");
        return;
      }
      if (!canGenerate) {
        setError("Límite diario alcanzado. Actualiza a premium.");
        return;
      }
      setLoading(true);
      setError("");
      try {
        const activeMode = overrideMode || mode;
        const data = await generateReply(message, activeMode);
        setResponse(data.reply);
        const entry = { message, reply: data.reply, mode: activeMode, date: new Date().toISOString() };
        const updated = [entry, ...history].slice(0, 50);
        setHistory(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        if (!premium) incrementCount();
      } catch {
        setError("Error al generar. Intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    },
    [message, mode, premium, dailyCount, history, canGenerate, incrementCount]
  );

  const makeFunnier = useCallback(() => {
    if (response) {
      setMessage(response);
      generate("funny");
    }
  }, [response, generate]);

  const sendToWhatsApp = useCallback((text) => {
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    message, setMessage,
    mode, setMode,
    response, setResponse,
    loading, error,
    history, dailyCount,
    premium, setPremium,
    canGenerate, DAILY_LIMIT,
    generate, makeFunnier,
    sendToWhatsApp, clearHistory,
  };
}
