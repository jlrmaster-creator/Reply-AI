import React, { useState } from "react";

const FREQUENCIES = [
  { key: "daily", label: "A diario" },
  { key: "weekly", label: "Semanal" },
  { key: "monthly", label: "Mensual" },
  { key: "once", label: "Una vez" },
];

const WEEKDAYS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const START_HOURS = { false: 9, true: 7 };

function earlyHour(r) {
  return r.earlyBird ? 7 : 9;
}

function formatFireTime(r) {
  const h = earlyHour(r);
  if (r.frequency === "daily") return `A diario (${h}:00)`;
  if (r.frequency === "weekly") return `Cada ${WEEKDAYS[r.weekday]} (${h}:00)`;
  if (r.frequency === "monthly") return `Día ${r.day} de cada mes (${h}:00)`;
  if (r.frequency === "once") return `${r.day}/${String(r.month).padStart(2, "0")} (${h}:00)`;
  return "";
}

function firedRecently(r) {
  if (!r.lastFiredAt) return false;
  return Date.now() - new Date(r.lastFiredAt).getTime() < 3600000;
}

function startHourText(early) {
  return (early ? 7 : 9) + ":00";
}

const EMPTY_FORM = { name: "", note: "", frequency: "daily", weekday: 1, day: 1, month: 1, earlyBird: false };

