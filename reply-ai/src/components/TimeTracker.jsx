import React, { useState } from "react";

const PROJECT_COLORS = [
  "#2d6a4f", "#1d4ed8", "#7c3aed", "#b45309",
  "#be185d", "#0e7490", "#4d7c0f", "#9f1239",
];

const CURRENCIES = ["EUR", "USD", "GBP"];

const EMPTY_PROJ = { name: "", clientName: "", rate: "", currency: "EUR", color: "#2d6a4f" };

function fmtDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${String(m).padStart(2, "0")}m`;
  if (m > 0) return `${m}m ${String(s).padStart(2, "0")}s`;
  return `${s}s`;
}

function fmtMoney(seconds, rate, currency) {
  if (!rate) return null;
  const amount = (seconds / 3600) * rate;
  return amount.toLocaleString("es-ES", { style: "currency", currency, minimumFractionDigits: 2 });
}

function fmtDate(iso) {
  return new Date(iso).toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" });
}

function fmtTime(iso) {
  return new Date(iso).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

export default function TimeTracker({
  projects, entries, error, maxProjects,
  activeProjectId, elapsed, secondsByProject,
  onAddProject, onRemoveProject, onStartTimer, onStopTimer, onRemoveEntry,
  contacts = [],
}) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ ...EMPTY_PROJ });
  const [stopNotes, setStopNotes] = useState("");
  const [showStopModal, setShowStopModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // for history filter
  const [confirmDelete, setConfirmDelete] = useState(null);

  const [showClientSuggestions, setShowClientSuggestions] = useState(false);
  const clientSuggestions = React.useMemo(() => {
    const query = (form.clientName || "").trim().toLowerCase();
    if (!query) return contacts.slice(0, 10);
    return contacts.filter((c) => c.name.toLowerCase().includes(query));
  }, [contacts, form.clientName]);

  const set = (f, v) => setForm((prev) => ({ ...prev, [f]: v }));

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onAddProject({ ...form, rate: parseFloat(form.rate) || 0 });
    setForm({ ...EMPTY_PROJ });
    setShowForm(false);
  };

  const handleStop = async () => {
    await onStopTimer(stopNotes.trim());
    setStopNotes("");
    setShowStopModal(false);
  };

  const activeProject = projects.find((p) => p.id === activeProjectId);
  const atLimit = projects.length >= maxProjects;

  // Filtered entries
  const visibleEntries = selectedProject
    ? entries.filter((e) => e.projectId === selectedProject)
    : entries;

  // Totals for selected filter
  const totalSec = visibleEntries.reduce((s, e) => s + (e.durationSec || 0), 0);

  return (
    <div className="time-tracker">
      {error && <p className="error">{error}</p>}

      {/* ── Active Timer Banner ── */}
      {activeProjectId && activeProject && (
        <div className="timer-banner fade-in" style={{ borderColor: activeProject.color }}>
          <div className="timer-banner-left">
            <span className="timer-dot" style={{ background: activeProject.color }} />
            <div>
              <p className="timer-project-name">{activeProject.name}</p>
              {activeProject.clientName && (
                <p className="timer-client">{activeProject.clientName}</p>
              )}
            </div>
          </div>
          <div className="timer-banner-right">
            <span className="timer-elapsed">{fmtDuration(elapsed)}</span>
            {activeProject.rate > 0 && (
              <span className="timer-earning">
                {fmtMoney(elapsed, activeProject.rate, activeProject.currency)}
              </span>
            )}
            <button
              className="timer-stop-btn"
              onClick={() => setShowStopModal(true)}
            >
              ⏹ Parar
            </button>
          </div>
        </div>
      )}

      {/* ── Stop Modal ── */}
      {showStopModal && (
        <div className="modal-overlay fade-in" onClick={() => setShowStopModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h4 className="modal-title">Parar cronómetro</h4>
            <p className="modal-subtitle">¿Añadir una nota sobre lo trabajado? (opcional)</p>
            <input
              className="cf-input"
              type="text"
              placeholder="Ej: Reunión con cliente, diseño logo..."
              value={stopNotes}
              onChange={(e) => setStopNotes(e.target.value)}
              autoFocus
            />
            <div className="reminder-form-actions" style={{ marginTop: 12 }}>
              <button className="reminder-cancel-btn" onClick={() => setShowStopModal(false)}>
                Cancelar
              </button>
              <button className="generate-btn" style={{ marginBottom: 0, flex: 1 }} onClick={handleStop}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Projects Header ── */}
      <div className="time-section-header">
        <h3>Proyectos <span className="count-badge">{projects.length}/{maxProjects}</span></h3>
        <button className="add-note-btn" onClick={() => setShowForm(!showForm)} disabled={atLimit && !showForm}>
          + Añadir
        </button>
      </div>

      {/* ── Add Project Form ── */}
      {showForm && (
        <form className="note-form fade-in" onSubmit={handleAddProject}>
          <input
            className="cf-input"
            type="text"
            placeholder="Nombre del proyecto *"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            required
          />
          <div className="autocomplete-wrapper">
            <input
              className="cf-input"
              type="text"
              placeholder="Cliente (opcional)"
              value={form.clientName}
              onChange={(e) => {
                set("clientName", e.target.value);
                setShowClientSuggestions(true);
              }}
              onFocus={() => setShowClientSuggestions(true)}
              onBlur={() => setTimeout(() => setShowClientSuggestions(false), 200)}
            />
            {showClientSuggestions && clientSuggestions.length > 0 && (
              <div className="autocomplete-suggestions">
                {clientSuggestions.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className="autocomplete-suggestion"
                    onClick={() => {
                      set("clientName", c.name);
                      setShowClientSuggestions(false);
                    }}
                  >
                    👤 {c.name} {c.occupation ? `(${c.occupation})` : ""}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="time-rate-row">
            <input
              className="cf-input"
              type="number"
              min="0"
              step="0.5"
              placeholder="Tarifa €/h (opcional)"
              value={form.rate}
              onChange={(e) => set("rate", e.target.value)}
              style={{ flex: 2 }}
            />
            <select
              className="cf-select"
              value={form.currency}
              onChange={(e) => set("currency", e.target.value)}
              style={{ flex: 1 }}
            >
              {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="note-color-row">
            <span className="reminder-label">Color:</span>
            <div className="note-color-swatches">
              {PROJECT_COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`note-color-swatch ${form.color === c ? "selected" : ""}`}
                  style={{ background: c }}
                  onClick={() => set("color", c)}
                />
              ))}
            </div>
          </div>
          <div className="reminder-form-actions">
            <button type="button" className="reminder-cancel-btn" onClick={() => setShowForm(false)}>
              Cancelar
            </button>
            <button className="generate-btn" type="submit" style={{ marginBottom: 0, flex: 1 }}>
              Crear proyecto
            </button>
          </div>
        </form>
      )}

      {/* ── Projects List ── */}
      {projects.length === 0 && !showForm && (
        <p className="reminders-empty">No tienes proyectos. ¡Crea uno para empezar!</p>
      )}

      <div className="projects-list">
        {projects.map((p) => {
          const secs = secondsByProject[p.id] || 0;
          const isActive = activeProjectId === p.id;
          return (
            <div
              key={p.id}
              className={`project-card fade-in ${isActive ? "project-active" : ""}`}
              style={{ borderLeftColor: p.color }}
            >
              <div className="project-card-info">
                <span className="project-card-name">{p.name}</span>
                {p.clientName && <span className="project-card-client">{p.clientName}</span>}
                <div className="project-card-stats">
                  <span className="project-stat">🕐 {fmtDuration(secs)}</span>
                  {p.rate > 0 && (
                    <span className="project-stat">
                      💰 {fmtMoney(secs, p.rate, p.currency)}
                    </span>
                  )}
                </div>
              </div>
              <div className="project-card-actions">
                {isActive ? (
                  <button
                    className="timer-start-btn stop"
                    onClick={() => setShowStopModal(true)}
                  >⏹</button>
                ) : (
                  <button
                    className="timer-start-btn"
                    onClick={() => onStartTimer(p.id)}
                    disabled={!!activeProjectId}
                    title="Iniciar cronómetro"
                  >▶</button>
                )}
                <button
                  className="note-delete-btn"
                  onClick={() => setConfirmDelete(p.id)}
                  title="Eliminar proyecto"
                  style={{ opacity: 0.6, fontSize: 15 }}
                >🗑️</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Confirm Delete ── */}
      {confirmDelete && (
        <div className="modal-overlay fade-in" onClick={() => setConfirmDelete(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h4 className="modal-title">¿Eliminar proyecto?</h4>
            <p className="modal-subtitle">Se eliminarán también todos sus registros de horas.</p>
            <div className="reminder-form-actions" style={{ marginTop: 12 }}>
              <button className="reminder-cancel-btn" onClick={() => setConfirmDelete(null)}>
                Cancelar
              </button>
              <button
                className="generate-btn"
                style={{ marginBottom: 0, flex: 1, background: "linear-gradient(135deg,#dc2626,#b91c1c)" }}
                onClick={() => { onRemoveProject(confirmDelete); setConfirmDelete(null); }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── History ── */}
      {entries.length > 0 && (
        <>
          <div className="time-section-header" style={{ marginTop: 20 }}>
            <h3>Historial</h3>
            {projects.length > 0 && (
              <select
                className="cf-select"
                style={{ fontSize: 12, padding: "4px 8px" }}
                value={selectedProject || ""}
                onChange={(e) => setSelectedProject(e.target.value || null)}
              >
                <option value="">Todos los proyectos</option>
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            )}
          </div>

          {totalSec > 0 && (
            <div className="time-total-bar">
              <span>Total: <strong>{fmtDuration(totalSec)}</strong></span>
              {visibleEntries[0]?.rate > 0 && (
                <span>≈ <strong>{fmtMoney(totalSec, visibleEntries[0].rate, visibleEntries[0].currency)}</strong></span>
              )}
            </div>
          )}

          <div className="entries-list">
            {visibleEntries.slice(0, 30).map((e) => (
              <div key={e.id} className="entry-item fade-in">
                <div className="entry-dot" style={{
                  background: projects.find((p) => p.id === e.projectId)?.color || "#94a3b8"
                }} />
                <div className="entry-info">
                  <span className="entry-project">{e.projectName}</span>
                  {e.notes && <span className="entry-notes">{e.notes}</span>}
                  <span className="entry-time">
                    {fmtDate(e.startedAt)} · {fmtTime(e.startedAt)} – {fmtTime(e.endedAt)}
                  </span>
                </div>
                <div className="entry-right">
                  <span className="entry-duration">{fmtDuration(e.durationSec)}</span>
                  {e.rate > 0 && (
                    <span className="entry-money">{fmtMoney(e.durationSec, e.rate, e.currency)}</span>
                  )}
                  <button
                    className="note-delete-btn"
                    onClick={() => onRemoveEntry(e.id)}
                    style={{ opacity: 0.5, fontSize: 13 }}
                    title="Eliminar registro"
                  >🗑️</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {atLimit && (
        <p className="reminders-limit">Máximo {maxProjects} proyectos permitidos.</p>
      )}
    </div>
  );
}
