// One Word, First Thought — entry: "squelch"
// First thought, no second-guessing: the word goes out exactly as it arrived.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "squelch";

// Gate: exactly one word, 1-24 chars, letters only, no whitespace inside.
if (!/^[A-Za-z]{1,24}$/.test(WORD)) {
  throw new Error("entry must be exactly one word of 1-24 letters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