export default function Reminders({ reminders, error, justFired, onAdd, onUpdate, onRemove, onShare, onUnshare }) {
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [shareId, setShareId] = useState(null);
  const [shareEmail, setShareEmail] = useState("");

  const set = (field, val) => setForm((f) => ({ ...f, [field]: val }));

  const openNew = () => {
    setForm({ ...EMPTY_FORM });
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (r) => {
    setForm({ name: r.name, note: r.note || "", frequency: r.frequency, weekday: r.weekday ?? 1, day: r.day ?? 1, month: r.month ?? 1, earlyBird: r.earlyBird ?? false });
    setEditingId(r.id);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    const data = {
      name: form.name.trim(),
      note: form.note.trim(),
      frequency: form.frequency,
      active: true,
      earlyBird: form.earlyBird,
    };
    if (form.frequency === "weekly") data.weekday = form.weekday;
    else if (form.frequency === "monthly") data.day = form.day;
    else if (form.frequency === "once") { data.day = form.day; data.month = form.month; }

    if (editingId) {
      onUpdate(editingId, data);
    } else {
      onAdd(data);
    }
    setForm({ ...EMPTY_FORM });
    setEditingId(null);
    setShowForm(false);
  };

  const handleShare = (id) => {
    if (!shareEmail.trim() || !shareEmail.includes("@")) return;
    onShare(id, shareEmail.trim());
    setShareEmail("");
    setShareId(null);
  };

  const ownedCount = reminders.filter((r) => !r.isShared).length;

  const sorted = [...reminders].sort((a, b) => {
    if (a.active !== b.active) return a.active ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="reminders">
      {error && <p className="error">{error}</p>}

      <div className="reminders-header">
        <h3>Recordatorios {reminders.length > 0 && <span className="count-badge">{reminders.length}</span>}</h3>
        <button className="add-reminder-btn" onClick={openNew} disabled={ownedCount >= 5 && !editingId}>
          + Añadir
        </button>
      </div>

      {showForm && (
        <form className="reminder-form fade-in" onSubmit={handleSubmit}>
          <input className="cf-input" type="text" placeholder="Nombre (ej: Tomar pastillas)" value={form.name} onChange={(e) => set("name", e.target.value)} required />
          <input className="cf-input" type="text" placeholder="Nota (opcional)" value={form.note} onChange={(e) => set("note", e.target.value)} />

          <select className="cf-select" value={form.frequency} onChange={(e) => set("frequency", e.target.value)}>
            {FREQUENCIES.map((f) => <option key={f.key} value={f.key}>{f.label}</option>)}
          </select>

          {form.frequency === "weekly" && (
            <>
              <div className="reminder-label">Día de la semana:</div>
              <select className="cf-select" value={form.weekday} onChange={(e) => set("weekday", parseInt(e.target.value))}>
                {WEEKDAYS.map((d, i) => <option key={i} value={i}>{d}</option>)}
              </select>
            </>
          )}

          {form.frequency === "monthly" && (
            <>
              <div className="reminder-label">Día del mes:</div>
              <select className="cf-select" value={form.day} onChange={(e) => set("day", parseInt(e.target.value))}>
                {Array.from({ length: 28 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
              </select>
            </>
          )}

          {form.frequency === "once" && (
            <>
              <div className="reminder-label">Día:</div>
              <div className="reminder-row">
                <select className="cf-select" value={form.day} onChange={(e) => set("day", parseInt(e.target.value))}>
                  {Array.from({ length: 31 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                </select>
                <span className="reminder-colon">/</span>
                <select className="cf-select" value={form.month} onChange={(e) => set("month", parseInt(e.target.value))}>
                  {Array.from({ length: 12 }, (_, i) => <option key={i + 1} value={i + 1}>{String(i + 1).padStart(2, "0")}</option>)}
                </select>
              </div>
            </>
          )}

          <label className="reminder-checkbox-label">
            <input type="checkbox" className="reminder-checkbox" checked={form.earlyBird} onChange={(e) => set("earlyBird", e.target.checked)} />
            <span>¿Eres madrugador? La primera notificación sonará a las <strong>{startHourText(form.earlyBird)}</strong></span>
          </label>

          <p className="reminder-form-hint">El aviso sonará cada hora desde las {startHourText(form.earlyBird)} hasta que lo desactives (🔔).</p>

          <div className="reminder-form-actions">
            <button type="button" className="reminder-cancel-btn" onClick={() => { setShowForm(false); setEditingId(null); }}>Cancelar</button>
            <button className="generate-btn" type="submit" style={{ marginBottom: 0, flex: 1 }}>{editingId ? "Guardar cambios" : "Crear recordatorio"}</button>
          </div>
        </form>
      )}

      {sorted.length === 0 && !showForm && (
        <p className="reminders-empty">No tienes recordatorios. ¡Añade uno!</p>
      )}

      <div className="reminders-list">
        {sorted.map((r) => {
          const isFired = firedRecently(r) || justFired === r.id;
          return (
            <div key={r.id} className={`reminder-item fade-in ${isFired ? "fired" : ""} ${!r.active ? "inactive" : ""}`}>
              <div className="reminder-item-left">
                <div className="reminder-item-header">
                  <span className="reminder-item-name">{r.name}</span>
                  {isFired && <span className="reminder-fired-badge">✅ Ahora</span>}
                </div>
                {r.note && <span className="reminder-item-note">{r.note}</span>}
                <span className="reminder-item-time">{formatFireTime(r)}</span>
                {r.active && <span className="reminder-hourly-note">Cada hora desde las {startHourText(r.earlyBird)} hasta desactivar (🔔)</span>}
                {r.isShared && r.ownerEmail && (
                  <span className="reminder-shared-from">Compartido por {r.ownerEmail}</span>
                )}
                {!r.isShared && r.sharedWithEmails && r.sharedWithEmails.length > 0 && (
                  <div className="reminder-shared-with">
                    {r.sharedWithEmails.map((em, i) => (
                      <span key={em} className="reminder-shared-tag">
                        {em}
                        <button className="reminder-shared-remove" onClick={() => onUnshare(r.id, r.sharedWithUids[i], em)} title="Eliminar">✕</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="reminder-item-actions">
                {!r.isShared && (
                  <>
                    <button className={`reminder-toggle-btn ${r.active ? "on" : "off"}`} onClick={() => onUpdate(r.id, { active: !r.active })} title={r.active ? "Desactivar" : "Activar"}>
                      {r.active ? "🔔" : "🔕"}
                    </button>
                    <button className="reminder-edit-btn" onClick={() => openEdit(r)} title="Editar">✏️</button>
                    <button className="reminder-share-btn" onClick={() => setShareId(shareId === r.id ? null : r.id)} title="Compartir">📤</button>
                    <button className="reminder-delete-btn" onClick={() => onRemove(r.id)} title="Eliminar">🗑️</button>
                  </>
                )}
              </div>
              {shareId === r.id && !r.isShared && (
                <div className="reminder-share-form fade-in">
                  <input className="cf-input" type="email" placeholder="Email del usuario" value={shareEmail} onChange={(e) => setShareEmail(e.target.value)} />
                  <button className="generate-btn" style={{ marginBottom: 0, padding: "8px 12px", fontSize: 13 }} onClick={() => handleShare(r.id)}>Compartir</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {ownedCount >= 5 && !editingId && <p className="reminders-limit">Máximo 5 recordatorios propios permitidos.</p>}
    </div>
  );
}
