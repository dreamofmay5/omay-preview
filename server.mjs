import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8' };
const port = Number(process.env.PORT) || 8080;
http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/') url = '/index.html';
  const p = path.join(root, url);
  if (!p.startsWith(root) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.statusCode = 404; return res.end('Not found'); }
  res.setHeader('content-type', types[path.extname(p)] || 'application/octet-stream');
  res.end(fs.readFileSync(p));
}).listen(port, () => console.log('오월의꿈 홈페이지 시안: http://localhost:' + port + '/'));
