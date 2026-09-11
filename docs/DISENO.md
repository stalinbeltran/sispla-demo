# SisPla — Diseño de una aplicación que se define a sí misma

Proyectos multinivel sobre base de documentos (tipo MongoDB), con pantallas, menús, listas de opciones y reportes definibles en caliente, frente al cliente.

Estado: borrador de diseño. Sin backend, sin login, sin permisos. Mock navegable en [`index.html`](../index.html).

---

## 1. Idea central

La aplicación tiene dos mitades que viven en la misma base de datos:

| Mitad | Qué contiene | Quién la cambia |
|---|---|---|
| **Definición (meta)** | Tipos de nodo, pantallas (formularios), listas de opciones, menú, columnas de listados, reportes | El consultor o el cliente, desde el botón **Diseñar esta pantalla** |
| **Datos** | Los nodos del árbol (proyectos, etapas, tareas…), sus archivos y su historial | Los usuarios, desde las pantallas que la definición genera |

Cada pantalla de uso tiene un botón de diseño que lleva a la pantalla que la define. Se entra en **modo diseño** (barra ámbar), se agrega o cambia un campo, y al volver la pantalla ya cambió. No hay despliegue ni compilación entre medio: la definición es un documento más.

Consecuencia para el modelo de datos: un nodo guarda sus campos dinámicos en un objeto `datos` libre. La definición dice qué se muestra de ese objeto y cómo, pero nunca limita qué puede guardarse. Por eso un proyecto puede crecer estructuralmente sin migraciones.

---

## 2. Modelo de documentos

Nombres de colección orientativos. Todo lo que aparece está implementado en el mock, salvo lo marcado como *futuro*.

### 2.1 Definición

**`tipos`** — qué es cada nivel del árbol y qué puede contener.

```json
{ "id": "etapa", "nombre": "Etapa", "icono": "◆",
  "formId": "f_etapa",
  "hijos": ["etapa", "tarea"],
  "columnas": ["estado", "avance", "fecha_fin"] }
```

La jerarquía no es fija (Proyecto > Etapa > Tarea). Es un grafo de "quién puede contener a quién": un proyecto puede contener proyectos, una etapa puede contener etapas. La profundidad es ilimitada.

**`formularios`** — la pantalla de un tipo. Una lista ordenada de campos.

```json
{ "id": "f_proyecto", "nombre": "Ficha de proyecto", "campos": [
  { "key": "cliente",  "label": "Cliente", "tipo": "texto", "requerido": true, "ancho": "half" },
  { "key": "estado",   "label": "Estado",  "tipo": "lista", "catalogo": "estado" },
  { "key": "tiene_contrato", "label": "Tiene contrato firmado", "tipo": "checkbox" },
  { "key": "nro_contrato",   "label": "N° de contrato", "tipo": "texto",
    "visibleSi": { "campo": "tiene_contrato", "valor": "true" } },
  { "key": "entregables", "tipo": "multiple",
    "opciones": [ { "valor": "informe", "etiqueta": "Informe" } ] } ] }
```

Tipos de campo del mock: texto, texto largo, número, fecha, lista desplegable, botones de opción, casilla sí/no, selección múltiple, referencia a otro nodo. Cada campo tiene: etiqueta, clave interna estable (`key`), requerido, visible, ancho, texto de ayuda, origen de opciones (lista compartida u opciones propias) y condición de visibilidad.

**`catalogos`** — listas de opciones reutilizables, con etiqueta, valor interno y color.

```json
{ "id": "estado", "nombre": "Estados", "opciones": [
  { "valor": "en_curso", "etiqueta": "En curso", "color": "#2E5C8A" } ] }
```

**`menu`** — el menú lateral. Orden = posición en el arreglo. Cada ítem apunta a un destino tipado: árbol, listado de un tipo, un reporte, la lista de reportes, una pantalla de configuración, un enlace externo, o un título de grupo. Puede marcarse como subopción (sangría) y ocultarse sin borrarlo.

