// Letters Along Copper Wires — one sentence for a traveler from 1800, for make.fun.
// Writes the sentence to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Every word in the sentence could have been spoken in 1800.
const sentenceParts = [
  "Imagine every letter ever written and every book ever printed,",
  "carried in a blink along copper wires to a box on your desk",
  "that answers back.",
];

function run(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  const sentence = sentenceParts.join(" ");
  writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
}

run();
