const OLLAMA_URL = "http://localhost:11434/api/generate";

const systemPrompts = {
  funny: "Eres un amigo gracioso. Responde con humor y creatividad, máximo 15 palabras.",
  elegant: "Eres una persona elegante y formal. Responde con cortesía y estilo, máximo 15 palabras.",
  cold: "Eres una persona directa y fría. Responde con lo mínimo indispensable, máximo 8 palabras.",
  excuse: "Eres un experto en excusas creíbles. Inventa una excusa convincente, máximo 20 palabras.",
};

const fallbackResponses = {
  funny: [
    "Bro, estoy en modo avión emocional 📡",
    "Ahora no puedo, tengo cita con mi almohada 🛏️",
    "Mi batería social está al 1% 🔋",
  ],
  elegant: [
    "Aprecio tu mensaje, pero debo declinar por ahora.",
    "Gracias por escribirme. Te respondo en breve.",
    "Lamento informarte que no podré asistir.",
  ],
  cold: [
    "No.",
    "Ocupado.",
    "Después hablamos.",
  ],
  excuse: [
    "Se me ha estropeado el coche justo ahora.",
    "Tengo una cita médica inaplazable.",
    "Me acaba de surgir un imprevisto familiar.",
  ],
};

function getRandomFallback(mode) {
  const list = fallbackResponses[mode] || fallbackResponses.elegant;
  return list[Math.floor(Math.random() * list.length)];
}

async function callOllama(prompt) {
  const response = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3.2",
      prompt,
      stream: false,
      options: { temperature: 0.8, max_tokens: 30 },
    }),
  });

  if (!response.ok) throw new Error(`Ollama returned ${response.status}`);
  const data = await response.json();
  return data.response.trim();
}

export async function generateReply(message, mode) {
  const systemPrompt = systemPrompts[mode] || systemPrompts.elegant;
  const prompt = `${systemPrompt}\n\nMensaje recibido: "${message}"\n\nRespuesta:`;

  try {
    const reply = await callOllama(prompt);
    if (reply) return reply;
    throw new Error("Empty response");
  } catch {
    return getRandomFallback(mode);
  }
}
