require("dotenv").config();
const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const { YoutubeTranscript } = require("youtube-transcript");
const { OpenAI } = require("openai");

const app = express();
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Multer config para uploads
const upload = multer({ storage: multer.memoryStorage() });

// Função para gerar resumo e questões
async function gerarResumoEQuestoes(conteudo) {
    const prompt = `
  Você é um assistente inteligente. Com base no conteúdo a seguir:
  
  "${conteudo}"
  
  1. Gere um resumo claro muito detalhado do conteúdo.
  2. Em seguida, crie uma lista com 10 questões relacionadas ao conteúdo com alternativas A, B, C e D. Foque em pontos importantes ou que estimulem o pensamento crítico.
  
  Formato da resposta:
  Resumo: ...
  Questões:
  1. ...
  2. ...
  ...
  `;
  
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });
  
    const content = completion.choices[0].message.content;
  
    // 🔍 Separando resumo e questões
    const resumoMatch = content.match(/Resumo:\s*([\s\S]*?)\n\s*Questões:/i);
    const questoesMatch = content.match(/Questões:\s*([\s\S]*)/i);
  
    const resumo = resumoMatch ? resumoMatch[1].trim() : "";
    const questoes = questoesMatch ? questoesMatch[1].trim().split(/\n\d+\.\s+/).filter(Boolean) : [];
  
    return { resumo, questoes };
  }
  

// Rota para analisar vídeo do YouTube
app.post("/analyze", async (req, res) => {
  const { youtubeUrl } = req.body;

  if (!youtubeUrl) {
    return res.status(400).json({ error: "youtubeUrl is required" });
  }

  try {
    const videoId = new URL(youtubeUrl).searchParams.get("v");
    if (!videoId) throw new Error("Invalid YouTube URL");

    const transcriptArray = await YoutubeTranscript.fetchTranscript(videoId);
    const transcript = transcriptArray.map(t => t.text).join(" ");

    const { resumo, questoes } = await gerarResumoEQuestoes(transcript);
    res.json({ resumo, questoes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao processar o vídeo." });
  }
});

// 🆕 Rota para analisar PDF
app.post("/analyze-pdf", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Arquivo PDF é obrigatório" });
  }

  try {
    const data = await pdfParse(req.file.buffer);
    const texto = data.text;

    const { resumo, questoes } = await gerarResumoEQuestoes(texto);
    res.json({ resumo, questoes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao processar o PDF." });
  }
});

app.listen(3003, () => {
  console.log("API rodando em http://localhost:3003");
});
