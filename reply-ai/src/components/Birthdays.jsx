import React, { useState } from "react";

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

function formatDate(dateStr) {
  const [day, month] = dateStr.split("-");
  return `${parseInt(day, 10)} de ${MONTHS[parseInt(month, 10) - 1]}`;
}

export default function Birthdays({
  friends,
  todayBirthdays,
  error,
  onAdd,
  onRemove,
  onSendGreeting,
  onSendReminder,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [gender, setGender] = useState("male");
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !day || !month) return;
    const date = `${String(parseInt(day, 10)).padStart(2, "0")}-${String(parseInt(month, 10)).padStart(2, "0")}`;
    onAdd(name.trim(), date, gender, phone.trim());
    setName("");
    setPhone("");
    setDay("");
    setMonth("");
    setGender("male");
    setShowForm(false);
  };

  const q = search.toLowerCase();
  const filtered = friends.filter((f) => f.name.toLowerCase().includes(q));

  const sorted = [...filtered].sort((a, b) => {
    const [ad, am] = a.date.split("-").map(Number);
    const [bd, bm] = b.date.split("-").map(Number);
    return am - bm || ad - bd;
  });

  return (
    <div className="birthdays">
      {error && <p className="error">{error}</p>}
      {todayBirthdays.length > 0 && (
        <div className="birthday-alert fade-in">
          <div className="birthday-alert-icon">🎂</div>
          <div className="birthday-alert-body">
            <strong>
              {todayBirthdays.length === 1
                ? "¡Hoy es el cumpleaños de"
                : "¡Hoy es el cumpleaños de"}{" "}
              {todayBirthdays.map((f) => f.name).join(" y ")}!
            </strong>
            <div className="birthday-alert-actions">
              {todayBirthdays.map((f) => (
                <div key={f.id} className="birthday-alert-row">
                  <button
                    className="action-btn primary"
                    onClick={() => onSendGreeting(f)}
                  >
                    🎉 Felicitar a {f.name}
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => onSendReminder(f)}
                  >
                    🔔 Recordarme
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="birthdays-header">
        <h3>Tus amigos {friends.length > 0 && <span className="count-badge">{friends.length}</span>}</h3>
        <button
          className="add-friend-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "✕ Cerrar" : "+ Añadir amigo"}
        </button>
      </div>

      {showForm && (
        <form className="birthday-form fade-in" onSubmit={handleSubmit}>
          <input
            className="bf-input"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="bf-input"
            type="tel"
            placeholder="Teléfono (ej: 521234567890)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="bf-row">
            <select
              className="bf-select"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
            >
              <option value="">Día</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <select
              className="bf-select"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            >
              <option value="">Mes</option>
              {MONTHS.map((m, i) => (
                <option key={i} value={i + 1}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div className="bf-gender">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
              Masculino
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              Femenino
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={gender === "other"}
                onChange={() => setGender("other")}
              />
              Otro / No sé
            </label>
          </div>
          <button className="generate-btn" type="submit">
            Guardar
          </button>
        </form>
      )}

      {friends.length > 0 && (
        <div className="search-box">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input className="search-input" type="text" placeholder="Buscar amigo..." value={search} onChange={(e) => setSearch(e.target.value)} />
          {search && <button className="search-clear" onClick={() => setSearch("")}>✕</button>}
        </div>
      )}

      {sorted.length === 0 && (
        <p className="birthdays-empty">
          {search ? "No se encontraron amigos." : "No has añadido ningún cumpleaños todavía."}
        </p>
      )}

      <div className="birthdays-list">
        {sorted.map((f) => (
          <div key={f.id} className="birthday-item fade-in">
            <div className="birthday-item-info">
              <span className="birthday-item-name">
                {f.name}
                {f.gender === "male" && " 👨"}
                {f.gender === "female" && " 👩"}
                {f.gender === "other" && " 🧑"}
              </span>
              <span className="birthday-item-date">
                🗓️ {formatDate(f.date)}
              </span>
              {f.phone && (
                <span className="birthday-item-phone">
                  📞 {f.phone}
                </span>
              )}
            </div>
            <button
              className="birthday-item-delete"
              onClick={() => onRemove(f.id)}
              title="Eliminar"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
