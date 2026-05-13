import React from "react";

export default function InputBox({ value, onChange }) {
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      onChange({ target: { value: text } });
    } catch {}
  };

  return (
    <div className="input-box">
      <textarea
        placeholder="Pega aquí el mensaje recibido..."
        value={value}
        onChange={onChange}
        rows={4}
      />
      <button className="paste-btn" onClick={handlePaste} type="button" title="Pegar del clipboard">
        📋 Pegar
      </button>
    </div>
  );
}
