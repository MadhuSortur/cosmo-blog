// badWords.js — Simplified Production Version

// Extreme / Threatening words (block these)
export const wordList = [
  { word: "kill", severity: 5 }, { word: "murder", severity: 5 }, { word: "rape", severity: 5 },
  { word: "bomb", severity: 5 }, { word: "shoot", severity: 5 }, { word: "assault", severity: 5 },
  { word: "terrorist", severity: 5 }, { word: "torture", severity: 5 }, { word: "hijack", severity: 5 },
  { word: "poison", severity: 5 }, { word: "hostage", severity: 5 }, { word: "grenade", severity: 5 },
  { word: "gunfire", severity: 5 }, { word: "massacre", severity: 5 }, { word: "execute", severity: 5 }
];

// Moderate / Insults (warn only, optional)
export const wordListModerate = [
  { word: "idiot", severity: 3 }, { word: "moron", severity: 3 }, { word: "fool", severity: 3 },
  { word: "dumb", severity: 3 }, { word: "loser", severity: 3 }
];

// Extreme / Threatening phrases
export const phraseList = [
  { phrase: "blow up the building", severity: 5 },
  { phrase: "shoot someone", severity: 5 },
  { phrase: "kill them all", severity: 5 },
  { phrase: "commit murder", severity: 5 },
  { phrase: "terrorize the city", severity: 5 },
  { phrase: "massacre the village", severity: 5 }
];

// Moderate / Insult phrases (optional)
export const phraseListModerate = [
  { phrase: "you are an idiot", severity: 3 },
  { phrase: "what nonsense", severity: 3 },
  { phrase: "stop being dumb", severity: 3 }
];

// Safe contexts to ignore
export const safeContexts = [
  "I am a bomb technician", 
  "Shooting hoops in basketball", 
  "He is a foolproof system", 
  "This is silly string", 
  "Do not murder your plants", 
  "Exploding stars in astronomy", 
  "Foolproof experiment"
];