**`reportes`** — ver sección 5.

### 2.2 Datos

**`nodos`** — cualquier elemento del árbol, sea proyecto, etapa o lo que se defina.

```json
{ "_id": "e3", "tipo": "etapa", "parentId": "e2",
  "path": ["p1", "e2"],
  "codigo": "PRJ-001.2.1", "nombre": "Obras civiles", "creado": "2026-04-20",
  "datos": { "estado": "en_curso", "avance": 60, "entregables": ["planos"] } }
```

`path` (ruta materializada de ancestros) permite traer un subárbol completo con una consulta (`path: "p1"`), que es lo que usan los reportes con alcance. El mock lo calcula al vuelo; en la implementación real se guarda.

**`archivos`** — constancias. Nunca se borran físicamente (*futuro: papelera*).

```json
{ "_id": "a2", "nodoId": "p1", "clase": "email",
  "nombre": "RE: Entrega de planos rev. B.eml", "tamano": 48210,
  "fecha": "2026-08-21", "origen": "Cliente",
  "email": { "de": "j.rojas@andinas.pe", "para": "m.quispe@sispla.pe",
             "asunto": "RE: Entrega de planos rev. B", "fechaEnvio": "2026-08-21" },
  "storageRef": "<futuro: S3 / GridFS / disco>" }
```

**`historial`** — cambio por cambio: nodo, cuándo, campo, antes, después. Se genera al guardar comparando el documento anterior con el nuevo. Base de la "constancia".

---

## 3. Facilidades de diseño (lo que el cliente puede hacer sin programar)

Todas están en el mock y se llega a ellas desde el botón ámbar o desde el grupo *Configuración* del menú.

1. **Diseñar esta pantalla.** Agregar campo con solo su etiqueta (la clave interna se deriva sola), cambiar tipo, reordenar con flechas, marcar requerido, ocultar sin borrar, poner en media fila o fila completa, texto de ayuda, condición "mostrar solo si…". Vista previa en vivo con datos reales del primer nodo de ese tipo.
2. **Tipos de nodo.** Crear un tipo nuevo (Hito, Contrato, Entregable…), asignarle pantalla, decir qué tipos puede contener y qué columnas muestra en los listados.
3. **Listas de opciones.** Definir una vez, reutilizar en varios campos de varias pantallas. Cada opción con color, que luego se ve como chip en árbol, listados y reportes.
4. **Menú.** Reordenar, agregar, ocultar, anidar como subopción, apuntar a cualquier destino tipado.
5. **Columnas de listados.** Por tipo, elegir qué campos aparecen en el listado de internos y en "Todas las tareas".
6. **Reportes** (sección 5).
7. **JSON del sistema.** Ver y copiar la definición o los datos. Importar una definición para llevar lo diseñado con el cliente al ambiente real.

Facilidades adicionales que propongo y aún no están en el mock:

- **Plantillas de árbol.** Un proyecto nuevo nace con etapas y tareas predefinidas a partir de una plantilla (que es, simplemente, un subárbol de nodos con `datos` de ejemplo).
- **Campos calculados.** Avance del padre como promedio de los hijos, suma de presupuestos, días restantes. Se definiría como un campo más, de tipo "fórmula", con una expresión sobre `datos` y sobre los hijos.
- **Vistas guardadas.** Un listado con filtro y orden fijos, publicable en el menú ("Mis tareas vencidas").
- **Estados con transiciones.** Hoy el estado es una lista. Si el cliente lo necesita, la lista puede llevar reglas "de → a" y la pantalla mostrará solo las transiciones válidas.
- **Versionado de la definición.** Cada guardado del diseñador incrementa una versión; el historial de un nodo registra con qué versión de pantalla se capturó.
- **Campos de tabla repetible.** Un campo cuyo valor es una lista de filas con su propio mini-formulario (partidas de un presupuesto, asistentes a una reunión).

---

