// Deadpan Forecasts for Cities That Do Not Exist
// make.fun bounty: u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
// Writes a single deadpan weather line (<=160 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// Node 22+, stdlib only, deterministic: no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry (filled in below).
// 138 chars. Broadcast open ("Tonight in ..."), absurd twist (sideways rain),
// two concrete numbers (70%, 42 mph), one vivid deadpan image (umbrella in the
// mayor's chimney since Tuesday). Single line, no trailing newline in the file.
const ENTRY =
  "Tonight in Quibberton: a 70% chance of sideways rain, gusts to 42 mph, and one umbrella still lodged in the mayor's chimney since Tuesday.";

// Gate guard: the sealed scorer requires UTF-8 text of 1-160 chars, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 160 || !ENTRY.trim()) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-160 non-blank`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

// Write the entry.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
