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
{ "id": "etapa", "nombre": "Etapa", "icono": "◆", "nuevo": "Nueva etapa",
  "raiz": false,
  "formId": "f_etapa",
  "hijos": ["etapa", "tarea"],
  "columnas": ["estado", "avance", "fecha_fin"],
  "archivos": true }
```

`archivos` enciende o apaga la pestaña Archivos para todos los nodos de ese tipo.

`raiz` dice si el tipo puede crearse sin padre. Es una decisión explícita del cliente: puede haber un solo tipo raíz (Proyecto) o varios (Portafolio y Proyecto); el `+` del nivel raíz ofrece los marcados. `nuevo` es el texto del botón de crear, definible para concordar el género ("Nuevo proyecto", "Nueva etapa").

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

Tipos de campo del mock: texto, texto largo, número, fecha, lista desplegable, botones de opción, casilla sí/no, selección múltiple, referencia a otro nodo, archivo adjunto. Cada campo tiene: etiqueta, clave interna estable (`key`), requerido, visible, ancho, texto de ayuda, origen de opciones (lista compartida u opciones propias) y condición de visibilidad.

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

**`archivos`** — constancias. Nunca se borran físicamente (*futuro: papelera; ver 7.4*).

Dónde se pueden adjuntar es definible en dos niveles, y ambos pueden activarse o desactivarse en cualquier momento sin perder lo ya guardado:

| Nivel | Se define en | Qué produce | Documento resultante |
|---|---|---|---|
| Por tipo de nodo | Tipos de nodo › "Admite archivos adjuntos" | La pestaña **Archivos** del nodo, para constancias generales | `campoKey` ausente |
| Por campo | Pantalla › campo de tipo **Archivo adjunto** | Un lugar dentro de la ficha con significado propio ("Contrato firmado"), con condiciones como cualquier campo | `campoKey` = clave del campo |

Ejemplo: el cliente arranca con archivos solo en etapas; meses después pide archivos en el proyecto. Se marca la casilla en el tipo Proyecto y la pestaña aparece en todos los proyectos. Si desmarca, los archivos siguen en la colección; solo dejan de mostrarse. La pestaña Archivos reúne ambos orígenes y muestra en una columna desde qué campo se adjuntó cada uno.

```json
{ "_id": "a1", "nodoId": "p1", "campoKey": "contrato_firmado", "clase": "documento",
  "nombre": "Contrato CT-2026-014 firmado.pdf", "tamano": 1843210,
  "fecha": "2026-03-05", "origen": "Cliente" }
```

```json
{ "_id": "a2", "nodoId": "p1", "clase": "email",
  "nombre": "RE: Entrega de planos rev. B.eml", "tamano": 48210,
  "fecha": "2026-08-21", "origen": "Cliente",
  "email": { "de": "j.rojas@andinas.pe", "para": "m.quispe@sispla.pe",
             "asunto": "RE: Entrega de planos rev. B", "fechaEnvio": "2026-08-21" },
  "storageRef": "<futuro: S3 / GridFS / disco>" }
