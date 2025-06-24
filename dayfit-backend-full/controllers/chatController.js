const fetch = require("node-fetch");

exports.handleGeminiChat = async (req, res) => {
  const userMessage = req.body.message;
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage }] }],
        }),
      }
    );
    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    res.json({ reply: reply || "No response" });
  } catch (error) {
    res.status(500).json({ error: "Gemini API failed" });
  }
};