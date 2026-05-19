import React from "react";

const DASHBOARD_ITEMS = [
  { key: "time", label: "Control de Horas", icon: "⏱️", desc: "Monitorea el tiempo dedicado a tus proyectos y calcula tus ingresos al instante." },
  { key: "finance", label: "Contabilidad", icon: "💰", desc: "Lleva el registro de tus facturas, gastos y previsión de IVA trimestral." },
  { key: "tasks", label: "Tareas", icon: "📋", desc: "Gestiona tu flujo de trabajo diario con prioridades y fechas límite." },
  { key: "notes", label: "Notas Rápidas", icon: "📝", desc: "Apunta ideas, tareas pendientes o datos breves en pósits de colores." },
  { key: "reminders", label: "Recordatorios", icon: "🔔", desc: "Programa alertas sonoras y notificaciones en segundo plano para tus citas." },
  { key: "contacts", label: "Contactos", icon: "👥", desc: "Organiza tu cartera de clientes, proveedores y colaboradores." },
  { key: "converter", label: "Conversor", icon: "🔄", desc: "Convierte divisas y unidades de forma rápida." },
  { key: "favorites", label: "Enlaces Favoritos", icon: "🔗", desc: "Accede con un clic a tus páginas web y portales más utilizados." },
  { key: "professionals", label: "Profesionales", icon: "🏢", desc: "Directorio de empresas recomendadas y colaboradores de Toolbox." },
  { key: "entertainment", label: "Zona Relax", icon: "🎮", desc: "Tómate un pequeño descanso para despejar la mente antes de continuar." },
];

export default function Dashboard({ userEmail, onSelectTab }) {
  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "¡Buenos días!";
    if (hour < 20) return "¡Buenas tardes!";
    return "¡Buenas noches!";
  };

  const name = userEmail ? userEmail.split("@")[0] : "autónomo";
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="dashboard-container fade-in">
      <div className="dashboard-hero">
        <h2>{getGreeting()}, {formattedName} 💼</h2>
        <p className="dashboard-subtitle">
          Bienvenido a tu espacio de trabajo digital. ¿Con qué herramienta quieres trabajar hoy?
        </p>
      </div>

      <div className="dashboard-grid">
        {DASHBOARD_ITEMS.map((item) => (
          <button
            key={item.key}
            className="dashboard-card"
            onClick={() => onSelectTab(item.key)}
          >
            <div className="dashboard-card-icon">{item.icon}</div>
            <div className="dashboard-card-body">
              <h4 className="dashboard-card-title">{item.label}</h4>
              <p className="dashboard-card-desc">{item.desc}</p>
            </div>
            <div className="dashboard-card-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
