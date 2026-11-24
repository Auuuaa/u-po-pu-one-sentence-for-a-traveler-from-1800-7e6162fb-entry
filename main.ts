import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Sentence for a Traveler from 1800 — make.fun entry. Writes the entry text to /entry.txt.
const entry = "Imagine every letter ever written and every book ever printed, carried in a blink along copper wires to a box on your desk that answers back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
