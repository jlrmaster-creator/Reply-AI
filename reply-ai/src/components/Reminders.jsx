import React, { useState } from "react";

const FREQUENCIES = [
  { key: "daily", label: "A diario" },
  { key: "weekly", label: "Semanal" },
  { key: "monthly", label: "Mensual" },
  { key: "once", label: "Una vez" },
];

const WEEKDAYS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function formatFireTime(r) {
  const h = String(r.hour || 0).padStart(2, "0");
  const m = String(r.minute || 0).padStart(2, "0");
  let text = `${h}:${m}`;
  if (r.frequency === "daily") text += " (a diario)";
  else if (r.frequency === "weekly") text += ` (cada ${WEEKDAYS[r.weekday]})`;
  else if (r.frequency === "monthly") text += ` (día ${r.day})`;
  else if (r.frequency === "once") text += ` (${r.day}/${String(r.month).padStart(2, "0")})`;
  return text;
}

function firedToday(r) {
  if (!r.lastFiredAt) return false;
  const fired = new Date(r.lastFiredAt);
  const now = new Date();
  return fired.getDate() === now.getDate() && fired.getMonth() === now.getMonth() && fired.getFullYear() === now.getFullYear();
}

const EMPTY_FORM = { name: "", note: "", frequency: "daily", hour: 8, minute: 0, weekday: 1, day: 1, month: 1 };

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
    setForm({ name: r.name, note: r.note || "", frequency: r.frequency, hour: r.hour, minute: r.minute, weekday: r.weekday ?? 1, day: r.day ?? 1, month: r.month ?? 1 });
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
      hour: form.hour,
      minute: form.minute,
      active: true,
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
    return (a.hour || 0) - (b.hour || 0) || (a.minute || 0) - (b.minute || 0);
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

          <div className="reminder-row">
            <select className="cf-select" value={form.hour} onChange={(e) => set("hour", parseInt(e.target.value))}>
              {Array.from({ length: 24 }, (_, i) => <option key={i} value={i}>{String(i).padStart(2, "0")}</option>)}
            </select>
            <span className="reminder-colon">:</span>
            <select className="cf-select" value={form.minute} onChange={(e) => set("minute", parseInt(e.target.value))}>
              {Array.from({ length: 60 }, (_, i) => <option key={i} value={i}>{String(i).padStart(2, "0")}</option>)}
            </select>
          </div>

          {form.frequency === "weekly" && (
            <select className="cf-select" value={form.weekday} onChange={(e) => set("weekday", parseInt(e.target.value))}>
              {WEEKDAYS.map((d, i) => <option key={i} value={i}>{d}</option>)}
            </select>
          )}

          {form.frequency === "monthly" && (
            <select className="cf-select" value={form.day} onChange={(e) => set("day", parseInt(e.target.value))}>
              {Array.from({ length: 28 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
            </select>
          )}

          {form.frequency === "once" && (
            <div className="reminder-row">
              <select className="cf-select" value={form.day} onChange={(e) => set("day", parseInt(e.target.value))}>
                {Array.from({ length: 31 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
              </select>
              <span className="reminder-colon">/</span>
              <select className="cf-select" value={form.month} onChange={(e) => set("month", parseInt(e.target.value))}>
                {Array.from({ length: 12 }, (_, i) => <option key={i + 1} value={i + 1}>{String(i + 1).padStart(2, "0")}</option>)}
              </select>
            </div>
          )}

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
          const isFired = firedToday(r) || justFired === r.id;
          return (
            <div key={r.id} className={`reminder-item fade-in ${isFired ? "fired" : ""} ${!r.active ? "inactive" : ""}`}>
              <div className="reminder-item-left">
                <div className="reminder-item-header">
                  <span className="reminder-item-name">{r.name}</span>
                  {isFired && <span className="reminder-fired-badge">✅ Hoy</span>}
                </div>
                {r.note && <span className="reminder-item-note">{r.note}</span>}
                <span className="reminder-item-time">{formatFireTime(r)}</span>
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
