// checkContent.js
import { wordList, phraseList, safeContexts } from './badWords.js';
import { normalizeText, normalizeForObfuscation } from './normalize.js';

export function containsBadContent(text) {
  if (!text) return null;

  const normalized = normalizeText(text);
  const compactText = normalized.replace(/\s+/g, "");

  // ---------------------------------
  // SAFE CONTEXT CHECK
  // ---------------------------------
  for (const safe of safeContexts) {
    const safeNorm = normalizeForObfuscation(safe);
    const safeRegex = new RegExp(`\\b${safeNorm.split("").join("\\s*")}\\b`, "i");
    if (safeRegex.test(compactText)) {
      return { skipped: true, detected: [] }; // Safe context matched → ignore
    }
  }

  // ---------------------------------
  // DETECTION MAP (prevents duplicates)
  // ---------------------------------
  const detectedMap = new Map();

  // ---------------------------------
  // WORD CHECK
  // ---------------------------------
  for (const { word, severity } of wordList) {
    const normWord = normalizeForObfuscation(word);
    const wordRegex = new RegExp(`\\b${normWord.split("").join("\\s*")}\\b`, "i");
    if (wordRegex.test(compactText)) {
      const key = `word:${word}`;
      if (!detectedMap.has(key)) {
        detectedMap.set(key, {
          type: "word",
          value: word,
          severity,
          reason: "matches bad word"
        });
      }
    }
  }

  // ---------------------------------
  // PHRASE CHECK
  // ---------------------------------
  for (const { phrase, severity } of phraseList) {
    const normPhrase = normalizeForObfuscation(phrase);
    const phraseRegex = new RegExp(`\\b${normPhrase.split("").join("\\s*")}\\b`, "i");
    if (phraseRegex.test(compactText)) {
      const key = `phrase:${phrase}`;
      if (!detectedMap.has(key)) {
        detectedMap.set(key, {
          type: "phrase",
          value: phrase,
          severity,
          reason: "matches bad phrase"
        });
      }
    }
  }

  // ---------------------------------
  // FINAL RESULT
  // ---------------------------------
  const detected = Array.from(detectedMap.values());

  return detected.length > 0
    ? { skipped: false, detected }
    : null;
}
