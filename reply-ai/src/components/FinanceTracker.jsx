import React, { useState, useMemo } from "react";
import { jsPDF } from "jspdf";

const VAT_RATES = [21, 10, 4, 0];
const IRPF_RATES = [0, 7, 15];

const EMPTY_FORM = {
  type: "income",
  clientOrProvider: "",
  vatRate: 21,
  irpfRate: 0,
  date: new Date().toISOString().split("T")[0],
  conceptsList: [{ id: 1, name: "", amount: "" }],
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
  userEmail = "",
}) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [filterQuarter, setFilterQuarter] = useState("ALL");
  const [filterYear, setFilterYear] = useState(new Date().getFullYear().toString());

  // PDF albarán states
  const [selectedPdfEntry, setSelectedPdfEntry] = useState(null);
  const [issuerName, setIssuerName] = useState("Mi Empresa / Mi Nombre");
  const [issuerCIF, setIssuerCIF] = useState("");
  const [issuerAddress, setIssuerAddress] = useState("");
  const [issuerEmail, setIssuerEmail] = useState(userEmail || "");

  const [receiverName, setReceiverName] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [receiverCity, setReceiverCity] = useState("");

  const handleOpenPdfModal = (entry) => {
    const c = contacts.find(
      (contact) => contact.name.toLowerCase() === (entry.clientOrProvider || "").toLowerCase()
    );

    setSelectedPdfEntry(entry);
    setReceiverName(entry.clientOrProvider || "");
    setReceiverEmail(c ? c.email : "");
    setReceiverPhone(c ? c.phone : "");
    setReceiverAddress(c ? c.address : "");
    setReceiverCity(c ? c.city : "");
    
    if (!issuerEmail && userEmail) {
      setIssuerEmail(userEmail);
    }
  };

  const handleGeneratePdfDoc = (entry) => {
    try {
      const doc = new jsPDF();
      const primaryColor = [45, 106, 79]; // #2d6a4f
      const textColor = [26, 26, 46];    // #1a1a2e
      const lightGrey = [241, 245, 249];  // #f1f5f9
      const darkGrey = [100, 116, 139];   // #64748b

      // Header Green Accent Bar
      doc.setFillColor(...primaryColor);
      doc.rect(0, 0, 210, 8, "F");

      // Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.setTextColor(...primaryColor);
      doc.text("DOCUMENTO DE ALBARÁN", 14, 25);

      // Metadata Box
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(...darkGrey);
      doc.text(`Fecha: ${new Date(entry.date).toLocaleDateString("es-ES")}`, 140, 20);
      doc.text(`Nº Asiento: FT-${entry.id.substring(0, 6).toUpperCase()}`, 140, 25);
      doc.text("Tipo: Albarán", 140, 30);

      // Divider
      doc.setDrawColor(226, 232, 240);
      doc.line(14, 35, 196, 35);

      // Two Column Layout
      // Emisor Column (Left)
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(...primaryColor);
      doc.text("DATOS DEL EMISOR", 14, 45);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(...textColor);
      let y = 52;
      doc.text(`Nombre: ${issuerName || "No especificado"}`, 14, y);
      if (issuerCIF) doc.text(`CIF/NIF: ${issuerCIF}`, 14, y += 6);
      if (issuerAddress) doc.text(`Dirección: ${issuerAddress}`, 14, y += 6);
      if (issuerEmail) doc.text(`Email: ${issuerEmail}`, 14, y += 6);

      // Receptor Column (Right)
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(...primaryColor);
      doc.text("DATOS DEL RECEPTOR", 110, 45);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(...textColor);
      y = 52;
      doc.text(`Nombre: ${receiverName || entry.clientOrProvider || "No especificado"}`, 110, y);
      if (receiverPhone) doc.text(`Teléfono: ${receiverPhone}`, 110, y += 6);
      if (receiverAddress) doc.text(`Dirección: ${receiverAddress}`, 110, y += 6);
      if (receiverCity) doc.text(`Ciudad: ${receiverCity}`, 110, y += 6);
      if (receiverEmail) doc.text(`Email: ${receiverEmail}`, 110, y += 6);

      // Table Header
      y = Math.max(y, 85) + 10;
      doc.setFillColor(...primaryColor);
      doc.rect(14, y, 182, 8, "F");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(255, 255, 255);
      doc.text("DESCRIPCIÓN / CONCEPTO", 18, y + 5.5);
      doc.text("BASE", 90, y + 5.5);
      doc.text("IVA", 120, y + 5.5);
      if (entry.type === "income") {
        doc.text("IRPF", 145, y + 5.5);
      }
      doc.text("TOTAL", 175, y + 5.5);

      // Table Row
      const listToRender = (entry.conceptsList && entry.conceptsList.length > 0)
        ? entry.conceptsList
        : [{ id: 1, name: entry.concept, amount: entry.amount }];

      listToRender.forEach((item, index) => {
        const rowY = y + 8 + (index * 10);
        // Zebra striping
        if (index % 2 === 0) {
          doc.setFillColor(...lightGrey);
        } else {
          doc.setFillColor(255, 255, 255);
        }
        doc.rect(14, rowY, 182, 10, "F");

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(...textColor);

        const nameText = item.name.length > 35 ? item.name.substring(0, 32) + "..." : item.name;
        const itemAmount = parseFloat(item.amount) || 0;
        
        // Proportional taxes
        const lineVat = parseFloat(((itemAmount * entry.vatRate) / 100).toFixed(2));
        const lineIrpf = entry.type === "income" ? parseFloat(((itemAmount * entry.irpfRate) / 100).toFixed(2)) : 0;
        const lineTotal = entry.type === "income" ? (itemAmount + lineVat - lineIrpf) : (itemAmount + lineVat);

        doc.text(nameText, 18, rowY + 6.5);
        doc.text(fmtMoney(itemAmount), 90, rowY + 6.5);
        doc.text(`${entry.vatRate}% (${fmtMoney(lineVat)})`, 120, rowY + 6.5);
        if (entry.type === "income") {
          doc.text(`${entry.irpfRate}% (-${fmtMoney(lineIrpf)})`, 145, rowY + 6.5);
        }
        doc.text(fmtMoney(lineTotal), 175, rowY + 6.5);
      });

      // Adjust y position to end of table
      y += 8 + (listToRender.length * 10);

      // Summary Box
      y += 10;
      doc.setDrawColor(...primaryColor);
      doc.setLineWidth(0.5);
      doc.line(120, y, 196, y);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("Subtotal (Base Imponible):", 120, y + 8);
      doc.text(fmtMoney(entry.amount), 170, y + 8);

      doc.text(`IVA (${entry.vatRate}%):`, 120, y + 14);
      doc.text(fmtMoney(entry.vatAmount), 170, y + 14);

      if (entry.type === "income" && entry.irpfRate > 0) {
        doc.text(`IRPF (-${entry.irpfRate}%):`, 120, y + 20);
        doc.text(`-${fmtMoney(entry.irpfAmount)}`, 170, y + 20);
        y += 6;
      }

      doc.setFillColor(...primaryColor);
      doc.rect(120, y + 17, 76, 10, "F");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(255, 255, 255);
      doc.text("TOTAL DOCUMENTO:", 124, y + 23.5);
      doc.text(fmtMoney(entry.total), 168, y + 23.5);

      // Footer
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(...darkGrey);
      doc.text("Documento generado automáticamente con Toolbox AI. Gracias por su confianza.", 14, 280);

      return doc;
    } catch (err) {
      console.error("Error generating PDF:", err);
      return null;
    }
  };

  const downloadPdf = (entry) => {
    const doc = handleGeneratePdfDoc(entry);
    if (doc) {
      doc.save(`albaran-${entry.concept.toLowerCase().replace(/\s+/g, "_")}.pdf`);
    }
  };

  const sendEmail = (entry) => {
    if (!receiverEmail) return;
    const subject = encodeURIComponent(`Albarán de entrega - ${entry.concept}`);
    const body = encodeURIComponent(
      `Hola ${receiverName || entry.clientOrProvider || ""},\n\n` +
      `Le adjuntamos el albarán/documento correspondiente al asiento de contabilidad: "${entry.concept}" por un importe total de ${fmtMoney(entry.total)}.\n\n` +
      `Por favor, recuerde descargar el PDF del albarán generado en la aplicación e incorporarlo a este correo como adjunto.\n\n` +
      `Detalles del asiento:\n` +
      `- Concepto: ${entry.concept}\n` +
      `- Fecha: ${new Date(entry.date).toLocaleDateString("es-ES")}\n` +
      `- Importe: ${fmtMoney(entry.total)}\n\n` +
      `Un saludo,\n` +
      `${issuerName}\n` +
      `${issuerEmail}`
    );
    window.open(`mailto:${receiverEmail}?subject=${subject}&body=${body}`);
  };

  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = useMemo(() => {
    const query = (form.clientOrProvider || "").trim().toLowerCase();
    if (!query) return contacts.slice(0, 10);
    return contacts.filter((c) => c.name.toLowerCase().includes(query));
  }, [contacts, form.clientOrProvider]);

  const set = (f, v) => setForm((prev) => ({ ...prev, [f]: v }));

  const addConceptField = () => {
    if (form.conceptsList.length >= 5) return;
    setForm((prev) => ({
      ...prev,
      conceptsList: [...prev.conceptsList, { id: Date.now(), name: "", amount: "" }],
    }));
  };

  const removeConceptField = (id) => {
    if (form.conceptsList.length <= 1) return;
    setForm((prev) => ({
      ...prev,
      conceptsList: prev.conceptsList.filter((item) => item.id !== id),
    }));
  };

  const updateConceptField = (id, field, value) => {
    setForm((prev) => ({
      ...prev,
      conceptsList: prev.conceptsList.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validConcepts = form.conceptsList.filter((c) => c.name.trim() !== "");
    if (validConcepts.length === 0) return;

    const totalBaseAmount = validConcepts.reduce(
      (sum, item) => sum + (parseFloat(item.amount) || 0),
      0
    );
    if (totalBaseAmount <= 0) return;

    const concatenatedConcept = validConcepts.map((item) => item.name.trim()).join(" + ");

    onAddEntry({
      type: form.type,
      concept: concatenatedConcept,
      clientOrProvider: form.clientOrProvider.trim(),
      amount: totalBaseAmount,
      vatRate: parseInt(form.vatRate) || 0,
      irpfRate: form.type === "income" ? parseInt(form.irpfRate) || 0 : 0,
      date: form.date,
      conceptsList: validConcepts,
    });

    setForm({
      ...EMPTY_FORM,
      type: form.type,
      date: new Date().toISOString().split("T")[0],
    });
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

          {/* Dynamic concepts list (up to 5) */}
          <div className="concepts-list-container">
            <span className="reminder-label" style={{ display: 'block', textAlign: 'left', marginBottom: '8px' }}>
              Conceptos y Bases Imponibles (Hasta 5):
            </span>
            {form.conceptsList.map((item, index) => (
              <div key={item.id} className="concept-row fade-in">
                <input
                  className="cf-input concept-name-input"
                  type="text"
                  placeholder={`Concepto #${index + 1} *`}
                  value={item.name}
                  onChange={(e) => updateConceptField(item.id, "name", e.target.value)}
                  required={index === 0}
                  maxLength={100}
                  style={{ flex: 2 }}
                />
                <input
                  className="cf-input concept-amount-input"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Base (€) *"
                  value={item.amount}
                  onChange={(e) => updateConceptField(item.id, "amount", e.target.value)}
                  required={index === 0}
                  style={{ flex: 1 }}
                />
                <div className="concept-row-actions">
                  {index === form.conceptsList.length - 1 && form.conceptsList.length < 5 && (
                    <button
                      type="button"
                      className="concept-row-btn add"
                      onClick={addConceptField}
                      title="Añadir concepto (+)"
                    >
                      ➕
                    </button>
                  )}
                  {form.conceptsList.length > 1 && (
                    <button
                      type="button"
                      className="concept-row-btn remove"
                      onClick={() => removeConceptField(item.id)}
                      title="Eliminar concepto (-)"
                    >
                      ❌
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            {/* Show dynamic sum */}
            <div className="concepts-total-badge">
              Total Base Imponible: <strong>{fmtMoney(form.conceptsList.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0))}</strong>
            </div>
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
                <div className="finance-item-actions">
                  <button
                    className="finance-pdf-btn"
                    onClick={() => handleOpenPdfModal(e)}
                    title="Crear Albarán PDF"
                  >
                    📄 PDF
                  </button>
                  <button
                    className="note-delete-btn"
                    onClick={() => onRemoveEntry(e.id)}
                    title="Eliminar asiento"
                    style={{ fontSize: 13 }}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {atLimit && (
        <p className="reminders-limit">Máximo {maxEntries} asientos permitidos.</p>
      )}

      {/* ── PDF Albarán Options Modal ── */}
      {selectedPdfEntry && (
        <div className="pdf-modal-overlay fade-in">
          <div className="pdf-modal-card">
            <div className="pdf-modal-header">
              <h4>📄 Configurar Albarán PDF</h4>
              <button className="pdf-modal-close" onClick={() => setSelectedPdfEntry(null)}>✕</button>
            </div>
            
            <div className="pdf-modal-body">
              <div className="pdf-modal-section">
                <h5>🏢 Datos del Emisor (Tus Datos)</h5>
                <div className="pdf-modal-grid">
                  <div className="form-group">
                    <label>Nombre / Razón Social:</label>
                    <input
                      type="text"
                      className="cf-input"
                      value={issuerName}
                      onChange={(e) => setIssuerName(e.target.value)}
                      placeholder="Ej: Juan Pérez S.L."
                    />
                  </div>
                  <div className="form-group">
                    <label>CIF / NIF / DNI:</label>
                    <input
                      type="text"
                      className="cf-input"
                      value={issuerCIF}
                      onChange={(e) => setIssuerCIF(e.target.value)}
                      placeholder="Ej: B12345678"
                    />
                  </div>
                  <div className="form-group">
                    <label>Dirección:</label>
                    <input
                      type="text"
                      className="cf-input"
                      value={issuerAddress}
                      onChange={(e) => setIssuerAddress(e.target.value)}
                      placeholder="Ej: Av. de la Constitución 14"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email de contacto:</label>
                    <input
                      type="email"
                      className="cf-input"
                      value={issuerEmail}
                      onChange={(e) => setIssuerEmail(e.target.value)}
                      placeholder="Ej: contacto@miempresa.com"
                    />
                  </div>
                </div>
              </div>

              <div className="pdf-modal-section">
                <h5>👤 Datos del Receptor (Contacto)</h5>
                <div className="pdf-modal-grid">
                  <div className="form-group">
                    <label>Nombre Receptor:</label>
                    <input
                      type="text"
                      className="cf-input"
                      value={receiverName}
                      onChange={(e) => setReceiverName(e.target.value)}
                      placeholder="Ej: Cliente ACME"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Receptor:</label>
                    <input
                      type="email"
                      className="cf-input"
                      value={receiverEmail}
                      onChange={(e) => setReceiverEmail(e.target.value)}
                      placeholder="Añade email para poder enviar por correo"
                    />
                  </div>
                  <div className="form-group">
                    <label>Teléfono:</label>
                    <input
                      type="tel"
                      className="cf-input"
                      value={receiverPhone}
                      onChange={(e) => setReceiverPhone(e.target.value)}
                      placeholder="Ej: +34 600 000 000"
                    />
                  </div>
                  <div className="form-group">
                    <label>Dirección:</label>
                    <input
                      type="text"
                      className="cf-input"
                      value={receiverAddress}
                      onChange={(e) => setReceiverAddress(e.target.value)}
                      placeholder="Ej: Calle Gran Vía 123"
                    />
                  </div>
                  <div className="form-group">
                    <label>Ciudad:</label>
                    <input
                      type="text"
                      className="cf-input"
                      value={receiverCity}
                      onChange={(e) => setReceiverCity(e.target.value)}
                      placeholder="Ej: Madrid"
                    />
                  </div>
                </div>
              </div>

              <div className="pdf-modal-preview">
                <h5>💰 Resumen de Conceptos</h5>
                <div className="preview-row">
                  <span>Concepto:</span>
                  <strong>{selectedPdfEntry.concept}</strong>
                </div>
                <div className="preview-row">
                  <span>Base Imponible:</span>
                  <span>{fmtMoney(selectedPdfEntry.amount)}</span>
                </div>
                <div className="preview-row">
                  <span>IVA ({selectedPdfEntry.vatRate}%):</span>
                  <span>{fmtMoney(selectedPdfEntry.vatAmount)}</span>
                </div>
                {selectedPdfEntry.type === "income" && selectedPdfEntry.irpfRate > 0 && (
                  <div className="preview-row">
                    <span>IRPF (-{selectedPdfEntry.irpfRate}%):</span>
                    <span className="negative">-{fmtMoney(selectedPdfEntry.irpfAmount)}</span>
                  </div>
                )}
                <div className="preview-row total">
                  <span>TOTAL DOCUMENTO:</span>
                  <strong>{fmtMoney(selectedPdfEntry.total)}</strong>
                </div>
              </div>
            </div>

            <div className="pdf-modal-actions">
              <button className="pdf-action-btn cancel" onClick={() => setSelectedPdfEntry(null)}>
                Cerrar
              </button>
              
              <button className="pdf-action-btn download" onClick={() => downloadPdf(selectedPdfEntry)}>
                📥 Descargar Albarán
              </button>
              
              <button 
                className="pdf-action-btn send" 
                onClick={() => sendEmail(selectedPdfEntry)}
                disabled={!receiverEmail}
                title={receiverEmail ? "Enviar al email del contacto" : "El contacto no tiene email registrado"}
              >
                📧 Enviar al Contacto
              </button>
            </div>
            {!receiverEmail && (
              <p className="pdf-modal-note">
                💡 <strong>Consejo:</strong> Si rellenas el campo de email del receptor, podrás utilizar la acción de envío por correo directamente.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
