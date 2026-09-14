# Herramientas

## gen-sispla-datos.js — regenerar `sispla-datos.js` desde la base del SISPLA

Convierte las tablas del SISPLA original (base `sispla_aig`) en el estado de la demo con la jerarquía corregida: Portafolio de proyectos (tabla `proyecto`) > Proyecto (`subproyecto`) > Seguimiento (`seguimientos`). El mapeo completo está en [docs/DISENO.md](../docs/DISENO.md), sección 7.5.

### 1. Exportar las tablas a TSV

Con el cliente de MariaDB y los accesos del `.env` del proyecto SISPLA, crear la carpeta `herramientas/db/` (no se versiona) y exportar cada consulta con `mysql ... -e "<consulta>" > herramientas/db/<archivo>.tsv`:

| Archivo | Consulta |
|---|---|
| `proyecto.tsv` | `SELECT * FROM proyecto` |
| `subproyecto.tsv` | `SELECT * FROM subproyecto` |
| `seguimientos.tsv` | `SELECT s.*, (SELECT COUNT(*) FROM responsable_seguimiento r WHERE r.seguimiento_id=s.id) AS n_resp FROM seguimientos s` |
| `proyecto_area.tsv` | `SELECT * FROM proyecto_area` |
| `proyecto_grupo.tsv` | `SELECT * FROM proyecto_grupo` |
| `responsable_seguimiento.tsv` | `SELECT * FROM responsable_seguimiento` |
| `personas_nombres.tsv` | `SELECT id, nombre, entidad_id FROM personas` (solo nombre: sin correo, cédula ni teléfono) |
| `documentos.tsv` | `SELECT id, tipo_id, entidad_id, persona_id, responsable, nombre, secuencia, year, descripcion, observacion, created_at FROM documentos` |
| `entidades.tsv` | `SELECT id, nombre, sigla FROM tb_entidades` |

Los catálogos pequeños (tipos, áreas, líneas estratégicas, divisiones, prioridades, estatus, proveedores, grupos, unidades gestoras) están escritos dentro del script; si cambian en la base, actualizarlos ahí.

### 2. Generar

```
node herramientas/gen-sispla-datos.js sispla-datos.js
```

Escribe `sispla-datos.js` (estado completo, versión 7) y `herramientas/seed-snippet.js`, que es la función `seed()` con un subconjunto de los datos. Ese snippet reemplaza a mano la función `seed()` de `index.html` cuando cambian las definiciones (tipos, pantallas, listas, menú, reportes), para que la demo arranque igual sin `sispla-datos.js`.
