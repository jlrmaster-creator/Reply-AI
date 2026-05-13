import React from "react";

export default function ActionButtons({ dailyCount, limit, premium, onUnlock }) {
  return (
    <div className="freemium-bar">
      {premium ? (
        <span className="premium-badge">⭐ Premium</span>
      ) : (
        <span className="count-badge">
          {limit - dailyCount} / {limit} respuestas hoy
        </span>
      )}
    </div>
  );
}
