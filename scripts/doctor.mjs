import { execSync } from "node:child_process";

const out = execSync("npx react-doctor --json --no-color", {
  encoding: "utf-8",
  stdio: ["ignore", "pipe", "pipe"],
  timeout: 60_000,
});

let data;
try {
  data = JSON.parse(out);
} catch {
  console.error("Failed to parse react-doctor output");
  process.exit(1);
}

const diagnostics = data.diagnostics ?? [];
const summary = data.summary ?? {};
const score = summary.score ?? 0;
const label = summary.scoreLabel ?? "Unknown";

const byCategory = {};
for (const d of diagnostics) {
  const cat = d.category ?? "Other";
  if (!byCategory[cat]) byCategory[cat] = { errors: 0, warnings: 0, items: [] };
  if (d.severity === "error") byCategory[cat].errors++;
  else byCategory[cat].warnings++;
  byCategory[cat].items.push(d);
}

const barLen = 50;
const filled = Math.round((score / 100) * barLen);
const bar = "|".repeat(filled) + "·".repeat(Math.max(0, barLen - filled));

console.log(`\n  React Doctor  v${data.version ?? "?"}  —  ${score}/100  ${label}`);
console.log(`  ${bar}`);
console.log("");

const catKeys = Object.keys(byCategory);
if (catKeys.length > 0) {
  for (const cat of catKeys) {
    const c = byCategory[cat];
    const parts = [];
    if (c.errors > 0) parts.push(`${c.errors} error${c.errors !== 1 ? "s" : ""}`);
    if (c.warnings > 0) parts.push(`${c.warnings} warning${c.warnings !== 1 ? "s" : ""}`);
    console.log(`  ${cat}  (${parts.join(", ")})`);
  }
  console.log("");
}

for (const d of diagnostics) {
  const loc = `${d.filePath}:${d.line}`;
  const icon = d.severity === "error" ? "ERROR" : " WARN";
  console.log(`  [${icon}] ${d.rule}  ${loc}`);
  console.log(`         ${d.title}`);
  console.log("");
}

const totalErrors = summary.errorCount ?? 0;
const totalWarnings = summary.warningCount ?? 0;
const files = summary.affectedFileCount ?? 0;
console.log(`  Summary: ${totalErrors} errors, ${totalWarnings} warnings  ·  ${files} files affected`);
console.log(`  Score: ${score}/100 (${label})\n`);

if (data.error) {
  console.error(`  Fatal: ${data.error}`);
  process.exit(1);
}

process.exit(totalErrors > 0 ? 1 : 0);
