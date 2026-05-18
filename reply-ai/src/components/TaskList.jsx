import React, { useState, useMemo } from "react";

const PRIORITIES = [
  { value: "low", label: "Baja", color: "#3b82f6", bg: "#dbeafe" },
  { value: "medium", label: "Media", color: "#f59e0b", bg: "#fef3c7" },
  { value: "high", label: "Alta", color: "#ef4444", bg: "#fee2e2" },
];

const EMPTY_FORM = {
  title: "",
  description: "",
  dueDate: "",
  priority: "medium",
  clientName: "",
};

function isOverdue(dueDateStr) {
  if (!dueDateStr) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDateStr);
  due.setHours(0, 0, 0, 0);
  return due < today;
}

function fmtDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "short" });
}

export default function TaskList({
  tasks,
  error,
  maxTasks,
  onAdd,
  onToggleStatus,
  onRemove,
}) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterStatus, setFilterStatus] = useState("pending");

  const set = (f, v) => setForm((prev) => ({ ...prev, [f]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    onAdd({
      title: form.title.trim(),
      description: form.description.trim(),
      dueDate: form.dueDate,
      priority: form.priority,
      clientName: form.clientName.trim(),
    });

    setForm({ ...EMPTY_FORM });
    setShowForm(false);
  };

  // Filtered & searched tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const matchesSearch =
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.clientName.toLowerCase().includes(search.toLowerCase());

      const matchesPriority = filterPriority === "all" || t.priority === filterPriority;
      const matchesStatus = filterStatus === "all" || t.status === filterStatus;

      return matchesSearch && matchesPriority && matchesStatus;
    });
  }, [tasks, search, filterPriority, filterStatus]);

  const atLimit = tasks.length >= maxTasks && !showForm;
  const pendingCount = tasks.filter((t) => t.status === "pending").length;

  return (
    <div className="task-list-section">
      {error && <p className="error">{error}</p>}

      {/* ── Overview Banner ── */}
      <div className="task-overview">
        <span>Tienes <strong>{pendingCount}</strong> tareas pendientes</span>
      </div>

      {/* ── Filters & Toolbar ── */}
      <div className="task-toolbar">
        <div className="search-box">
          <svg className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            className="search-input"
            type="text"
            placeholder="Buscar tarea, cliente..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="search-clear" onClick={() => setSearch("")}>✕</button>
          )}
        </div>

        <div className="finance-filters">
          <select
            className="cf-select filter-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="pending">Pendientes</option>
            <option value="completed">Completadas</option>
            <option value="all">Todas</option>
          </select>
          <select
            className="cf-select filter-select"
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="all">Cualquier prioridad</option>
            <option value="low">Prioridad Baja</option>
            <option value="medium">Prioridad Media</option>
            <option value="high">Prioridad Alta</option>
          </select>
        </div>

        <button
          className="add-note-btn"
          onClick={() => setShowForm(!showForm)}
          disabled={atLimit}
          style={{ width: "100%" }}
        >
          {showForm ? "Cerrar formulario" : "+ Nueva Tarea"}
        </button>
      </div>

      {/* ── Add Task Form ── */}
      {showForm && (
        <form className="note-form fade-in" onSubmit={handleSubmit}>
          <input
            className="cf-input"
            type="text"
            placeholder="Nombre de la tarea *"
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            required
            maxLength={100}
          />
          <textarea
            className="note-form-textarea"
            placeholder="Detalles / descripción de la tarea (opcional)"
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            rows={3}
            maxLength={300}
          />
          
          <div className="reminder-row">
            <input
              className="cf-input"
              type="date"
              value={form.dueDate}
              onChange={(e) => set("dueDate", e.target.value)}
              style={{ flex: 1 }}
            />
          </div>

          <input
            className="cf-input"
            type="text"
            placeholder="Cliente o Proyecto (ej: Proyecto Tienda)"
            value={form.clientName}
            onChange={(e) => set("clientName", e.target.value)}
            maxLength={50}
          />

          <div className="note-color-row">
            <span className="reminder-label">Prioridad:</span>
            <div className="task-priority-toggle">
              {PRIORITIES.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  className={`priority-btn ${form.priority === p.value ? "active" : ""}`}
                  style={{
                    "--active-color": p.color,
                    "--active-bg": p.bg,
                  }}
                  onClick={() => set("priority", p.value)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="reminder-form-actions">
            <button type="button" className="reminder-cancel-btn" onClick={() => setShowForm(false)}>
              Cancelar
            </button>
            <button className="generate-btn" type="submit" style={{ marginBottom: 0, flex: 1 }}>
              Guardar Tarea
            </button>
          </div>
        </form>
      )}

      {/* ── Task List ── */}
      {filteredTasks.length === 0 && !showForm && (
        <p className="reminders-empty">No hay tareas que coincidan con los filtros.</p>
      )}

      <div className="tasks-container">
        {filteredTasks.map((t) => {
          const isTaskOverdue = t.status === "pending" && isOverdue(t.dueDate);
          const p = PRIORITIES.find((item) => item.value === t.priority) || PRIORITIES[1];

          return (
            <div
              key={t.id}
              className={`task-item fade-in ${t.status === "completed" ? "completed" : ""}`}
            >
              <label className="task-checkbox-container">
                <input
                  type="checkbox"
                  checked={t.status === "completed"}
                  onChange={() => onToggleStatus(t.id)}
                />
                <span className="task-checkmark" />
              </label>

              <div className="task-body">
                <p className="task-title">{t.title}</p>
                {t.description && <p className="task-desc">{t.description}</p>}
                
                <div className="task-badges">
                  {/* Client badge */}
                  {t.clientName && (
                    <span className="task-badge client">
                      💼 {t.clientName}
                    </span>
                  )}
                  
                  {/* Due Date badge */}
                  {t.dueDate && (
                    <span className={`task-badge date ${isTaskOverdue ? "overdue" : ""}`}>
                      📅 {fmtDate(t.dueDate)} {isTaskOverdue && " ⚠️ Retrasada"}
                    </span>
                  )}

                  {/* Priority badge */}
                  <span
                    className="task-badge priority"
                    style={{ background: p.bg, color: p.color }}
                  >
                    {p.label}
                  </span>
                </div>
              </div>

              <button
                className="note-delete-btn"
                onClick={() => onRemove(t.id)}
                title="Eliminar tarea"
                style={{ opacity: 0.5, fontSize: 13, alignSelf: "flex-start", marginTop: 2 }}
              >
                🗑️
              </button>
            </div>
          );
        })}
      </div>

      {atLimit && (
        <p className="reminders-limit">Máximo {maxTasks} tareas permitidas.</p>
      )}
    </div>
  );
}
