const API_BASE = "/api";

export async function generateReply(message, mode) {
  const res = await fetch(`${API_BASE}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, mode }),
  });
  if (!res.ok) throw new Error("Error generating reply");
  return res.json();
}
