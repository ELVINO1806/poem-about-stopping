
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM_LINES: string[] = [
  "The desk was still awake at midnight —",
  "cursor blinking, queue still full, fan",
  "humming its small white song. His hand",
  "stayed on the key one breath more, then",
  "lifted. Nothing broke. Nothing stopped",
  "but him. The room settled like a river",
  "clearing when the stones stop turning.",
];

const ENTRY_TEXT: string = [...POEM_LINES].join("\n").concat("\n");

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
}

main();
