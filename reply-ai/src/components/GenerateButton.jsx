import React from "react";

export default function GenerateButton({ onClick, loading }) {
  return (
    <button className="generate-btn" onClick={onClick} disabled={loading}>
      {loading ? (
        <span className="loading-spinner" />
      ) : (
        "✨ Generar respuesta"
      )}
    </button>
  );
}
