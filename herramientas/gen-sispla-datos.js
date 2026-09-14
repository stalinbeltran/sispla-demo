/* Genera sispla-datos.js para la demo a partir de los TSV exportados de la base sispla_aig.
   Portafolio de proyectos (tabla proyecto) > Proyecto (tabla subproyecto) > Seguimiento (tabla seguimientos). */
const fs = require('fs');
const path = require('path');
const DB = path.join(__dirname, 'db');
const OUT = process.argv[2];

const tsv = f => {
  const [h, ...rows] = fs.readFileSync(path.join(DB, f), 'utf8').replace(/\r/g, '').split('\n').filter(Boolean);
  const keys = h.split('\t');
  return rows.map(r => Object.fromEntries(r.split('\t').map((v, i) => [keys[i], v === 'NULL' ? null : v])));
};
const slug = s => (String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')) || 'opcion';
const fecha = v => (v && /^\d{4}-\d{2}-\d{2}/.test(v) && !v.startsWith('0000')) ? v.slice(0, 10) : '';
const num = v => (v === null || v === '' ? '' : Number(v));
const pad3 = n => String(n).padStart(3, '0');
const PAL = ['#2E5C8A', '#2E7D5B', '#C08A1E', '#6B5B95', '#3A8A8A', '#5A6B7C', '#2E7D8A', '#B23A3A', '#8A94A0'];

/* ---- catálogos (Listas de opciones) ---- */
function catalogo(id, nombre, rows, colores) {
  const usados = new Set();
  const opciones = rows.map((r, i) => {
    let valor = slug(r.nombre); while (usados.has(valor)) valor += '_'; usados.add(valor);
    return { valor, etiqueta: String(r.nombre).trim(), color: (colores && colores[r.nombre.trim()]) || PAL[i % PAL.length] };
  });
  const map = Object.fromEntries(rows.map((r, i) => [String(r.id), opciones[i].valor]));
  return { def: { id, nombre, opciones }, map };
}
const C = {};
C.tipo_portafolio = catalogo('tipo_portafolio', 'Tipos de portafolio', [{ id: 1, nombre: 'Inversión' }, { id: 2, nombre: 'Funcionamiento' }]);
C.unidad_gestora = catalogo('unidad_gestora', 'Unidades gestoras', [
  { id: 8, nombre: 'Despacho Superior' }, { id: 2, nombre: 'Dirección de Administración, Ejecutiva y Finanzas' }, { id: 4, nombre: 'Dirección de Arquitectura Tecnológica' },
  { id: 1, nombre: 'Dirección de Ciencias de la Información' }, { id: 7, nombre: 'Dirección de Cumplimiento Normas y Solu Verticales' }, { id: 5, nombre: 'Dirección de Tecnología' },
  { id: 3, nombre: 'Dirección de Transformación Digital' }, { id: 6, nombre: 'Oficina Institucional de Recursos Humanos' }]);
C.tipo_proyecto = catalogo('tipo_proyecto', 'Tipos de proyecto', [{ id: 1, nombre: 'Proyecto' }, { id: 2, nombre: 'Actividad' }, { id: 3, nombre: 'Incidencia' }]);
C.area = catalogo('area', 'Áreas', [
  { id: 10, nombre: 'Administrativo' }, { id: 9, nombre: 'Analítica' }, { id: 4, nombre: 'Aplicación' }, { id: 3, nombre: 'Base de Datos' }, { id: 13, nombre: 'Bus de Servicio' },
  { id: 7, nombre: 'Consultoría' }, { id: 8, nombre: 'Datos' }, { id: 2, nombre: 'Desarrollo' }, { id: 15, nombre: 'DoDs' }, { id: 17, nombre: 'Gobernanza' }, { id: 14, nombre: 'Hub de Datos' },
  { id: 16, nombre: 'IA' }, { id: 6, nombre: 'Implementación' }, { id: 11, nombre: 'Infraestructura' }, { id: 12, nombre: 'PM' }, { id: 5, nombre: 'Políticas y Procedimientos' }, { id: 1, nombre: 'Procesos' }]);
C.linea_estrategica = catalogo('linea_estrategica', 'Líneas estratégicas', [
  { id: 1, nombre: 'Enfoque competitividad país.' }, { id: 2, nombre: 'Uso de Data para Predecir Tendencias.' }, { id: 3, nombre: 'Uso de data para diseñar normas y servicios gubern' },
  { id: 4, nombre: 'Uso de data para medición de resultados.' }, { id: 5, nombre: 'Enfoque de Procesos de Negocio' }, { id: 6, nombre: 'Infraestructura TIC' }, { id: 7, nombre: 'Gobernanza de Datos' },
  { id: 8, nombre: 'Datos Abiertos' }, { id: 9, nombre: 'Políticas, estandarés, marcos de Aplicaciones y (o' }, { id: 10, nombre: 'Imagen Institucional y Transparencia' },
  { id: 11, nombre: 'Transformación Digital Enfocado en el Ciudadano' }, { id: 12, nombre: 'Intercambio de Datos' }, { id: 13, nombre: 'Estrategia de Datos' },
  { id: 14, nombre: 'Seguridad y Confiabilidad de los Sistemas' }, { id: 15, nombre: 'Innovación y Conectividad' }]);
C.division = catalogo('division', 'Divisiones del proyecto', [{ id: 1, nombre: 'Por Definir' }, { id: 2, nombre: 'Formulación' }, { id: 3, nombre: 'Adquisición' }, { id: 4, nombre: 'Ejecución' }]);
C.prioridad = catalogo('prioridad', 'Prioridades', [{ id: 1, nombre: 'Alta' }, { id: 2, nombre: 'Media' }, { id: 3, nombre: 'Baja' }, { id: 4, nombre: 'Urgente' }],
  { Alta: '#B23A3A', Media: '#C08A1E', Baja: '#8A94A0', Urgente: '#7A1F1F' });
C.estatus = catalogo('estatus', 'Estatus de avance', [
  { id: 1, nombre: 'No Iniciado' }, { id: 2, nombre: 'Análisis' }, { id: 3, nombre: 'En Progreso' }, { id: 4, nombre: 'Calidad' }, { id: 5, nombre: 'Completo' }, { id: 6, nombre: 'Aplazado' }, { id: 7, nombre: 'Cancelado' }],
  { 'No Iniciado': '#8A94A0', 'Análisis': '#6B5B95', 'En Progreso': '#2E5C8A', 'Calidad': '#C08A1E', 'Completo': '#2E7D5B', 'Aplazado': '#5A6B7C', 'Cancelado': '#B23A3A' });
C.proveedor = catalogo('proveedor', 'Proveedores', [
  { id: 2, nombre: 'Negocios y Soluciones Informáticas S.A' }, { id: 3, nombre: '3-TECH' }, { id: 4, nombre: 'AIG' }, { id: 5, nombre: 'Axxis Systems' }, { id: 6, nombre: 'MaxiaLatam' },
  { id: 7, nombre: 'Electro Sistema' }, { id: 8, nombre: 'Zertifika' }, { id: 9, nombre: 'Megapractical' }, { id: 10, nombre: 'Rootstack' }]);
C.grupo = catalogo('grupo', 'Grupos', [
  { id: 1, nombre: 'Comité de Manejo de Contingencias o Equipo de Crisis (CMC)' }, { id: 2, nombre: 'Equipo de Evaluación de Daños (EED)' }, { id: 3, nombre: 'Equipo de Base de Datos y Aplicaciones (EBDA)' },
  { id: 4, nombre: 'Equipo de Infraestructura y Soporte (Equipo de Operaciones de Crisis)' }, { id: 5, nombre: 'Cordinador de los Planes de Contingencia' }, { id: 6, nombre: 'Grupo de Prueba' }]);
const PERS = tsv('personas_nombres.tsv'), RS = tsv('responsable_seguimiento.tsv'), DOCS = tsv('documentos.tsv'), ENT = tsv('entidades.tsv');
const respIds = [...new Set(RS.map(r => r.persona_id))];
C.persona = { def: { id: 'persona', nombre: 'Personas', opciones: PERS.filter(x => respIds.includes(x.id)).map((x, i) => ({ valor: 'p' + x.id, etiqueta: x.nombre.trim(), color: PAL[i % PAL.length] })) }, map: Object.fromEntries(PERS.map(x => [x.id, 'p' + x.id])) };
C.tipo_seguimiento = catalogo('tipo_seguimiento', 'Tipos de seguimiento', [{ id: 1, nombre: 'Por Definir' }]);

const catalogos = Object.fromEntries(Object.values(C).map(c => [c.def.id, c.def]));

/* ---- tipos de nodo y pantallas (etiquetas tomadas de los formularios Blade de SISPLA) ---- */
const AY_ID = 'Identificador del registro en la base del SISPLA original. Solo informativo; no se usa para nada más.';
const f = (key, label, tipo, extra = {}) => Object.assign({ key, label, tipo, visible: true, ancho: 'half' }, extra);
const formularios = {
  f_portafolio: { id: 'f_portafolio', nombre: 'Ficha de portafolio', campos: [
    f('tipo', 'Tipo', 'lista', { catalogo: 'tipo_portafolio', requerido: true }),
    f('sponsor', 'Sponsor', 'texto', { requerido: true, ayuda: 'Nombre del sponsor tal como se escribe en SISPLA (texto libre).' }),
    f('pmanager', 'Administrador', 'texto', { requerido: true }),
    f('url', 'URL', 'texto', { ayuda: 'Por ejemplo: http://sispla.site' }),
    f('fecha_inicio', 'Fecha de inicio', 'fecha'),
    f('fecha_fin', 'Fecha de fin', 'fecha'),
    f('areas', 'Áreas', 'multiple', { catalogo: 'area', ancho: 'full', ayuda: 'En SISPLA: tabla proyecto_area.' }),
    f('grupos', 'Grupos', 'multiple', { catalogo: 'grupo', ancho: 'full', ayuda: 'En SISPLA: tabla proyecto_grupo.' }),
    f('sispla_id', 'ID en SISPLA', 'texto', { ayuda: AY_ID })
  ] },
  f_proyecto: { id: 'f_proyecto', nombre: 'Ficha de proyecto', campos: [
    f('unidad_gestora', 'Unidad Gestora', 'lista', { catalogo: 'unidad_gestora', requerido: true }),
    f('tipo', 'Tipo', 'lista', { catalogo: 'tipo_proyecto', requerido: true }),
    f('area', 'Área', 'lista', { catalogo: 'area', requerido: true }),
    f('linea_estrategica', 'Línea Estratégica', 'lista', { catalogo: 'linea_estrategica', requerido: true }),
    f('division', 'División del proyecto', 'lista', { catalogo: 'division', requerido: true, ayuda: 'En SISPLA se llama "División Subproyectos".' }),
    f('prioridad', 'Prioridad', 'lista', { catalogo: 'prioridad', requerido: true }),
    f('estado', 'Estatus', 'lista', { catalogo: 'estatus', requerido: true }),
    f('proveedor', 'Proveedor', 'lista', { catalogo: 'proveedor', requerido: true }),
    f('fecha_inicio', 'Fecha de inicio', 'fecha'),
    f('fecha_fin', 'Fecha de Fin', 'fecha'),
    f('no_documento', 'No Documento', 'texto'),
    f('ticket', 'Ticket', 'texto', { ayuda: 'Por ejemplo: 001' }),
    f('costo_hora', 'Costo por Hora', 'numero', { requerido: true }),
    f('costo_total', 'Costo Total', 'numero', { requerido: true }),
    f('sispla_id', 'ID en SISPLA', 'texto', { ayuda: AY_ID + ' Corresponde a la tabla subproyecto.' })
  ] },
  f_seguimiento: { id: 'f_seguimiento', nombre: 'Ficha de seguimiento', campos: [
    f('actividad', 'Actividad', 'numero', { requerido: true, ayuda: 'Número de orden de la actividad, por ejemplo 8.1.' }),
    f('dias', 'Días', 'numero', { requerido: true }),
    f('tipo', 'Tipo', 'lista', { catalogo: 'tipo_seguimiento' }),
    f('estado', 'Estatus', 'lista', { catalogo: 'estatus', requerido: true }),
    f('fecha_planificada_inicio', 'Inicio planificado', 'fecha', { requerido: true }),
    f('fecha_planificada_fin', 'Fin planificado', 'fecha', { requerido: true }),
    f('fecha_inicio', 'Inicio real', 'fecha'),
    f('fecha_fin', 'Fin real', 'fecha'),
    f('responsables', 'Personas responsables', 'multiple', { catalogo: 'persona', ancho: 'full', ayuda: 'En SISPLA cada responsable lleva además costo y rata por hora (tabla responsable_seguimiento); en la demo solo se registra quién. La lista Personas trae solo a quienes ya son responsables de algún seguimiento; se amplía en Listas de opciones.' }),
    f('observacion', 'Observación', 'textolargo', { ancho: 'full' }),
    f('sispla_id', 'ID en SISPLA', 'texto', { ayuda: AY_ID + ' Corresponde a la tabla seguimientos.' })
  ] }
};
const tipos = [
  { id: 'portafolio', nombre: 'Portafolio de proyectos', nuevo: 'Nuevo portafolio', raiz: true, prefijo: 'PF', icono: '', formId: 'f_portafolio', hijos: ['proyecto'], columnas: ['tipo', 'sponsor', 'pmanager', 'fecha_fin'], archivos: true },
  { id: 'proyecto', nombre: 'Proyecto', nuevo: 'Nuevo proyecto', raiz: false, icono: '', formId: 'f_proyecto', hijos: ['seguimiento'], columnas: ['estado', 'prioridad', 'unidad_gestora', 'fecha_fin'], archivos: true },
  { id: 'seguimiento', nombre: 'Seguimiento', nuevo: 'Nuevo seguimiento', raiz: false, icono: '', formId: 'f_seguimiento', hijos: [], columnas: ['actividad', 'estado', 'fecha_planificada_inicio', 'fecha_planificada_fin'], archivos: false }
];
const menu = [
  { id: 'm1', label: 'Portafolio de proyectos', icono: '▣', tipo: 'arbol', visible: true },
  { id: 'm2', label: 'Todos los proyectos', icono: '▸', tipo: 'lista', target: 'proyecto', visible: true },
  { id: 'm12', label: 'Todos los seguimientos', icono: '▸', tipo: 'lista', target: 'seguimiento', visible: true },
  { id: 'm3', label: 'Reportes', icono: '≡', tipo: 'reportes', visible: true },
  { id: 'm4', label: 'Seguimientos por estatus', icono: '', tipo: 'reporte', target: 'r1', visible: true, sub: true },
  { id: 'm5', label: 'Configuración', tipo: 'grupo', visible: true },
  { id: 'm6', label: 'Pantallas', icono: '⊞', tipo: 'config', target: 'formularios', visible: true },
  { id: 'm7', label: 'Tipos de nodo', icono: '⋔', tipo: 'config', target: 'tipos', visible: true },
  { id: 'm8', label: 'Listas de opciones', icono: '☰', tipo: 'config', target: 'catalogos', visible: true },
  { id: 'm9', label: 'Menú', icono: '⇅', tipo: 'config', target: 'menu', visible: true },
  { id: 'm10', label: 'JSON del sistema', icono: '{}', tipo: 'config', target: 'json', visible: true },
  { id: 'm11', label: 'Ayuda y glosario', icono: '?', tipo: 'config', target: 'ayuda', visible: true }
];
const reportes = [
  { id: 'r1', nombre: 'Seguimientos por estatus', tipo: 'seguimiento', alcance: '', campos: ['nombre', 'ruta', 'actividad', 'dias', 'fecha_planificada_fin'], filtro: { campo: '', valor: '' }, agrupar: 'estado' },
  { id: 'r2', nombre: 'Proyectos por unidad gestora', tipo: 'proyecto', alcance: '', campos: ['codigo', 'nombre', 'estado', 'prioridad', 'costo_total'], filtro: { campo: '', valor: '' }, agrupar: 'unidad_gestora' },
  { id: 'r3', nombre: 'Costo total por división', tipo: 'proyecto', alcance: '', campos: ['codigo', 'nombre', 'ruta', 'costo_hora', 'costo_total'], filtro: { campo: '', valor: '' }, agrupar: 'division' }
];

/* ---- datos ---- */
const P = tsv('proyecto.tsv'), SP = tsv('subproyecto.tsv'), SG = tsv('seguimientos.tsv'), PA = tsv('proyecto_area.tsv'), PG = tsv('proyecto_grupo.tsv');
const byId = {};
const nodos = [];
const seqDe = {};
const seq = pid => (seqDe[pid] = (seqDe[pid] || 0) + 1);
const avisos = [];

P.sort((a, b) => a.id - b.id).forEach(p => {
  const n = { id: 'pf' + p.id, tipo: 'portafolio', parentId: null, codigo: 'PF-' + pad3(p.id), nombre: p.nombre.trim(),
    creado: fecha(p.created_at) || fecha(p.fecha_inicio) || '2018-07-09',
    datos: { tipo: C.tipo_portafolio.map[p.tipo_proyecto_id] || '', sponsor: (p.sponsor || '').trim(), pmanager: (p.pmanager || '').trim(), url: p.url || '',
      fecha_inicio: fecha(p.fecha_inicio), fecha_fin: fecha(p.fecha_fin),
      areas: PA.filter(x => x.proyecto_id === p.id).map(x => C.area.map[x.area_id]).filter(Boolean),
      grupos: PG.filter(x => x.proyecto_id === p.id).map(x => C.grupo.map[x.grupo_id]).filter(Boolean),
      sispla_id: p.id } };
  byId[n.id] = n; nodos.push(n);
});
SP.sort((a, b) => a.id - b.id).forEach(s => {
  const padre = byId['pf' + s.proyecto_id];
  if (!padre) { avisos.push(`subproyecto ${s.id} sin proyecto ${s.proyecto_id}`); return; }
  const n = { id: 'py' + s.id, tipo: 'proyecto', parentId: padre.id, codigo: `${padre.codigo}.${seq(padre.id)}`, nombre: s.nombre.trim(),
    creado: fecha(s.created_at) || fecha(s.fecha_inicio) || padre.creado,
    datos: { unidad_gestora: C.unidad_gestora.map[s.unidad_gestora_id] || '', tipo: C.tipo_proyecto.map[s.tipo_subproyecto_id] || '', area: C.area.map[s.area_id] || '',
      linea_estrategica: C.linea_estrategica.map[s.linea_estrategica_id] || '', division: C.division.map[s.division_subproyecto_id] || '', prioridad: C.prioridad.map[s.prioridad_id] || '',
      estado: C.estatus.map[s.fk_estatus] || '', proveedor: C.proveedor.map[s.proveedor_id] || '', fecha_inicio: fecha(s.fecha_inicio), fecha_fin: fecha(s.fecha_fin),
      no_documento: s.no_documento || '', ticket: s.ticket || '', costo_hora: num(s.costo_hora), costo_total: num(s.costo_total), sispla_id: s.id } };
  for (const k of ['unidad_gestora', 'tipo', 'area', 'linea_estrategica', 'division', 'prioridad', 'proveedor']) if (!n.datos[k]) avisos.push(`subproyecto ${s.id}: ${k} sin correspondencia`);
  byId[n.id] = n; nodos.push(n);
});
SG.sort((a, b) => a.id - b.id).forEach(g => {
  const padre = byId['py' + g.subproyecto_id];
  if (!padre) { avisos.push(`seguimiento ${g.id} sin subproyecto ${g.subproyecto_id}`); return; }
  const n = { id: 'sg' + g.id, tipo: 'seguimiento', parentId: padre.id, codigo: `${padre.codigo}.${seq(padre.id)}`, nombre: g.nombre.trim(),
    creado: fecha(g.created_at) || fecha(g.fecha_planificada_inicio) || padre.creado,
    datos: { actividad: num(g.actividad), dias: num(g.dias), tipo: C.tipo_seguimiento.map[g.tipo_id] || '', estado: C.estatus.map[g.estatus_id] || '',
      fecha_planificada_inicio: fecha(g.fecha_planificada_inicio), fecha_planificada_fin: fecha(g.fecha_planificada_fin), fecha_inicio: fecha(g.fecha_inicio), fecha_fin: fecha(g.fecha_fin),
      responsables: RS.filter(r => r.seguimiento_id === g.id).map(r => C.persona.map[r.persona_id]).filter(Boolean), observacion: g.observacion || '', sispla_id: g.id } };
  byId[n.id] = n; nodos.push(n);
});

/* ---- documentos de SISPLA como constancias. No tienen relación con proyectos en la base: se asignan al proyecto
   donde la persona que los registró es responsable de un seguimiento, eligiendo el seguimiento de fecha planificada más cercana.
   Si la persona no es responsable de nada, van al portafolio "SIn Especificar" (PF-001). ---- */
const TIPO_DOC = { 1: 'ARV', 2: 'IG', 3: 'N', 4: 'MEMO' };
const entSigla = Object.fromEntries(ENT.map(e => [e.id, e.sigla]));
const perNombre = Object.fromEntries(PERS.map(x => [x.id, x.nombre.trim()]));
const dias = d => Date.parse(d || '') || 0;
const archivos = [];
let docsAprox = 0, docsSinAsignar = 0;
DOCS.sort((a, b) => a.id - b.id).forEach(d => {
  const fechaDoc = fecha(d.created_at) || (d.year ? d.year + '-06-30' : '');
  const segs = RS.filter(r => r.persona_id === d.persona_id).map(r => byId['sg' + r.seguimiento_id]).filter(Boolean);
  let nodoId;
  if (segs.length) { segs.sort((a, b) => Math.abs(dias(a.datos.fecha_planificada_inicio) - dias(fechaDoc)) - Math.abs(dias(b.datos.fecha_planificada_inicio) - dias(fechaDoc))); nodoId = segs[0].parentId; docsAprox++; }
  else { nodoId = 'pf1'; docsSinAsignar++; }
  archivos.push({ id: 'd' + d.id, nodoId, nombre: `${TIPO_DOC[d.tipo_id] || 'DOC'}-${d.year || ''}-${pad3(d.secuencia || 0)} ${d.nombre.trim()}`, clase: 'documento', tamano: 0, fecha: fechaDoc,
    origen: entSigla[d.entidad_id] || '', detalle: [d.descripcion, d.observacion].filter(Boolean).join(' · ') + (perNombre[d.persona_id] ? ` (registrado por ${perNombre[d.persona_id]})` : ''), sispla_id: d.id });
});

const ahora = Date.now();
const estado = { meta: { tipos, formularios, catalogos, menu, reportes }, datos: { nodos, archivos, historial: [] }, version: 7, modificado: ahora };
const txt = '/* Estado de la demo SisPla generado el ' + new Date(ahora).toISOString() + ' desde la base sispla_aig (tablas proyecto, subproyecto, seguimientos, responsable_seguimiento, documentos y sus catálogos). No editar a mano. */\nwindow.SISPLA_GUARDADO=' + JSON.stringify({ guardadoEn: ahora, estado }, null, 1) + ';\n';
fs.writeFileSync(OUT, txt);
const c = {}; nodos.forEach(n => c[n.tipo] = (c[n.tipo] || 0) + 1);
console.log('nodos', c, 'catalogos', Object.keys(catalogos).length);
console.log('archivos', archivos.length, '| asignados por persona/fecha', docsAprox, '| a PF-001', docsSinAsignar, '| personas en lista', C.persona.def.opciones.length);
if (avisos.length) console.log('AVISOS:\n ' + avisos.join('\n '));
/* ---- datos de arranque para index.html (subconjunto de portafolios pequeños) ---- */
const sub = new Set(); let tot = 0;
for (const pf of nodos.filter(n => n.tipo === 'portafolio' && n.id !== 'pf1')) { const rama = [pf, ...nodos.filter(n => n.parentId === pf.id)]; rama.slice(1).forEach(py => rama.push(...nodos.filter(n => n.parentId === py.id))); if (rama.length < 2 || tot + rama.length > 60) continue; rama.forEach(n => sub.add(n.id)); tot += rama.length; }
const seedNodos = nodos.filter(n => sub.has(n.id)), seedArch = archivos.filter(a => sub.has(a.nodoId));
const seedTxt = '/* Datos de arranque si no existe sispla-datos.js: definiciones completas y un subconjunto de los datos reales del SISPLA (generado por gen.js, no editar a mano) */\nfunction seed(){return {\n meta:' + JSON.stringify(estado.meta) + ',\n datos:{\n  nodos:[\n' + seedNodos.map(n => '   ' + JSON.stringify(n)).join(',\n') + '\n  ],\n  archivos:[\n' + seedArch.map(a => '   ' + JSON.stringify(a)).join(',\n') + '\n  ],\n  historial:[]\n }\n}}\n';
fs.writeFileSync(path.join(__dirname, 'seed-snippet.js'), seedTxt);
console.log('seed: nodos', seedNodos.length, 'archivos', seedArch.length, 'portafolios', seedNodos.filter(n => n.tipo === 'portafolio').map(n => n.codigo).join(' '));
