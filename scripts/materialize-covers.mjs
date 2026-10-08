// Writes public/images/covers from cover-src/*.b64 before Astro runs.
// The pictures live as text so a text-only commit can carry them.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "cover-src");
const dest = join(root, "public", "images", "covers");
mkdirSync(dest, { recursive: true });

let count = 0;
for (const name of readdirSync(src)) {
  if (!name.endsWith(".b64")) continue;
  const b64 = readFileSync(join(src, name), "utf8").replace(/\s+/g, "");
  const bytes = Buffer.from(b64, "base64");
  const outName = name.slice(0, -4);
  writeFileSync(join(dest, outName), bytes);
  count += 1;
}

console.log(`materialize-covers: wrote ${count} file(s)`);
