import React, { useState } from "react";

const OCCUPATIONS = [
  "fontanero", "electricista", "pintor", "informatico", "medico",
  "ingeniero", "arquitecto", "maestro", "herrero", "asesor",
  "jardinero", "comercial", "agricultor", "repuestos",
  "recursos humanos", "otros",
];

function cap(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

export default function Contacts({ contacts, error, onAdd, onRemove, onUpdate }) {
  const [name, setName] = useState("");
  const [nif, setNif] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [webpage, setWebpage] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [customOccupation, setCustomOccupation] = useState("");
  const [rating, setRating] = useState(3);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const [editingContact, setEditingContact] = useState(null);
  const [editName, setEditName] = useState("");
  const [editNif, setEditNif] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editCity, setEditCity] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editWebpage, setEditWebpage] = useState("");
  const [editOccupation, setEditOccupation] = useState("");
  const [editCustomOccupation, setEditCustomOccupation] = useState("");
  const [editRating, setEditRating] = useState(3);

  const startEdit = (c) => {
    setEditingContact(c);
    setEditName(c.name || "");
    setEditNif(c.nif || "");
    setEditPhone(c.phone || "");
    setEditEmail(c.email || "");
    setEditCity(c.city || "");
    setEditAddress(c.address || "");
    setEditWebpage(c.webpage || "");
    const isCustom = c.occupation && !OCCUPATIONS.includes(c.occupation);
    if (isCustom) {
      setEditOccupation("otros");
      setEditCustomOccupation(c.occupation);
    } else {
      setEditOccupation(c.occupation || "");
      setEditCustomOccupation("");
    }
    setEditRating(c.rating || 3);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editingContact) return;
    const finalOccupation = editOccupation === "otros" ? editCustomOccupation.trim().toLowerCase() : editOccupation;
    onUpdate(editingContact.id, {
      name: editName.trim(),
      nif: editNif.trim(),
      phone: editPhone.trim(),
      email: editEmail.trim(),
      city: editCity.trim(),
      address: editAddress.trim(),
      webpage: editWebpage.trim(),
      occupation: finalOccupation,
      rating: editRating
    });
    setEditingContact(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const finalOccupation = occupation === "otros" ? customOccupation.trim().toLowerCase() : occupation;
    onAdd({
      name: name.trim(),
      nif: nif.trim(),
      phone: phone.trim(),
      email: email.trim(),
      city: city.trim(),
      webpage: webpage.trim(),
      address: address.trim(),
      occupation: finalOccupation,
      rating
    });
    setName("");
    setNif("");
    setPhone("");
    setEmail("");
    setCity("");
    setWebpage("");
    setAddress("");
    setOccupation("");
    setCustomOccupation("");
    setRating(3);
    setShowForm(false);
  };

  async function shareContact(c) {
    const lines = [`*${c.name}*`];
    if (c.nif) lines.push(`🆔 NIF/CIF: ${c.nif}`);
    if (c.phone) lines.push(`📞 ${c.phone}`);
    if (c.email) lines.push(`✉️ ${c.email}`);
    if (c.city) lines.push(`📍 ${c.city}`);
    if (c.address) lines.push(`🏠 ${c.address}`);
    if (c.webpage) lines.push(`🌐 ${c.webpage}`);
    if (c.occupation) lines.push(`💼 ${cap(c.occupation)}`);
    lines.push(`⭐ ${'★'.repeat(c.rating)}${'☆'.repeat(5 - c.rating)}`);
    const text = lines.join("\n");
    if (navigator.share) {
      try { await navigator.share({ title: c.name, text }); return; } catch {}
    }
    try { await navigator.clipboard.writeText(text); } catch {}
  }

  const q = search.toLowerCase();
  const filtered = contacts.filter((c) => c.name.toLowerCase().includes(q));

  const groups = {};
  for (const c of filtered) {
    const key = c.occupation || "sin ocupacion";
    if (!groups[key]) groups[key] = [];
    groups[key].push(c);
  }

  const sortedGroups = Object.keys(groups).sort((a, b) => {
    if (a === "sin ocupacion") return 1;
    if (b === "sin ocupacion") return -1;
    return a.localeCompare(b);
  });

  return (
    <div className="contacts">
      {error && <p className="error">{error}</p>}

      <div className="contacts-header">
        <h3>Contactos {contacts.length > 0 && <span className="count-badge">{contacts.length}</span>}</h3>
        <button className="add-contact-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "✕ Cerrar" : "+ Añadir contacto"}
        </button>
      </div>

      {showForm && (
        <form className="contact-form fade-in" onSubmit={handleSubmit}>
          <input className="cf-input" type="text" placeholder="Nombre *" value={name} onChange={(e) => setName(e.target.value)} required />
          <input className="cf-input" type="text" placeholder="NIF / CIF (ej: 12345678Z)" value={nif} onChange={(e) => setNif(e.target.value)} />
          <input className="cf-input" type="tel" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input className="cf-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="cf-input" type="text" placeholder="Ciudad" value={city} onChange={(e) => setCity(e.target.value)} />
          <input className="cf-input" type="text" placeholder="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} />
          <input className="cf-input" type="url" placeholder="Web" value={webpage} onChange={(e) => setWebpage(e.target.value)} />

          <select className="cf-select" value={occupation} onChange={(e) => setOccupation(e.target.value)}>
            <option value="">Selecciona ocupación</option>
            {OCCUPATIONS.map((o) => (
              <option key={o} value={o}>{cap(o)}</option>
            ))}
          </select>

          {occupation === "otros" && (
            <input
              className="cf-input fade-in"
              type="text"
              placeholder="Especifica la ocupación *"
              value={customOccupation}
              onChange={(e) => setCustomOccupation(e.target.value)}
              required
            />
          )}

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

      {contacts.length > 0 && (
        <div className="search-box">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input className="search-input" type="text" placeholder="Buscar contacto..." value={search} onChange={(e) => setSearch(e.target.value)} />
          {search && <button className="search-clear" onClick={() => setSearch("")}>✕</button>}
        </div>
      )}

      {filtered.length === 0 && !showForm && (
        <p className="contacts-empty">
          {search ? "No se encontraron contactos." : "No has añadido ningún contacto todavía."}
        </p>
      )}

      <div className="contacts-list">
        {sortedGroups.map((groupKey) => (
          <div key={groupKey} className="contact-group">
            <h4 className="contact-group-title">{groupKey === "sin ocupacion" ? "Otros" : cap(groupKey)}</h4>
            {groups[groupKey].map((c) => (
              <div key={c.id} className="contact-item fade-in">
                <div className="contact-item-info">
                  <span className="contact-item-name">{c.name}</span>
                  <div className="contact-item-details">
                    {c.nif && <span>🆔 NIF/CIF: {c.nif}</span>}
                    {c.phone && <span>📞 {c.phone}</span>}
                    {c.email && <span>✉️ {c.email}</span>}
                    {c.city && <span>📍 {c.city}</span>}
                    {c.address && <span>🏠 {c.address}</span>}
                    {c.webpage && <span>🌐 {c.webpage}</span>}
                    <span className="stars-small">{'★'.repeat(c.rating)}{'☆'.repeat(5 - c.rating)}</span>
                  </div>
                  <div className="contact-actions">
                    {c.phone && (
                      <a className="contact-action-btn" href={`tel:${c.phone}`} title="Llamar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </a>
                    )}
                    {c.email && (
                      <a className="contact-action-btn" href={`mailto:${c.email}`} title="Email">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </a>
                    )}
                    <button className="contact-action-btn" onClick={() => startEdit(c)} title="Editar">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button className="contact-action-btn" onClick={() => shareContact(c)} title="Compartir">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                    </button>
                  </div>
                </div>
                <button className="contact-item-delete" onClick={() => onRemove(c.id)} title="Eliminar">✕</button>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── Editar Contacto Modal ── */}
      {editingContact && (
        <div className="pdf-modal-overlay fade-in" onClick={() => setEditingContact(null)}>
          <div className="pdf-modal-box fade-in" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "500px" }}>
            <div className="pdf-modal-header" style={{ background: '#2d6a4f' }}>
              <h4>✏️ Editar Contacto</h4>
              <button className="pdf-modal-close" onClick={() => setEditingContact(null)}>✕</button>
            </div>
            
            <form onSubmit={handleEditSubmit} className="contact-form" style={{ padding: '20px', gap: '10px', display: 'flex', flexDirection: 'column' }}>
              <label className="reminder-label">Nombre *</label>
              <input className="cf-input" type="text" placeholder="Nombre *" value={editName} onChange={(e) => setEditName(e.target.value)} required />
              
              <label className="reminder-label">NIF / CIF</label>
              <input className="cf-input" type="text" placeholder="NIF / CIF" value={editNif} onChange={(e) => setEditNif(e.target.value)} />
              
              <label className="reminder-label">Teléfono</label>
              <input className="cf-input" type="tel" placeholder="Teléfono" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} />
              
              <label className="reminder-label">Email</label>
              <input className="cf-input" type="email" placeholder="Email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
              
              <label className="reminder-label">Ciudad</label>
              <input className="cf-input" type="text" placeholder="Ciudad" value={editCity} onChange={(e) => setEditCity(e.target.value)} />
              
              <label className="reminder-label">Dirección</label>
              <input className="cf-input" type="text" placeholder="Dirección" value={editAddress} onChange={(e) => setEditAddress(e.target.value)} />
              
              <label className="reminder-label">Web</label>
              <input className="cf-input" type="url" placeholder="Web" value={editWebpage} onChange={(e) => setEditWebpage(e.target.value)} />

              <label className="reminder-label">Ocupación</label>
              <select className="cf-select" value={editOccupation} onChange={(e) => setEditOccupation(e.target.value)}>
                <option value="">Selecciona ocupación</option>
                {OCCUPATIONS.map((o) => (
                  <option key={o} value={o}>{cap(o)}</option>
                ))}
              </select>

              {editOccupation === "otros" && (
                <input
                  className="cf-input fade-in"
                  type="text"
                  placeholder="Especifica la ocupación *"
                  value={editCustomOccupation}
                  onChange={(e) => setEditCustomOccupation(e.target.value)}
                  required
                />
              )}

              <label className="reminder-label">Valoración (Rating):</label>
              <select className="cf-select" value={editRating} onChange={(e) => setEditRating(parseInt(e.target.value))}>
                <option value={1}>⭐ (1/5)</option>
                <option value={2}>⭐⭐ (2/5)</option>
                <option value={3}>⭐⭐⭐ (3/5)</option>
                <option value={4}>⭐⭐⭐⭐ (4/5)</option>
                <option value={5}>⭐⭐⭐⭐⭐ (5/5)</option>
              </select>

              <div className="pdf-modal-actions" style={{ marginTop: '15px' }}>
                <button type="button" className="pdf-modal-btn cancel" onClick={() => setEditingContact(null)}>Cancelar</button>
                <button type="submit" className="pdf-modal-btn generate" style={{ background: '#2d6a4f' }}>Guardar Cambios</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
