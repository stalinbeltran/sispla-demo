/* Estado de la demo SisPla guardado el 2026-09-12T00:13:19.356Z con "Guardar copia". No editar a mano. */
window.SISPLA_GUARDADO={
 "guardadoEn": 1789171999356,
 "estado": {
  "meta": {
   "tipos": [
    {
     "id": "proyecto",
     "nombre": "Proyecto",
     "icono": "",
     "formId": "f_proyecto",
     "hijos": [
      "etapa",
      "tarea"
     ],
     "columnas": [
      "sponsor",
      "project_manager",
      "estado"
     ],
     "archivos": true,
     "nuevo": "Nuevo proyecto"
    },
    {
     "id": "etapa",
     "nombre": "Entregable o xxxxx",
     "icono": "",
     "formId": "f_etapa",
     "hijos": [
      "etapa",
      "tarea"
     ],
     "columnas": [
      "estado",
      "avance",
      "fecha_fin"
     ],
     "archivos": true,
     "nuevo": "Nueva etapa"
    },
    {
     "id": "tarea",
     "nombre": "Tarea",
     "icono": "",
     "formId": "f_tarea",
     "hijos": [],
     "columnas": [
      "estado",
      "prioridad",
      "responsable",
      "fecha_limite"
     ],
     "archivos": true,
     "nuevo": "Nueva tarea"
    },
    {
     "id": "portafolio_de_proyectos",
     "nombre": "Portafolio de Proyectos",
     "icono": "",
     "formId": "f_portafolio_de_proyectos",
     "hijos": [
      "proyecto"
     ],
     "columnas": [],
     "archivos": false,
     "nuevo": "Nuevo Portafolio"
    }
   ],
   "formularios": {
    "f_proyecto": {
     "id": "f_proyecto",
     "nombre": "Ficha de proyecto",
     "campos": [
      {
       "key": "sponsor",
       "label": "Sponsor",
       "tipo": "lista",
       "catalogo": "unidades",
       "requerido": true,
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "project_manager",
       "label": "Project Manager",
       "tipo": "lista",
       "catalogo": "unidades",
       "requerido": true,
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "cliente",
       "label": "Cliente",
       "tipo": "texto",
       "requerido": true,
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "estado",
       "label": "Estado",
       "tipo": "lista",
       "catalogo": "estado",
       "requerido": true,
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "responsable",
       "label": "Responsable",
       "tipo": "texto",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "area",
       "label": "Área",
       "tipo": "lista",
       "catalogo": "area",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "fecha_inicio",
       "label": "Fecha de inicio",
       "tipo": "fecha",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "fecha_fin",
       "label": "Fecha de fin prevista",
       "tipo": "fecha",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "presupuesto",
       "label": "Presupuesto (USD)",
       "tipo": "numero",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "tiene_contrato",
       "label": "Tiene contrato firmado",
       "tipo": "checkbox",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "nro_contrato",
       "label": "N° de contrato",
       "tipo": "texto",
       "visible": true,
       "ancho": "half",
       "visibleSi": {
        "campo": "tiene_contrato",
        "valor": "true"
       },
       "ayuda": "Solo se muestra si hay contrato firmado"
      },
      {
       "key": "contrato_firmado",
       "label": "Contrato firmado (archivo)",
       "tipo": "archivo",
       "visible": true,
       "ancho": "full",
       "visibleSi": {
        "campo": "tiene_contrato",
        "valor": "true"
       },
       "ayuda": "Adjunta aquí el contrato; también aparece en la pestaña Archivos"
      },
      {
       "key": "descripcion",
       "label": "Descripción / alcance",
       "tipo": "textolargo",
       "visible": true,
       "ancho": "full"
      }
     ]
    },
    "f_etapa": {
     "id": "f_etapa",
     "nombre": "Ficha de etapa",
     "campos": [
      {
       "key": "estado",
       "label": "Estado",
       "tipo": "lista",
       "catalogo": "estado",
       "requerido": true,
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "avance",
       "label": "Avance (%)",
       "tipo": "numero",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "fecha_inicio",
       "label": "Inicio",
       "tipo": "fecha",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "fecha_fin",
       "label": "Fin",
       "tipo": "fecha",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "entregables",
       "label": "Entregables esperados",
       "tipo": "multiple",
       "opciones": [
        {
         "valor": "informe",
         "etiqueta": "Informe"
        },
        {
         "valor": "planos",
         "etiqueta": "Planos"
        },
        {
         "valor": "acta",
         "etiqueta": "Acta"
        },
        {
         "valor": "presupuesto",
         "etiqueta": "Presupuesto"
        }
       ],
       "visible": true,
       "ancho": "full"
      },
      {
       "key": "observaciones",
       "label": "Observaciones",
       "tipo": "textolargo",
       "visible": true,
       "ancho": "full"
      }
     ]
    },
    "f_tarea": {
     "id": "f_tarea",
     "nombre": "Ficha de tarea",
     "campos": [
      {
       "key": "estado",
       "label": "Estado",
       "tipo": "lista",
       "catalogo": "estado",
       "requerido": true,
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "prioridad",
       "label": "Prioridad",
       "tipo": "radio",
       "catalogo": "prioridad",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "responsable",
       "label": "Responsable",
       "tipo": "texto",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "fecha_limite",
       "label": "Fecha límite",
       "tipo": "fecha",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "horas",
       "label": "Horas estimadas",
       "tipo": "numero",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "depende_de",
       "label": "Depende de",
       "tipo": "referencia",
       "refTipo": "tarea",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "notas",
       "label": "Notas",
       "tipo": "textolargo",
       "visible": true,
       "ancho": "full"
      }
     ]
    },
    "f_portafolio_de_proyectos": {
     "id": "f_portafolio_de_proyectos",
     "nombre": "Ficha de portafolio de proyectos",
     "campos": [
      {
       "key": "portafolio",
       "label": "Portafolio",
       "tipo": "lista",
       "requerido": true,
       "visible": true,
       "ancho": "full",
       "catalogo": "portafolios_de_proyectos"
      }
     ]
    }
   },
   "catalogos": {
    "unidades": {
     "id": "unidades",
     "nombre": "Unidades (sponsor / PM)",
     "opciones": [
      {
       "valor": "sin_especificar",
       "etiqueta": "Sin Especificar",
       "color": "#8A94A0"
      },
      {
       "valor": "di",
       "etiqueta": "DI",
       "color": "#2E5C8A"
      },
      {
       "valor": "oirh",
       "etiqueta": "OIRH",
       "color": "#6B5B95"
      },
      {
       "valor": "dici",
       "etiqueta": "DICI",
       "color": "#2E7D5B"
      },
      {
       "valor": "dti",
       "etiqueta": "DTI",
       "color": "#C08A1E"
      },
      {
       "valor": "despacho_superior",
       "etiqueta": "Despacho Superior",
       "color": "#B23A3A"
      },
      {
       "valor": "ciencias_informacion",
       "etiqueta": "Ciencias de la Información",
       "color": "#3A8A8A"
      },
      {
       "valor": "director",
       "etiqueta": "Director",
       "color": "#5A6B7C"
      },
      {
       "valor": "direccion_ciencias_informacion",
       "etiqueta": "Dirección de Ciencias de la Información",
       "color": "#2E7D8A"
      }
     ]
    },
    "estado": {
     "id": "estado",
     "nombre": "Estados",
     "opciones": [
      {
       "valor": "planificado",
       "etiqueta": "Planificado",
       "color": "#8A94A0"
      },
      {
       "valor": "en_curso",
       "etiqueta": "En curso",
       "color": "#2E5C8A"
      },
      {
       "valor": "en_espera",
       "etiqueta": "En espera",
       "color": "#C08A1E"
      },
      {
       "valor": "cerrado",
       "etiqueta": "Cerrado",
       "color": "#2E7D5B"
      }
     ]
    },
    "prioridad": {
     "id": "prioridad",
     "nombre": "Prioridades",
     "opciones": [
      {
       "valor": "alta",
       "etiqueta": "Alta",
       "color": "#B23A3A"
      },
      {
       "valor": "media",
       "etiqueta": "Media",
       "color": "#C08A1E"
      },
      {
       "valor": "baja",
       "etiqueta": "Baja",
       "color": "#8A94A0"
      }
     ]
    },
    "area": {
     "id": "area",
     "nombre": "Áreas",
     "opciones": [
      {
       "valor": "obra_civil",
       "etiqueta": "Obra civil",
       "color": "#6B5B95"
      },
      {
       "valor": "electrico",
       "etiqueta": "Eléctrico",
       "color": "#2E5C8A"
      },
      {
       "valor": "legal",
       "etiqueta": "Legal",
       "color": "#8A94A0"
      },
      {
       "valor": "administrativo",
       "etiqueta": "Administrativo",
       "color": "#2E7D5B"
      }
     ]
    },
    "portafolios_de_proyectos": {
     "id": "portafolios_de_proyectos",
     "nombre": "Portafolios de Proyectos",
     "opciones": [
      {
       "valor": "bus_de_interoperabilidad",
       "etiqueta": "Bus de Interoperabilidad",
       "color": "#8A94A0"
      },
      {
       "valor": "panama_tramita",
       "etiqueta": "Panamá Tramita",
       "color": "#8A94A0"
      }
     ]
    }
   },
   "menu": [
    {
     "id": "m1",
     "label": "Proyectos",
     "icono": "▣",
     "tipo": "arbol",
     "visible": true
    },
    {
     "id": "m2",
     "label": "Todas las tareas",
     "icono": "▸",
     "tipo": "lista",
     "target": "tarea",
     "visible": true
    },
    {
     "id": "m3",
     "label": "Reportes",
     "icono": "≡",
     "tipo": "reportes",
     "visible": true
    },
    {
     "id": "m4",
     "label": "Tareas por estado",
     "icono": "",
     "tipo": "reporte",
     "target": "r1",
     "visible": true,
     "sub": true
    },
    {
     "id": "m5",
     "label": "Configuración",
     "tipo": "grupo",
     "visible": true
    },
    {
     "id": "m6",
     "label": "Pantallas",
     "icono": "⊞",
     "tipo": "config",
     "target": "formularios",
     "visible": true
    },
    {
     "id": "m7",
     "label": "Tipos de nodo",
     "icono": "⋔",
     "tipo": "config",
     "target": "tipos",
     "visible": true
    },
    {
     "id": "m8",
     "label": "Listas de opciones",
     "icono": "☰",
     "tipo": "config",
     "target": "catalogos",
     "visible": true
    },
    {
     "id": "m9",
     "label": "Menú",
     "icono": "⇅",
     "tipo": "config",
     "target": "menu",
     "visible": true
    },
    {
     "id": "m10",
     "label": "JSON del sistema",
     "icono": "{}",
     "tipo": "config",
     "target": "json",
     "visible": true
    },
    {
     "id": "m11",
     "label": "Ayuda y glosario",
     "icono": "?",
     "tipo": "config",
     "target": "ayuda",
     "visible": true
    }
   ],
   "reportes": [
    {
     "id": "r1",
     "nombre": "Tareas por estado",
     "tipo": "tarea",
     "alcance": "",
     "campos": [
      "nombre",
      "ruta",
      "prioridad",
      "responsable",
      "fecha_limite",
      "horas"
     ],
     "filtro": {
      "campo": "",
      "valor": ""
     },
     "agrupar": "estado"
    },
    {
     "id": "r2",
     "nombre": "Proyectos por sponsor",
     "tipo": "proyecto",
     "alcance": "",
     "campos": [
      "codigo",
      "nombre",
      "project_manager",
      "estado",
      "presupuesto"
     ],
     "filtro": {
      "campo": "",
      "valor": ""
     },
     "agrupar": "sponsor"
    }
   ]
  },
  "datos": {
   "nodos": [
    {
     "id": "p1",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-001",
     "nombre": "Refrendo Electrónico y Gestión de Cobro en Línea",
     "creado": "2026-03-02",
     "datos": {
      "sponsor": "di",
      "project_manager": "di",
      "cliente": "Contraloría General",
      "estado": "en_curso",
      "responsable": "M. Quispe",
      "area": "administrativo",
      "fecha_inicio": "2026-03-02",
      "fecha_fin": "2026-12-18",
      "presupuesto": 1850000,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-014",
      "descripcion": "Plataforma de refrendo electrónico de documentos y cobro en línea, integrada con las entidades recaudadoras."
     }
    },
    {
     "id": "e1",
     "tipo": "etapa",
     "parentId": "p1",
     "codigo": "PRJ-001.1",
     "nombre": "Licitación",
     "creado": "2026-03-02",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-03-02",
      "fecha_fin": "2026-04-15",
      "entregables": [
       "informe",
       "acta"
      ],
      "observaciones": "Adjudicado a Soluciones Digitales S.A."
     }
    },
    {
     "id": "t1",
     "tipo": "tarea",
     "parentId": "e1",
     "codigo": "PRJ-001.1.1",
     "nombre": "Revisar pliego de cargos",
     "creado": "2026-03-03",
     "datos": {
      "estado": "cerrado",
      "prioridad": "alta",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-03-14",
      "horas": 16
     }
    },
    {
     "id": "t2",
     "tipo": "tarea",
     "parentId": "e1",
     "codigo": "PRJ-001.1.2",
     "nombre": "Consolidar consultas de proponentes",
     "creado": "2026-03-10",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-03-28",
      "horas": 8,
      "depende_de": "t1"
     }
    },
    {
     "id": "e2",
     "tipo": "etapa",
     "parentId": "p1",
     "codigo": "PRJ-001.2",
     "nombre": "Desarrollo",
     "creado": "2026-04-20",
     "datos": {
      "estado": "en_curso",
      "avance": 35,
      "fecha_inicio": "2026-04-20",
      "fecha_fin": "2026-11-30",
      "entregables": [
       "planos",
       "acta",
       "informe"
      ]
     }
    },
    {
     "id": "e3",
     "tipo": "etapa",
     "parentId": "e2",
     "codigo": "PRJ-001.2.1",
     "nombre": "Módulo de cobro en línea",
     "creado": "2026-04-20",
     "datos": {
      "estado": "en_curso",
      "avance": 60,
      "fecha_inicio": "2026-04-20",
      "fecha_fin": "2026-09-30",
      "entregables": [
       "planos"
      ]
     }
    },
    {
     "id": "t3",
     "tipo": "tarea",
     "parentId": "e3",
     "codigo": "PRJ-001.2.1.1",
     "nombre": "Integración con pasarela de pagos",
     "creado": "2026-08-01",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-09-19",
      "horas": 40
     }
    },
    {
     "id": "t4",
     "tipo": "tarea",
     "parentId": "e2",
     "codigo": "PRJ-001.2.2",
     "nombre": "Aprobar diseño de interfaz rev. B",
     "creado": "2026-08-20",
     "datos": {
      "estado": "en_espera",
      "prioridad": "media",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-09-15",
      "horas": 6,
      "notas": "Esperando respuesta del sponsor sobre observaciones."
     }
    },
    {
     "id": "p2",
     "tipo": "proyecto",
     "parentId": "p1",
     "codigo": "PRJ-001.3",
     "nombre": "Portal ciudadano de pagos",
     "creado": "2026-06-10",
     "datos": {
      "sponsor": "di",
      "project_manager": "dici",
      "cliente": "Contraloría General",
      "estado": "planificado",
      "responsable": "A. Torres",
      "area": "administrativo",
      "fecha_inicio": "2026-10-01",
      "fecha_fin": "2026-12-10",
      "presupuesto": 320000,
      "tiene_contrato": false,
      "descripcion": "Proyecto interno: portal público para consulta y pago de trámites refrendados."
     }
    },
    {
     "id": "g2",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-002",
     "nombre": "integracion con DGI",
     "creado": "2026-04-30",
     "datos": {
      "sponsor": "sin_especificar",
      "project_manager": "sin_especificar",
      "cliente": "Ministerio de Economía y Finanzas",
      "estado": "en_espera",
      "responsable": "C. Vega",
      "area": "legal",
      "fecha_inicio": "2026-04-30",
      "fecha_fin": "2026-12-10",
      "presupuesto": 1245000,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-033",
      "descripcion": ""
     }
    },
    {
     "id": "ndb8el1",
     "tipo": "tarea",
     "parentId": "g2",
     "codigo": "PRJ-002.1",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-06-01",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-07-18",
      "horas": 9,
      "notas": ""
     }
    },
    {
     "id": "nqc6a5q",
     "tipo": "etapa",
     "parentId": "g2",
     "codigo": "PRJ-002.2",
     "nombre": "Capacitación",
     "creado": "2026-07-09",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-07-09",
      "fecha_fin": "2026-09-27",
      "entregables": [
       "presupuesto",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nqj5v2t",
     "tipo": "etapa",
     "parentId": "nqc6a5q",
     "codigo": "PRJ-002.2.1",
     "nombre": "Migración de datos",
     "creado": "2026-07-09",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-07-09",
      "fecha_fin": "2026-10-16",
      "entregables": [
       "planos",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n2q3etg",
     "tipo": "tarea",
     "parentId": "nqj5v2t",
     "codigo": "PRJ-002.2.1.1",
     "nombre": "Solicitud de cambio N° 3",
     "creado": "2026-07-09",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-08-26",
      "horas": 44,
      "notas": ""
     }
    },
    {
     "id": "nxemkr0",
     "tipo": "tarea",
     "parentId": "nqj5v2t",
     "codigo": "PRJ-002.2.1.2",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-07-09",
     "datos": {
      "estado": "cerrado",
      "prioridad": "baja",
      "responsable": "C. Vega",
      "fecha_limite": "2026-07-21",
      "horas": 43,
      "notas": ""
     }
    },
    {
     "id": "nxr4qv5",
     "tipo": "tarea",
     "parentId": "nqc6a5q",
     "codigo": "PRJ-002.2.2",
     "nombre": "Configuración de servidores",
     "creado": "2026-07-09",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-07-24",
      "horas": 7,
      "notas": ""
     }
    },
    {
     "id": "n7cbz7i",
     "tipo": "tarea",
     "parentId": "nqc6a5q",
     "codigo": "PRJ-002.2.3",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-07-09",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-09-07",
      "horas": 35,
      "notas": ""
     }
    },
    {
     "id": "n5h0jqe",
     "tipo": "tarea",
     "parentId": "nqc6a5q",
     "codigo": "PRJ-002.2.4",
     "nombre": "Publicación en producción",
     "creado": "2026-07-09",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-08-20",
      "horas": 27,
      "notas": ""
     }
    },
    {
     "id": "n2szcea",
     "tipo": "etapa",
     "parentId": "g2",
     "codigo": "PRJ-002.3",
     "nombre": "Diseño",
     "creado": "2026-08-16",
     "datos": {
      "estado": "en_curso",
      "avance": 6,
      "fecha_inicio": "2026-08-16",
      "fecha_fin": "2026-09-10",
      "entregables": [
       "acta",
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n69d159",
     "tipo": "tarea",
     "parentId": "n2szcea",
     "codigo": "PRJ-002.3.1",
     "nombre": "Documentación técnica",
     "creado": "2026-08-16",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-09-14",
      "horas": 10,
      "notas": ""
     }
    },
    {
     "id": "n1hj59b",
     "tipo": "tarea",
     "parentId": "n2szcea",
     "codigo": "PRJ-002.3.2",
     "nombre": "Validación con la entidad",
     "creado": "2026-08-16",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-10-02",
      "horas": 35,
      "notas": ""
     }
    },
    {
     "id": "g3",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-003",
     "nombre": "Recursos Humanos",
     "creado": "2026-08-24",
     "datos": {
      "sponsor": "oirh",
      "project_manager": "oirh",
      "cliente": "Ministerio de Economía y Finanzas",
      "estado": "en_curso",
      "responsable": "A. Torres",
      "area": "legal",
      "fecha_inicio": "2026-08-24",
      "fecha_fin": "2026-12-14",
      "presupuesto": 1397500,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-002",
      "descripcion": ""
     }
    },
    {
     "id": "ni80cpe",
     "tipo": "proyecto",
     "parentId": "g3",
     "codigo": "PRJ-003.1",
     "nombre": "Mesa de ayuda",
     "creado": "2026-09-20",
     "datos": {
      "sponsor": "di",
      "project_manager": "di",
      "cliente": "Autoridad del Canal",
      "estado": "en_espera",
      "responsable": "C. Vega",
      "area": "obra_civil",
      "fecha_inicio": "2026-09-20",
      "fecha_fin": "2027-06-02",
      "presupuesto": 2195000,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-094",
      "descripcion": ""
     }
    },
    {
     "id": "newoj71",
     "tipo": "tarea",
     "parentId": "ni80cpe",
     "codigo": "PRJ-003.1.1",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-09-20",
     "datos": {
      "estado": "planificado",
      "prioridad": "media",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-11-01",
      "horas": 80,
      "notas": ""
     }
    },
    {
     "id": "nuy9f0h",
     "tipo": "etapa",
     "parentId": "g3",
     "codigo": "PRJ-003.2",
     "nombre": "Desarrollo",
     "creado": "2026-10-05",
     "datos": {
      "estado": "en_curso",
      "avance": 51,
      "fecha_inicio": "2026-10-05",
      "fecha_fin": "2026-10-26",
      "entregables": [
       "presupuesto",
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n5s9luj",
     "tipo": "tarea",
     "parentId": "nuy9f0h",
     "codigo": "PRJ-003.2.1",
     "nombre": "Configuración de servidores",
     "creado": "2026-10-05",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "C. Vega",
      "fecha_limite": "2026-12-03",
      "horas": 56,
      "notas": ""
     }
    },
    {
     "id": "n811u0h",
     "tipo": "etapa",
     "parentId": "g3",
     "codigo": "PRJ-003.3",
     "nombre": "Capacitación",
     "creado": "2026-12-07",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-12-07",
      "fecha_fin": "2027-03-07",
      "entregables": [
       "informe",
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n3qqw9j",
     "tipo": "tarea",
     "parentId": "n811u0h",
     "codigo": "PRJ-003.3.1",
     "nombre": "Análisis de vulnerabilidades",
     "creado": "2026-12-07",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "C. Vega",
      "fecha_limite": "2027-01-12",
      "horas": 31,
      "notas": ""
     }
    },
    {
     "id": "nfwcat1",
     "tipo": "tarea",
     "parentId": "n811u0h",
     "codigo": "PRJ-003.3.2",
     "nombre": "Solicitud de cambio N° 3",
     "creado": "2026-12-07",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-12-17",
      "horas": 68,
      "notas": ""
     }
    },
    {
     "id": "ntv4syw",
     "tipo": "etapa",
     "parentId": "g3",
     "codigo": "PRJ-003.4",
     "nombre": "Pruebas",
     "creado": "2026-12-30",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-12-30",
      "fecha_fin": "2027-02-09",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "ne2likr",
     "tipo": "tarea",
     "parentId": "g3",
     "codigo": "PRJ-003.5",
     "nombre": "Validación con la entidad",
     "creado": "2027-01-26",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "P. Salazar",
      "fecha_limite": "2027-03-18",
      "horas": 29,
      "notas": ""
     }
    },
    {
     "id": "g4",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-004",
     "nombre": "Interoperabilidad y Bus de Servicio",
     "creado": "2026-05-23",
     "datos": {
      "sponsor": "dici",
      "project_manager": "dici",
      "cliente": "Ministerio de Educación",
      "estado": "planificado",
      "responsable": "P. Salazar",
      "area": "administrativo",
      "fecha_inicio": "2026-05-23",
      "fecha_fin": "2026-07-26",
      "presupuesto": 1107500,
      "tiene_contrato": false,
      "nro_contrato": "",
      "descripcion": ""
     }
    },
    {
     "id": "n8aa3lk",
     "tipo": "etapa",
     "parentId": "g4",
     "codigo": "PRJ-004.1",
     "nombre": "Capacitación",
     "creado": "2026-06-16",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-06-16",
      "fecha_fin": "2026-07-21",
      "entregables": [
       "acta",
       "informe",
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n6kbahz",
     "tipo": "tarea",
     "parentId": "n8aa3lk",
     "codigo": "PRJ-004.1.1",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-06-16",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-06-25",
      "horas": 55,
      "notas": ""
     }
    },
    {
     "id": "nzi5l3v",
     "tipo": "tarea",
     "parentId": "n8aa3lk",
     "codigo": "PRJ-004.1.2",
     "nombre": "Informe mensual de avance",
     "creado": "2026-06-16",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "C. Vega",
      "fecha_limite": "2026-07-20",
      "horas": 63,
      "notas": ""
     }
    },
    {
     "id": "nfucj2l",
     "tipo": "etapa",
     "parentId": "g4",
     "codigo": "PRJ-004.2",
     "nombre": "Diseño",
     "creado": "2026-06-16",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-06-16",
      "fecha_fin": "2026-09-25",
      "entregables": [
       "acta",
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nm894vw",
     "tipo": "tarea",
     "parentId": "nfucj2l",
     "codigo": "PRJ-004.2.1",
     "nombre": "Documentación técnica",
     "creado": "2026-06-16",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-08-15",
      "horas": 57,
      "notas": ""
     }
    },
    {
     "id": "n2d6rm8",
     "tipo": "tarea",
     "parentId": "nfucj2l",
     "codigo": "PRJ-004.2.2",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-06-16",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-08-12",
      "horas": 65,
      "notas": ""
     }
    },
    {
     "id": "nssc6xj",
     "tipo": "proyecto",
     "parentId": "g4",
     "codigo": "PRJ-004.3",
     "nombre": "Integración con entidades",
     "creado": "2026-08-12",
     "datos": {
      "sponsor": "di",
      "project_manager": "director",
      "cliente": "Ministerio de Salud",
      "estado": "cerrado",
      "responsable": "C. Vega",
      "area": "legal",
      "fecha_inicio": "2026-08-12",
      "fecha_fin": "2027-05-13",
      "presupuesto": 297500,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-061",
      "descripcion": ""
     }
    },
    {
     "id": "nwou5nc",
     "tipo": "tarea",
     "parentId": "nssc6xj",
     "codigo": "PRJ-004.3.1",
     "nombre": "Gestión de accesos",
     "creado": "2026-08-12",
     "datos": {
      "estado": "en_espera",
      "prioridad": "baja",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-10-11",
      "horas": 22,
      "notas": ""
     }
    },
    {
     "id": "n1p6pbd",
     "tipo": "etapa",
     "parentId": "g4",
     "codigo": "PRJ-004.4",
     "nombre": "Adquisiciones",
     "creado": "2026-08-23",
     "datos": {
      "estado": "en_curso",
      "avance": 66,
      "fecha_inicio": "2026-08-23",
      "fecha_fin": "2026-11-06",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n1k6dtl",
     "tipo": "tarea",
     "parentId": "n1p6pbd",
     "codigo": "PRJ-004.4.1",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-08-23",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-09-07",
      "horas": 57,
      "notas": ""
     }
    },
    {
     "id": "nn4sgix",
     "tipo": "tarea",
     "parentId": "n1p6pbd",
     "codigo": "PRJ-004.4.2",
     "nombre": "Capacitación a usuarios",
     "creado": "2026-08-23",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-09-16",
      "horas": 43,
      "notas": ""
     }
    },
    {
     "id": "n2cbdty",
     "tipo": "tarea",
     "parentId": "n1p6pbd",
     "codigo": "PRJ-004.4.3",
     "nombre": "Gestión de accesos",
     "creado": "2026-08-23",
     "datos": {
      "estado": "planificado",
      "prioridad": "media",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-09-03",
      "horas": 79,
      "notas": ""
     }
    },
    {
     "id": "nhd3pgf",
     "tipo": "etapa",
     "parentId": "g4",
     "codigo": "PRJ-004.5",
     "nombre": "Levantamiento de requerimientos",
     "creado": "2026-07-27",
     "datos": {
      "estado": "en_espera",
      "avance": 81,
      "fecha_inicio": "2026-07-27",
      "fecha_fin": "2026-11-19",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "niyjtbn",
     "tipo": "tarea",
     "parentId": "nhd3pgf",
     "codigo": "PRJ-004.5.1",
     "nombre": "Configuración de servidores",
     "creado": "2026-07-27",
     "datos": {
      "estado": "planificado",
      "prioridad": "alta",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-09-09",
      "horas": 33,
      "notas": ""
     }
    },
    {
     "id": "nf5hdp0",
     "tipo": "etapa",
     "parentId": "g4",
     "codigo": "PRJ-004.6",
     "nombre": "Desarrollo",
     "creado": "2026-11-13",
     "datos": {
      "estado": "en_curso",
      "avance": 67,
      "fecha_inicio": "2026-11-13",
      "fecha_fin": "2027-01-13",
      "entregables": [
       "informe",
       "planos",
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n06tc47",
     "tipo": "etapa",
     "parentId": "nf5hdp0",
     "codigo": "PRJ-004.6.1",
     "nombre": "Integración con entidades",
     "creado": "2026-11-13",
     "datos": {
      "estado": "en_curso",
      "avance": 37,
      "fecha_inicio": "2026-11-13",
      "fecha_fin": "2026-12-15",
      "entregables": [
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nue006h",
     "tipo": "tarea",
     "parentId": "n06tc47",
     "codigo": "PRJ-004.6.1.1",
     "nombre": "Solicitud de cambio N° 3",
     "creado": "2026-11-13",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-11-27",
      "horas": 26,
      "notas": ""
     }
    },
    {
     "id": "nna2hwq",
     "tipo": "tarea",
     "parentId": "nf5hdp0",
     "codigo": "PRJ-004.6.2",
     "nombre": "Validación con la entidad",
     "creado": "2026-11-13",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "C. Vega",
      "fecha_limite": "2026-12-14",
      "horas": 51,
      "notas": ""
     }
    },
    {
     "id": "g5",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-005",
     "nombre": "Medición",
     "creado": "2026-04-11",
     "datos": {
      "sponsor": "dici",
      "project_manager": "dici",
      "cliente": "Ministerio de Economía y Finanzas",
      "estado": "en_espera",
      "responsable": "M. Quispe",
      "area": "electrico",
      "fecha_inicio": "2026-04-11",
      "fecha_fin": "2026-11-28",
      "presupuesto": 1135000,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-071",
      "descripcion": ""
     }
    },
    {
     "id": "njk2l31",
     "tipo": "tarea",
     "parentId": "g5",
     "codigo": "PRJ-005.1",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-05-17",
     "datos": {
      "estado": "cerrado",
      "prioridad": "baja",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-06-07",
      "horas": 9,
      "notas": ""
     }
    },
    {
     "id": "ng97nvn",
     "tipo": "etapa",
     "parentId": "g5",
     "codigo": "PRJ-005.2",
     "nombre": "Pruebas",
     "creado": "2026-05-19",
     "datos": {
      "estado": "en_curso",
      "avance": 8,
      "fecha_inicio": "2026-05-19",
      "fecha_fin": "2026-07-07",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nk06w5z",
     "tipo": "tarea",
     "parentId": "g5",
     "codigo": "PRJ-005.3",
     "nombre": "Documentación técnica",
     "creado": "2026-06-22",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-07-27",
      "horas": 63,
      "notas": ""
     }
    },
    {
     "id": "nw7dxie",
     "tipo": "etapa",
     "parentId": "g5",
     "codigo": "PRJ-005.4",
     "nombre": "Desarrollo",
     "creado": "2026-06-26",
     "datos": {
      "estado": "en_espera",
      "avance": 68,
      "fecha_inicio": "2026-06-26",
      "fecha_fin": "2026-09-16",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "noeene8",
     "tipo": "etapa",
     "parentId": "nw7dxie",
     "codigo": "PRJ-005.4.1",
     "nombre": "Integración con entidades",
     "creado": "2026-06-26",
     "datos": {
      "estado": "en_espera",
      "avance": 46,
      "fecha_inicio": "2026-06-26",
      "fecha_fin": "2026-09-16",
      "entregables": [
       "acta",
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nsq4g7k",
     "tipo": "tarea",
     "parentId": "noeene8",
     "codigo": "PRJ-005.4.1.1",
     "nombre": "Documentación técnica",
     "creado": "2026-06-26",
     "datos": {
      "estado": "planificado",
      "prioridad": "media",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-07-20",
      "horas": 55,
      "notas": ""
     }
    },
    {
     "id": "n4wabve",
     "tipo": "tarea",
     "parentId": "nw7dxie",
     "codigo": "PRJ-005.4.2",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-06-26",
     "datos": {
      "estado": "planificado",
      "prioridad": "media",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-07-08",
      "horas": 64,
      "notas": ""
     }
    },
    {
     "id": "nci8fz6",
     "tipo": "tarea",
     "parentId": "nw7dxie",
     "codigo": "PRJ-005.4.3",
     "nombre": "Revisión de casos de uso",
     "creado": "2026-06-26",
     "datos": {
      "estado": "en_espera",
      "prioridad": "baja",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-08-15",
      "horas": 77,
      "notas": ""
     }
    },
    {
     "id": "n10ldke",
     "tipo": "proyecto",
     "parentId": "g5",
     "codigo": "PRJ-005.5",
     "nombre": "Portal ciudadano",
     "creado": "2026-06-30",
     "datos": {
      "sponsor": "oirh",
      "project_manager": "oirh",
      "cliente": "Tribunal Electoral",
      "estado": "en_curso",
      "responsable": "C. Vega",
      "area": "obra_civil",
      "fecha_inicio": "2026-06-30",
      "fecha_fin": "2027-01-11",
      "presupuesto": 820000,
      "tiene_contrato": false,
      "nro_contrato": "",
      "descripcion": ""
     }
    },
    {
     "id": "nyro974",
     "tipo": "tarea",
     "parentId": "n10ldke",
     "codigo": "PRJ-005.5.1",
     "nombre": "Informe mensual de avance",
     "creado": "2026-06-30",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-07-25",
      "horas": 80,
      "notas": ""
     }
    },
    {
     "id": "g6",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-006",
     "nombre": "Plan contra Desastre e Inventario",
     "creado": "2026-05-15",
     "datos": {
      "sponsor": "dti",
      "project_manager": "dti",
      "cliente": "Ministerio de Economía y Finanzas",
      "estado": "planificado",
      "responsable": "P. Salazar",
      "area": "obra_civil",
      "fecha_inicio": "2026-05-15",
      "fecha_fin": "2026-11-16",
      "presupuesto": 2102500,
      "tiene_contrato": false,
      "nro_contrato": "",
      "descripcion": ""
     }
    },
    {
     "id": "nkhe9o3",
     "tipo": "etapa",
     "parentId": "g6",
     "codigo": "PRJ-006.1",
     "nombre": "Desarrollo",
     "creado": "2026-06-18",
     "datos": {
      "estado": "en_espera",
      "avance": 83,
      "fecha_inicio": "2026-06-18",
      "fecha_fin": "2026-09-26",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "njcao6k",
     "tipo": "tarea",
     "parentId": "nkhe9o3",
     "codigo": "PRJ-006.1.1",
     "nombre": "Solicitud de cambio N° 3",
     "creado": "2026-06-18",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-07-03",
      "horas": 65,
      "notas": ""
     }
    },
    {
     "id": "nx9qcpx",
     "tipo": "tarea",
     "parentId": "nkhe9o3",
     "codigo": "PRJ-006.1.2",
     "nombre": "Configuración de servidores",
     "creado": "2026-06-18",
     "datos": {
      "estado": "planificado",
      "prioridad": "media",
      "responsable": "C. Vega",
      "fecha_limite": "2026-08-08",
      "horas": 49,
      "notas": ""
     }
    },
    {
     "id": "nkxla20",
     "tipo": "tarea",
     "parentId": "nkhe9o3",
     "codigo": "PRJ-006.1.3",
     "nombre": "Capacitación a usuarios",
     "creado": "2026-06-18",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-08-09",
      "horas": 64,
      "notas": ""
     }
    },
    {
     "id": "nct3ht7",
     "tipo": "etapa",
     "parentId": "g6",
     "codigo": "PRJ-006.2",
     "nombre": "Levantamiento de requerimientos",
     "creado": "2026-06-12",
     "datos": {
      "estado": "en_curso",
      "avance": 83,
      "fecha_inicio": "2026-06-12",
      "fecha_fin": "2026-09-27",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n62bt0n",
     "tipo": "etapa",
     "parentId": "nct3ht7",
     "codigo": "PRJ-006.2.1",
     "nombre": "Interfaz de usuario",
     "creado": "2026-06-12",
     "datos": {
      "estado": "en_curso",
      "avance": 30,
      "fecha_inicio": "2026-06-12",
      "fecha_fin": "2026-08-02",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nvizs4w",
     "tipo": "tarea",
     "parentId": "n62bt0n",
     "codigo": "PRJ-006.2.1.1",
     "nombre": "Revisión de casos de uso",
     "creado": "2026-06-12",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-07-29",
      "horas": 21,
      "notas": ""
     }
    },
    {
     "id": "n1oj4nq",
     "tipo": "tarea",
     "parentId": "nct3ht7",
     "codigo": "PRJ-006.2.2",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-06-12",
     "datos": {
      "estado": "en_espera",
      "prioridad": "media",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-06-26",
      "horas": 53,
      "notas": ""
     }
    },
    {
     "id": "npyna19",
     "tipo": "tarea",
     "parentId": "nct3ht7",
     "codigo": "PRJ-006.2.3",
     "nombre": "Gestión de accesos",
     "creado": "2026-06-12",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-07-15",
      "horas": 4,
      "notas": ""
     }
    },
    {
     "id": "nug1q6x",
     "tipo": "etapa",
     "parentId": "g6",
     "codigo": "PRJ-006.3",
     "nombre": "Diseño",
     "creado": "2026-08-19",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-08-19",
      "fecha_fin": "2026-10-04",
      "entregables": [
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "g7",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-007",
     "nombre": "Digitalización",
     "creado": "2026-07-22",
     "datos": {
      "sponsor": "despacho_superior",
      "project_manager": "ciencias_informacion",
      "cliente": "Municipio de Panamá",
      "estado": "cerrado",
      "responsable": "M. Quispe",
      "area": "obra_civil",
      "fecha_inicio": "2026-07-22",
      "fecha_fin": "2027-05-07",
      "presupuesto": 1347500,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-011",
      "descripcion": ""
     }
    },
    {
     "id": "nbzuu0x",
     "tipo": "etapa",
     "parentId": "g7",
     "codigo": "PRJ-007.1",
     "nombre": "Cierre",
     "creado": "2026-08-21",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-08-21",
      "fecha_fin": "2026-10-14",
      "entregables": [
       "informe",
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nvd4puz",
     "tipo": "etapa",
     "parentId": "nbzuu0x",
     "codigo": "PRJ-007.1.1",
     "nombre": "Integración con entidades",
     "creado": "2026-08-21",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-08-21",
      "fecha_fin": "2026-11-06",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nfxc5vz",
     "tipo": "tarea",
     "parentId": "nvd4puz",
     "codigo": "PRJ-007.1.1.1",
     "nombre": "Documentación técnica",
     "creado": "2026-08-21",
     "datos": {
      "estado": "planificado",
      "prioridad": "alta",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-10-18",
      "horas": 9,
      "notas": ""
     }
    },
    {
     "id": "ngse1do",
     "tipo": "tarea",
     "parentId": "nvd4puz",
     "codigo": "PRJ-007.1.1.2",
     "nombre": "Análisis de vulnerabilidades",
     "creado": "2026-08-21",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "A. Torres",
      "fecha_limite": "2026-09-22",
      "horas": 57,
      "notas": ""
     }
    },
    {
     "id": "n5i50n1",
     "tipo": "tarea",
     "parentId": "nbzuu0x",
     "codigo": "PRJ-007.1.2",
     "nombre": "Capacitación a usuarios",
     "creado": "2026-08-21",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "A. Torres",
      "fecha_limite": "2026-09-01",
      "horas": 44,
      "notas": ""
     }
    },
    {
     "id": "nzzdxub",
     "tipo": "etapa",
     "parentId": "g7",
     "codigo": "PRJ-007.2",
     "nombre": "Capacitación",
     "creado": "2026-09-20",
     "datos": {
      "estado": "en_curso",
      "avance": 28,
      "fecha_inicio": "2026-09-20",
      "fecha_fin": "2027-01-17",
      "entregables": [
       "informe",
       "acta",
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nrvm0h6",
     "tipo": "tarea",
     "parentId": "nzzdxub",
     "codigo": "PRJ-007.2.1",
     "nombre": "Validación con la entidad",
     "creado": "2026-09-20",
     "datos": {
      "estado": "planificado",
      "prioridad": "media",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-10-10",
      "horas": 72,
      "notas": ""
     }
    },
    {
     "id": "nl7kazb",
     "tipo": "tarea",
     "parentId": "nzzdxub",
     "codigo": "PRJ-007.2.2",
     "nombre": "Publicación en producción",
     "creado": "2026-09-20",
     "datos": {
      "estado": "planificado",
      "prioridad": "alta",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-10-12",
      "horas": 66,
      "notas": ""
     }
    },
    {
     "id": "nn72mph",
     "tipo": "tarea",
     "parentId": "nzzdxub",
     "codigo": "PRJ-007.2.3",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-09-20",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-11-16",
      "horas": 11,
      "notas": ""
     }
    },
    {
     "id": "nudhn1y",
     "tipo": "etapa",
     "parentId": "g7",
     "codigo": "PRJ-007.3",
     "nombre": "Pruebas",
     "creado": "2026-09-17",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-09-17",
      "fecha_fin": "2026-12-24",
      "entregables": [
       "acta",
       "presupuesto",
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nh27nct",
     "tipo": "tarea",
     "parentId": "nudhn1y",
     "codigo": "PRJ-007.3.1",
     "nombre": "Publicación en producción",
     "creado": "2026-09-17",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-11-06",
      "horas": 59,
      "notas": ""
     }
    },
    {
     "id": "ngk9yb2",
     "tipo": "proyecto",
     "parentId": "g7",
     "codigo": "PRJ-007.4",
     "nombre": "Integración con entidades",
     "creado": "2026-10-06",
     "datos": {
      "sponsor": "ciencias_informacion",
      "project_manager": "despacho_superior",
      "cliente": "Registro Público",
      "estado": "cerrado",
      "responsable": "A. Torres",
      "area": "obra_civil",
      "fecha_inicio": "2026-10-06",
      "fecha_fin": "2027-08-02",
      "presupuesto": 2155000,
      "tiene_contrato": false,
      "nro_contrato": "",
      "descripcion": ""
     }
    },
    {
     "id": "n7rxqog",
     "tipo": "tarea",
     "parentId": "ngk9yb2",
     "codigo": "PRJ-007.4.1",
     "nombre": "Documentación técnica",
     "creado": "2026-10-06",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-11-17",
      "horas": 64,
      "notas": ""
     }
    },
    {
     "id": "nbjt6t8",
     "tipo": "tarea",
     "parentId": "ngk9yb2",
     "codigo": "PRJ-007.4.2",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-10-06",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-11-29",
      "horas": 40,
      "notas": ""
     }
    },
    {
     "id": "g8",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-008",
     "nombre": "Transporte",
     "creado": "2026-03-08",
     "datos": {
      "sponsor": "director",
      "project_manager": "director",
      "cliente": "Caja de Seguro Social",
      "estado": "en_espera",
      "responsable": "J. Ríos",
      "area": "legal",
      "fecha_inicio": "2026-03-08",
      "fecha_fin": "2026-09-09",
      "presupuesto": 1730000,
      "tiene_contrato": false,
      "nro_contrato": "",
      "descripcion": ""
     }
    },
    {
     "id": "na1bgjc",
     "tipo": "etapa",
     "parentId": "g8",
     "codigo": "PRJ-008.1",
     "nombre": "Puesta en producción",
     "creado": "2026-03-26",
     "datos": {
      "estado": "en_curso",
      "avance": 42,
      "fecha_inicio": "2026-03-26",
      "fecha_fin": "2026-07-10",
      "entregables": [
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n1akxz6",
     "tipo": "etapa",
     "parentId": "na1bgjc",
     "codigo": "PRJ-008.1.1",
     "nombre": "Integración con entidades",
     "creado": "2026-03-26",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-03-26",
      "fecha_fin": "2026-05-29",
      "entregables": [
       "planos",
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "ny9sc0k",
     "tipo": "tarea",
     "parentId": "n1akxz6",
     "codigo": "PRJ-008.1.1.1",
     "nombre": "Validación con la entidad",
     "creado": "2026-03-26",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-04-18",
      "horas": 8,
      "notas": ""
     }
    },
    {
     "id": "ncn8din",
     "tipo": "tarea",
     "parentId": "n1akxz6",
     "codigo": "PRJ-008.1.1.2",
     "nombre": "Gestión de accesos",
     "creado": "2026-03-26",
     "datos": {
      "estado": "planificado",
      "prioridad": "media",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-05-09",
      "horas": 43,
      "notas": ""
     }
    },
    {
     "id": "n6bsr2n",
     "tipo": "tarea",
     "parentId": "na1bgjc",
     "codigo": "PRJ-008.1.2",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-03-26",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-04-11",
      "horas": 11,
      "notas": ""
     }
    },
    {
     "id": "nd6t3mz",
     "tipo": "tarea",
     "parentId": "na1bgjc",
     "codigo": "PRJ-008.1.3",
     "nombre": "Acta de reunión con el sponsor",
     "creado": "2026-03-26",
     "datos": {
      "estado": "en_espera",
      "prioridad": "media",
      "responsable": "C. Vega",
      "fecha_limite": "2026-04-08",
      "horas": 69,
      "notas": ""
     }
    },
    {
     "id": "npy5zb4",
     "tipo": "tarea",
     "parentId": "g8",
     "codigo": "PRJ-008.2",
     "nombre": "Acta de reunión con el sponsor",
     "creado": "2026-04-07",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-04-29",
      "horas": 72,
      "notas": ""
     }
    },
    {
     "id": "nayep0k",
     "tipo": "etapa",
     "parentId": "g8",
     "codigo": "PRJ-008.3",
     "nombre": "Levantamiento de requerimientos",
     "creado": "2026-06-15",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-06-15",
      "fecha_fin": "2026-09-07",
      "entregables": [
       "planos",
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "g9",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-009",
     "nombre": "Hub de Datos",
     "creado": "2026-04-11",
     "datos": {
      "sponsor": "direccion_ciencias_informacion",
      "project_manager": "director",
      "cliente": "Ministerio de Economía y Finanzas",
      "estado": "en_curso",
      "responsable": "S. Beltrán",
      "area": "legal",
      "fecha_inicio": "2026-04-11",
      "fecha_fin": "2026-12-04",
      "presupuesto": 1525000,
      "tiene_contrato": false,
      "nro_contrato": "",
      "descripcion": ""
     }
    },
    {
     "id": "nndrt0v",
     "tipo": "etapa",
     "parentId": "g9",
     "codigo": "PRJ-009.1",
     "nombre": "Desarrollo",
     "creado": "2026-05-14",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-05-14",
      "fecha_fin": "2026-08-21",
      "entregables": [
       "acta",
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nu2jeln",
     "tipo": "tarea",
     "parentId": "nndrt0v",
     "codigo": "PRJ-009.1.1",
     "nombre": "Publicación en producción",
     "creado": "2026-05-14",
     "datos": {
      "estado": "en_espera",
      "prioridad": "baja",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-06-22",
      "horas": 70,
      "notas": ""
     }
    },
    {
     "id": "ngrcup0",
     "tipo": "tarea",
     "parentId": "nndrt0v",
     "codigo": "PRJ-009.1.2",
     "nombre": "Capacitación a usuarios",
     "creado": "2026-05-14",
     "datos": {
      "estado": "en_espera",
      "prioridad": "baja",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-06-03",
      "horas": 54,
      "notas": ""
     }
    },
    {
     "id": "nift3i5",
     "tipo": "tarea",
     "parentId": "nndrt0v",
     "codigo": "PRJ-009.1.3",
     "nombre": "Configuración de servidores",
     "creado": "2026-05-14",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-06-16",
      "horas": 6,
      "notas": ""
     }
    },
    {
     "id": "naa2bw6",
     "tipo": "etapa",
     "parentId": "g9",
     "codigo": "PRJ-009.2",
     "nombre": "Capacitación",
     "creado": "2026-06-02",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-06-02",
      "fecha_fin": "2026-08-13",
      "entregables": [
       "planos",
       "presupuesto",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nr2fb7g",
     "tipo": "tarea",
     "parentId": "naa2bw6",
     "codigo": "PRJ-009.2.1",
     "nombre": "Configuración de servidores",
     "creado": "2026-06-02",
     "datos": {
      "estado": "cerrado",
      "prioridad": "alta",
      "responsable": "C. Vega",
      "fecha_limite": "2026-06-17",
      "horas": 51,
      "notas": ""
     }
    },
    {
     "id": "n77pcju",
     "tipo": "etapa",
     "parentId": "g9",
     "codigo": "PRJ-009.3",
     "nombre": "Levantamiento de requerimientos",
     "creado": "2026-06-28",
     "datos": {
      "estado": "en_curso",
      "avance": 16,
      "fecha_inicio": "2026-06-28",
      "fecha_fin": "2026-09-03",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nrck8l9",
     "tipo": "etapa",
     "parentId": "n77pcju",
     "codigo": "PRJ-009.3.1",
     "nombre": "Integración con entidades",
     "creado": "2026-06-28",
     "datos": {
      "estado": "en_curso",
      "avance": 68,
      "fecha_inicio": "2026-06-28",
      "fecha_fin": "2026-09-30",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "ndyhd1y",
     "tipo": "tarea",
     "parentId": "nrck8l9",
     "codigo": "PRJ-009.3.1.1",
     "nombre": "Documentación técnica",
     "creado": "2026-06-28",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-08-22",
      "horas": 59,
      "notas": ""
     }
    },
    {
     "id": "nzizq16",
     "tipo": "tarea",
     "parentId": "nrck8l9",
     "codigo": "PRJ-009.3.1.2",
     "nombre": "Gestión de accesos",
     "creado": "2026-06-28",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-07-18",
      "horas": 73,
      "notas": ""
     }
    },
    {
     "id": "nes0lht",
     "tipo": "tarea",
     "parentId": "n77pcju",
     "codigo": "PRJ-009.3.2",
     "nombre": "Acta de reunión con el sponsor",
     "creado": "2026-06-28",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-08-09",
      "horas": 37,
      "notas": ""
     }
    },
    {
     "id": "n0i58di",
     "tipo": "proyecto",
     "parentId": "g9",
     "codigo": "PRJ-009.4",
     "nombre": "Integración con entidades",
     "creado": "2026-06-14",
     "datos": {
      "sponsor": "ciencias_informacion",
      "project_manager": "despacho_superior",
      "cliente": "Ministerio de Salud",
      "estado": "en_curso",
      "responsable": "J. Ríos",
      "area": "administrativo",
      "fecha_inicio": "2026-06-14",
      "fecha_fin": "2027-05-08",
      "presupuesto": 1032500,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-039",
      "descripcion": ""
     }
    },
    {
     "id": "ng2mgf5",
     "tipo": "tarea",
     "parentId": "n0i58di",
     "codigo": "PRJ-009.4.1",
     "nombre": "Documentación técnica",
     "creado": "2026-06-14",
     "datos": {
      "estado": "en_espera",
      "prioridad": "baja",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-06-26",
      "horas": 22,
      "notas": ""
     }
    },
    {
     "id": "nabn15j",
     "tipo": "tarea",
     "parentId": "n0i58di",
     "codigo": "PRJ-009.4.2",
     "nombre": "Capacitación a usuarios",
     "creado": "2026-06-14",
     "datos": {
      "estado": "planificado",
      "prioridad": "media",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-06-24",
      "horas": 53,
      "notas": ""
     }
    },
    {
     "id": "n4ilh7o",
     "tipo": "etapa",
     "parentId": "g9",
     "codigo": "PRJ-009.5",
     "nombre": "Diseño",
     "creado": "2026-08-09",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-08-09",
      "fecha_fin": "2026-10-29",
      "entregables": [
       "presupuesto",
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n04bgz3",
     "tipo": "etapa",
     "parentId": "n4ilh7o",
     "codigo": "PRJ-009.5.1",
     "nombre": "Infraestructura",
     "creado": "2026-08-09",
     "datos": {
      "estado": "en_curso",
      "avance": 86,
      "fecha_inicio": "2026-08-09",
      "fecha_fin": "2026-11-23",
      "entregables": [
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n65g09z",
     "tipo": "tarea",
     "parentId": "n04bgz3",
     "codigo": "PRJ-009.5.1.1",
     "nombre": "Gestión de accesos",
     "creado": "2026-08-09",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "A. Torres",
      "fecha_limite": "2026-08-31",
      "horas": 41,
      "notas": ""
     }
    },
    {
     "id": "nl72wy1",
     "tipo": "tarea",
     "parentId": "n4ilh7o",
     "codigo": "PRJ-009.5.2",
     "nombre": "Gestión de accesos",
     "creado": "2026-08-09",
     "datos": {
      "estado": "planificado",
      "prioridad": "alta",
      "responsable": "C. Vega",
      "fecha_limite": "2026-08-22",
      "horas": 34,
      "notas": ""
     }
    },
    {
     "id": "ndapr4x",
     "tipo": "tarea",
     "parentId": "n4ilh7o",
     "codigo": "PRJ-009.5.3",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-08-09",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-08-28",
      "horas": 77,
      "notas": ""
     }
    },
    {
     "id": "g10",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-010",
     "nombre": "Ciberseguridad",
     "creado": "2026-03-08",
     "datos": {
      "sponsor": "director",
      "project_manager": "director",
      "cliente": "Ministerio de Economía y Finanzas",
      "estado": "en_curso",
      "responsable": "P. Salazar",
      "area": "obra_civil",
      "fecha_inicio": "2026-03-08",
      "fecha_fin": "2026-09-14",
      "presupuesto": 1665000,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-017",
      "descripcion": ""
     }
    },
    {
     "id": "nn0nxk7",
     "tipo": "etapa",
     "parentId": "g10",
     "codigo": "PRJ-010.1",
     "nombre": "Capacitación",
     "creado": "2026-04-11",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-04-11",
      "fecha_fin": "2026-07-25",
      "entregables": [
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nbc1rld",
     "tipo": "etapa",
     "parentId": "g10",
     "codigo": "PRJ-010.2",
     "nombre": "Desarrollo",
     "creado": "2026-05-27",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-05-27",
      "fecha_fin": "2026-07-30",
      "entregables": [
       "informe",
       "presupuesto",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "na7581m",
     "tipo": "tarea",
     "parentId": "nbc1rld",
     "codigo": "PRJ-010.2.1",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-05-27",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-06-22",
      "horas": 29,
      "notas": ""
     }
    },
    {
     "id": "nwzwjof",
     "tipo": "tarea",
     "parentId": "nbc1rld",
     "codigo": "PRJ-010.2.2",
     "nombre": "Informe mensual de avance",
     "creado": "2026-05-27",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "C. Vega",
      "fecha_limite": "2026-06-21",
      "horas": 42,
      "notas": ""
     }
    },
    {
     "id": "nhwzwzg",
     "tipo": "tarea",
     "parentId": "nbc1rld",
     "codigo": "PRJ-010.2.3",
     "nombre": "Gestión de accesos",
     "creado": "2026-05-27",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-06-27",
      "horas": 39,
      "notas": ""
     }
    },
    {
     "id": "n70t6uw",
     "tipo": "proyecto",
     "parentId": "g10",
     "codigo": "PRJ-010.3",
     "nombre": "Integración con entidades",
     "creado": "2026-06-27",
     "datos": {
      "sponsor": "direccion_ciencias_informacion",
      "project_manager": "dti",
      "cliente": "Municipio de Panamá",
      "estado": "en_curso",
      "responsable": "L. Paredes",
      "area": "electrico",
      "fecha_inicio": "2026-06-27",
      "fecha_fin": "2027-05-05",
      "presupuesto": 1745000,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-088",
      "descripcion": ""
     }
    },
    {
     "id": "ngz9wfe",
     "tipo": "tarea",
     "parentId": "n70t6uw",
     "codigo": "PRJ-010.3.1",
     "nombre": "Acta de reunión con el sponsor",
     "creado": "2026-06-27",
     "datos": {
      "estado": "cerrado",
      "prioridad": "baja",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-08-15",
      "horas": 42,
      "notas": ""
     }
    },
    {
     "id": "npnckhi",
     "tipo": "tarea",
     "parentId": "n70t6uw",
     "codigo": "PRJ-010.3.2",
     "nombre": "Solicitud de cambio N° 3",
     "creado": "2026-06-27",
     "datos": {
      "estado": "en_espera",
      "prioridad": "baja",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-07-04",
      "horas": 38,
      "notas": ""
     }
    },
    {
     "id": "g11",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-011",
     "nombre": "Firma Electrónica",
     "creado": "2026-05-22",
     "datos": {
      "sponsor": "di",
      "project_manager": "di",
      "cliente": "Ministerio de Economía y Finanzas",
      "estado": "en_espera",
      "responsable": "P. Salazar",
      "area": "electrico",
      "fecha_inicio": "2026-05-22",
      "fecha_fin": "2027-05-06",
      "presupuesto": 840000,
      "tiene_contrato": false,
      "nro_contrato": "",
      "descripcion": ""
     }
    },
    {
     "id": "nnpb312",
     "tipo": "etapa",
     "parentId": "g11",
     "codigo": "PRJ-011.1",
     "nombre": "Diseño",
     "creado": "2026-06-03",
     "datos": {
      "estado": "en_espera",
      "avance": 10,
      "fecha_inicio": "2026-06-03",
      "fecha_fin": "2026-08-19",
      "entregables": [
       "presupuesto",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nxy7j47",
     "tipo": "tarea",
     "parentId": "nnpb312",
     "codigo": "PRJ-011.1.1",
     "nombre": "Capacitación a usuarios",
     "creado": "2026-06-03",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-07-03",
      "horas": 38,
      "notas": ""
     }
    },
    {
     "id": "nnpz1kh",
     "tipo": "tarea",
     "parentId": "nnpb312",
     "codigo": "PRJ-011.1.2",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-06-03",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "A. Torres",
      "fecha_limite": "2026-06-14",
      "horas": 3,
      "notas": ""
     }
    },
    {
     "id": "nhg714l",
     "tipo": "tarea",
     "parentId": "nnpb312",
     "codigo": "PRJ-011.1.3",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-06-03",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-06-13",
      "horas": 47,
      "notas": ""
     }
    },
    {
     "id": "ncjw4qv",
     "tipo": "etapa",
     "parentId": "g11",
     "codigo": "PRJ-011.2",
     "nombre": "Puesta en producción",
     "creado": "2026-07-11",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-07-11",
      "fecha_fin": "2026-11-01",
      "entregables": [
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nqvci27",
     "tipo": "tarea",
     "parentId": "g11",
     "codigo": "PRJ-011.3",
     "nombre": "Capacitación a usuarios",
     "creado": "2026-07-21",
     "datos": {
      "estado": "planificado",
      "prioridad": "media",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-08-30",
      "horas": 47,
      "notas": ""
     }
    },
    {
     "id": "g12",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-012",
     "nombre": "Portal de Trámites en Línea",
     "creado": "2026-01-05",
     "datos": {
      "sponsor": "dici",
      "project_manager": "di",
      "cliente": "Contraloría General",
      "estado": "en_curso",
      "responsable": "C. Vega",
      "area": "administrativo",
      "fecha_inicio": "2026-01-05",
      "fecha_fin": "2026-08-22",
      "presupuesto": 1522500,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-075",
      "descripcion": ""
     }
    },
    {
     "id": "ndj05zp",
     "tipo": "etapa",
     "parentId": "g12",
     "codigo": "PRJ-012.1",
     "nombre": "Levantamiento de requerimientos",
     "creado": "2026-02-10",
     "datos": {
      "estado": "en_curso",
      "avance": 72,
      "fecha_inicio": "2026-02-10",
      "fecha_fin": "2026-05-16",
      "entregables": [
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n2bayaq",
     "tipo": "etapa",
     "parentId": "ndj05zp",
     "codigo": "PRJ-012.1.1",
     "nombre": "Migración de datos",
     "creado": "2026-02-10",
     "datos": {
      "estado": "en_curso",
      "avance": 60,
      "fecha_inicio": "2026-02-10",
      "fecha_fin": "2026-03-28",
      "entregables": [
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n31q51k",
     "tipo": "tarea",
     "parentId": "n2bayaq",
     "codigo": "PRJ-012.1.1.1",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-02-10",
     "datos": {
      "estado": "cerrado",
      "prioridad": "baja",
      "responsable": "C. Vega",
      "fecha_limite": "2026-03-07",
      "horas": 38,
      "notas": ""
     }
    },
    {
     "id": "nh8vjh3",
     "tipo": "tarea",
     "parentId": "n2bayaq",
     "codigo": "PRJ-012.1.1.2",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-02-10",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-03-12",
      "horas": 4,
      "notas": ""
     }
    },
    {
     "id": "np0vjwq",
     "tipo": "tarea",
     "parentId": "ndj05zp",
     "codigo": "PRJ-012.1.2",
     "nombre": "Informe mensual de avance",
     "creado": "2026-02-10",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-03-29",
      "horas": 32,
      "notas": ""
     }
    },
    {
     "id": "nv8rcm0",
     "tipo": "tarea",
     "parentId": "g12",
     "codigo": "PRJ-012.2",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-03-10",
     "datos": {
      "estado": "en_espera",
      "prioridad": "media",
      "responsable": "A. Torres",
      "fecha_limite": "2026-03-16",
      "horas": 43,
      "notas": ""
     }
    },
    {
     "id": "njjizdn",
     "tipo": "etapa",
     "parentId": "g12",
     "codigo": "PRJ-012.3",
     "nombre": "Análisis de riesgos",
     "creado": "2026-04-23",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-04-23",
      "fecha_fin": "2026-07-15",
      "entregables": [
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n9sc25c",
     "tipo": "tarea",
     "parentId": "njjizdn",
     "codigo": "PRJ-012.3.1",
     "nombre": "Análisis de vulnerabilidades",
     "creado": "2026-04-23",
     "datos": {
      "estado": "en_espera",
      "prioridad": "media",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-05-21",
      "horas": 22,
      "notas": ""
     }
    },
    {
     "id": "ntaaw55",
     "tipo": "tarea",
     "parentId": "njjizdn",
     "codigo": "PRJ-012.3.2",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-04-23",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-05-29",
      "horas": 42,
      "notas": ""
     }
    },
    {
     "id": "n505gvm",
     "tipo": "etapa",
     "parentId": "g12",
     "codigo": "PRJ-012.4",
     "nombre": "Diseño",
     "creado": "2026-06-02",
     "datos": {
      "estado": "en_espera",
      "avance": 85,
      "fecha_inicio": "2026-06-02",
      "fecha_fin": "2026-08-26",
      "entregables": [
       "presupuesto",
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "ndp9mbq",
     "tipo": "etapa",
     "parentId": "n505gvm",
     "codigo": "PRJ-012.4.1",
     "nombre": "Módulo de seguridad",
     "creado": "2026-06-02",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-06-02",
      "fecha_fin": "2026-07-11",
      "entregables": [
       "informe",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n156qq7",
     "tipo": "tarea",
     "parentId": "ndp9mbq",
     "codigo": "PRJ-012.4.1.1",
     "nombre": "Documentación técnica",
     "creado": "2026-06-02",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "A. Torres",
      "fecha_limite": "2026-07-29",
      "horas": 2,
      "notas": ""
     }
    },
    {
     "id": "g13",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-013",
     "nombre": "Nube Gubernamental",
     "creado": "2026-09-01",
     "datos": {
      "sponsor": "dti",
      "project_manager": "dti",
      "cliente": "Ministerio de Salud",
      "estado": "cerrado",
      "responsable": "L. Paredes",
      "area": "electrico",
      "fecha_inicio": "2026-09-01",
      "fecha_fin": "2027-01-17",
      "presupuesto": 1152500,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-072",
      "descripcion": ""
     }
    },
    {
     "id": "n2o4ddy",
     "tipo": "etapa",
     "parentId": "g13",
     "codigo": "PRJ-013.1",
     "nombre": "Análisis de riesgos",
     "creado": "2026-10-08",
     "datos": {
      "estado": "en_curso",
      "avance": 28,
      "fecha_inicio": "2026-10-08",
      "fecha_fin": "2026-11-18",
      "entregables": [
       "acta",
       "planos",
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "neq3v83",
     "tipo": "proyecto",
     "parentId": "g13",
     "codigo": "PRJ-013.2",
     "nombre": "Portal ciudadano",
     "creado": "2026-10-11",
     "datos": {
      "sponsor": "oirh",
      "project_manager": "dici",
      "cliente": "AIG",
      "estado": "en_espera",
      "responsable": "C. Vega",
      "area": "administrativo",
      "fecha_inicio": "2026-10-11",
      "fecha_fin": "2027-09-07",
      "presupuesto": 417500,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-067",
      "descripcion": ""
     }
    },
    {
     "id": "nq5qrpr",
     "tipo": "tarea",
     "parentId": "neq3v83",
     "codigo": "PRJ-013.2.1",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-10-11",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-11-12",
      "horas": 3,
      "notas": ""
     }
    },
    {
     "id": "n2nsyyz",
     "tipo": "tarea",
     "parentId": "neq3v83",
     "codigo": "PRJ-013.2.2",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-10-11",
     "datos": {
      "estado": "planificado",
      "prioridad": "alta",
      "responsable": "C. Vega",
      "fecha_limite": "2026-11-30",
      "horas": 13,
      "notas": ""
     }
    },
    {
     "id": "n1ik3ya",
     "tipo": "etapa",
     "parentId": "g13",
     "codigo": "PRJ-013.3",
     "nombre": "Desarrollo",
     "creado": "2026-12-24",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-12-24",
      "fecha_fin": "2027-01-17",
      "entregables": [
       "informe",
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "noi53e6",
     "tipo": "tarea",
     "parentId": "n1ik3ya",
     "codigo": "PRJ-013.3.1",
     "nombre": "Análisis de vulnerabilidades",
     "creado": "2026-12-24",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "L. Paredes",
      "fecha_limite": "2027-02-16",
      "horas": 45,
      "notas": ""
     }
    },
    {
     "id": "nma56k7",
     "tipo": "tarea",
     "parentId": "n1ik3ya",
     "codigo": "PRJ-013.3.2",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-12-24",
     "datos": {
      "estado": "cerrado",
      "prioridad": "baja",
      "responsable": "L. Paredes",
      "fecha_limite": "2027-02-07",
      "horas": 38,
      "notas": ""
     }
    },
    {
     "id": "nypg37f",
     "tipo": "etapa",
     "parentId": "g13",
     "codigo": "PRJ-013.4",
     "nombre": "Puesta en producción",
     "creado": "2026-10-15",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-10-15",
      "fecha_fin": "2026-12-08",
      "entregables": [
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n46h8h1",
     "tipo": "tarea",
     "parentId": "nypg37f",
     "codigo": "PRJ-013.4.1",
     "nombre": "Análisis de vulnerabilidades",
     "creado": "2026-10-15",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-11-03",
      "horas": 36,
      "notas": ""
     }
    },
    {
     "id": "g14",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-014",
     "nombre": "Identidad Digital",
     "creado": "2026-02-01",
     "datos": {
      "sponsor": "despacho_superior",
      "project_manager": "dici",
      "cliente": "Contraloría General",
      "estado": "en_curso",
      "responsable": "C. Vega",
      "area": "electrico",
      "fecha_inicio": "2026-02-01",
      "fecha_fin": "2026-11-18",
      "presupuesto": 1287500,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-061",
      "descripcion": ""
     }
    },
    {
     "id": "njqxrtd",
     "tipo": "etapa",
     "parentId": "g14",
     "codigo": "PRJ-014.1",
     "nombre": "Puesta en producción",
     "creado": "2026-02-28",
     "datos": {
      "estado": "en_curso",
      "avance": 67,
      "fecha_inicio": "2026-02-28",
      "fecha_fin": "2026-05-29",
      "entregables": [
       "planos",
       "presupuesto",
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nraeg3k",
     "tipo": "tarea",
     "parentId": "njqxrtd",
     "codigo": "PRJ-014.1.1",
     "nombre": "Informe mensual de avance",
     "creado": "2026-02-28",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-04-14",
      "horas": 56,
      "notas": ""
     }
    },
    {
     "id": "n4andjl",
     "tipo": "etapa",
     "parentId": "g14",
     "codigo": "PRJ-014.2",
     "nombre": "Capacitación",
     "creado": "2026-04-06",
     "datos": {
      "estado": "en_curso",
      "avance": 43,
      "fecha_inicio": "2026-04-06",
      "fecha_fin": "2026-07-01",
      "entregables": [
       "planos",
       "informe",
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nvayz0f",
     "tipo": "tarea",
     "parentId": "n4andjl",
     "codigo": "PRJ-014.2.1",
     "nombre": "Gestión de accesos",
     "creado": "2026-04-06",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-05-18",
      "horas": 33,
      "notas": ""
     }
    },
    {
     "id": "nagarsr",
     "tipo": "tarea",
     "parentId": "n4andjl",
     "codigo": "PRJ-014.2.2",
     "nombre": "Validación con la entidad",
     "creado": "2026-04-06",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "A. Torres",
      "fecha_limite": "2026-04-13",
      "horas": 29,
      "notas": ""
     }
    },
    {
     "id": "nz2wfgk",
     "tipo": "etapa",
     "parentId": "g14",
     "codigo": "PRJ-014.3",
     "nombre": "Diseño",
     "creado": "2026-04-20",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-04-20",
      "fecha_fin": "2026-06-29",
      "entregables": [
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "g15",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-015",
     "nombre": "Centro de Datos",
     "creado": "2026-07-05",
     "datos": {
      "sponsor": "dti",
      "project_manager": "director",
      "cliente": "Caja de Seguro Social",
      "estado": "en_espera",
      "responsable": "S. Beltrán",
      "area": "obra_civil",
      "fecha_inicio": "2026-07-05",
      "fecha_fin": "2026-09-12",
      "presupuesto": 1357500,
      "tiene_contrato": false,
      "nro_contrato": "",
      "descripcion": ""
     }
    },
    {
     "id": "ng03cpt",
     "tipo": "etapa",
     "parentId": "g15",
     "codigo": "PRJ-015.1",
     "nombre": "Cierre",
     "creado": "2026-08-01",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-08-01",
      "fecha_fin": "2026-09-26",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nqsltdc",
     "tipo": "tarea",
     "parentId": "ng03cpt",
     "codigo": "PRJ-015.1.1",
     "nombre": "Informe mensual de avance",
     "creado": "2026-08-01",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-08-24",
      "horas": 8,
      "notas": ""
     }
    },
    {
     "id": "noact1i",
     "tipo": "tarea",
     "parentId": "ng03cpt",
     "codigo": "PRJ-015.1.2",
     "nombre": "Configuración de servidores",
     "creado": "2026-08-01",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-09-18",
      "horas": 32,
      "notas": ""
     }
    },
    {
     "id": "n2m0o5w",
     "tipo": "tarea",
     "parentId": "ng03cpt",
     "codigo": "PRJ-015.1.3",
     "nombre": "Solicitud de cambio N° 3",
     "creado": "2026-08-01",
     "datos": {
      "estado": "cerrado",
      "prioridad": "alta",
      "responsable": "A. Torres",
      "fecha_limite": "2026-09-16",
      "horas": 7,
      "notas": ""
     }
    },
    {
     "id": "naf5iqc",
     "tipo": "etapa",
     "parentId": "g15",
     "codigo": "PRJ-015.2",
     "nombre": "Adquisiciones",
     "creado": "2026-08-22",
     "datos": {
      "estado": "en_curso",
      "avance": 78,
      "fecha_inicio": "2026-08-22",
      "fecha_fin": "2026-09-27",
      "entregables": [
       "acta",
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nzdqohr",
     "tipo": "etapa",
     "parentId": "naf5iqc",
     "codigo": "PRJ-015.2.1",
     "nombre": "Módulo de seguridad",
     "creado": "2026-08-22",
     "datos": {
      "estado": "en_curso",
      "avance": 10,
      "fecha_inicio": "2026-08-22",
      "fecha_fin": "2026-10-14",
      "entregables": [
       "acta",
       "informe",
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nxdcav6",
     "tipo": "tarea",
     "parentId": "nzdqohr",
     "codigo": "PRJ-015.2.1.1",
     "nombre": "Análisis de vulnerabilidades",
     "creado": "2026-08-22",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-10-20",
      "horas": 38,
      "notas": ""
     }
    },
    {
     "id": "nwy551a",
     "tipo": "tarea",
     "parentId": "naf5iqc",
     "codigo": "PRJ-015.2.2",
     "nombre": "Solicitud de cambio N° 3",
     "creado": "2026-08-22",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-10-03",
      "horas": 33,
      "notas": ""
     }
    },
    {
     "id": "n0kj5za",
     "tipo": "tarea",
     "parentId": "naf5iqc",
     "codigo": "PRJ-015.2.3",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-08-22",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-10-13",
      "horas": 41,
      "notas": ""
     }
    },
    {
     "id": "n1mi4tg",
     "tipo": "tarea",
     "parentId": "naf5iqc",
     "codigo": "PRJ-015.2.4",
     "nombre": "Informe mensual de avance",
     "creado": "2026-08-22",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-10-19",
      "horas": 6,
      "notas": ""
     }
    },
    {
     "id": "ncm5crt",
     "tipo": "etapa",
     "parentId": "g15",
     "codigo": "PRJ-015.3",
     "nombre": "Diseño",
     "creado": "2026-11-02",
     "datos": {
      "estado": "en_curso",
      "avance": 59,
      "fecha_inicio": "2026-11-02",
      "fecha_fin": "2027-01-07",
      "entregables": [
       "acta",
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "ntah1pt",
     "tipo": "tarea",
     "parentId": "ncm5crt",
     "codigo": "PRJ-015.3.1",
     "nombre": "Análisis de vulnerabilidades",
     "creado": "2026-11-02",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-12-05",
      "horas": 8,
      "notas": ""
     }
    },
    {
     "id": "nb0agsk",
     "tipo": "etapa",
     "parentId": "g15",
     "codigo": "PRJ-015.4",
     "nombre": "Análisis de riesgos",
     "creado": "2026-09-27",
     "datos": {
      "estado": "en_curso",
      "avance": 58,
      "fecha_inicio": "2026-09-27",
      "fecha_fin": "2026-11-04",
      "entregables": [
       "informe",
       "planos",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nbcfmsx",
     "tipo": "etapa",
     "parentId": "nb0agsk",
     "codigo": "PRJ-015.4.1",
     "nombre": "Interfaz de usuario",
     "creado": "2026-09-27",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-09-27",
      "fecha_fin": "2026-12-05",
      "entregables": [
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "ne05x4z",
     "tipo": "tarea",
     "parentId": "nbcfmsx",
     "codigo": "PRJ-015.4.1.1",
     "nombre": "Solicitud de cambio N° 3",
     "creado": "2026-09-27",
     "datos": {
      "estado": "cerrado",
      "prioridad": "alta",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-10-18",
      "horas": 79,
      "notas": ""
     }
    },
    {
     "id": "n4b8czv",
     "tipo": "tarea",
     "parentId": "nbcfmsx",
     "codigo": "PRJ-015.4.1.2",
     "nombre": "Gestión de accesos",
     "creado": "2026-09-27",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-11-26",
      "horas": 27,
      "notas": ""
     }
    },
    {
     "id": "nsijm6h",
     "tipo": "tarea",
     "parentId": "nb0agsk",
     "codigo": "PRJ-015.4.2",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-09-27",
     "datos": {
      "estado": "cerrado",
      "prioridad": "alta",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-10-21",
      "horas": 25,
      "notas": ""
     }
    },
    {
     "id": "n3x3jql",
     "tipo": "tarea",
     "parentId": "nb0agsk",
     "codigo": "PRJ-015.4.3",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-09-27",
     "datos": {
      "estado": "planificado",
      "prioridad": "media",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-10-24",
      "horas": 67,
      "notas": ""
     }
    },
    {
     "id": "g16",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-016",
     "nombre": "Mesa de Ayuda",
     "creado": "2026-01-14",
     "datos": {
      "sponsor": "dti",
      "project_manager": "dti",
      "cliente": "AIG",
      "estado": "cerrado",
      "responsable": "S. Beltrán",
      "area": "electrico",
      "fecha_inicio": "2026-01-14",
      "fecha_fin": "2026-05-28",
      "presupuesto": 85000,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-058",
      "descripcion": ""
     }
    },
    {
     "id": "n2d0431",
     "tipo": "etapa",
     "parentId": "g16",
     "codigo": "PRJ-016.1",
     "nombre": "Desarrollo",
     "creado": "2026-01-28",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-01-28",
      "fecha_fin": "2026-03-25",
      "entregables": [
       "presupuesto",
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nvg6hgp",
     "tipo": "etapa",
     "parentId": "n2d0431",
     "codigo": "PRJ-016.1.1",
     "nombre": "Integración con entidades",
     "creado": "2026-01-28",
     "datos": {
      "estado": "en_espera",
      "avance": 11,
      "fecha_inicio": "2026-01-28",
      "fecha_fin": "2026-04-14",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nw8av07",
     "tipo": "tarea",
     "parentId": "nvg6hgp",
     "codigo": "PRJ-016.1.1.1",
     "nombre": "Informe mensual de avance",
     "creado": "2026-01-28",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-03-29",
      "horas": 39,
      "notas": ""
     }
    },
    {
     "id": "nn72581",
     "tipo": "tarea",
     "parentId": "nvg6hgp",
     "codigo": "PRJ-016.1.1.2",
     "nombre": "Revisión de casos de uso",
     "creado": "2026-01-28",
     "datos": {
      "estado": "en_espera",
      "prioridad": "media",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-02-18",
      "horas": 15,
      "notas": ""
     }
    },
    {
     "id": "n0jo39c",
     "tipo": "tarea",
     "parentId": "n2d0431",
     "codigo": "PRJ-016.1.2",
     "nombre": "Informe mensual de avance",
     "creado": "2026-01-28",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-02-04",
      "horas": 37,
      "notas": ""
     }
    },
    {
     "id": "nfs940i",
     "tipo": "tarea",
     "parentId": "n2d0431",
     "codigo": "PRJ-016.1.3",
     "nombre": "Documentación técnica",
     "creado": "2026-01-28",
     "datos": {
      "estado": "planificado",
      "prioridad": "alta",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-02-04",
      "horas": 30,
      "notas": ""
     }
    },
    {
     "id": "n06u7hj",
     "tipo": "etapa",
     "parentId": "g16",
     "codigo": "PRJ-016.2",
     "nombre": "Diseño",
     "creado": "2026-02-11",
     "datos": {
      "estado": "en_espera",
      "avance": 26,
      "fecha_inicio": "2026-02-11",
      "fecha_fin": "2026-06-10",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "no05v6k",
     "tipo": "etapa",
     "parentId": "g16",
     "codigo": "PRJ-016.3",
     "nombre": "Puesta en producción",
     "creado": "2026-03-15",
     "datos": {
      "estado": "en_espera",
      "avance": 84,
      "fecha_inicio": "2026-03-15",
      "fecha_fin": "2026-04-10",
      "entregables": [
       "informe",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nzmv8ey",
     "tipo": "tarea",
     "parentId": "no05v6k",
     "codigo": "PRJ-016.3.1",
     "nombre": "Documentación técnica",
     "creado": "2026-03-15",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "A. Torres",
      "fecha_limite": "2026-05-01",
      "horas": 15,
      "notas": ""
     }
    },
    {
     "id": "ndm4zoh",
     "tipo": "tarea",
     "parentId": "no05v6k",
     "codigo": "PRJ-016.3.2",
     "nombre": "Publicación en producción",
     "creado": "2026-03-15",
     "datos": {
      "estado": "cerrado",
      "prioridad": "alta",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-03-25",
      "horas": 27,
      "notas": ""
     }
    },
    {
     "id": "nbh1tkz",
     "tipo": "tarea",
     "parentId": "no05v6k",
     "codigo": "PRJ-016.3.3",
     "nombre": "Revisión de casos de uso",
     "creado": "2026-03-15",
     "datos": {
      "estado": "en_espera",
      "prioridad": "media",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-04-26",
      "horas": 69,
      "notas": ""
     }
    },
    {
     "id": "n3mzkjd",
     "tipo": "etapa",
     "parentId": "g16",
     "codigo": "PRJ-016.4",
     "nombre": "Capacitación",
     "creado": "2026-05-22",
     "datos": {
      "estado": "en_espera",
      "avance": 79,
      "fecha_inicio": "2026-05-22",
      "fecha_fin": "2026-06-11",
      "entregables": [
       "planos",
       "informe",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nx8wqa2",
     "tipo": "tarea",
     "parentId": "n3mzkjd",
     "codigo": "PRJ-016.4.1",
     "nombre": "Informe mensual de avance",
     "creado": "2026-05-22",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-06-03",
      "horas": 79,
      "notas": ""
     }
    },
    {
     "id": "n3l4fun",
     "tipo": "tarea",
     "parentId": "n3mzkjd",
     "codigo": "PRJ-016.4.2",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-05-22",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-07-09",
      "horas": 19,
      "notas": ""
     }
    },
    {
     "id": "nsnps8x",
     "tipo": "tarea",
     "parentId": "n3mzkjd",
     "codigo": "PRJ-016.4.3",
     "nombre": "Validación con la entidad",
     "creado": "2026-05-22",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-07-17",
      "horas": 65,
      "notas": ""
     }
    },
    {
     "id": "n90naqh",
     "tipo": "etapa",
     "parentId": "g16",
     "codigo": "PRJ-016.5",
     "nombre": "Levantamiento de requerimientos",
     "creado": "2026-05-29",
     "datos": {
      "estado": "en_espera",
      "avance": 65,
      "fecha_inicio": "2026-05-29",
      "fecha_fin": "2026-09-11",
      "entregables": [
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n5uhrh6",
     "tipo": "tarea",
     "parentId": "n90naqh",
     "codigo": "PRJ-016.5.1",
     "nombre": "Configuración de servidores",
     "creado": "2026-05-29",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-07-02",
      "horas": 50,
      "notas": ""
     }
    },
    {
     "id": "nvvs0dy",
     "tipo": "tarea",
     "parentId": "g16",
     "codigo": "PRJ-016.6",
     "nombre": "Informe mensual de avance",
     "creado": "2026-06-01",
     "datos": {
      "estado": "cerrado",
      "prioridad": "baja",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-06-19",
      "horas": 69,
      "notas": ""
     }
    },
    {
     "id": "g17",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-017",
     "nombre": "Gestión Documental",
     "creado": "2026-01-05",
     "datos": {
      "sponsor": "director",
      "project_manager": "dici",
      "cliente": "Registro Público",
      "estado": "en_curso",
      "responsable": "S. Beltrán",
      "area": "administrativo",
      "fecha_inicio": "2026-01-05",
      "fecha_fin": "2026-07-12",
      "presupuesto": 1002500,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-078",
      "descripcion": ""
     }
    },
    {
     "id": "nrl1afi",
     "tipo": "etapa",
     "parentId": "g17",
     "codigo": "PRJ-017.1",
     "nombre": "Desarrollo",
     "creado": "2026-02-02",
     "datos": {
      "estado": "en_curso",
      "avance": 16,
      "fecha_inicio": "2026-02-02",
      "fecha_fin": "2026-03-31",
      "entregables": [
       "acta",
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n50u69e",
     "tipo": "etapa",
     "parentId": "nrl1afi",
     "codigo": "PRJ-017.1.1",
     "nombre": "Integración con entidades",
     "creado": "2026-02-02",
     "datos": {
      "estado": "en_curso",
      "avance": 33,
      "fecha_inicio": "2026-02-02",
      "fecha_fin": "2026-04-08",
      "entregables": [
       "acta",
       "planos",
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nxzw0e5",
     "tipo": "tarea",
     "parentId": "n50u69e",
     "codigo": "PRJ-017.1.1.1",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-02-02",
     "datos": {
      "estado": "en_espera",
      "prioridad": "baja",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-02-26",
      "horas": 73,
      "notas": ""
     }
    },
    {
     "id": "nfhlv98",
     "tipo": "tarea",
     "parentId": "n50u69e",
     "codigo": "PRJ-017.1.1.2",
     "nombre": "Validación con la entidad",
     "creado": "2026-02-02",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "C. Vega",
      "fecha_limite": "2026-03-03",
      "horas": 62,
      "notas": ""
     }
    },
    {
     "id": "nhltgnt",
     "tipo": "tarea",
     "parentId": "nrl1afi",
     "codigo": "PRJ-017.1.2",
     "nombre": "Análisis de vulnerabilidades",
     "creado": "2026-02-02",
     "datos": {
      "estado": "en_espera",
      "prioridad": "baja",
      "responsable": "A. Torres",
      "fecha_limite": "2026-02-18",
      "horas": 30,
      "notas": ""
     }
    },
    {
     "id": "n46yej4",
     "tipo": "tarea",
     "parentId": "nrl1afi",
     "codigo": "PRJ-017.1.3",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-02-02",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "C. Vega",
      "fecha_limite": "2026-03-12",
      "horas": 76,
      "notas": ""
     }
    },
    {
     "id": "nna6sbq",
     "tipo": "tarea",
     "parentId": "nrl1afi",
     "codigo": "PRJ-017.1.4",
     "nombre": "Validación con la entidad",
     "creado": "2026-02-02",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-03-20",
      "horas": 58,
      "notas": ""
     }
    },
    {
     "id": "nwmfh6n",
     "tipo": "etapa",
     "parentId": "g17",
     "codigo": "PRJ-017.2",
     "nombre": "Adquisiciones",
     "creado": "2026-03-14",
     "datos": {
      "estado": "en_espera",
      "avance": 29,
      "fecha_inicio": "2026-03-14",
      "fecha_fin": "2026-07-12",
      "entregables": [
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nc5pdce",
     "tipo": "tarea",
     "parentId": "nwmfh6n",
     "codigo": "PRJ-017.2.1",
     "nombre": "Documentación técnica",
     "creado": "2026-03-14",
     "datos": {
      "estado": "en_espera",
      "prioridad": "media",
      "responsable": "C. Vega",
      "fecha_limite": "2026-05-13",
      "horas": 79,
      "notas": ""
     }
    },
    {
     "id": "nzo6ivv",
     "tipo": "tarea",
     "parentId": "nwmfh6n",
     "codigo": "PRJ-017.2.2",
     "nombre": "Gestión de accesos",
     "creado": "2026-03-14",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-04-09",
      "horas": 9,
      "notas": ""
     }
    },
    {
     "id": "nz19aog",
     "tipo": "tarea",
     "parentId": "g17",
     "codigo": "PRJ-017.3",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-04-14",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-05-26",
      "horas": 19,
      "notas": ""
     }
    },
    {
     "id": "nr9zdim",
     "tipo": "etapa",
     "parentId": "g17",
     "codigo": "PRJ-017.4",
     "nombre": "Capacitación",
     "creado": "2026-06-14",
     "datos": {
      "estado": "en_curso",
      "avance": 72,
      "fecha_inicio": "2026-06-14",
      "fecha_fin": "2026-10-09",
      "entregables": [
       "presupuesto",
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "ngylk3s",
     "tipo": "tarea",
     "parentId": "nr9zdim",
     "codigo": "PRJ-017.4.1",
     "nombre": "Gestión de accesos",
     "creado": "2026-06-14",
     "datos": {
      "estado": "planificado",
      "prioridad": "media",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-06-27",
      "horas": 39,
      "notas": ""
     }
    },
    {
     "id": "n34zzhq",
     "tipo": "tarea",
     "parentId": "nr9zdim",
     "codigo": "PRJ-017.4.2",
     "nombre": "Documentación técnica",
     "creado": "2026-06-14",
     "datos": {
      "estado": "planificado",
      "prioridad": "media",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-07-31",
      "horas": 19,
      "notas": ""
     }
    },
    {
     "id": "g18",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-018",
     "nombre": "Correo Institucional",
     "creado": "2026-06-27",
     "datos": {
      "sponsor": "dti",
      "project_manager": "dti",
      "cliente": "Autoridad del Canal",
      "estado": "cerrado",
      "responsable": "R. Huamán",
      "area": "electrico",
      "fecha_inicio": "2026-06-27",
      "fecha_fin": "2027-05-29",
      "presupuesto": 1075000,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-037",
      "descripcion": ""
     }
    },
    {
     "id": "nhtdbux",
     "tipo": "proyecto",
     "parentId": "g18",
     "codigo": "PRJ-018.1",
     "nombre": "Mesa de ayuda",
     "creado": "2026-07-11",
     "datos": {
      "sponsor": "direccion_ciencias_informacion",
      "project_manager": "ciencias_informacion",
      "cliente": "Ministerio de Educación",
      "estado": "en_espera",
      "responsable": "M. Quispe",
      "area": "administrativo",
      "fecha_inicio": "2026-07-11",
      "fecha_fin": "2027-05-03",
      "presupuesto": 1687500,
      "tiene_contrato": false,
      "nro_contrato": "",
      "descripcion": ""
     }
    },
    {
     "id": "nt6ccz0",
     "tipo": "tarea",
     "parentId": "nhtdbux",
     "codigo": "PRJ-018.1.1",
     "nombre": "Acta de reunión con el sponsor",
     "creado": "2026-07-11",
     "datos": {
      "estado": "en_espera",
      "prioridad": "baja",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-08-04",
      "horas": 70,
      "notas": ""
     }
    },
    {
     "id": "n29xe49",
     "tipo": "etapa",
     "parentId": "g18",
     "codigo": "PRJ-018.2",
     "nombre": "Diseño",
     "creado": "2026-08-10",
     "datos": {
      "estado": "en_curso",
      "avance": 95,
      "fecha_inicio": "2026-08-10",
      "fecha_fin": "2026-10-10",
      "entregables": [
       "planos",
       "acta",
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n3g3v74",
     "tipo": "tarea",
     "parentId": "n29xe49",
     "codigo": "PRJ-018.2.1",
     "nombre": "Capacitación a usuarios",
     "creado": "2026-08-10",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-10-04",
      "horas": 4,
      "notas": ""
     }
    },
    {
     "id": "ncj7toq",
     "tipo": "etapa",
     "parentId": "g18",
     "codigo": "PRJ-018.3",
     "nombre": "Puesta en producción",
     "creado": "2026-09-07",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-09-07",
      "fecha_fin": "2026-12-17",
      "entregables": [
       "acta",
       "planos",
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nxl8re3",
     "tipo": "etapa",
     "parentId": "ncj7toq",
     "codigo": "PRJ-018.3.1",
     "nombre": "Migración de datos",
     "creado": "2026-09-07",
     "datos": {
      "estado": "en_espera",
      "avance": 94,
      "fecha_inicio": "2026-09-07",
      "fecha_fin": "2026-12-06",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nb7r88o",
     "tipo": "tarea",
     "parentId": "nxl8re3",
     "codigo": "PRJ-018.3.1.1",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-09-07",
     "datos": {
      "estado": "en_espera",
      "prioridad": "baja",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-09-14",
      "horas": 23,
      "notas": ""
     }
    },
    {
     "id": "nh481ot",
     "tipo": "tarea",
     "parentId": "ncj7toq",
     "codigo": "PRJ-018.3.2",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-09-07",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-11-04",
      "horas": 17,
      "notas": ""
     }
    },
    {
     "id": "nfd2b0d",
     "tipo": "etapa",
     "parentId": "g18",
     "codigo": "PRJ-018.4",
     "nombre": "Levantamiento de requerimientos",
     "creado": "2026-11-22",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-11-22",
      "fecha_fin": "2027-01-13",
      "entregables": [
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nn6eu36",
     "tipo": "etapa",
     "parentId": "g18",
     "codigo": "PRJ-018.5",
     "nombre": "Adquisiciones",
     "creado": "2026-08-31",
     "datos": {
      "estado": "en_curso",
      "avance": 84,
      "fecha_inicio": "2026-08-31",
      "fecha_fin": "2026-09-22",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nmi8j1y",
     "tipo": "tarea",
     "parentId": "nn6eu36",
     "codigo": "PRJ-018.5.1",
     "nombre": "Revisión de casos de uso",
     "creado": "2026-08-31",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-09-26",
      "horas": 49,
      "notas": ""
     }
    },
    {
     "id": "g19",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-019",
     "nombre": "Inventario de Activos TI",
     "creado": "2026-04-09",
     "datos": {
      "sponsor": "dti",
      "project_manager": "dti",
      "cliente": "Contraloría General",
      "estado": "en_espera",
      "responsable": "S. Beltrán",
      "area": "administrativo",
      "fecha_inicio": "2026-04-09",
      "fecha_fin": "2026-10-20",
      "presupuesto": 1215000,
      "tiene_contrato": false,
      "nro_contrato": "",
      "descripcion": ""
     }
    },
    {
     "id": "nygrggf",
     "tipo": "tarea",
     "parentId": "g19",
     "codigo": "PRJ-019.1",
     "nombre": "Análisis de vulnerabilidades",
     "creado": "2026-04-23",
     "datos": {
      "estado": "planificado",
      "prioridad": "alta",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-06-02",
      "horas": 57,
      "notas": ""
     }
    },
    {
     "id": "nvimiux",
     "tipo": "tarea",
     "parentId": "g19",
     "codigo": "PRJ-019.2",
     "nombre": "Solicitud de cambio N° 3",
     "creado": "2026-06-16",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-07-21",
      "horas": 12,
      "notas": ""
     }
    },
    {
     "id": "nx9o960",
     "tipo": "etapa",
     "parentId": "g19",
     "codigo": "PRJ-019.3",
     "nombre": "Análisis de riesgos",
     "creado": "2026-06-08",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-06-08",
      "fecha_fin": "2026-07-09",
      "entregables": [
       "presupuesto",
       "informe",
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n8ahdcc",
     "tipo": "tarea",
     "parentId": "nx9o960",
     "codigo": "PRJ-019.3.1",
     "nombre": "Informe mensual de avance",
     "creado": "2026-06-08",
     "datos": {
      "estado": "cerrado",
      "prioridad": "alta",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-07-08",
      "horas": 19,
      "notas": ""
     }
    },
    {
     "id": "g20",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-020",
     "nombre": "Capacitación en Ciberseguridad",
     "creado": "2026-04-17",
     "datos": {
      "sponsor": "oirh",
      "project_manager": "director",
      "cliente": "Tribunal Electoral",
      "estado": "cerrado",
      "responsable": "R. Huamán",
      "area": "electrico",
      "fecha_inicio": "2026-04-17",
      "fecha_fin": "2026-10-25",
      "presupuesto": 205000,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-046",
      "descripcion": ""
     }
    },
    {
     "id": "nwejltc",
     "tipo": "etapa",
     "parentId": "g20",
     "codigo": "PRJ-020.1",
     "nombre": "Desarrollo",
     "creado": "2026-05-03",
     "datos": {
      "estado": "en_curso",
      "avance": 40,
      "fecha_inicio": "2026-05-03",
      "fecha_fin": "2026-07-25",
      "entregables": [
       "presupuesto",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nxxaq6p",
     "tipo": "tarea",
     "parentId": "nwejltc",
     "codigo": "PRJ-020.1.1",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-05-03",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-05-18",
      "horas": 64,
      "notas": ""
     }
    },
    {
     "id": "n76oe6j",
     "tipo": "tarea",
     "parentId": "nwejltc",
     "codigo": "PRJ-020.1.2",
     "nombre": "Análisis de vulnerabilidades",
     "creado": "2026-05-03",
     "datos": {
      "estado": "en_espera",
      "prioridad": "media",
      "responsable": "C. Vega",
      "fecha_limite": "2026-06-23",
      "horas": 78,
      "notas": ""
     }
    },
    {
     "id": "neqhnx7",
     "tipo": "tarea",
     "parentId": "nwejltc",
     "codigo": "PRJ-020.1.3",
     "nombre": "Configuración de servidores",
     "creado": "2026-05-03",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-05-15",
      "horas": 30,
      "notas": ""
     }
    },
    {
     "id": "nz3dm0f",
     "tipo": "etapa",
     "parentId": "g20",
     "codigo": "PRJ-020.2",
     "nombre": "Diseño",
     "creado": "2026-06-22",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-06-22",
      "fecha_fin": "2026-07-27",
      "entregables": [
       "planos",
       "presupuesto",
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "n2felwj",
     "tipo": "tarea",
     "parentId": "nz3dm0f",
     "codigo": "PRJ-020.2.1",
     "nombre": "Documentación técnica",
     "creado": "2026-06-22",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-08-17",
      "horas": 55,
      "notas": ""
     }
    },
    {
     "id": "nkq829q",
     "tipo": "tarea",
     "parentId": "nz3dm0f",
     "codigo": "PRJ-020.2.2",
     "nombre": "Informe mensual de avance",
     "creado": "2026-06-22",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "A. Torres",
      "fecha_limite": "2026-06-29",
      "horas": 32,
      "notas": ""
     }
    },
    {
     "id": "n7hytuj",
     "tipo": "tarea",
     "parentId": "nz3dm0f",
     "codigo": "PRJ-020.2.3",
     "nombre": "Solicitud de cambio N° 3",
     "creado": "2026-06-22",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "A. Torres",
      "fecha_limite": "2026-06-28",
      "horas": 7,
      "notas": ""
     }
    },
    {
     "id": "n3klyi5",
     "tipo": "tarea",
     "parentId": "g20",
     "codigo": "PRJ-020.3",
     "nombre": "Revisión de casos de uso",
     "creado": "2026-06-16",
     "datos": {
      "estado": "cerrado",
      "prioridad": "alta",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-07-15",
      "horas": 37,
      "notas": ""
     }
    },
    {
     "id": "ni8o3q7",
     "tipo": "etapa",
     "parentId": "g20",
     "codigo": "PRJ-020.4",
     "nombre": "Puesta en producción",
     "creado": "2026-08-27",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-08-27",
      "fecha_fin": "2026-11-17",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nv2qa8w",
     "tipo": "tarea",
     "parentId": "ni8o3q7",
     "codigo": "PRJ-020.4.1",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-08-27",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "C. Vega",
      "fecha_limite": "2026-09-05",
      "horas": 75,
      "notas": ""
     }
    },
    {
     "id": "n4uzwkr",
     "tipo": "tarea",
     "parentId": "ni8o3q7",
     "codigo": "PRJ-020.4.2",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-08-27",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-10-22",
      "horas": 66,
      "notas": ""
     }
    },
    {
     "id": "ny4ggx9",
     "tipo": "tarea",
     "parentId": "ni8o3q7",
     "codigo": "PRJ-020.4.3",
     "nombre": "Informe mensual de avance",
     "creado": "2026-08-27",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "C. Vega",
      "fecha_limite": "2026-10-08",
      "horas": 15,
      "notas": ""
     }
    },
    {
     "id": "nx692wq",
     "tipo": "etapa",
     "parentId": "g20",
     "codigo": "PRJ-020.5",
     "nombre": "Análisis de riesgos",
     "creado": "2026-08-05",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-08-05",
      "fecha_fin": "2026-10-06",
      "entregables": [
       "presupuesto",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nqsxbw9",
     "tipo": "tarea",
     "parentId": "nx692wq",
     "codigo": "PRJ-020.5.1",
     "nombre": "Capacitación a usuarios",
     "creado": "2026-08-05",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-09-06",
      "horas": 52,
      "notas": ""
     }
    },
    {
     "id": "n4tvxpb",
     "tipo": "tarea",
     "parentId": "nx692wq",
     "codigo": "PRJ-020.5.2",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-08-05",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-10-03",
      "horas": 22,
      "notas": ""
     }
    },
    {
     "id": "nyb9qsr",
     "tipo": "tarea",
     "parentId": "nx692wq",
     "codigo": "PRJ-020.5.3",
     "nombre": "Validación con la entidad",
     "creado": "2026-08-05",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-08-10",
      "horas": 35,
      "notas": ""
     }
    },
    {
     "id": "n7okpon",
     "tipo": "proyecto",
     "parentId": "g20",
     "codigo": "PRJ-020.6",
     "nombre": "Mesa de ayuda",
     "creado": "2026-08-09",
     "datos": {
      "sponsor": "oirh",
      "project_manager": "di",
      "cliente": "Ministerio de Educación",
      "estado": "en_espera",
      "responsable": "L. Paredes",
      "area": "obra_civil",
      "fecha_inicio": "2026-08-09",
      "fecha_fin": "2027-03-10",
      "presupuesto": 1047500,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-045",
      "descripcion": ""
     }
    },
    {
     "id": "nf3z2aa",
     "tipo": "tarea",
     "parentId": "n7okpon",
     "codigo": "PRJ-020.6.1",
     "nombre": "Informe mensual de avance",
     "creado": "2026-08-09",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-09-12",
      "horas": 32,
      "notas": ""
     }
    },
    {
     "id": "n42bk3f",
     "tipo": "tarea",
     "parentId": "n7okpon",
     "codigo": "PRJ-020.6.2",
     "nombre": "Publicación en producción",
     "creado": "2026-08-09",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-10-05",
      "horas": 78,
      "notas": ""
     }
    },
    {
     "id": "g21",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-021",
     "nombre": "Telefonía IP",
     "creado": "2026-04-26",
     "datos": {
      "sponsor": "dti",
      "project_manager": "dti",
      "cliente": "Caja de Seguro Social",
      "estado": "en_espera",
      "responsable": "L. Paredes",
      "area": "legal",
      "fecha_inicio": "2026-04-26",
      "fecha_fin": "2026-07-21",
      "presupuesto": 200000,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-052",
      "descripcion": ""
     }
    },
    {
     "id": "nz0uxjz",
     "tipo": "proyecto",
     "parentId": "g21",
     "codigo": "PRJ-021.1",
     "nombre": "App móvil",
     "creado": "2026-05-13",
     "datos": {
      "sponsor": "di",
      "project_manager": "di",
      "cliente": "Ministerio de Salud",
      "estado": "planificado",
      "responsable": "J. Ríos",
      "area": "electrico",
      "fecha_inicio": "2026-05-13",
      "fecha_fin": "2027-01-28",
      "presupuesto": 50000,
      "tiene_contrato": false,
      "nro_contrato": "",
      "descripcion": ""
     }
    },
    {
     "id": "nt5vax5",
     "tipo": "tarea",
     "parentId": "nz0uxjz",
     "codigo": "PRJ-021.1.1",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-05-13",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "A. Torres",
      "fecha_limite": "2026-05-31",
      "horas": 4,
      "notas": ""
     }
    },
    {
     "id": "nlu4fgz",
     "tipo": "etapa",
     "parentId": "g21",
     "codigo": "PRJ-021.2",
     "nombre": "Análisis de riesgos",
     "creado": "2026-05-30",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-05-30",
      "fecha_fin": "2026-09-26",
      "entregables": [
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nddfi2s",
     "tipo": "etapa",
     "parentId": "nlu4fgz",
     "codigo": "PRJ-021.2.1",
     "nombre": "Módulo de seguridad",
     "creado": "2026-05-30",
     "datos": {
      "estado": "en_espera",
      "avance": 14,
      "fecha_inicio": "2026-05-30",
      "fecha_fin": "2026-07-08",
      "entregables": [
       "presupuesto",
       "informe",
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nozloud",
     "tipo": "tarea",
     "parentId": "nddfi2s",
     "codigo": "PRJ-021.2.1.1",
     "nombre": "Solicitud de cambio N° 3",
     "creado": "2026-05-30",
     "datos": {
      "estado": "planificado",
      "prioridad": "alta",
      "responsable": "L. Paredes",
      "fecha_limite": "2026-07-28",
      "horas": 47,
      "notas": ""
     }
    },
    {
     "id": "njznkn4",
     "tipo": "tarea",
     "parentId": "nlu4fgz",
     "codigo": "PRJ-021.2.2",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-05-30",
     "datos": {
      "estado": "en_espera",
      "prioridad": "media",
      "responsable": "C. Vega",
      "fecha_limite": "2026-06-14",
      "horas": 53,
      "notas": ""
     }
    },
    {
     "id": "npqwl6v",
     "tipo": "tarea",
     "parentId": "nlu4fgz",
     "codigo": "PRJ-021.2.3",
     "nombre": "Validación con la entidad",
     "creado": "2026-05-30",
     "datos": {
      "estado": "en_espera",
      "prioridad": "media",
      "responsable": "P. Salazar",
      "fecha_limite": "2026-06-10",
      "horas": 32,
      "notas": ""
     }
    },
    {
     "id": "no4a0te",
     "tipo": "tarea",
     "parentId": "g21",
     "codigo": "PRJ-021.3",
     "nombre": "Respaldo y plan de contingencia",
     "creado": "2026-06-25",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "A. Torres",
      "fecha_limite": "2026-08-13",
      "horas": 17,
      "notas": ""
     }
    },
    {
     "id": "nn1efyq",
     "tipo": "etapa",
     "parentId": "g21",
     "codigo": "PRJ-021.4",
     "nombre": "Pruebas",
     "creado": "2026-06-21",
     "datos": {
      "estado": "planificado",
      "avance": 0,
      "fecha_inicio": "2026-06-21",
      "fecha_fin": "2026-07-22",
      "entregables": [
       "acta",
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "g22",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-022",
     "nombre": "Red Nacional Multiservicios",
     "creado": "2026-07-13",
     "datos": {
      "sponsor": "dici",
      "project_manager": "dti",
      "cliente": "Contraloría General",
      "estado": "en_curso",
      "responsable": "L. Paredes",
      "area": "obra_civil",
      "fecha_inicio": "2026-07-13",
      "fecha_fin": "2027-06-27",
      "presupuesto": 1515000,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-042",
      "descripcion": ""
     }
    },
    {
     "id": "nbl26h4",
     "tipo": "etapa",
     "parentId": "g22",
     "codigo": "PRJ-022.1",
     "nombre": "Cierre",
     "creado": "2026-08-13",
     "datos": {
      "estado": "cerrado",
      "avance": 100,
      "fecha_inicio": "2026-08-13",
      "fecha_fin": "2026-09-25",
      "entregables": [
       "presupuesto",
       "planos",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "niufqva",
     "tipo": "etapa",
     "parentId": "g22",
     "codigo": "PRJ-022.2",
     "nombre": "Levantamiento de requerimientos",
     "creado": "2026-08-26",
     "datos": {
      "estado": "en_curso",
      "avance": 19,
      "fecha_inicio": "2026-08-26",
      "fecha_fin": "2026-10-21",
      "entregables": [
       "informe",
       "planos"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nxtji65",
     "tipo": "etapa",
     "parentId": "niufqva",
     "codigo": "PRJ-022.2.1",
     "nombre": "Interfaz de usuario",
     "creado": "2026-08-26",
     "datos": {
      "estado": "en_curso",
      "avance": 23,
      "fecha_inicio": "2026-08-26",
      "fecha_fin": "2026-10-21",
      "entregables": [
       "presupuesto",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nivwdbz",
     "tipo": "tarea",
     "parentId": "nxtji65",
     "codigo": "PRJ-022.2.1.1",
     "nombre": "Configuración de servidores",
     "creado": "2026-08-26",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-10-12",
      "horas": 43,
      "notas": ""
     }
    },
    {
     "id": "nbwkljb",
     "tipo": "tarea",
     "parentId": "nxtji65",
     "codigo": "PRJ-022.2.1.2",
     "nombre": "Gestión de accesos",
     "creado": "2026-08-26",
     "datos": {
      "estado": "en_curso",
      "prioridad": "alta",
      "responsable": "J. Ríos",
      "fecha_limite": "2026-10-10",
      "horas": 39,
      "notas": ""
     }
    },
    {
     "id": "nbchhyu",
     "tipo": "etapa",
     "parentId": "g22",
     "codigo": "PRJ-022.3",
     "nombre": "Análisis de riesgos",
     "creado": "2026-11-01",
     "datos": {
      "estado": "en_espera",
      "avance": 62,
      "fecha_inicio": "2026-11-01",
      "fecha_fin": "2027-02-26",
      "entregables": [
       "presupuesto"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nkqkmka",
     "tipo": "tarea",
     "parentId": "nbchhyu",
     "codigo": "PRJ-022.3.1",
     "nombre": "Informe mensual de avance",
     "creado": "2026-11-01",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "S. Beltrán",
      "fecha_limite": "2026-11-13",
      "horas": 79,
      "notas": ""
     }
    },
    {
     "id": "g23",
     "tipo": "proyecto",
     "parentId": null,
     "codigo": "PRJ-023",
     "nombre": "Panamá Digital",
     "creado": "2026-06-15",
     "datos": {
      "sponsor": "despacho_superior",
      "project_manager": "director",
      "cliente": "Registro Público",
      "estado": "en_curso",
      "responsable": "A. Torres",
      "area": "obra_civil",
      "fecha_inicio": "2026-06-15",
      "fecha_fin": "2027-04-08",
      "presupuesto": 2170000,
      "tiene_contrato": true,
      "nro_contrato": "CT-2026-021",
      "descripcion": ""
     }
    },
    {
     "id": "nw9l8b9",
     "tipo": "etapa",
     "parentId": "g23",
     "codigo": "PRJ-023.1",
     "nombre": "Adquisiciones",
     "creado": "2026-06-30",
     "datos": {
      "estado": "en_curso",
      "avance": 65,
      "fecha_inicio": "2026-06-30",
      "fecha_fin": "2026-09-19",
      "entregables": [
       "presupuesto",
       "planos",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "npbrb03",
     "tipo": "tarea",
     "parentId": "g23",
     "codigo": "PRJ-023.2",
     "nombre": "Documentación técnica",
     "creado": "2026-08-30",
     "datos": {
      "estado": "cerrado",
      "prioridad": "baja",
      "responsable": "A. Torres",
      "fecha_limite": "2026-10-26",
      "horas": 32,
      "notas": ""
     }
    },
    {
     "id": "nwzwnv1",
     "tipo": "tarea",
     "parentId": "g23",
     "codigo": "PRJ-023.3",
     "nombre": "Validación con la entidad",
     "creado": "2026-09-04",
     "datos": {
      "estado": "planificado",
      "prioridad": "baja",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-10-27",
      "horas": 19,
      "notas": ""
     }
    },
    {
     "id": "n0b1pxd",
     "tipo": "etapa",
     "parentId": "g23",
     "codigo": "PRJ-023.4",
     "nombre": "Levantamiento de requerimientos",
     "creado": "2026-10-21",
     "datos": {
      "estado": "en_espera",
      "avance": 57,
      "fecha_inicio": "2026-10-21",
      "fecha_fin": "2026-12-10",
      "entregables": [
       "informe"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nsba4r4",
     "tipo": "tarea",
     "parentId": "n0b1pxd",
     "codigo": "PRJ-023.4.1",
     "nombre": "Elaboración de manual de usuario",
     "creado": "2026-10-21",
     "datos": {
      "estado": "en_espera",
      "prioridad": "alta",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-12-17",
      "horas": 29,
      "notas": ""
     }
    },
    {
     "id": "nxaoog0",
     "tipo": "tarea",
     "parentId": "n0b1pxd",
     "codigo": "PRJ-023.4.2",
     "nombre": "Documentación técnica",
     "creado": "2026-10-21",
     "datos": {
      "estado": "en_curso",
      "prioridad": "baja",
      "responsable": "C. Vega",
      "fecha_limite": "2026-12-17",
      "horas": 60,
      "notas": ""
     }
    },
    {
     "id": "ngkkjpf",
     "tipo": "tarea",
     "parentId": "g23",
     "codigo": "PRJ-023.5",
     "nombre": "Validación con la entidad",
     "creado": "2026-11-02",
     "datos": {
      "estado": "cerrado",
      "prioridad": "media",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-12-17",
      "horas": 28,
      "notas": ""
     }
    },
    {
     "id": "n23rwrr",
     "tipo": "etapa",
     "parentId": "g23",
     "codigo": "PRJ-023.6",
     "nombre": "Análisis de riesgos",
     "creado": "2026-10-31",
     "datos": {
      "estado": "en_curso",
      "avance": 42,
      "fecha_inicio": "2026-10-31",
      "fecha_fin": "2027-02-24",
      "entregables": [
       "informe",
       "acta"
      ],
      "observaciones": ""
     }
    },
    {
     "id": "nb7lhwh",
     "tipo": "tarea",
     "parentId": "n23rwrr",
     "codigo": "PRJ-023.6.1",
     "nombre": "Pruebas de aceptación",
     "creado": "2026-10-31",
     "datos": {
      "estado": "cerrado",
      "prioridad": "baja",
      "responsable": "R. Huamán",
      "fecha_limite": "2026-12-29",
      "horas": 56,
      "notas": ""
     }
    },
    {
     "id": "nbrofku",
     "tipo": "tarea",
     "parentId": "n23rwrr",
     "codigo": "PRJ-023.6.2",
     "nombre": "Solicitud de cambio N° 3",
     "creado": "2026-10-31",
     "datos": {
      "estado": "en_curso",
      "prioridad": "media",
      "responsable": "M. Quispe",
      "fecha_limite": "2026-11-15",
      "horas": 70,
      "notas": ""
     }
    }
   ],
   "archivos": [
    {
     "id": "a1",
     "nodoId": "p1",
     "campoKey": "contrato_firmado",
     "nombre": "Contrato CT-2026-014 firmado.pdf",
     "clase": "documento",
     "tamano": 1843210,
     "fecha": "2026-03-05",
     "origen": "Cliente"
    },
    {
     "id": "a2",
     "nodoId": "p1",
     "nombre": "RE: Entrega de diseño rev. B.eml",
     "clase": "email",
     "tamano": 48210,
     "fecha": "2026-08-21",
     "origen": "Sponsor",
     "email": {
      "de": "j.rojas@entidad.gob.pa",
      "para": "m.quispe@sispla.demo",
      "asunto": "RE: Entrega de diseño rev. B",
      "fechaEnvio": "2026-08-21"
     }
    },
    {
     "id": "a3",
     "nodoId": "e2",
     "nombre": "Acta de inicio del proyecto.pdf",
     "clase": "documento",
     "tamano": 522000,
     "fecha": "2026-04-20",
     "origen": "Proveedor"
    },
    {
     "id": "a4",
     "nodoId": "t4",
     "nombre": "Observaciones a diseño rev. B.eml",
     "clase": "email",
     "tamano": 31000,
     "fecha": "2026-08-28",
     "origen": "Sponsor",
     "email": {
      "de": "j.rojas@entidad.gob.pa",
      "para": "m.quispe@sispla.demo",
      "asunto": "Observaciones a diseño rev. B",
      "fechaEnvio": "2026-08-28"
     }
    }
   ],
   "historial": [
    {
     "nodoId": "g2",
     "fecha": "2026-09-11 21:56",
     "campo": "nombre",
     "antes": "Sin Especificar",
     "despues": "integracion con DGI"
    },
    {
     "nodoId": "e2",
     "fecha": "2026-08-30 10:12",
     "campo": "avance",
     "antes": "30",
     "despues": "35"
    },
    {
     "nodoId": "t4",
     "fecha": "2026-08-28 16:40",
     "campo": "estado",
     "antes": "En curso",
     "despues": "En espera"
    },
    {
     "nodoId": "p1",
     "fecha": "2026-03-05 09:02",
     "campo": "tiene_contrato",
     "antes": "No",
     "despues": "Sí"
    }
   ]
  },
  "version": 5,
  "modificado": 1789171962004
 }
};
