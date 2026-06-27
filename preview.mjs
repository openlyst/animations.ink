import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.resolve("dist");
const port = parseInt(process.argv[2], 10) || 3000;

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function resolvePath(url) {
  const p = path.resolve(path.join(dir, url.replace(/\?.*$/, "")));
  if (!p.startsWith(dir)) return null;
  return p;
}

function send(filePath, res) {
  const ext = path.extname(filePath);
  const type = types[ext] || "application/octet-stream";
  const content = fs.readFileSync(filePath);
  res.writeHead(200, { "Content-Type": type, "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable" });
  res.end(content);
}

function serve(url, res) {
  const p = resolvePath(url);
  if (!p) return send(path.join(dir, "404.html"), res);

  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
    const idx = path.join(p, "index.html");
    if (fs.existsSync(idx)) return send(idx, res);
  }

  if (fs.existsSync(p) && fs.statSync(p).isFile()) return send(p, res);

  const withHtml = p + ".html";
  if (fs.existsSync(withHtml)) return send(withHtml, res);

  send(path.join(dir, "404.html"), res);
}

http.createServer((req, res) => {
  const p = resolvePath(req.url);
  if (!p) return send(path.join(dir, "404.html"), res);
  serve(req.url, res);
}).listen(port, () => console.log(`Preview at http://localhost:${port}`));