```

**`historial`** — cambio por cambio: nodo, cuándo, campo, antes, después. Se genera al guardar comparando el documento anterior con el nuevo. Base de la "constancia". En la implementación real se amplía al `log` completo de la sección 7.4.

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

10. ~~¿Los archivos van solo en la pestaña del nodo, o también como campo de la ficha?~~ **Resuelto (2026-09-11): ambos, y ambos definibles.** La pestaña se activa por tipo de nodo; el campo "Archivo adjunto" se coloca en cualquier pantalla. Ver sección 2.2.
11. Para emails: ¿se sube el `.eml`/`.msg` y el sistema extrae de/para/asunto/fecha, o se registran a mano? *El mock lo registra a mano; la extracción automática es viable y recomendable.*
12. ¿Versionado de archivos (mismo nombre, nueva versión) o cada subida es un registro nuevo?
13. ¿Tamaño máximo, tipos permitidos, y dónde viven físicamente (disco del servidor, S3, GridFS)? *Se define al elegir tecnología; el modelo solo guarda una referencia.*
14. ¿Se necesita que un archivo se vea desde el padre (por ejemplo, "todos los archivos del proyecto incluyendo los de sus etapas")? *Fácil con `path`; no está en el mock.*

**Sobre el historial**

15. ¿Basta registrar campo, antes, después y fecha, o hace falta "quién" desde ya aunque no haya login? *Asumí sin usuario por ahora; el campo queda reservado.*
16. ~~¿El historial debe ser inmutable (nadie lo edita ni borra)?~~ **Resuelto (2026-09-11): sí, y se amplía a un log completo de toda operación, con recuperación. Ver 7.4.**

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

## 7. Requisitos transversales para la implementación

Dos decisiones que atraviesan todo el diseño. No están en el mock, pero condicionan la elección de tecnología y la forma de programar cada módulo, así que quedan fijadas desde ahora.

### 7.1 Búsqueda en todos los niveles

Objetivo: que una persona encuentre un dato **sin saber en qué proyecto, etapa, tarea o archivo está**. Una sola caja de búsqueda, siempre visible, recorre todos los niveles de la base:

| Qué se busca | Dónde |
|---|---|
| Nodos | `nombre`, `codigo` y todo valor de texto dentro de `datos`, a cualquier profundidad del árbol |
| Archivos | nombre del archivo; en emails, de/para/asunto; *futuro:* texto extraído del contenido (PDF, Word, `.eml`) |
| Historial | valores "antes" y "después" (permite hallar un dato que alguien borró o cambió) |
| Definición | etiquetas de campos, opciones de listas, nombres de tipos y reportes, para que el consultor encuentre "dónde definí X" |

Reglas:

- **Resultado mixto.** Cada fila indica tipo de documento, ruta en el árbol (`path` resuelto a nombres), el campo donde apareció el texto y un enlace directo al nodo. Se agrupa por tipo y se ordena por relevancia.
- **Se busca por etiqueta, no solo por valor interno.** Buscar "En curso" debe hallar nodos con `estado: "en_curso"`. La búsqueda consulta los catálogos para traducir.
- **Filtros opcionales** por tipo de nodo, alcance (subárbol) y rango de fechas, con la misma lógica que los reportes.
- **Campos buscables se declaran en la pantalla.** Decisión del 2026-09-14: cada campo de una pantalla lleva una marca `buscable`; la búsqueda general recorre solo los campos marcados (más nombre y código, que siempre entran). Así la búsqueda es completamente definible por el cliente, igual que las columnas de los listados, y se evita indexar texto irrelevante. Marcar un campo nuevo como buscable no requiere programar nada: el índice se reconstruye a partir de la definición. Sustituye a la regla anterior de "nada que declarar".
- **Búsqueda local en los listados.** Cada listado de un tipo (Todos los proyectos, Todos los seguimientos) tiene su propia caja que filtra por código, nombre, ubicación y columnas visibles, y se pagina de a 20. Ya está en el mock; es un paliativo mientras no exista la búsqueda general.
- **Insensible a mayúsculas y tildes.** "planos" halla "Planos" y "Entrega de planós".
- **Varias palabras = AND.** El texto se parte por espacios y cada palabra debe aparecer en el registro, en cualquier orden y en cualquiera de los campos buscados: "zato pendiente" halla lo que tiene "zato" y "pendiente" aunque estén lejos. Sin comillas ni operadores: es la regla más simple que permite hallar cosas escondidas. Ya aplica en el mock al árbol y a los listados.

Implementación sugerida sobre MongoDB: un campo `texto` materializado por documento (concatenación de nombre, código y valores de `datos` ya traducidos a etiquetas), actualizado en cada guardado e indexado con índice de texto o Atlas Search; como alternativa, índice *wildcard* sobre `datos.*`. Para el contenido de archivos, extraer texto al subir y guardarlo en `archivos.texto` con el mismo esquema. En el mock basta una función `buscar(q)` que recorra nodos, archivos, historial y definición en memoria y devuelva filas con ese formato.

### 7.2 Interrelaciones y elección NoSQL

Casi todo está conectado, y las conexiones van a crecer: nodo ↔ padre e hijos (`path`), nodo ↔ archivos, nodo ↔ historial, nodo ↔ nodo (campo de tipo referencia), nodo ↔ definición (tipo, formulario, catálogo), reporte ↔ tipo. A medida que aparezcan contactos, contratos, partidas de presupuesto o empresas, surgirán relaciones que hoy no se conocen. El diseño debe permitir agregarlas sin migración y sin que las existentes se rompan.

Principios:

1. **Base de documentos para el núcleo.** MongoDB o compatible. Es lo que hace posible el objeto `datos` libre y la definición en caliente. Un motor relacional obligaría a una migración por cada campo o relación nueva, que es justo lo que se quiere evitar.
2. **Las relaciones son referencias por id dentro de documentos**, nunca columnas fijas ni tablas intermedias. Un enlace nuevo es un campo más de tipo referencia en la ficha, definido desde el diseñador; el campo declara a qué tipo apunta y con eso la pantalla, la búsqueda y los reportes saben cómo seguirlo.
3. **Navegables en ambos sentidos.** Desde un nodo se puede listar "quién me referencia" (`$lookup` sobre `datos.<campo>` o índice inverso). Ejemplo: desde un contacto, ver todas las tareas donde es responsable.
4. **Embeber lo que vive y muere con el nodo; referenciar lo que se comparte.** Filas de una tabla repetible van embebidas; contactos, catálogos y otros nodos van por referencia.
5. **Integridad blanda.** Borrar o mover un nodo no bloquea por referencias. La interfaz muestra la referencia huérfana marcada, y una tarea de verificación las lista para corregirlas. No se usan claves foráneas rígidas.
6. **`path` materializado como relación principal del árbol.** Permite subárbol completo, alcance de reportes y archivos heredados con una sola consulta. Si más adelante hacen falta preguntas de grafo profundas ("qué depende de qué a N saltos"), se evalúa `$graphLookup` primero; una base de grafos solo si no alcanza.
7. **Colección genérica de relaciones como salida de emergencia.** Si un cliente necesita un vínculo que no cabe como campo de ficha (muchos a muchos con atributos propios), se usa una colección `relaciones` con `{ de, a, tipo, datos }`, también definible, sin cambiar el modelo.


### 7.3 Árbol principal: orden, paginación y búsqueda por título

El árbol es el mismo componente en la página principal (a todo el ancho, titulada con los tipos raíz) y en el panel que acompaña a cada ficha. Reglas fijadas el 2026-09-11, ya implementadas en el mock:

- **Los nodos raíz más recientes van arriba.** Las raíces se ordenan por fecha de creación descendente (empate: código descendente). Los internos de un nodo conservan su orden de creación.
- **Paginación solo en el nivel raíz.** Las raíces son independientes entre sí y se muestran de a 10 por página. Los internos de un nodo nunca se paginan: una vez desplegado, la rama se ve completa. Al abrir un nodo, el árbol se coloca en la página donde está su nodo raíz. En la implementación real la consulta es `{ parentId: null }` con `sort creado desc`, `skip` y `limit`; el subárbol se trae aparte con `path`.
- **Búsqueda por título desde el árbol.** Junto a los iconos de desplegar y plegar hay una lupa que abre una caja de búsqueda. Busca en el `nombre` de todos los nodos del árbol, en todos los niveles, sin distinguir mayúsculas ni tildes. Muestra solo las coincidencias con sus ancestros desplegados y el término resaltado; mientras se busca no hay paginación. Es el primer escalón de la búsqueda global de 7.1: la misma caja crecerá para cubrir campos, archivos e historial, y el resultado mixto de 7.1 se presentará con esta misma forma de árbol filtrado.


### 7.4 Registro completo de cambios y recuperación

Requisito fijado el 2026-09-11: **todo cambio queda registrado con la información suficiente para deshacerlo.** El objetivo es que un error ocasional (borrar un elemento del árbol por equivocación, sobrescribir un campo, quitar un archivo) nunca implique pérdida de datos. No está en el mock, que hoy solo registra cambios de campos en `historial`.

Reglas:

- **Nada se borra físicamente.** Eliminar un nodo, un archivo o una opción de lista lo marca como borrado (`borradoEn`, `borradoPor`) y lo saca de las vistas. Los documentos siguen en su colección, y las consultas normales los excluyen con un filtro común. Esto extiende a los nodos la regla que ya tenían los archivos.
- **Un registro por operación, con el documento completo antes y después.** El `historial` actual guarda campo, antes y después; se amplía a un `log` con `{ fecha, usuario, coleccion, docId, operacion (crear, editar, borrar, mover, restaurar), antes, despues }`, donde `antes` y `despues` son el documento entero, no solo el campo tocado. Con ello se puede reconstruir el estado de cualquier documento en cualquier fecha sin depender de nada más.
- **Las operaciones sobre un subárbol se registran en bloque.** Borrar o mover un nodo con internos genera un registro por documento afectado, todos con el mismo `loteId`, para que "deshacer" restaure la rama completa de una vez, incluidos sus archivos.
- **Los cambios de definición también.** Pantallas, tipos, listas, menú y reportes son documentos como los demás y pasan por el mismo log. Quitar un campo o un tipo por error se revierte igual que un dato.
- **El log es de solo escritura.** Nadie lo edita ni lo borra desde la aplicación (responde la pregunta 16). Si por volumen hace falta archivar registros antiguos, se mueven a otra colección, no se eliminan.
- **Recuperación desde la interfaz.** Una papelera por tipo (nodos, archivos) con "Restaurar", y en el historial de cada nodo un "Volver a esta versión" que crea un nuevo cambio hacia adelante (nunca reescribe el pasado). Restaurar un nodo cuyo padre también fue borrado restaura primero al padre, o lo cuelga de la raíz si el usuario lo prefiere.
- **Respaldo aparte.** El log protege contra errores de uso; no reemplaza el respaldo de la base ante fallas técnicas. Ambos son necesarios.

Implementación sugerida en MongoDB: colección `log` con índices por `(coleccion, docId, fecha)` y por `loteId`; escritura del registro y del documento en la misma transacción. Alternativa si el volumen crece: *change streams* de MongoDB volcados a la colección `log`, que garantizan no perder ninguna operación aunque se escriba desde varios servicios.

---

### 7.5 Datos reales cargados desde SISPLA

Decisión fijada el 2026-09-14: el mock se carga con los datos reales del SISPLA (base `sispla_aig`, tablas `proyecto`, `subproyecto`, `seguimientos` y sus catálogos), con los nombres que el equipo usa en la práctica y no los que trae el sistema original:

| SISPLA (tabla) | Uso real | Tipo de nodo en el mock | Código |
|---|---|---|---|
| `proyecto` | se usa como portafolio | **Portafolio de proyectos** (raíz) | `PF-<id>` |
| `subproyecto` | es el proyecto | **Proyecto** | `PF-<id>.<n>` |
| `seguimientos` | actividad o tarea del proyecto | **Seguimiento** | `PF-<id>.<n>.<m>` |

Reglas de la carga (script `herramientas/gen-sispla-datos.js`, ver su README):

- Cada ficha conserva las etiquetas del formulario Blade original (Sponsor, Administrador, Unidad Gestora, Línea Estratégica, No Documento, Ticket, Costo por Hora, Costo Total, Días, Actividad…). "División Subproyectos" pasa a "División del proyecto".
- Los catálogos `tipo_proyecto`, `tipo_subproyecto`, `unidades_gestoras`, `areas`, `lineas_estrategicas`, `division_subproyectos`, `prioridades`, `estatus` (segmento Avances), `proveedor` y `grupos` se convierten en Listas de opciones; el valor guardado es el nombre en minúsculas sin tildes.
- `proyecto_area` y `proyecto_grupo` pasan a campos de selección múltiple del portafolio.
- Cada nodo guarda `sispla_id` con el id original para poder cruzarlo.
- Las personas responsables de un seguimiento (`responsable_seguimiento`) pasan a un campo de selección múltiple sobre la lista Personas, que trae solo nombre (sin correo, cédula ni teléfono) y solo a quienes ya son responsables de algo. El costo y la rata por hora de cada responsable no se cargan.
- Los `documentos` (actas, informes, notas, memos) se cargan como constancias en la pestaña Archivos. En SISPLA no están ligados a proyectos sino a entidades, así que la asignación es aproximada: cada documento va al proyecto donde la persona que lo registró es responsable del seguimiento con fecha planificada más cercana; los que no tienen esa relación van al portafolio "SIn Especificar". Se guardan sin archivo físico, con su descripción en la columna Detalle y la sigla de la entidad en Origen.
- `index.html` arranca con un subconjunto de estos mismos datos si no encuentra `sispla-datos.js`; un estado guardado en el navegador con versión anterior a 7 se reemplaza, porque el modelo cambió por completo.
- El prefijo del código correlativo de los nodos raíz se define por tipo en Tipos de nodo (`prefijo`); los portafolios usan `PF`.

## 8. Anotado para el futuro (fuera de alcance ahora)

- Login, roles y permisos. Nota de diseño: los permisos también pueden ser definibles (por tipo de nodo, por campo, por rama del árbol) y guardarse en la misma colección de definición.
- Almacenamiento físico de archivos y visor integrado.
- Auditoría con usuario, IP y sesión (el log de 7.4 ya reserva el campo `usuario`).
- Multiempresa (`tenantId`).
- Notificaciones y avisos por fecha límite.
- Concurrencia: dos personas editando el mismo nodo (versión optimista por documento).
- API para integraciones y carga masiva (importar un Excel de tareas).
- Idiomas: las etiquetas ya viven en la definición, así que traducir es agregar un `label` por idioma.
- Versionado y ambientes de la definición (diseño → prueba → producción), con diff entre versiones.
- Búsqueda de texto libre: requisitos fijados en la sección 7.1; falta implementarla en el mock.
- Elección de tecnología: la base de documentos queda decidida por la sección 7.2; faltan framework web y almacenamiento de archivos.
