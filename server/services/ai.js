const { GoogleGenerativeAI } = require("@google/generative-ai");

// Correct initialization (2025 Verified)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// rewrite text
async function rewriteText(text) {
  const model = genAI.getGenerativeModel({
    model: "models/gemini-2.5-flash",
  });

  const prompt = `
Rewrite this text to make it clearer, more engaging, and suitable for social media:

${text}
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

// suggestions
async function aiSuggestions(text) {
  const model = genAI.getGenerativeModel({
    model: "models/gemini-2.5-flash",
  });

  const prompt = `
Give bullet point suggestions to improve this content for social media:

${text}
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = { rewriteText, aiSuggestions };
