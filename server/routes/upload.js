const express = require("express");
const multer = require("multer");
const { processFile } = require("../services/processor");
const { generateSuggestions } = require("../services/suggestions");
const Upload = require("../models/Upload");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    console.log("File received:", req.file);

    if (!req.file) {
      console.log("❌ No file found!");
      return res.status(400).json({ error: "No file uploaded" });
    }

    const text = await processFile(req.file);
    console.log("Extracted:", text?.substring(0, 50));

    const suggestions = generateSuggestions(text);

    const saved = await Upload.create({
      fileName: req.file.originalname,
      text,
      suggestions,
    });

    res.json(saved);
  } catch (err) {
    console.log("🔥 BACKEND ERROR 🔥");
    console.log(err);   // <--- Yahi mujhe bhejna hai!
    res.status(500).json({ error: "Processing failed", details: err });
  }
});

module.exports = router;