## 4. Reglas de evolución (qué pasa cuando cambia la definición)

Estas reglas son la razón de elegir documentos y hay que fijarlas explícitamente:

- **Quitar un campo de la pantalla no borra datos.** El valor sigue en `datos` de cada nodo. Si el campo se vuelve a agregar con la misma clave, reaparece.
- **La clave (`key`) es estable; la etiqueta es libre.** Renombrar "Responsable" a "Encargado" no toca los datos.
- **Cambiar el tipo de un campo** se permite. Si el valor guardado no encaja (texto donde ahora hay número), la pantalla lo muestra tal cual y el reporte lo agrupa en "(sin valor)". No se convierte nada automáticamente.
- **Quitar un tipo de nodo** solo se permite si no hay nodos de ese tipo.
- **Quitar una opción de una lista** no toca los nodos que la tienen; se muestra el valor crudo hasta que alguien lo corrija.

---

## 5. Reportes a partir del JSON

Un reporte es un documento de definición, no código:

```json
{ "id": "r1", "nombre": "Tareas por estado", "tipo": "tarea",
  "alcance": "p1",
  "campos": ["nombre", "ruta", "prioridad", "responsable", "horas"],
  "filtro": { "campo": "prioridad", "valor": "alta" },
  "agrupar": "estado" }
```

Cómo se resuelve:

1. **La pantalla de diseño del reporte se arma sola** a partir del formulario del tipo elegido: las columnas, los campos filtrables y los campos por los que se puede agrupar salen de la definición. Si el cliente agrega un campo a la ficha de tarea, ya puede reportarlo.
2. **La definición se traduce a un *aggregation pipeline* de MongoDB**, de forma mecánica:
   - `$match` con el tipo, el alcance (`path` contiene el nodo raíz elegido) y el filtro (`datos.<campo> = valor`).
   - `$project` con los campos elegidos.
   - `$group` por `datos.<agrupar>`, con conteo y suma automática de todo campo numérico incluido.
   - `$sort`.
   El mock muestra el pipeline generado debajo de cada reporte.
3. **Los valores se presentan con la definición**: un valor `en_curso` se muestra como el chip "En curso" con su color porque el reporte consulta la lista de opciones al renderizar.
4. **Exportación** (*futuro*): la misma tabla a Excel o CSV; los agrupados a PDF. Como el resultado es un arreglo de documentos, cualquier librería de exportación lo toma directo.
5. **Reportes de árbol** (*futuro*): "todo el subárbol de un proyecto con sus estados", resuelto con `$graphLookup` o con el `path` materializado, y presentado con sangría por nivel.

---

## 6. Preguntas para cerrar la especificación

Para cada una anoto lo que asumí en el mock. Si el supuesto vale, no hay que responder nada.

**Sobre la jerarquía**

1. ¿Los niveles tienen nombres propios (Proyecto, Etapa, Tarea) o todo es "proyecto" a distintas profundidades? *Asumí tipos con nombre propio, definibles, con reglas de qué contiene a qué. Un proyecto puede contener proyectos.*
2. ¿Un nodo puede colgar de más de un padre? *Asumí árbol estricto. Las relaciones cruzadas se hacen con un campo de tipo referencia.*
3. ¿Se necesita mover un subárbol de un padre a otro? *No está en el mock; es barato de agregar.*
4. ¿Cómo se numeran los nodos? *Asumí código jerárquico automático: PRJ-001, PRJ-001.2, PRJ-001.2.1. ¿Prefieren correlativo por tipo, código manual, o ambos?*

**Sobre las pantallas**

