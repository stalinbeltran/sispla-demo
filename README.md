# SisPla — demo

Mock navegable de una aplicación de portafolios, proyectos y seguimientos en un árbol multinivel, que se define a sí misma (pantallas, tipos de nodo, listas, menú y reportes editables en caliente). Todo vive en un solo archivo, sin backend ni dependencias.

- Diseño, modelo de documentos y decisiones: [docs/DISENO.md](docs/DISENO.md).
- Requisitos transversales (búsqueda en todos los niveles, interrelaciones y base NoSQL): sección 7 del mismo documento.

## Ejecutar

No hay instalación ni build. Desde PowerShell, en la carpeta del proyecto:

```powershell
Invoke-Item .\index.html
```

Abre el mock en el navegador predeterminado. Los cambios que se hagan en el diseñador se guardan en `localStorage` del navegador; para volver a la semilla inicial, usar el botón **Restablecer demo** al pie del menú lateral.

## Guardar lo que se ingresa (y llevarlo a otra máquina)

Los cambios (definiciones y datos) quedan siempre en el `localStorage` del navegador. Además, la demo puede escribirlos sola en `sispla-datos.js`, junto a `index.html`:

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

**Restablecer demo** también se escribe en el archivo enlazado: si se quiere conservar lo ingresado, hacer antes un `git commit` de `sispla-datos.js`.

No hay pruebas automatizadas.
