import { useState, useCallback, useEffect } from "react";
import responsesRaw from "../../../responses.properties?raw";

const STORAGE_KEY = "reply-ai-history";

function parseResponses(raw) {
  const modes = { funny: [], elegant: [], cold: [], excuse: [] };
  const lines = raw.split("\n").filter((l) => l.trim() && !l.trim().startsWith("#"));
  for (const line of lines) {
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    const val = line.slice(eq + 1).trim();
    const [mode] = key.split(".");
    if (modes[mode]) modes[mode].push(val);
  }
  return modes;
}

const responsesByMode = parseResponses(responsesRaw);

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

  const generate = useCallback(
    async (overrideMode) => {
      if (!message.trim()) {
        setError("Pega un mensaje primero");
        return;
      }
      setLoading(true);
      setError("");
      const activeMode = typeof overrideMode === "string" ? overrideMode : mode;
      const list = responsesByMode[activeMode] || responsesByMode.elegant;
      const reply = list[Math.floor(Math.random() * list.length)];
      await new Promise((r) => setTimeout(r, 300));
      setResponse(reply);
      const entry = { message, reply, mode: activeMode, date: new Date().toISOString() };
      const updated = [entry, ...history].slice(0, 50);
      setHistory(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setLoading(false);
    },
    [message, mode, history]
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
    history,
    generate, makeFunnier,
    sendToWhatsApp,
    clearHistory,
  };
}