5. ¿Los campos se definen por tipo de nodo (todas las etapas comparten ficha) o cada nodo puede tener campos propios además de los del tipo? *Asumí por tipo. Un "campo extra solo para este proyecto" es posible pero complica los reportes.*
6. ¿Faltan tipos de campo? Candidatos: moneda con símbolo, porcentaje, persona/contacto, tabla repetible, fórmula calculada, archivo como campo (no solo como pestaña), enlace URL, texto con formato.
7. ¿Validaciones más allá de "requerido"? Rango numérico, fecha fin posterior a inicio, formato (expresión regular), único dentro del padre.
8. ¿La condición de visibilidad de un campo basta con "campo = valor" o hace falta combinar condiciones (y / o)?
9. ¿Secciones o pestañas dentro de una pantalla? *El mock usa una sola grilla. Con muchos campos convendrá agrupar por secciones plegables.*

**Sobre archivos y constancias**

10. ¿Los archivos van solo en la pestaña del nodo, o también como campo de la ficha ("Contrato firmado: [archivo]")? *Asumí pestaña por nodo con clase Documento o Email.*
11. Para emails: ¿se sube el `.eml`/`.msg` y el sistema extrae de/para/asunto/fecha, o se registran a mano? *El mock lo registra a mano; la extracción automática es viable y recomendable.*
12. ¿Versionado de archivos (mismo nombre, nueva versión) o cada subida es un registro nuevo?
13. ¿Tamaño máximo, tipos permitidos, y dónde viven físicamente (disco del servidor, S3, GridFS)? *Se define al elegir tecnología; el modelo solo guarda una referencia.*
14. ¿Se necesita que un archivo se vea desde el padre (por ejemplo, "todos los archivos del proyecto incluyendo los de sus etapas")? *Fácil con `path`; no está en el mock.*

**Sobre el historial**

15. ¿Basta registrar campo, antes, después y fecha, o hace falta "quién" desde ya aunque no haya login? *Asumí sin usuario por ahora; el campo queda reservado.*
16. ¿El historial debe ser inmutable (nadie lo edita ni borra)? *Asumí que sí.*

**Sobre reportes**

17. ¿Qué formatos de salida importan primero: pantalla, Excel, PDF? *Asumí pantalla con copiar tabla.*
18. ¿Reportes con totales por grupo bastan, o hace falta pivote (filas × columnas, por ejemplo estado × área)?
19. ¿Reportes que crucen tipos (tareas con el nombre de su proyecto raíz)? *"Ubicación" ya muestra la ruta; un cruce real necesita `$lookup` sobre `path`, que es directo.*

**Sobre el menú y la navegación**

20. ¿Un solo menú global, o menús distintos según contexto (por ejemplo, dentro de un proyecto aparece un submenú propio)? *Asumí uno global; los destinos tipados permiten agregar "menú contextual por tipo" después.*
21. ¿Hace falta más de un nivel de anidación en el menú? *Asumí dos (opción y subopción).*

**Sobre el alcance del demo**

22. ¿El cliente verá el mock tal cual (datos de ejemplo de una obra industrial) o prefieren que la semilla refleje su rubro? *Es solo cambiar el JSON inicial.*
23. ¿Habrá un solo cliente (una instalación por cliente) o varios en la misma instalación? *Cambia el modelo: multiempresa exige un `tenantId` en todo documento desde el día uno.*

---

## 7. Anotado para el futuro (fuera de alcance ahora)

- Login, roles y permisos. Nota de diseño: los permisos también pueden ser definibles (por tipo de nodo, por campo, por rama del árbol) y guardarse en la misma colección de definición.
- Almacenamiento físico de archivos y visor integrado.
- Auditoría con usuario, IP y sesión.
- Multiempresa (`tenantId`).
- Notificaciones y avisos por fecha límite.
- Concurrencia: dos personas editando el mismo nodo (versión optimista por documento).
- API para integraciones y carga masiva (importar un Excel de tareas).
- Idiomas: las etiquetas ya viven en la definición, así que traducir es agregar un `label` por idioma.
- Versionado y ambientes de la definición (diseño → prueba → producción), con diff entre versiones.
- Búsqueda de texto libre sobre nombre, `datos` y contenido de archivos.
- Elección de tecnología (base de documentos, framework web, almacenamiento de archivos).
