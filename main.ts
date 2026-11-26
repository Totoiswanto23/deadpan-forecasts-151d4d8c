// Deadpan Forecasts for Cities That Do Not Exist
// One deadpan weather forecast for the fictional city of Quibberton.
// Node 22+, standard library only. Deterministic, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The forecast is assembled from fixed literal parts below, so the whole
// entry is written out here, in this file, by hand.
const CITY = "Quibberton";

// Fixed forecast fragments. Each one is a plain literal; nothing here is
// fetched, randomised, or computed from the clock.
const OPENING = `Tonight in ${CITY}: `;
const RAIN = "a 70% chance of sideways rain, ";
const WIND = "gusts to 42 mph, ";
const UMBRELLA = "and one umbrella still lodged in the mayor's chimney since Tuesday.";

// Join the fragments into the single forecast entry.
function buildEntry(): string {
  return OPENING + RAIN + WIND + UMBRELLA;
}

// Guards: the entry must be one non-blank line of 1-160 characters.
function validateEntry(entry: string): void {
  if (entry.length < 1 || entry.length > 160) {
    throw new Error(`entry must be 1-160 characters, got ${entry.length}`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  const entry = buildEntry();
  validateEntry(entry);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
}

main();
