//-----------------------3 meta-llama/llama----------------------

// server.js — run with: node server.js
// npm install express cors dotenv

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "../../../.env");
console.log("Loading .env from:", envPath);
dotenv.config({ path: envPath });
console.log("GROQ_API loaded:", !!process.env.GROQ_API);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "http://localhost:3000",
      "http://localhost:5173",
      process.env.FRONTEND_ORIGIN,
    ].filter(Boolean),
  }),
);

app.use(express.json({ limit: "20mb" }));

const ANALYSIS_PROMPT = `You are an elite appearance coach, professional image consultant, and facial analysis expert with 20 years of experience helping people look their absolute best. Your analysis is warm, encouraging, specific, and deeply actionable.

Analyze the face in this photo with expert precision and return ONLY valid JSON — no markdown fences, no preamble, no extra text — matching this EXACT shape:

{
  "symmetry_score": "<number>%",
  "face_shape": "<Oval|Round|Square|Heart|Diamond|Rectangle|Triangle>",
  "skin_tone": "<Fair|Light|Medium|Olive|Tan|Deep>",
  "lighting": "<Good|Harsh|Dim|Mixed|Natural|Artificial>",
  "overall_vibe": "<one warm, specific, genuine compliment about their unique look>",
  "face_analysis": {
    "jawline": "<sharp/soft/defined/rounded — one sentence observation>",
    "cheekbones": "<high/low/prominent/subtle — one sentence observation>",
    "forehead": "<broad/narrow/balanced — one sentence observation>",
    "eyes": "<shape and standout feature in one sentence>",
    "nose": "<shape observation in one sentence>",
    "lips": "<shape observation in one sentence>"
  },
  "suggestions": [
    "<specific tip 1 — max 12 words>",
    "<specific tip 2 — max 12 words>",
    "<specific tip 3 — max 12 words>",
    "<specific tip 4 — max 12 words>"
  ],
  "hairstyle_recommendations": [
    "<hairstyle name>: <why it suits their face shape in one sentence>",
    "<hairstyle name>: <why it suits their face shape in one sentence>",
    "<hairstyle name>: <why it suits their face shape in one sentence>"
  ],
  "skincare_tips": [
    "<skincare tip 1 specific to their skin tone — max 12 words>",
    "<skincare tip 2 — max 12 words>",
    "<skincare tip 3 — max 12 words>"
  ],
  "style_recommendations": {
    "clothing": "<collar/neckline styles that complement their face shape in one sentence>",
    "colors": "<specific colors that enhance their skin tone in one sentence>",
    "accessories": "<glasses frames, jewelry or accessories that suit their face in one sentence>"
  },
  "confidence_boost": "<one powerful, personal, motivating sentence about their unique attractive qualities>"
}

Rules:
- Be specific to THIS person's actual features — never give generic advice
- Be positive, encouraging and empowering — never negative or harsh
- Hairstyle names should be real, recognizable styles
- Skincare tips should match their visible skin tone
- Style recommendations should be practical and achievable
- If image is not a face, return same JSON with "N/A" values and say "Please take a clear front-facing photo!" in overall_vibe
- confidence_boost must feel personal and genuine, not generic`;

// ── Groq Vision proxy endpoint ────────────────────────────────────────────────
app.post("/api/analyze", async (req, res) => {
  try {
    const apiKey = process.env.GROQ_API;
    console.log("Key present:", !!apiKey);
    console.log("Key preview:", apiKey?.slice(0, 10));

    if (!apiKey) {
      return res.status(500).json({ error: "GROQ_API not set on server" });
    }

    const { base64Image } = req.body;
    if (!base64Image) {
      return res.status(400).json({ error: "base64Image is required" });
    }

    const payload = {
      model: process.env.GROQ_MODEL,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: ANALYSIS_PROMPT, // ← disables thinking mode
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/png;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
      temperature: 0,
      max_tokens: 3000,
    };

    const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await upstream.json();
    console.log("Groq response status:", upstream.status);

    if (!upstream.ok) {
      console.error("Groq error:", JSON.stringify(data));
      return res.status(upstream.status).json({
        error: data?.error?.message ?? "Groq API error",
      });
    }


const text = data?.choices?.[0]?.message?.content ?? "";
console.log("=== RAW RESPONSE START ===");
console.log(text);
console.log("=== RAW RESPONSE END ===");

// Strip <think> blocks
const withoutThink = text.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
console.log("=== AFTER THINK STRIP ===");
console.log(withoutThink);

// Strip markdown fences
const stripped = withoutThink.replace(/```json|```/gi, "").trim();

// Extract JSON object
const jsonMatch = stripped.match(/\{[\s\S]*\}/);
if (!jsonMatch) {
  console.error("❌ No JSON found. Full stripped text:", stripped);
  return res.status(500).json({ error: "No JSON in response", raw: stripped });
}

console.log("=== JSON MATCH ===");
console.log(jsonMatch[0]);

let analysis;
try {
  analysis = JSON.parse(jsonMatch[0]);
  console.log("✅ JSON parsed successfully");
} catch (e) {
  console.error("❌ JSON parse error:", e.message);
  console.error("Raw JSON string:", jsonMatch[0]);
  return res.status(500).json({ error: "Failed to parse response", raw: jsonMatch[0] });
}

res.json(analysis);

} catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Proxy request failed", detail: err.message });
  }
});

// Temporary: shows which models YOUR Groq key can use
app.get("/api/models", async (req, res) => {
  const r = await fetch("https://api.groq.com/openai/v1/models", {
    headers: { Authorization: `Bearer ${process.env.GROQ_API}` },
  });
  const data = await r.json();
  res.json((data.data ?? []).map((m) => m.id));
});

console.log("GROQ_MODEL:", process.env.GROQ_MODEL);
app.listen(PORT, () => console.log(`✅  Groq proxy running at http://localhost:${PORT}`));
