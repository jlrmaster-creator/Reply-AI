import React, { useState, useEffect } from "react";
import { getUserConfig, saveUserConfig } from "../services/userService";

export default function ConfigPanel({ user, onSaveSuccess }) {
  const [config, setConfig] = useState({
    nif: "",
    name: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    email: user ? user.email : "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    getUserConfig(user.uid)
      .then((data) => {
        if (data) {
          setConfig({
            nif: data.nif || "",
            name: data.name || "",
            address: data.address || "",
            city: data.city || "",
            province: data.province || "",
            postalCode: data.postalCode || "",
            email: data.email || user.email || "",
          });
        }
      })
      .finally(() => setLoading(false));
  }, [user]);

  const handleChange = (field, val) => {
    setConfig((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    setMessage("");
    setError("");
    try {
      await saveUserConfig(user.uid, config);
      setMessage("¡Configuración guardada correctamente! Estos datos se usarán como emisor en los PDF de Albaranes.");
      if (onSaveSuccess) onSaveSuccess(config);
    } catch (err) {
      console.error(err);
      setError("Error al guardar la configuración: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="config-panel fade-in">
      <div className="config-panel-card">
        <h3>⚙️ Configuración del Emisor</h3>
        <p className="config-panel-desc">
          Rellena tus datos profesionales para que aparezcan automáticamente como **Emisor** al generar cualquier albarán PDF en la sección de Contabilidad.
        </p>

        {message && <div className="config-success-banner fade-in">{message}</div>}
        {error && <div className="config-error-banner fade-in">{error}</div>}

        <form onSubmit={handleSubmit} className="config-form-grid">
          <div className="form-group full-width">
            <label>Nombre / Razón Social *</label>
            <input
              type="text"
              className="cf-input"
              value={config.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Ej: Juan Pérez S.L. o Mi Nombre Completo"
              required
            />
          </div>

          <div className="form-group">
            <label>NIF / CIF / DNI *</label>
            <input
              type="text"
              className="cf-input"
              value={config.nif}
              onChange={(e) => handleChange("nif", e.target.value)}
              placeholder="Ej: 12345678Z"
              required
            />
          </div>

          <div className="form-group">
            <label>Email de Contacto *</label>
            <input
              type="email"
              className="cf-input"
              value={config.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Ej: correo@empresa.com"
              required
            />
          </div>

          <div className="form-group full-width">
            <label>Dirección Comercial</label>
            <input
              type="text"
              className="cf-input"
              value={config.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="Ej: Calle Gran Vía, 45, 3ºB"
            />
          </div>

          <div className="form-group">
            <label>Población (Ciudad)</label>
            <input
              type="text"
              className="cf-input"
              value={config.city}
              onChange={(e) => handleChange("city", e.target.value)}
              placeholder="Ej: Madrid"
            />
          </div>

          <div className="form-group">
            <label>Provincia</label>
            <input
              type="text"
              className="cf-input"
              value={config.province}
              onChange={(e) => handleChange("province", e.target.value)}
              placeholder="Ej: Madrid"
            />
          </div>

          <div className="form-group">
            <label>Código Postal (CP)</label>
            <input
              type="text"
              className="cf-input"
              value={config.postalCode}
              onChange={(e) => handleChange("postalCode", e.target.value)}
              placeholder="Ej: 28013"
            />
          </div>

          <div className="form-group full-width" style={{ marginTop: "10px" }}>
            <button type="submit" className="generate-btn" style={{ marginBottom: 0 }} disabled={loading}>
              {loading ? "Guardando..." : "💾 Guardar Configuración"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
