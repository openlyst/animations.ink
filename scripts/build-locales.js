import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("src/locales");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "manifest.json");

const entries = [];

for (const file of files) {
  const content = JSON.parse(fs.readFileSync(path.join(dir, file), "utf-8"));
  const code = content["language.code"] ?? file.replace(".json", "");
  const name = content["language.name"] ?? code;
  entries.push({ code, name });
}

entries.sort((a, b) => a.code.localeCompare(b.code));

const manifest = JSON.stringify(entries, null, 2);
fs.writeFileSync(path.join(dir, "manifest.json"), manifest);

console.log(`Generated manifest for ${entries.length} languages: ${entries.map((e) => e.code).join(", ")}`);
