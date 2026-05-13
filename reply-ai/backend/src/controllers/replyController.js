import { generateReply } from "../services/aiService.js";

export async function generateReplyHandler(req, res) {
  try {
    const { message, mode } = req.body;
    if (!message || !mode) {
      return res.status(400).json({ error: "message and mode are required" });
    }
    const reply = await generateReply(message, mode);
    res.json({ reply });
  } catch (error) {
    console.error("Generate error:", error);
    res.status(500).json({ error: "Failed to generate reply" });
  }
}
