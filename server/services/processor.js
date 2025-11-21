const fs = require("fs");
const Tesseract = require("tesseract.js");

// ESM-style import for pdfjs-dist (works without worker)
const pdfjsLib = require("pdfjs-dist");

// Disable worker (IMPORTANT)
pdfjsLib.GlobalWorkerOptions.workerSrc = null;

async function extractPDFText(filePath) {
  const data = new Uint8Array(fs.readFileSync(filePath));

  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;

  let extractedText = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map((item) => item.str).join(" ");
    extractedText += strings + "\n";
  }

  return extractedText;
}

async function processFile(file) {
  const ext = file.originalname.split(".").pop().toLowerCase();

  try {
    if (ext === "pdf") {
      return await extractPDFText(file.path);
    }

    // OCR section
    const ocr = await Tesseract.recognize(file.path, "eng");
    return ocr.data.text;

  } catch (err) {
    console.log("PROCESSOR ERROR:", err);
    throw err;
  }
}

module.exports = { processFile };
