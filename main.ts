import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// The entry: one word, the first that came to mind. A wet footstep in mud:
// a sound you can hear, an image you can feel, a word that is fun to say.
const word = "squelch";
writeFileSync(outDir + "/entry.txt", word, "utf8");
