import React from "react";

export default function ResponseCard({ response, onSend, onRegenerate, onMakeFunnier }) {
  if (!response) return null;

  return (
    <div className="response-card fade-in">
      <p className="response-text">{response}</p>
      <div className="response-actions">
        <button className="action-btn primary" onClick={() => onSend(response)}>
          📤 Enviar a WhatsApp
        </button>
        <button className="action-btn" onClick={onRegenerate}>
          🔄 Regenerar
        </button>
        <button className="action-btn" onClick={onMakeFunnier}>
          😂 Hazlo más gracioso
        </button>
      </div>
    </div>
  );
}
