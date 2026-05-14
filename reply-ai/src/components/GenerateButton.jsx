import React from "react";

export default function GenerateButton({ onClick, loading }) {
  return (
    <button className="generate-btn" onClick={onClick} disabled={loading}>
      {loading ? (
        <span className="loading-spinner" />
      ) : (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18" />
            <path d="M5 10l7-7 7 7" />
            <path d="M5 14l7 7 7-7" />
          </svg>
          Generar respuesta
        </>
      )}
    </button>
  );
}
