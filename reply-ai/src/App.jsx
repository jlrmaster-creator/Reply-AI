import React, { useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import { useReply } from "./hooks/useReply";
import { useBirthdays } from "./hooks/useBirthdays";
import { useContacts } from "./hooks/useContacts";
import LoginScreen from "./components/LoginScreen";
import InputBox from "./components/InputBox";
import ModeSelector from "./components/ModeSelector";
import GenerateButton from "./components/GenerateButton";
import ResponseCard from "./components/ResponseCard";
import Birthdays from "./components/Birthdays";
import Contacts from "./components/Contacts";
import "./App.css";

function MainApp() {
  const [tab, setTab] = useState("reply");
  const { user, logout } = useAuth();

  const reply = useReply();
  const birthdays = useBirthdays();
  const contacts = useContacts();

  return (
    <div className="container">
      <header>
        <div className="header-row">
          <h1>Reply AI 💬</h1>
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
        <div className="tabs">
          <button
            className={`tab ${tab === "reply" ? "active" : ""}`}
            onClick={() => setTab("reply")}
          >
            <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Responder
          </button>
          <button
            className={`tab ${tab === "birthdays" ? "active" : ""}`}
            onClick={() => setTab("birthdays")}
          >
            <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Cumpleaños
          </button>
          <button
            className={`tab ${tab === "contacts" ? "active" : ""}`}
            onClick={() => setTab("contacts")}
          >
            <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Contactos
          </button>
        </div>
      </header>

      {tab === "reply" ? (
        <div className="tab-content">
          <InputBox
            value={reply.message}
            onChange={(e) => reply.setMessage(e.target.value)}
          />

          <ModeSelector selected={reply.mode} onSelect={reply.setMode} />

          <GenerateButton onClick={reply.generate} loading={reply.loading} />

          {reply.error && <p className="error fade-in">{reply.error}</p>}

          <ResponseCard
            response={reply.response}
            mode={reply.mode}
            onSend={reply.sendToWhatsApp}
            onRegenerate={reply.generate}
            onMakeFunnier={reply.makeFunnier}
          />

          {reply.history.length > 0 && (
            <section className="history">
              <div className="history-header">
                <h3>Historial</h3>
                <button className="history-clear" onClick={reply.clearHistory}>
                  Limpiar
                </button>
              </div>
              {reply.history.slice(0, 5).map((item, i) => (
                <div key={i} className="history-item fade-in">
                  <div className="history-item-header">
                    <span className="history-mode-badge">
                      {item.mode === "funny" ? "😄" : item.mode === "elegant" ? "⭐" : item.mode === "cold" ? "❄️" : "🔑"} {item.mode}
                    </span>
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
        <Birthdays
          friends={birthdays.friends}
          todayBirthdays={birthdays.todayBirthdays}
          error={birthdays.error}
          onAdd={birthdays.addFriend}
          onRemove={birthdays.removeFriend}
          onSendGreeting={birthdays.sendGreeting}
          onSendReminder={birthdays.sendReminder}
        />
        </div>
      ) : (
        <div className="tab-content">
          <Contacts
            contacts={contacts.contacts}
            error={contacts.error}
            onAdd={contacts.addContact}
            onRemove={contacts.removeContact}
          />
        </div>
      )}

    </div>
  );
}

function AppShell({ children }) {
  return (
    <div className="app-shell">
      {children}
      <footer className="app-footer">
        Created by: José López-Romero Moraleda &copy; 2026
      </footer>
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

  if (loading) {
    return (
      <AppShell>
        <LoadingScreen />
      </AppShell>
    );
  }

  return <AppShell>{user ? <MainApp /> : <LoginScreen />}</AppShell>;
}
