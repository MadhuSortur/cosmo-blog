// normalize.js
export function normalizeText(text) {
  if (!text) return "";

  text = text.toLowerCase();

  // Replace common leetspeak
  const leetMap = { '0':'o','1':'i','3':'e','4':'a','5':'s','7':'t','@':'a','!':'i','$':'s' };
  text = text.replace(/[013457@!$]/g, char => leetMap[char] || char);

  // Remove punctuation except spaces
  text = text.replace(/[^\w\s]/g, " ");

  // Collapse repeated letters (stuuupid → stupid)
  text = text.replace(/(\w)\1{2,}/g, "$1$1");

  // Collapse multiple spaces
  text = text.replace(/\s+/g, " ").trim();

  return text;
}

// Normalize for obfuscation detection (remove spaces)
export function normalizeForObfuscation(word) {
  return normalizeText(word).replace(/\s+/g, "");
}
