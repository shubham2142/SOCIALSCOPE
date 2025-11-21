const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  fileName: String,
  text: String,
  suggestions: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Upload", uploadSchema);
