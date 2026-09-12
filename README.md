# SisPla — demo

Mock navegable de una aplicación de proyectos multinivel que se define a sí misma (pantallas, tipos de nodo, listas, menú y reportes editables en caliente). Todo vive en un solo archivo, sin backend ni dependencias.

- Diseño, modelo de documentos y decisiones: [docs/DISENO.md](docs/DISENO.md).
- Requisitos transversales (búsqueda en todos los niveles, interrelaciones y base NoSQL): sección 7 del mismo documento.

## Ejecutar

No hay instalación ni build. Desde PowerShell, en la carpeta del proyecto:

```powershell
Invoke-Item .\index.html
```

Abre el mock en el navegador predeterminado. Los cambios que se hagan en el diseñador se guardan en `localStorage` del navegador; para volver a la semilla inicial, usar el botón **Restablecer demo** al pie del menú lateral.

## Llevar lo definido a otra máquina

Lo que se cambia en la demo (definiciones y datos) queda en el `localStorage` del navegador. Para llevarlo a otra máquina:

1. En la demo, pie del menú lateral, pulsar **Guardar copia**. El navegador descarga `sispla-datos.js`.
2. Copiar ese archivo junto a `index.html` (reemplazando el anterior si existe) y subirlo al repositorio:

```powershell
Copy-Item "$env:USERPROFILE\Downloads\sispla-datos.js" .\sispla-datos.js
git add sispla-datos.js
git commit -m "Estado de la demo"
```

3. En la otra máquina, tras `git pull`, abrir `index.html`. Si el archivo es más nuevo que lo guardado en ese navegador, la demo arranca con esos valores y lo avisa. Si no hay archivo, no pasa nada.

No hay pruebas automatizadas.
