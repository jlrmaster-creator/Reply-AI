import React, { useState } from "react";

const CATEGORIES = [
  { key: "length", label: "Longitud" },
  { key: "temp", label: "Temperatura" },
  { key: "weight", label: "Peso" },
  { key: "volume", label: "Volumen" },
  { key: "currency", label: "Moneda" },
];

const UNITS = {
  length: [
    { key: "m", label: "Metro", toBase: 1 },
    { key: "km", label: "Kilómetro", toBase: 1000 },
    { key: "cm", label: "Centímetro", toBase: 0.01 },
    { key: "mm", label: "Milímetro", toBase: 0.001 },
    { key: "mi", label: "Milla", toBase: 1609.344 },
    { key: "yd", label: "Yarda", toBase: 0.9144 },
    { key: "ft", label: "Pie", toBase: 0.3048 },
    { key: "in", label: "Pulgada", toBase: 0.0254 },
  ],
  weight: [
    { key: "kg", label: "Kilogramo", toBase: 1 },
    { key: "g", label: "Gramo", toBase: 0.001 },
    { key: "mg", label: "Miligramo", toBase: 0.000001 },
    { key: "lb", label: "Libra", toBase: 0.453592 },
    { key: "oz", label: "Onza", toBase: 0.0283495 },
    { key: "t", label: "Tonelada", toBase: 1000 },
  ],
  volume: [
    { key: "l", label: "Litro", toBase: 1 },
    { key: "ml", label: "Mililitro", toBase: 0.001 },
    { key: "gal", label: "Galón", toBase: 3.78541 },
    { key: "floz", label: "Onza líquida", toBase: 0.0295735 },
    { key: "m3", label: "Metro cúbico", toBase: 1000 },
  ],
  currency: [
    { key: "eur", label: "Euro (EUR)", toBase: 1 },
    { key: "usd", label: "Dólar (USD)", toBase: 0.92 },
    { key: "gbp", label: "Libra (GBP)", toBase: 1.17 },
    { key: "jpy", label: "Yen (JPY)", toBase: 0.0061 },
    { key: "mxn", label: "Peso mexicano (MXN)", toBase: 0.045 },
    { key: "ars", label: "Peso argentino (ARS)", toBase: 0.00095 },
  ],
};

function convertTemp(value, from, to) {
  let c;
  if (from === "c") c = value;
  else if (from === "f") c = (value - 32) * 5 / 9;
  else c = value - 273.15;

  if (to === "c") return c;
  if (to === "f") return c * 9 / 5 + 32;
  return c + 273.15;
}

const TEMP_UNITS = [
  { key: "c", label: "Celsius (°C)" },
  { key: "f", label: "Fahrenheit (°F)" },
  { key: "k", label: "Kelvin (K)" },
];

function formatNum(n) {
  if (!isFinite(n)) return "—";
  const s = n.toPrecision(10);
  const parsed = parseFloat(s);
  return parsed % 1 === 0 ? parsed.toString() : parsed.toFixed(4).replace(/\.?0+$/, "");
}

export default function Converter() {
  const [cat, setCat] = useState("length");
  const [fromKey, setFromKey] = useState("");
  const [toKey, setToKey] = useState("");
  const [value, setValue] = useState("");

  const isTemp = cat === "temp";
  const unitList = isTemp ? TEMP_UNITS : UNITS[cat];

  const handleCatChange = (k) => {
    setCat(k);
    setFromKey("");
    setToKey("");
    setValue("");
  };

  const result = (() => {
    const v = parseFloat(value);
    if (isNaN(v) || !fromKey || !toKey) return null;
    if (isTemp) return formatNum(convertTemp(v, fromKey, toKey));
    const fromUnit = UNITS[cat].find((u) => u.key === fromKey);
    const toUnit = UNITS[cat].find((u) => u.key === toKey);
    if (!fromUnit || !toUnit) return null;
    return formatNum((v * fromUnit.toBase) / toUnit.toBase);
  })();

  return (
    <div className="converter">
      <div className="conv-cats">
        {CATEGORIES.map((c) => (
          <button key={c.key} className={`conv-cat ${cat === c.key ? "active" : ""}`} onClick={() => handleCatChange(c.key)}>
            {c.label}
          </button>
        ))}
      </div>

      <div className="conv-form">
        <input className="cf-input" type="number" placeholder="Valor" value={value} onChange={(e) => setValue(e.target.value)} />

        <div className="conv-row">
          <select className="cf-select" value={fromKey} onChange={(e) => setFromKey(e.target.value)}>
            <option value="">De</option>
            {unitList.map((u) => (
              <option key={u.key} value={u.key}>{u.label}</option>
            ))}
          </select>

          <span className="conv-arrow">→</span>

          <select className="cf-select" value={toKey} onChange={(e) => setToKey(e.target.value)}>
            <option value="">A</option>
            {unitList.map((u) => (
              <option key={u.key} value={u.key}>{u.label}</option>
            ))}
          </select>
        </div>

        {result !== null && (
          <div className="conv-result fade-in">
            <span className="conv-result-value">{result}</span>
            <span className="conv-result-unit">{isTemp ? TEMP_UNITS.find((u) => u.key === toKey)?.label : UNITS[cat].find((u) => u.key === toKey)?.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
