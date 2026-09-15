# SisPla — demo

Mock navegable de una aplicación de portafolios, proyectos y seguimientos en un árbol multinivel, que se define a sí misma (pantallas, tipos de nodo, listas, menú y reportes editables en caliente). Todo vive en un solo archivo, sin backend ni dependencias.

- Diseño, modelo de documentos y decisiones: [docs/DISENO.md](docs/DISENO.md).
- Requisitos transversales (búsqueda en todos los niveles, interrelaciones y base NoSQL): sección 7 del mismo documento.

## Ejecutar

Sin instalación ni build. Hay dos formas:

**Abrir el archivo** (para revisar en la propia máquina). Desde PowerShell, en la carpeta del proyecto:

```powershell
Invoke-Item .\index.html
```

Los cambios quedan en el `localStorage` del navegador y, si se enlaza un archivo con **Guardar**, también en `sispla-datos.js` (ver más abajo).

**Con servidor** (para dejar la demo en un server pequeño y que nada de lo que ingrese el cliente se pierda). Requiere Node 18 o superior, sin dependencias:

```powershell
node servidor.js          # http://localhost:8080/
node servidor.js 3000     # otro puerto (o variable PORT)
```

El servidor sirve la carpeta y guarda el estado completo (definición y datos) en `datos/estado.json`; cada cambio hecho en la demo se envía solo, y el pie del menú muestra la hora del último guardado. Detalles:

- La primera vez, sin estado guardado, el servidor arranca con lo que trae `sispla-datos.js` (la semilla real del SISPLA). Después, `datos/estado.json` manda y `sispla-datos.js` deja de usarse.
- `datos/historial/` conserva copias anteriores (una cada 5 minutos como máximo, 30 en total): si alguien borra o rompe algo, se recupera copiando la que convenga sobre `estado.json` y reiniciando.
- Si el envío falla (se cayó el servidor, sin red), los cambios siguen en el navegador y el pie ofrece **Reintentar**. Al volver a abrir la demo, se sube lo que sea más nuevo.
- Variables opcionales: `SISPLA_DATOS` (carpeta de datos), `SISPLA_HISTORIAL` (copias a conservar), `SISPLA_INTERVALO` (segundos entre copias).
- No hay autenticación ni usuarios: cualquiera con acceso a la URL ve y modifica todo. Está pensado para una red interna, una VPN o un proxy (nginx, Caddy, IIS) que ponga usuario y clave delante.
- Para dejarlo corriendo como servicio: en Linux, una unidad `systemd` con `ExecStart=/usr/bin/node /ruta/sispla-demo/servidor.js` y `Restart=always`; en Windows, [NSSM](https://nssm.cc/) o una tarea programada al inicio. La carpeta `datos/` es lo único que hay que respaldar.

## Guardar lo que se ingresa (y llevarlo a otra máquina)

Al abrir `index.html` como archivo (sin servidor), los cambios quedan en el `localStorage` del navegador. Además, la demo puede escribirlos sola en `sispla-datos.js`, junto a `index.html`:

1. En el pie del menú lateral, pulsar **Guardar** y elegir `sispla-datos.js` en la carpeta del proyecto (una sola vez; el navegador recuerda el archivo).
2. Desde ese momento cada cambio se escribe solo en el archivo. El pie del menú muestra la hora del último guardado.
3. Al volver a abrir la página, Chrome/Edge piden confirmar el acceso una vez: un clic en **Guardar** y sigue automático.

Esto usa la File System Access API (Chrome y Edge, también con `file://`). En Firefox o Safari el botón dice **Descargar copia** y baja el archivo para copiarlo a mano junto a `index.html`.

Para llevar el estado a otra máquina basta subir `sispla-datos.js` al repositorio:

```powershell
git add sispla-datos.js
git commit -m "Estado de la demo"
```

En la otra máquina, tras `git pull`, abrir `index.html`: si el archivo es más nuevo que lo guardado en ese navegador, la demo arranca con esos valores y lo avisa. Si alguien envía un `sispla-datos.js` por otro medio, el botón **Cargar…** lo abre y reemplaza lo que hay.

No hay pruebas automatizadas.
