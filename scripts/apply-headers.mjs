import { readFileSync, copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "_headers");
const target = join(root, "out", "_headers");

const headers = readFileSync(source, "utf8");
if (!headers.includes("Content-Security-Policy")) {
  throw new Error("Unexpected _headers content; refusing to copy.");
}

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
console.log("Copied _headers -> out/_headers");