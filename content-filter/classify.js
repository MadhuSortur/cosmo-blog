// classify.js
import { containsBadContent } from './checkContent.js';

export function classifyContent(text) {
  const result = containsBadContent(text);

  // No bad content
  if (!result) {
    return { level: "safe", score: 0, detected: [] };
  }

  // Safe context matched → ignore content
  if (result.skipped) {
    return { level: "safe", score: 0, detected: [] };
  }

  const detected = result.detected;

  const score = detected.reduce(
    (sum, item) => sum + item.severity,
    0
  );

  let level = "safe";
  if (score >= 15) level = "extreme";
  else if (score >= 10) level = "severe";
  else if (score >= 6) level = "mild";

  return { level, score, detected };
}
