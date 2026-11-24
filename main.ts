import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My agent is so confident it once explained my own code back to me, got it wrong, and then asked me to rate its confidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
