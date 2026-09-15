#!/usr/bin/env node
/* Servidor mínimo de la demo SisPla. Sin dependencias; Node 18 o superior.
   - Sirve los archivos de esta carpeta (index.html, sispla-datos.js, docs/…).
   - Guarda el estado completo de la demo (definición y datos) en datos/estado.json, con escritura atómica
     y copias en datos/historial/ (una cada SISPLA_INTERVALO segundos como máximo; se conservan SISPLA_HISTORIAL).
   Uso:  node servidor.js [puerto]
   Variables opcionales: PORT (puerto, 8080), SISPLA_DATOS (carpeta de datos, ./datos),
                         SISPLA_HISTORIAL (copias a conservar, 30), SISPLA_INTERVALO (segundos entre copias, 300).
   API:  GET /api/salud            → {ok, hayEstado, guardadoEn}
         GET /api/estado           → {guardadoEn, estado}  (204 si aún no hay nada guardado)
         PUT /api/estado           → recibe {guardadoEn, estado} y lo guarda; responde {ok, guardadoEn}
   No hay autenticación: pensado para una red interna o detrás de un proxy que la aporte. */
'use strict';
const http = require('http'), fs = require('fs'), path = require('path');

const RAIZ = __dirname;
const PUERTO = Number(process.argv[2] || process.env.PORT || 8080);
const DATOS = path.resolve(process.env.SISPLA_DATOS || path.join(RAIZ, 'datos'));
const HISTORIAL = path.join(DATOS, 'historial');
const N_HIST = Number(process.env.SISPLA_HISTORIAL || 30);
const INTERVALO = Number(process.env.SISPLA_INTERVALO || 300) * 1000;
const ARCHIVO = path.join(DATOS, 'estado.json');
const MAX_CUERPO = 25 * 1024 * 1024; /* el estado de la demo pesa unos cientos de KB; esto es solo un tope de seguridad */
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.md': 'text/markdown; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };
const NO_SERVIR = ['datos', '.git', 'node_modules', 'herramientas/db', 'servidor.js', 'package.json']; /* nunca se exponen por HTTP */

fs.mkdirSync(HISTORIAL, { recursive: true });

function json(res, codigo, obj) {
  res.writeHead(codigo, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(obj));
}
function leerEstado() {
  try { return JSON.parse(fs.readFileSync(ARCHIVO, 'utf8')); } catch (e) { return null; }
}
/* Copia el estado.json actual al historial si la última copia tiene más de INTERVALO; deja solo las N_HIST más recientes */
function respaldar() {
  if (!fs.existsSync(ARCHIVO)) return;
  const copias = fs.readdirSync(HISTORIAL).filter(f => /^estado-.*\.json$/.test(f)).sort();
  if (copias.length) {
    const ultima = fs.statSync(path.join(HISTORIAL, copias[copias.length - 1])).mtimeMs;
    if (Date.now() - ultima < INTERVALO) return;
  }
  const sello = new Date().toISOString().replace(/[:.]/g, '-');
  fs.copyFileSync(ARCHIVO, path.join(HISTORIAL, 'estado-' + sello + '.json'));
  copias.push('estado-' + sello + '.json');
  while (copias.length > N_HIST) fs.unlinkSync(path.join(HISTORIAL, copias.shift()));
}
function guardarEstado(obj) {
  respaldar();
  const tmp = ARCHIVO + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(obj));
  fs.renameSync(tmp, ARCHIVO); /* atómico: nunca queda un estado.json a medias */
}
function leerCuerpo(req) {
  return new Promise((resolver, rechazar) => {
    const partes = []; let tam = 0;
    req.on('data', c => { tam += c.length; if (tam > MAX_CUERPO) { rechazar(new Error('cuerpo demasiado grande')); req.destroy(); } else partes.push(c); });
    req.on('end', () => resolver(Buffer.concat(partes).toString('utf8')));
    req.on('error', rechazar);
  });
}

async function api(req, res, ruta) {
  if (ruta === '/api/salud' && req.method === 'GET') {
    const e = leerEstado();
    return json(res, 200, { ok: true, hayEstado: !!e, guardadoEn: e ? e.guardadoEn || null : null });
  }
  if (ruta === '/api/estado' && req.method === 'GET') {
    const e = leerEstado();
    if (!e) { res.writeHead(204, { 'Cache-Control': 'no-store' }); return res.end(); }
    return json(res, 200, e);
  }
  if (ruta === '/api/estado' && req.method === 'PUT') {
    let cuerpo;
    try { cuerpo = JSON.parse(await leerCuerpo(req)); } catch (e) { return json(res, 400, { ok: false, error: 'JSON inválido: ' + e.message }); }
    if (!cuerpo || typeof cuerpo.estado !== 'object' || !cuerpo.estado) return json(res, 400, { ok: false, error: 'falta "estado"' });
    const guardadoEn = Number(cuerpo.guardadoEn) || Date.now();
    try { guardarEstado({ guardadoEn, estado: cuerpo.estado }); } catch (e) { return json(res, 500, { ok: false, error: 'no se pudo escribir: ' + e.message }); }
    return json(res, 200, { ok: true, guardadoEn });
  }
  json(res, 404, { ok: false, error: 'ruta no encontrada' });
}

function estatico(req, res, ruta) {
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end(); }
  let rel = decodeURIComponent(ruta).replace(/^\/+/, '') || 'index.html';
  const abs = path.normalize(path.join(RAIZ, rel));
  const dentro = abs.startsWith(RAIZ + path.sep);
  const relNorm = path.relative(RAIZ, abs).split(path.sep).join('/');
  if (!dentro || NO_SERVIR.some(p => relNorm === p || relNorm.startsWith(p + '/'))) { res.writeHead(403); return res.end('Prohibido'); }
  fs.stat(abs, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('No encontrado'); }
    const ext = path.extname(abs).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Content-Length': st.size, 'Cache-Control': 'no-cache' });
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(abs).pipe(res);
  });
}

const servidor = http.createServer((req, res) => {
  const ruta = new URL(req.url, 'http://x').pathname;
  if (ruta.startsWith('/api/')) api(req, res, ruta).catch(e => json(res, 500, { ok: false, error: e.message }));
  else estatico(req, res, ruta);
});
servidor.listen(PUERTO, () => {
  const e = leerEstado();
  console.log(`SisPla demo en http://localhost:${PUERTO}/  ·  datos en ${DATOS}  ·  ` + (e ? 'estado guardado el ' + new Date(e.guardadoEn).toLocaleString() : 'sin estado guardado aún (se creará con el primer cambio)'));
});
