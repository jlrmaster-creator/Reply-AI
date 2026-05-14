import React, { useState } from "react";

export default function Favorites({ favorites, error, onAdd, onRemove }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name: name.trim(), url: url.trim(), description: description.trim() });
    setName("");
    setUrl("");
    setDescription("");
    setShowForm(false);
  };

  const sorted = [...favorites].sort((a, b) => a.name.localeCompare(b.name));

  async function shareFav(f) {
    const text = `${f.name}${f.url ? "\n" + f.url : ""}${f.description ? "\n" + f.description : ""}`;
    if (navigator.share) {
      try { await navigator.share({ title: f.name, text }); return; } catch {}
    }
    try { await navigator.clipboard.writeText(text); } catch {}
  }

  return (
    <div className="favorites">
      {error && <p className="error">{error}</p>}

      <div className="favorites-header">
        <h3>Favoritos {favorites.length > 0 && <span className="count-badge">{favorites.length}</span>}</h3>
        <button className="add-fav-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "✕ Cerrar" : "+ Añadir favorito"}
        </button>
      </div>

      {showForm && (
        <form className="fav-form fade-in" onSubmit={handleSubmit}>
          <input className="cf-input" type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
          <input className="cf-input" type="url" placeholder="URL (https://...)" value={url} onChange={(e) => setUrl(e.target.value)} />
          <input className="cf-input" type="text" placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button className="generate-btn" type="submit">Guardar</button>
        </form>
      )}

      {sorted.length === 0 && !showForm && (
        <p className="favorites-empty">No has añadido ningún favorito todavía.</p>
      )}

      <div className="favorites-list">
        {sorted.map((f) => (
          <div key={f.id} className="fav-item fade-in">
            <div className="fav-item-info">
              <a className="fav-item-name" href={f.url} target="_blank" rel="noopener noreferrer">{f.name}</a>
              {f.description && <span className="fav-item-desc">{f.description}</span>}
              {f.url && <span className="fav-item-url">{f.url}</span>}
            </div>
            <div className="fav-item-actions">
              <button className="fav-action-btn" onClick={() => shareFav(f)} title="Compartir">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </button>
              <button className="fav-item-delete" onClick={() => onRemove(f.id)} title="Eliminar">✕</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
