import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ASSET_LIMIT = 25 * 1024 * 1024; // 25 MiB, Cloudflare per-asset limit

const outDir = join(fileURLToPath(new URL(".", import.meta.url)), "..", "out");

function collectFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      collectFiles(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

const offenders = collectFiles(outDir)
  .map((file) => ({ file, size: statSync(file).size }))
  .filter(({ size }) => size > ASSET_LIMIT);

if (offenders.length > 0) {
  const list = offenders
    .map(({ file, size }) => `${file.replaceAll("\\", "/")} (${(size / 1024 / 1024).toFixed(2)} MiB)`)
    .join("\n");
  console.error(
    `Asset limit check FAILED: ${offenders.length} file(s) exceed ${ASSET_LIMIT / 1024 / 1024} MiB:\n${list}`,
  );
  process.exit(1);
}

console.log("Asset limit check passed: all files are under 25 MiB.");