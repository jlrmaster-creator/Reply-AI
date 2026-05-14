import React from "react";

const modes = [
  { key: "funny", label: "Gracioso", icon: "😄" },
  { key: "elegant", label: "Elegante", icon: "⭐" },
  { key: "cold", label: "Frío", icon: "❄️" },
  { key: "excuse", label: "Excusa", icon: "🔑" },
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
          <span className="mode-emoji">{m.icon}</span>
          <span className="mode-label">{m.label}</span>
        </button>
      ))}
    </div>
  );
}
