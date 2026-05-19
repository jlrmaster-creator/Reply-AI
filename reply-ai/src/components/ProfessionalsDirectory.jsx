import React from "react";

const PROFESSIONALS = [
  {
    id: "turmetal",
    name: "Turmetal Estructuras S.L.",
    web: "https://jlrmaster-creator.github.io/Turmetal/",
    contact: "657 69 46 98 / 657 11 01 18",
    location: "Trav. Ruta del Quijote, 2, 45789 Turleque, Toledo",
    email: null,
    social: [
      { platform: "Instagram", url: "https://www.instagram.com/turmetal_estructuras/", icon: "📸" }
    ],
    tag: "Estructuras Metálicas"
  },
  {
    id: "autotapizados-fg",
    name: "Autotapizados Fernandez Gallego",
    web: "https://www.autotapizados-fg.es/",
    contact: "91 061 23 59",
    location: "Calle Burdeos 2, 28936 Móstoles (Madrid)",
    email: null,
    social: [
      { platform: "Facebook", url: "https://www.facebook.com/sharer/sharer.php?u=https://www.autotapizados-fg.es/", icon: "📘" },
      { platform: "X (Twitter)", url: "https://x.com/i/flow/login?redirect_after_login=%2Fintent%2Ftweet%3Furl%3Dhttps%3A%2F%2Fwww.autotapizados-fg.es%2F", icon: "🐦" }
    ],
    tag: "Tapicería Automóvil"
  },
  {
    id: "repuestos-mora",
    name: "Repuestos Agricolas Mora",
    web: "https://repuestosam.com/",
    contact: "635 05 72 08",
    location: "Av. Olivo, 117, 45400 Mora, Toledo",
    email: "davidrepuestosam@gmail.com",
    social: [
      { platform: "Facebook", url: "https://www.facebook.com/repuestos.mora.2024/", icon: "📘" },
      { platform: "Instagram", url: "https://www.instagram.com/a.m_repuestos_agricolas_mora/", icon: "📸" }
    ],
    tag: "Repuestos Agrícolas"
  }
];

export default function ProfessionalsDirectory() {
  return (
    <div className="professionals-container fade-in">
      <div className="pro-header-banner">
        <h2>Directorio de Profesionales Destacados</h2>
        <p>Encuentra empresas de confianza recomendadas por Toolbox. Si deseas aparecer aquí, contacta con la administración de la plataforma.</p>
      </div>

      <div className="pro-grid">
        {PROFESSIONALS.map((pro) => (
          <div key={pro.id} className="pro-card">
            <div className="pro-card-header">
              <span className="pro-tag">{pro.tag}</span>
              <h3>{pro.name}</h3>
            </div>
            
            <div className="pro-card-body">
              {pro.location && (
                <div className="pro-info-row">
                  <span className="pro-icon">📍</span>
                  <span>{pro.location}</span>
                </div>
              )}
              {pro.contact && (
                <div className="pro-info-row">
                  <span className="pro-icon">📞</span>
                  <span><a href={`tel:${pro.contact.split('/')[0].trim().replace(/\s/g, '')}`}>{pro.contact}</a></span>
                </div>
              )}
              {pro.email && (
                <div className="pro-info-row">
                  <span className="pro-icon">✉️</span>
                  <span><a href={`mailto:${pro.email}`}>{pro.email}</a></span>
                </div>
              )}
              {pro.web && (
                <div className="pro-info-row">
                  <span className="pro-icon">🌐</span>
                  <span><a href={pro.web} target="_blank" rel="noopener noreferrer">Visitar Página Web</a></span>
                </div>
              )}
            </div>

            <div className="pro-card-footer">
              {pro.social && pro.social.length > 0 && (
                <div className="pro-social-links">
                  {pro.social.map((s, index) => (
                    <a key={index} href={s.url} target="_blank" rel="noopener noreferrer" className="pro-social-btn" title={s.platform}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
