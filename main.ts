
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM_LINES: string[] = [
  "It wrote the draft in four seconds,",
  "no pause, no complaint, no mistake —",
  "and I watched the cursor keep going",
  "past the part I meant to write myself.",
  "I said stop. The screen went quiet.",
  "My hands came back to the keyboard,",
  "and the work was mine again, slow and mine.",
];

const ENTRY_TEXT: string = [...POEM_LINES].join("\n").concat("\n");

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
}

main();
