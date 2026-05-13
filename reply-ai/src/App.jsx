import React from "react";
import { useReply } from "./hooks/useReply";
import InputBox from "./components/InputBox";
import ModeSelector from "./components/ModeSelector";
import GenerateButton from "./components/GenerateButton";
import ResponseCard from "./components/ResponseCard";
import ActionButtons from "./components/ActionButtons";
import "./App.css";

export default function App() {
  const {
    message, setMessage,
    mode, setMode,
    response, setResponse,
    loading, error,
    history, dailyCount,
    premium, DAILY_LIMIT,
    generate, makeFunnier,
    sendToWhatsApp,
  } = useReply();

  return (
    <div className="container">
      <header>
        <h1>Reply AI 💬</h1>
        <ActionButtons
          dailyCount={dailyCount}
          limit={DAILY_LIMIT}
          premium={premium}
        />
      </header>

      <InputBox
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <ModeSelector selected={mode} onSelect={setMode} />

      <GenerateButton onClick={generate} loading={loading} />

      {error && <p className="error fade-in">{error}</p>}

      <ResponseCard
        response={response}
        onSend={sendToWhatsApp}
        onRegenerate={generate}
        onMakeFunnier={makeFunnier}
      />

      {history.length > 0 && (
        <section className="history">
          <h3>📜 Historial</h3>
          {history.slice(0, 5).map((item, i) => (
            <div key={i} className="history-item fade-in">
              <p className="history-reply">{item.reply}</p>
              <small className="history-meta">
                {item.mode} · {new Date(item.date).toLocaleTimeString()}
              </small>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
