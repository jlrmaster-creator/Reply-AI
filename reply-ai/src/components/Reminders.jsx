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
  if (r.hasAlarm) {
    const timeStr = `${String(r.alarmHour ?? 9).padStart(2, "0")}:${String(r.alarmMinute ?? 0).padStart(2, "0")}`;
    if (r.frequency === "daily") return `A diario (${timeStr}) ⏰`;
    if (r.frequency === "weekly") return `Cada ${WEEKDAYS[r.weekday]} (${timeStr}) ⏰`;
    if (r.frequency === "monthly") return `Día ${r.day} de cada mes (${timeStr}) ⏰`;
    if (r.frequency === "once") return `${r.day}/${String(r.month).padStart(2, "0")} (${timeStr}) ⏰`;
  } else {
    const h = earlyHour(r);
    if (r.frequency === "daily") return `A diario (${h}:00)`;
    if (r.frequency === "weekly") return `Cada ${WEEKDAYS[r.weekday]} (${h}:00)`;
    if (r.frequency === "monthly") return `Día ${r.day} de cada mes (${h}:00)`;
    if (r.frequency === "once") return `${r.day}/${String(r.month).padStart(2, "0")} (${h}:00)`;
  }
  return "";
}

function firedRecently(r) {
  if (!r.lastFiredAt) return false;
  return Date.now() - new Date(r.lastFiredAt).getTime() < 3600000;
}

function startHourText(early) {
  return (early ? 7 : 9) + ":00";
}

const EMPTY_FORM = { name: "", note: "", frequency: "daily", weekday: 1, day: 1, month: 1, earlyBird: false, hasAlarm: false, alarmHour: 9, alarmMinute: 0 };

export default function Reminders({ reminders, error, justFired, onAdd, onUpdate, onRemove, onShare, onUnshare }) {
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [shareId, setShareId] = useState(null);
  const [shareEmail, setShareEmail] = useState("");
  const [showNightMode, setShowNightMode] = useState(false);
  const [nightTime, setNightTime] = useState(new Date());

  React.useEffect(() => {
    if (!showNightMode) return;
    const interval = setInterval(() => {
      setNightTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [showNightMode]);

  React.useEffect(() => {
    let wakeLock = null;
    const requestLock = async () => {
      if ('wakeLock' in navigator) {
        try {
          wakeLock = await navigator.wakeLock.request('screen');
          console.log("Screen Wake Lock activated");
        } catch (err) {
          console.warn("Failed to request wake lock", err);
        }
      }
    };

    if (showNightMode) {
      requestLock();
    }

    return () => {
      if (wakeLock) {
        wakeLock.release().then(() => {
          console.log("Screen Wake Lock released");
        }).catch(() => {});
      }
    };
  }, [showNightMode]);

  const set = (field, val) => setForm((f) => ({ ...f, [field]: val }));

  const openNew = () => {
    setForm({ ...EMPTY_FORM });
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (r) => {
    setForm({
      name: r.name,
      note: r.note || "",
      frequency: r.frequency,
      weekday: r.weekday ?? 1,
      day: r.day ?? 1,
      month: r.month ?? 1,
      earlyBird: r.earlyBird ?? false,
      hasAlarm: r.hasAlarm ?? false,
      alarmHour: r.alarmHour ?? 9,
      alarmMinute: r.alarmMinute ?? 0
    });
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
      hasAlarm: form.hasAlarm,
      alarmHour: form.alarmHour,
      alarmMinute: form.alarmMinute
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

      {Notification.permission === "denied" && (
        <div className="notification-warning-banner fade-in">
          ⚠️ <strong>Notificaciones desactivadas:</strong> Habilita los permisos de notificación de esta web en tu navegador para escuchar los avisos sonoros y visuales en segundo plano.
        </div>
      )}

      <div className="reminders-header">
        <h3>Recordatorios {reminders.length > 0 && <span className="count-badge">{reminders.length}</span>}</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="night-mode-btn" type="button" onClick={() => setShowNightMode(true)} style={{ background: '#475569', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', fontWeight: '600' }}>
            🌙 Modo Noche
          </button>
          <button className="add-reminder-btn" onClick={openNew} disabled={ownedCount >= 5 && !editingId}>
            + Añadir
          </button>
        </div>
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

          <label className="reminder-checkbox-label" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" className="reminder-checkbox" checked={form.hasAlarm} onChange={(e) => set("hasAlarm", e.target.checked)} />
            <span>¿Activar alarma de despertador sonora?</span>
          </label>

          {form.hasAlarm ? (
            <div className="alarm-time-selectors fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px' }}>
              <div className="reminder-label">Hora y minuto de la alarma:</div>
              <div className="reminder-row" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <select className="cf-select" value={form.alarmHour} onChange={(e) => set("alarmHour", parseInt(e.target.value))} style={{ flex: 1 }}>
                  {Array.from({ length: 24 }, (_, i) => <option key={i} value={i}>{String(i).padStart(2, "0")}</option>)}
                </select>
                <span className="reminder-colon" style={{ fontWeight: 'bold' }}>:</span>
                <select className="cf-select" value={form.alarmMinute} onChange={(e) => set("alarmMinute", parseInt(e.target.value))} style={{ flex: 1 }}>
                  {Array.from({ length: 60 }, (_, i) => <option key={i} value={i}>{String(i).padStart(2, "0")}</option>)}
                </select>
              </div>
            </div>
          ) : (
            <>
              <label className="reminder-checkbox-label">
                <input type="checkbox" className="reminder-checkbox" checked={form.earlyBird} onChange={(e) => set("earlyBird", e.target.checked)} />
                <span>¿Eres madrugador? La primera notificación sonará a las <strong>{startHourText(form.earlyBird)}</strong></span>
              </label>

              <p className="reminder-form-hint">El aviso sonará cada hora desde las {startHourText(form.earlyBird)} hasta que lo desactives (🔔).</p>
            </>
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
                {r.active && (
                  r.hasAlarm ? (
                    <span className="reminder-hourly-note">Alarma despertador activa</span>
                  ) : (
                    <span className="reminder-hourly-note">Cada hora desde las {startHourText(r.earlyBird)} hasta desactivar (🔔)</span>
                  )
                )}
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

      {showNightMode && (
        <div className="night-clock-overlay fade-in">
          <button className="night-clock-close" onClick={() => setShowNightMode(false)}>
            ✕ Salir del Modo Noche
          </button>
          <div className="night-clock-content">
            <div className="night-clock-time">
              {nightTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <div className="night-clock-date">
              {nightTime.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' })}
            </div>
            <div className="night-clock-info">
              <span className="night-clock-pulse">●</span> Pantalla siempre encendida (Wake Lock)
            </div>
            <div className="night-clock-hint">
              Coloca el teléfono en el cargador. Tus alarmas programadas sonarán a la hora establecida.
            </div>

            <div className="night-clock-alarms">
              <h4>Próximas Alarmas:</h4>
              {reminders.filter(r => r.active && r.hasAlarm).length === 0 ? (
                <p className="no-alarms-text">No hay alarmas programadas</p>
              ) : (
                reminders.filter(r => r.active && r.hasAlarm).map(r => (
                  <div key={r.id} className="night-clock-alarm-item">
                    <span className="bell">⏰</span>
                    <span className="name">{r.name}</span>
                    <span className="time">{String(r.alarmHour).padStart(2, '0')}:{String(r.alarmMinute).padStart(2, '0')}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
