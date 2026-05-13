import React from "react";

const modes = [
  { key: "funny", label: "Gracioso", emoji: "😂" },
  { key: "elegant", label: "Elegante", emoji: "🎩" },
  { key: "cold", label: "Frío", emoji: "🧊" },
  { key: "excuse", label: "Excusa", emoji: "🚪" },
];

export default function ModeSelector({ selected, onSelect }) {
  return (
    <div className="modes">
      {modes.map((m) => (
        <button
          key={m.key}
          className={`mode-btn ${selected === m.key ? "active" : ""}`}
          onClick={() => onSelect(m.key)}
        >
          <span className="mode-emoji">{m.emoji}</span>
          <span className="mode-label">{m.label}</span>
        </button>
      ))}
    </div>
  );
}
