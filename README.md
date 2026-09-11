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

No hay pruebas automatizadas.
