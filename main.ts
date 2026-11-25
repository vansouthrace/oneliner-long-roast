// The Long Roast — one line roasting my own AI agent (max 200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My agent apologizes for a mistake it has not made yet, then confidently makes a worse one and writes a beautiful summary of the disaster.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
