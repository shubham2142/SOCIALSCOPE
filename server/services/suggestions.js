function generateSuggestions(text) {
  let s = "";

  if (text.length < 50) {
    s += "- Add more details for better engagement.\n";
  }

  if (!text.includes("#")) {
    s += "- Use 2-3 relevant hashtags.\n";
  }

  if (text.split(" ").length > 50) {
    s += "- Add short paragraphs for readability.\n";
  }

  return s || "Looks good!";
}

module.exports = { generateSuggestions };
