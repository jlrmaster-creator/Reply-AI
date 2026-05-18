import React, { useState, useMemo } from "react";

const VAT_RATES = [21, 10, 4, 0];
const IRPF_RATES = [0, 7, 15];

const EMPTY_FORM = {
  type: "income",
  concept: "",
  clientOrProvider: "",
  amount: "",
  vatRate: 21,
  irpfRate: 0,
  date: new Date().toISOString().split("T")[0],
};

function fmtMoney(amount, currency = "EUR") {
  return amount.toLocaleString("es-ES", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  });
}

function getQuarter(dateStr) {
  const month = new Date(dateStr).getMonth();
  if (month >= 0 && month <= 2) return "Q1";
  if (month >= 3 && month <= 5) return "Q2";
  if (month >= 6 && month <= 8) return "Q3";
  return "Q4";
}

export default function FinanceTracker({
  entries,
  error,
  maxEntries,
  stats,
  onAddEntry,
  onRemoveEntry,
  contacts = [],
}) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [filterQuarter, setFilterQuarter] = useState("ALL");
  const [filterYear, setFilterYear] = useState(new Date().getFullYear().toString());

  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = useMemo(() => {
    const query = (form.clientOrProvider || "").trim().toLowerCase();
    if (!query) return contacts.slice(0, 10);
    return contacts.filter((c) => c.name.toLowerCase().includes(query));
  }, [contacts, form.clientOrProvider]);

  const set = (f, v) => setForm((prev) => ({ ...prev, [f]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.concept.trim() || !form.amount) return;

    onAddEntry({
      type: form.type,
      concept: form.concept.trim(),
      clientOrProvider: form.clientOrProvider.trim(),
      amount: parseFloat(form.amount) || 0,
      vatRate: parseInt(form.vatRate) || 0,
      irpfRate: form.type === "income" ? parseInt(form.irpfRate) || 0 : 0,
      date: form.date,
    });

    setForm({ ...EMPTY_FORM, type: form.type }); // maintain type
    setShowForm(false);
  };

  // Deduced available years
  const availableYears = useMemo(() => {
    const years = new Set([new Date().getFullYear().toString()]);
    entries.forEach((e) => {
      if (e.date) {
        years.add(e.date.split("-")[0]);
      }
    });
    return Array.from(years).sort((a, b) => b - a);
  }, [entries]);

  // Filtered entries
  const filteredEntries = useMemo(() => {
    return entries.filter((e) => {
      const year = e.date.split("-")[0];
      const quarter = getQuarter(e.date);
      const matchesYear = year === filterYear;
      const matchesQuarter = filterQuarter === "ALL" || quarter === filterQuarter;
      return matchesYear && matchesQuarter;
    });
  }, [entries, filterQuarter, filterYear]);

  // Filtered stats
  const filteredStats = useMemo(() => {
    let incomes = 0;
    let expenses = 0;
    let vatRep = 0;
    let vatSop = 0;
    let irpf = 0;

    filteredEntries.forEach((e) => {
      if (e.type === "income") {
        incomes += e.amount || 0;
        vatRep += e.vatAmount || 0;
        irpf += e.irpfAmount || 0;
      } else {
        expenses += e.amount || 0;
        vatSop += e.vatAmount || 0;
      }
    });

    const profit = incomes - expenses;
    const vatBal = vatRep - vatSop;

    return { incomes, expenses, vatRep, vatSop, irpf, profit, vatBal };
  }, [filteredEntries]);

  // Export to CSV
  const exportToCSV = () => {
    if (filteredEntries.length === 0) return;
    
    // Headers
    const headers = [
      "Fecha",
      "Tipo",
      "Concepto",
      "Cliente/Proveedor",
      "Base Imponible (€)",
      "IVA %",
      "Cuota IVA (€)",
      "IRPF %",
      "Cuota IRPF (€)",
      "Total (€)",
    ];

    const rows = filteredEntries.map((e) => [
      e.date,
      e.type === "income" ? "Ingreso" : "Gasto",
      e.concept.replace(/"/g, '""'),
      e.clientOrProvider.replace(/"/g, '""'),
      e.amount.toFixed(2),
      e.vatRate,
      e.vatAmount.toFixed(2),
      e.type === "income" ? e.irpfRate : 0,
      e.type === "income" ? e.irpfAmount.toFixed(2) : 0,
      e.total.toFixed(2),
    ]);

    const csvContent =
      "\uFEFF" + // UTF-8 BOM for Excel Spanish compatibility
      [headers.join(";"), ...rows.map((r) => r.join(";"))].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `Contabilidad_${filterYear}_${filterQuarter === "ALL" ? "Anual" : filterQuarter}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const atLimit = entries.length >= maxEntries && !showForm;

  return (
    <div className="finance-tracker">
      {error && <p className="error">{error}</p>}

      {/* ── Dashboard Stats ── */}
      <div className="finance-stats-grid">
        <div className="finance-stat-card income">
          <span className="finance-stat-title">Ingresos (Bases)</span>
          <span className="finance-stat-value">{fmtMoney(filteredStats.incomes)}</span>
          <span className="finance-stat-subtitle">IVA Repercutido: {fmtMoney(filteredStats.vatRep)}</span>
        </div>
        <div className="finance-stat-card expense">
          <span className="finance-stat-title">Gastos (Bases)</span>
          <span className="finance-stat-value">{fmtMoney(filteredStats.expenses)}</span>
          <span className="finance-stat-subtitle">IVA Soportado: {fmtMoney(filteredStats.vatSop)}</span>
        </div>
        <div className="finance-stat-card profit">
          <span className="finance-stat-title">Rendimiento Neto</span>
          <span className="finance-stat-value" style={{ color: filteredStats.profit >= 0 ? "#2d6a4f" : "#dc2626" }}>
            {fmtMoney(filteredStats.profit)}
          </span>
          <span className="finance-stat-subtitle">IRPF Retenido: {fmtMoney(filteredStats.irpf)}</span>
        </div>
        <div className="finance-stat-card vat">
          <span className="finance-stat-title">Balance IVA (Hacienda)</span>
          <span className="finance-stat-value" style={{ color: filteredStats.vatBal >= 0 ? "#b45309" : "#1d4ed8" }}>
            {fmtMoney(filteredStats.vatBal)}
          </span>
          <span className="finance-stat-subtitle">
            {filteredStats.vatBal >= 0 ? "A pagar" : "A devolver"}
          </span>
        </div>
      </div>

      {/* ── Filters & Export Toolbar ── */}
      <div className="finance-toolbar">
        <div className="finance-filters">
          <select
            className="cf-select filter-select"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          >
            {availableYears.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
          <select
            className="cf-select filter-select"
            value={filterQuarter}
            onChange={(e) => setFilterQuarter(e.target.value)}
          >
            <option value="ALL">Todo el año</option>
            <option value="Q1">1º Trimestre (Ene-Mar)</option>
            <option value="Q2">2º Trimestre (Abr-Jun)</option>
            <option value="Q3">3º Trimestre (Jul-Sep)</option>
            <option value="Q4">4º Trimestre (Oct-Dic)</option>
          </select>
        </div>
        <div className="finance-actions-row">
          <button
            className="add-note-btn"
            onClick={() => setShowForm(!showForm)}
            disabled={atLimit}
            style={{ flex: 1 }}
          >
            {showForm ? "Cerrar" : "+ Añadir Asiento"}
          </button>
          {filteredEntries.length > 0 && (
            <button
              className="export-csv-btn"
              onClick={exportToCSV}
              title="Exportar a Excel / CSV"
            >
              📥 Exportar
            </button>
          )}
        </div>
      </div>

      {/* ── Add Asiento Form ── */}
      {showForm && (
        <form className="note-form fade-in" onSubmit={handleSubmit}>
          {/* Toggle Type */}
          <div className="finance-type-toggle">
            <button
              type="button"
              className={`toggle-btn income ${form.type === "income" ? "active" : ""}`}
              onClick={() => set("type", "income")}
            >
              🟢 Ingreso (Factura emitida)
            </button>
            <button
              type="button"
              className={`toggle-btn expense ${form.type === "expense" ? "active" : ""}`}
              onClick={() => set("type", "expense")}
            >
              🔴 Gasto (Factura recibida)
            </button>
          </div>

          <div className="reminder-row">
            <input
              className="cf-input"
              type="date"
              value={form.date}
              onChange={(e) => set("date", e.target.value)}
              required
              style={{ flex: 1 }}
            />
          </div>

          <input
            className="cf-input"
            type="text"
            placeholder="Concepto (ej: Servicio consultoría, Alquiler local...)"
            value={form.concept}
            onChange={(e) => set("concept", e.target.value)}
            required
            maxLength={100}
          />

          <div className="autocomplete-wrapper">
            <input
              className="cf-input"
              type="text"
              placeholder={form.type === "income" ? "Cliente (ej: ACME S.L.)" : "Proveedor (ej: Iberdrola)"}
              value={form.clientOrProvider}
              onChange={(e) => {
                set("clientOrProvider", e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              maxLength={100}
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className="autocomplete-suggestions">
                {suggestions.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className="autocomplete-suggestion"
                    onClick={() => {
                      set("clientOrProvider", c.name);
                      setShowSuggestions(false);
                    }}
                  >
                    👤 {c.name} {c.occupation ? `(${c.occupation})` : ""}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="reminder-row">
            <input
              className="cf-input"
              type="number"
              min="0.01"
              step="0.01"
              placeholder="Base imponible (€) *"
              value={form.amount}
              onChange={(e) => set("amount", e.target.value)}
              required
              style={{ flex: 1 }}
            />
          </div>

          <div className="finance-tax-selectors">
            <div className="tax-selector">
              <span className="reminder-label">IVA:</span>
              <select
                className="cf-select"
                value={form.vatRate}
                onChange={(e) => set("vatRate", parseInt(e.target.value))}
              >
                {VAT_RATES.map((r) => <option key={r} value={r}>{r}%</option>)}
              </select>
            </div>
            {form.type === "income" && (
              <div className="tax-selector">
                <span className="reminder-label">Retención IRPF:</span>
                <select
                  className="cf-select"
                  value={form.irpfRate}
                  onChange={(e) => set("irpfRate", parseInt(e.target.value))}
                >
                  {IRPF_RATES.map((r) => <option key={r} value={r}>{r}%</option>)}
                </select>
              </div>
            )}
          </div>

          <div className="reminder-form-actions">
            <button type="button" className="reminder-cancel-btn" onClick={() => setShowForm(false)}>
              Cancelar
            </button>
            <button className="generate-btn" type="submit" style={{ marginBottom: 0, flex: 1 }}>
              Registrar Asiento
            </button>
          </div>
        </form>
      )}

      {/* ── Table / List of Entries ── */}
      {filteredEntries.length === 0 && !showForm && (
        <p className="reminders-empty">No hay registros para este trimestre.</p>
      )}

      <div className="finance-list">
        {filteredEntries.map((e) => {
          const isIncome = e.type === "income";
          return (
            <div key={e.id} className={`finance-item fade-in ${isIncome ? "income" : "expense"}`}>
              <div className="finance-item-left">
                <div className="finance-item-header">
                  <span className="finance-item-concept">{e.concept}</span>
                  <span className="finance-item-date">{new Date(e.date).toLocaleDateString("es-ES")}</span>
                </div>
                {e.clientOrProvider && (
                  <span className="finance-item-client">
                    {isIncome ? "Cliente: " : "Prov: "} {e.clientOrProvider}
                  </span>
                )}
                <div className="finance-item-tax-details">
                  <span>Base: {fmtMoney(e.amount)}</span>
                  <span>·</span>
                  <span>IVA ({e.vatRate}%): {fmtMoney(e.vatAmount)}</span>
                  {isIncome && e.irpfRate > 0 && (
                    <>
                      <span>·</span>
                      <span>IRPF (-{e.irpfRate}%): {fmtMoney(e.irpfAmount)}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="finance-item-right">
                <span className={`finance-item-total ${isIncome ? "income" : "expense"}`}>
                  {isIncome ? "+" : "-"} {fmtMoney(e.total)}
                </span>
                <button
                  className="note-delete-btn"
                  onClick={() => onRemoveEntry(e.id)}
                  title="Eliminar asiento"
                  style={{ opacity: 0.5, fontSize: 13 }}
                >
                  🗑️
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {atLimit && (
        <p className="reminders-limit">Máximo {maxEntries} asientos permitidos.</p>
      )}
    </div>
  );
}
