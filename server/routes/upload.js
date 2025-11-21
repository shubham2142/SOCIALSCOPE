const express = require("express");
const multer = require("multer");
const { processFile } = require("../services/processor");
const { rewriteText, aiSuggestions } = require("../services/ai");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const original = await processFile(req.file);

    const rewritten = await rewriteText(original);
    const suggestions = await aiSuggestions(original);

    res.json({
      original,
      rewritten,
      suggestions
    });

  } catch (err) {
    console.log("AI ERROR:", err);
    res.status(500).json({ error: "AI failed", details: err });
  }
});

module.exports = router;
