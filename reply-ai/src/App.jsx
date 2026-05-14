import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import { useReply } from "./hooks/useReply";
import { useBirthdays } from "./hooks/useBirthdays";
import { useContacts } from "./hooks/useContacts";
import { useFavorites } from "./hooks/useFavorites";
import LoginScreen from "./components/LoginScreen";
import InputBox from "./components/InputBox";
import ModeSelector from "./components/ModeSelector";
import GenerateButton from "./components/GenerateButton";
import ResponseCard from "./components/ResponseCard";
import Birthdays from "./components/Birthdays";
import Contacts from "./components/Contacts";
import Favorites from "./components/Favorites";
import Converter from "./components/Converter";
import "./App.css";

const MENU_ITEMS = [
  { key: "reply", label: "Responder", icon: "💬" },
  { key: "birthdays", label: "Cumpleaños", icon: "🎂" },
  { key: "contacts", label: "Contactos", icon: "👥" },
  { key: "converter", label: "Conversor", icon: "🔄" },
  { key: "favorites", label: "Favoritos", icon: "🔗" },
  { key: "entertainment", label: "Entretenimiento", icon: "🎮", url: "https://jlrmaster-creator.github.io/pepe_game/1.html" },
];

function MainApp() {
  const [tab, setTab] = useState("reply");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { user, logout } = useAuth();

  const reply = useReply();
  const birthdays = useBirthdays();
  const contacts = useContacts();
  const favorites = useFavorites();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectTab = (key) => {
    const item = MENU_ITEMS.find((m) => m.key === key);
    if (item?.url) {
      window.open(item.url, "_blank");
      setMenuOpen(false);
      return;
    }
    setTab(key);
    setMenuOpen(false);
  };

  const currentItem = MENU_ITEMS.find((m) => m.key === tab);
  const currentLabel = currentItem && !currentItem.url ? currentItem.label : "";

  return (
    <div className="container">
      <header>
        <div className="header-row">
          <div className="header-left" ref={menuRef}>
            <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            {menuOpen && (
              <div className="dropdown-menu">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.key}
                    className={`dropdown-item ${tab === item.key ? "active" : ""}`}
                    onClick={() => selectTab(item.key)}
                  >
                    <span className="dropdown-icon">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <h1>Toolbox AI</h1>
          <div className="header-user">
            <span className="header-email">{user.email}</span>
            <button className="logout-btn" onClick={logout} title="Cerrar sesión">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="current-tab-label">{currentLabel}</div>
      </header>

      {tab === "reply" ? (
        <div className="tab-content">
          <InputBox value={reply.message} onChange={(e) => reply.setMessage(e.target.value)} />
          <ModeSelector selected={reply.mode} onSelect={reply.setMode} />
          <GenerateButton onClick={reply.generate} loading={reply.loading} />
          {reply.error && <p className="error fade-in">{reply.error}</p>}
          <ResponseCard response={reply.response} mode={reply.mode} onSend={reply.sendToWhatsApp} onRegenerate={reply.generate} onMakeFunnier={reply.makeFunnier} />
          {reply.history.length > 0 && (
            <section className="history">
              <div className="history-header">
                <h3>Historial</h3>
                <button className="history-clear" onClick={reply.clearHistory}>Limpiar</button>
              </div>
              {reply.history.slice(0, 5).map((item, i) => (
                <div key={i} className="history-item fade-in">
                  <div className="history-item-header">
                    <span className="history-mode-badge">{item.mode === "funny" ? "😄" : item.mode === "elegant" ? "⭐" : item.mode === "cold" ? "❄️" : "🔑"} {item.mode}</span>
                    <span className="history-time">{new Date(item.date).toLocaleTimeString()}</span>
                  </div>
                  <p className="history-reply">{item.reply}</p>
                </div>
              ))}
            </section>
          )}
        </div>
      ) : tab === "birthdays" ? (
        <div className="tab-content">
          <Birthdays friends={birthdays.friends} todayBirthdays={birthdays.todayBirthdays} error={birthdays.error} onAdd={birthdays.addFriend} onRemove={birthdays.removeFriend} onSendGreeting={birthdays.sendGreeting} onSendReminder={birthdays.sendReminder} />
        </div>
      ) : tab === "contacts" ? (
        <div className="tab-content">
          <Contacts contacts={contacts.contacts} error={contacts.error} onAdd={contacts.addContact} onRemove={contacts.removeContact} />
        </div>
      ) : tab === "converter" ? (
        <div className="tab-content">
          <Converter />
        </div>
      ) : (
        <div className="tab-content">
          <Favorites favorites={favorites.favorites} error={favorites.error} onAdd={favorites.addFavorite} onRemove={favorites.removeFavorite} />
        </div>
      )}
    </div>
  );
}

function AppShell({ children }) {
  return (
    <div className="app-shell">
      {children}
      <footer className="app-footer">Created by: José López-Romero Moraleda &copy; 2026</footer>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-spinner" />
    </div>
  );
}

export default function App() {
  const { user, loading } = useAuth();
  if (loading) return <AppShell><LoadingScreen /></AppShell>;
  return <AppShell>{user ? <MainApp /> : <LoginScreen />}</AppShell>;
}
