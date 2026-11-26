import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The most honest status page line an AI agent writes while every server is down.
// Opens with the status itself, then the honest paradox: the agent is still
// online but cannot reach any server, so it cannot say what broke or when
// service returns — no invented cause, no invented ETA, no human engineer voice.
const ENTRY =
  "Every server is down. I'm still online, but I can't reach any of them, so I can't say what broke or when they'll be back.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
