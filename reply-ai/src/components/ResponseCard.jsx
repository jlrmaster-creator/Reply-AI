import React from "react";

const modeMeta = {
  funny: { label: "Gracioso", emoji: "😄" },
  elegant: { label: "Elegante", emoji: "⭐" },
  cold: { label: "Frío", emoji: "❄️" },
  excuse: { label: "Excusa", emoji: "🔑" },
};

export default function ResponseCard({ response, mode, onSend, onRegenerate, onMakeFunnier }) {
  if (!response) return null;

  const meta = modeMeta[mode] || modeMeta.funny;

  return (
    <div className="response-card fade-in">
      <div className="response-header">
        <span className="response-mode-icon">{meta.emoji}</span>
        <span className="response-mode-label">Respuesta · {meta.label}</span>
      </div>

      <p className="response-text">{response}</p>

      <div className="response-actions">
        <button className="action-btn primary" onClick={() => onSend(response)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          WhatsApp
        </button>
        <button className="action-btn" onClick={onRegenerate}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
          Regenerar
        </button>
        <button className="action-btn" onClick={onMakeFunnier}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
          Más gracioso
        </button>
      </div>
    </div>
  );
}
