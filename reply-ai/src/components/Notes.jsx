import React, { useState } from "react";

const NOTE_COLORS = [
  { value: "#ffffff", label: "Blanco" },
  { value: "#fef9c3", label: "Amarillo" },
  { value: "#dcfce7", label: "Verde" },
  { value: "#dbeafe", label: "Azul" },
  { value: "#fce7f3", label: "Rosa" },
  { value: "#ede9fe", label: "Lila" },
];

const EMPTY_FORM = { title: "", body: "", color: "#fef9c3" };

export default function Notes({ notes, error, maxNotes, onAdd, onUpdate, onRemove, onTogglePin }) {
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const set = (field, val) => setForm((f) => ({ ...f, [field]: val }));

  const openNew = () => {
    setForm({ ...EMPTY_FORM });
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (note) => {
    setForm({ title: note.title, body: note.body, color: note.color });
    setEditingId(note.id);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.body.trim() && !form.title.trim()) return;
    if (editingId) {
      onUpdate(editingId, { title: form.title.trim(), body: form.body.trim(), color: form.color });
    } else {
      onAdd({ title: form.title.trim(), body: form.body.trim(), color: form.color });
    }
    setForm({ ...EMPTY_FORM });
    setEditingId(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setForm({ ...EMPTY_FORM });
    setEditingId(null);
    setShowForm(false);
  };

  const atLimit = notes.length >= maxNotes && !editingId;

  return (
    <div className="notes">
      {error && <p className="error">{error}</p>}

      <div className="notes-header">
        <h3>
          Notas
          {notes.length > 0 && <span className="count-badge">{notes.length}/{maxNotes}</span>}
        </h3>
        <button className="add-note-btn" onClick={openNew} disabled={atLimit}>
          + Añadir
        </button>
      </div>

      {showForm && (
        <form className="note-form fade-in" onSubmit={handleSubmit}>
          <input
            className="cf-input"
            type="text"
            placeholder="Título (opcional)"
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            maxLength={60}
          />
          <textarea
            className="note-form-textarea"
            placeholder="Escribe tu nota aquí…"
            value={form.body}
            onChange={(e) => set("body", e.target.value)}
            rows={4}
            maxLength={500}
            required={!form.title.trim()}
          />
          <div className="note-color-row">
            <span className="reminder-label">Color:</span>
            <div className="note-color-swatches">
              {NOTE_COLORS.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  title={c.label}
                  className={`note-color-swatch ${form.color === c.value ? "selected" : ""}`}
                  style={{ background: c.value }}
                  onClick={() => set("color", c.value)}
                />
              ))}
            </div>
          </div>
          <div className="reminder-form-actions">
            <button type="button" className="reminder-cancel-btn" onClick={handleCancel}>
              Cancelar
            </button>
            <button className="generate-btn" type="submit" style={{ marginBottom: 0, flex: 1 }}>
              {editingId ? "Guardar cambios" : "Crear nota"}
            </button>
          </div>
        </form>
      )}

      {notes.length === 0 && !showForm && (
        <p className="reminders-empty">No tienes notas. ¡Añade una!</p>
      )}

      <div className="notes-grid">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`note-card fade-in ${note.pinned ? "pinned" : ""}`}
            style={{ background: note.color || "#ffffff" }}
          >
            <div className="note-card-top">
              {note.title && <p className="note-card-title">{note.title}</p>}
              <p className="note-card-body">{note.body}</p>
            </div>
            <div className="note-card-footer">
              <span className="note-card-date">
                {new Date(note.updatedAt).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "short",
                })}
              </span>
              <div className="note-card-actions">
                <button
                  className={`note-pin-btn ${note.pinned ? "active" : ""}`}
                  onClick={() => onTogglePin(note.id)}
                  title={note.pinned ? "Desanclar" : "Anclar"}
                >
                  📌
                </button>
                <button
                  className="note-edit-btn"
                  onClick={() => openEdit(note)}
                  title="Editar"
                >
                  ✏️
                </button>
                <button
                  className="note-delete-btn"
                  onClick={() => onRemove(note.id)}
                  title="Eliminar"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {atLimit && (
        <p className="reminders-limit">Máximo {maxNotes} notas permitidas.</p>
      )}
    </div>
  );
}
