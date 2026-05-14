import React, { useState } from "react";

const OCCUPATIONS = [
  "fontanero", "electricista", "pintor", "informatico", "medico",
  "ingeniero", "arquitecto", "maestro", "herrero", "asesor",
  "jardinero", "comercial", "agricultor", "repuestos",
];

export default function Contacts({ contacts, error, onAdd, onRemove }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [webpage, setWebpage] = useState("");
  const [occupation, setOccupation] = useState("");
  const [rating, setRating] = useState(3);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name: name.trim(), phone: phone.trim(), email: email.trim(), city: city.trim(), webpage: webpage.trim(), occupation, rating });
    setName("");
    setPhone("");
    setEmail("");
    setCity("");
    setWebpage("");
    setOccupation("");
    setRating(3);
    setShowForm(false);
  };

  const sorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="contacts">
      {error && <p className="error">{error}</p>}

      <div className="contacts-header">
        <h3>Contactos</h3>
        <button className="add-contact-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "✕ Cerrar" : "+ Añadir contacto"}
        </button>
      </div>

      {showForm && (
        <form className="contact-form fade-in" onSubmit={handleSubmit}>
          <input className="cf-input" type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
          <input className="cf-input" type="tel" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input className="cf-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="cf-input" type="text" placeholder="Ciudad" value={city} onChange={(e) => setCity(e.target.value)} />
          <input className="cf-input" type="url" placeholder="Web" value={webpage} onChange={(e) => setWebpage(e.target.value)} />

          <select className="cf-select" value={occupation} onChange={(e) => setOccupation(e.target.value)}>
            <option value="">Selecciona ocupación</option>
            {OCCUPATIONS.map((o) => (
              <option key={o} value={o}>{o.charAt(0).toUpperCase() + o.slice(1)}</option>
            ))}
          </select>

          <div className="cf-rating">
            <span>Valoración:</span>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} type="button" className={`star ${n <= rating ? "active" : ""}`} onClick={() => setRating(n)}>
                  {n <= rating ? "★" : "☆"}
                </button>
              ))}
            </div>
          </div>

          <button className="generate-btn" type="submit">Guardar</button>
        </form>
      )}

      {sorted.length === 0 && !showForm && (
        <p className="contacts-empty">No has añadido ningún contacto todavía.</p>
      )}

      <div className="contacts-list">
        {sorted.map((c) => (
          <div key={c.id} className="contact-item fade-in">
            <div className="contact-item-info">
              <span className="contact-item-name">{c.name}</span>
              <div className="contact-item-details">
                {c.phone && <span>📞 {c.phone}</span>}
                {c.email && <span>✉️ {c.email}</span>}
                {c.city && <span>📍 {c.city}</span>}
                {c.webpage && <span>🌐 {c.webpage}</span>}
                {c.occupation && <span>💼 {c.occupation.charAt(0).toUpperCase() + c.occupation.slice(1)}</span>}
                <span className="stars-small">{'★'.repeat(c.rating)}{'☆'.repeat(5 - c.rating)}</span>
              </div>
            </div>
            <button className="contact-item-delete" onClick={() => onRemove(c.id)} title="Eliminar">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}
