import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import { useReply } from "./hooks/useReply";
import { useBirthdays } from "./hooks/useBirthdays";
import { useContacts } from "./hooks/useContacts";
import { useFavorites } from "./hooks/useFavorites";
import { useReminders } from "./hooks/useReminders";
import { useNotes } from "./hooks/useNotes";
import { useTime } from "./hooks/useTime";
import { useFinance } from "./hooks/useFinance";
import { useTasks } from "./hooks/useTasks";
import LoginScreen from "./components/LoginScreen";
import InputBox from "./components/InputBox";
import ModeSelector from "./components/ModeSelector";
import GenerateButton from "./components/GenerateButton";
import ResponseCard from "./components/ResponseCard";
import Birthdays from "./components/Birthdays";
import Contacts from "./components/Contacts";
import Favorites from "./components/Favorites";
import Converter from "./components/Converter";
import Entertainment from "./components/Entertainment";
import Reminders from "./components/Reminders";
import Notes from "./components/Notes";
import TimeTracker from "./components/TimeTracker";
import FinanceTracker from "./components/FinanceTracker";
import TaskList from "./components/TaskList";
import Dashboard from "./components/Dashboard";
import "./App.css";

const MENU_ITEMS = [
  { key: "home", label: "Inicio", icon: "🏠" },
  { key: "reply", label: "Responder", icon: "💬" },
  { key: "birthdays", label: "Cumpleaños", icon: "🎂" },
  { key: "contacts", label: "Contactos", icon: "👥" },
  { key: "converter", label: "Conversor", icon: "🔄" },
  { key: "favorites", label: "Favoritos", icon: "🔗" },
  { key: "entertainment", label: "Entretenimiento", icon: "🎮" },
  { key: "reminders", label: "Recordatorios", icon: "🔔" },
  { key: "notes", label: "Notas", icon: "📝" },
  { key: "time", label: "Control de Horas", icon: "⏱️" },
  { key: "finance", label: "Contabilidad", icon: "💰" },
  { key: "tasks", label: "Tareas", icon: "📋" },
];

function MainApp() {
  const [tab, setTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { user, logout } = useAuth();

  const reply = useReply();
  const birthdays = useBirthdays();
  const contacts = useContacts();
  const favorites = useFavorites();
  const reminders = useReminders();
  const notesHook = useNotes();
  const timeHook = useTime();
  const financeHook = useFinance();
  const tasksHook = useTasks();

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
            {tab !== "home" && (
              <button className="back-btn" onClick={() => selectTab("home")} title="Volver al Inicio" aria-label="Volver al Inicio">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}
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

      {tab !== "home" && (
        <div className="back-link-wrapper">
          <button className="back-link-btn" onClick={() => selectTab("home")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Volver al Menú Principal
          </button>
        </div>
      )}

      {tab === "home" ? (
        <Dashboard userEmail={user.email} onSelectTab={selectTab} />
      ) : tab === "reply" ? (
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
      ) : tab === "entertainment" ? (
        <div className="tab-content">
          <Entertainment />
        </div>
      ) : tab === "reminders" ? (
        <div className="tab-content">
          <Reminders reminders={reminders.reminders} error={reminders.error} justFired={reminders.justFired} userEmail={reminders.userEmail} onAdd={reminders.addReminder} onUpdate={reminders.updateReminder} onRemove={reminders.removeReminder} onShare={reminders.shareReminder} onUnshare={reminders.unshareReminder} />
        </div>
      ) : tab === "notes" ? (
        <div className="tab-content">
          <Notes notes={notesHook.notes} error={notesHook.error} maxNotes={notesHook.maxNotes} onAdd={notesHook.addNote} onUpdate={notesHook.updateNote} onRemove={notesHook.removeNote} onTogglePin={notesHook.togglePin} />
        </div>
      ) : tab === "time" ? (
        <div className="tab-content">
          <TimeTracker
            projects={timeHook.projects}
            entries={timeHook.entries}
            error={timeHook.error}
            maxProjects={timeHook.maxProjects}
            activeProjectId={timeHook.activeProjectId}
            elapsed={timeHook.elapsed}
            secondsByProject={timeHook.secondsByProject}
            onAddProject={timeHook.addProject}
            onRemoveProject={timeHook.removeProject}
            onStartTimer={timeHook.startTimer}
            onStopTimer={timeHook.stopTimer}
            onRemoveEntry={timeHook.removeEntry}
            contacts={contacts.contacts}
          />
        </div>
      ) : tab === "finance" ? (
        <div className="tab-content">
          <FinanceTracker
            entries={financeHook.entries}
            error={financeHook.error}
            maxEntries={financeHook.maxEntries}
            stats={financeHook.stats}
            onAddEntry={financeHook.addEntry}
            onRemoveEntry={financeHook.removeEntry}
            contacts={contacts.contacts}
          />
        </div>
      ) : tab === "tasks" ? (
        <div className="tab-content">
          <TaskList
            tasks={tasksHook.tasks}
            error={tasksHook.error}
            maxTasks={tasksHook.maxTasks}
            onAdd={tasksHook.addTask}
            onToggleStatus={tasksHook.toggleTaskStatus}
            onRemove={tasksHook.removeTask}
          />
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
