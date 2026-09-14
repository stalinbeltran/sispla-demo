/* Estado de la demo SisPla generado el 2026-09-14T20:19:33.962Z desde la base sispla_aig (tablas proyecto, subproyecto, seguimientos y sus catálogos). No editar a mano. */
window.SISPLA_GUARDADO={
 "guardadoEn": 1789417173962,
 "estado": {
  "meta": {
   "tipos": [
    {
     "id": "portafolio",
     "nombre": "Portafolio de proyectos",
     "nuevo": "Nuevo portafolio",
     "raiz": true,
     "prefijo": "PF",
     "icono": "",
     "formId": "f_portafolio",
     "hijos": [
      "proyecto"
     ],
     "columnas": [
      "tipo",
      "sponsor",
      "pmanager",
      "fecha_fin"
     ],
     "archivos": true
    },
    {
     "id": "proyecto",
     "nombre": "Proyecto",
     "nuevo": "Nuevo proyecto",
     "raiz": false,
     "icono": "",
     "formId": "f_proyecto",
     "hijos": [
      "seguimiento"
     ],
     "columnas": [
      "estado",
      "prioridad",
      "unidad_gestora",
      "fecha_fin"
     ],
     "archivos": true
    },
    {
     "id": "seguimiento",
     "nombre": "Seguimiento",
     "nuevo": "Nuevo seguimiento",
     "raiz": false,
     "icono": "",
     "formId": "f_seguimiento",
     "hijos": [],
     "columnas": [
      "actividad",
      "estado",
      "fecha_planificada_inicio",
      "fecha_planificada_fin"
     ],
     "archivos": false
    }
   ],
   "formularios": {
    "f_portafolio": {
     "id": "f_portafolio",
     "nombre": "Ficha de portafolio",
     "campos": [
      {
       "key": "tipo",
       "label": "Tipo",
       "tipo": "lista",
       "visible": true,
       "ancho": "half",
       "catalogo": "tipo_portafolio",
       "requerido": true
      },
      {
       "key": "sponsor",
       "label": "Sponsor",
       "tipo": "texto",
       "visible": true,
       "ancho": "half",
       "requerido": true,
       "ayuda": "Nombre del sponsor tal como se escribe en SISPLA (texto libre)."
      },
      {
       "key": "pmanager",
       "label": "Administrador",
       "tipo": "texto",
       "visible": true,
       "ancho": "half",
       "requerido": true
      },
      {
       "key": "url",
       "label": "URL",
       "tipo": "texto",
       "visible": true,
       "ancho": "half",
       "ayuda": "Por ejemplo: http://sispla.site"
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
       "label": "Fecha de fin",
       "tipo": "fecha",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "areas",
       "label": "Áreas",
       "tipo": "multiple",
       "visible": true,
       "ancho": "full",
       "catalogo": "area",
       "ayuda": "En SISPLA: tabla proyecto_area."
      },
      {
       "key": "grupos",
       "label": "Grupos",
       "tipo": "multiple",
       "visible": true,
       "ancho": "full",
       "catalogo": "grupo",
       "ayuda": "En SISPLA: tabla proyecto_grupo."
      },
      {
       "key": "sispla_id",
       "label": "ID en SISPLA",
       "tipo": "texto",
       "visible": true,
       "ancho": "half",
       "ayuda": "Identificador del registro en la base del SISPLA original. Solo informativo; no se usa para nada más."
      }
     ]
    },
    "f_proyecto": {
     "id": "f_proyecto",
     "nombre": "Ficha de proyecto",
     "campos": [
      {
       "key": "unidad_gestora",
       "label": "Unidad Gestora",
       "tipo": "lista",
       "visible": true,
       "ancho": "half",
       "catalogo": "unidad_gestora",
       "requerido": true
      },
      {
       "key": "tipo",
       "label": "Tipo",
       "tipo": "lista",
       "visible": true,
       "ancho": "half",
       "catalogo": "tipo_proyecto",
       "requerido": true
      },
      {
       "key": "area",
       "label": "Área",
       "tipo": "lista",
       "visible": true,
       "ancho": "half",
       "catalogo": "area",
       "requerido": true
      },
      {
       "key": "linea_estrategica",
       "label": "Línea Estratégica",
       "tipo": "lista",
       "visible": true,
       "ancho": "half",
       "catalogo": "linea_estrategica",
       "requerido": true
      },
      {
       "key": "division",
       "label": "División del proyecto",
       "tipo": "lista",
       "visible": true,
       "ancho": "half",
       "catalogo": "division",
       "requerido": true,
       "ayuda": "En SISPLA se llama \"División Subproyectos\"."
      },
      {
       "key": "prioridad",
       "label": "Prioridad",
       "tipo": "lista",
       "visible": true,
       "ancho": "half",
       "catalogo": "prioridad",
       "requerido": true
      },
      {
       "key": "estado",
       "label": "Estatus",
       "tipo": "lista",
       "visible": true,
       "ancho": "half",
       "catalogo": "estatus",
       "requerido": true
      },
      {
       "key": "proveedor",
       "label": "Proveedor",
       "tipo": "lista",
       "visible": true,
       "ancho": "half",
       "catalogo": "proveedor",
       "requerido": true
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
       "label": "Fecha de Fin",
       "tipo": "fecha",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "no_documento",
       "label": "No Documento",
       "tipo": "texto",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "ticket",
       "label": "Ticket",
       "tipo": "texto",
       "visible": true,
       "ancho": "half",
       "ayuda": "Por ejemplo: 001"
      },
      {
       "key": "costo_hora",
       "label": "Costo por Hora",
       "tipo": "numero",
       "visible": true,
       "ancho": "half",
       "requerido": true
      },
      {
       "key": "costo_total",
       "label": "Costo Total",
       "tipo": "numero",
       "visible": true,
       "ancho": "half",
       "requerido": true
      },
      {
       "key": "sispla_id",
       "label": "ID en SISPLA",
       "tipo": "texto",
       "visible": true,
       "ancho": "half",
       "ayuda": "Identificador del registro en la base del SISPLA original. Solo informativo; no se usa para nada más. Corresponde a la tabla subproyecto."
      }
     ]
    },
    "f_seguimiento": {
     "id": "f_seguimiento",
     "nombre": "Ficha de seguimiento",
     "campos": [
      {
       "key": "actividad",
       "label": "Actividad",
       "tipo": "numero",
       "visible": true,
       "ancho": "half",
       "requerido": true,
       "ayuda": "Número de orden de la actividad, por ejemplo 8.1."
      },
      {
       "key": "dias",
       "label": "Días",
       "tipo": "numero",
       "visible": true,
       "ancho": "half",
       "requerido": true
      },
      {
       "key": "tipo",
       "label": "Tipo",
       "tipo": "lista",
       "visible": true,
       "ancho": "half",
       "catalogo": "tipo_seguimiento"
      },
      {
       "key": "estado",
       "label": "Estatus",
       "tipo": "lista",
       "visible": true,
       "ancho": "half",
       "catalogo": "estatus",
       "requerido": true
      },
      {
       "key": "fecha_planificada_inicio",
       "label": "Inicio planificado",
       "tipo": "fecha",
       "visible": true,
       "ancho": "half",
       "requerido": true
      },
      {
       "key": "fecha_planificada_fin",
       "label": "Fin planificado",
       "tipo": "fecha",
       "visible": true,
       "ancho": "half",
       "requerido": true
      },
      {
       "key": "fecha_inicio",
       "label": "Inicio real",
       "tipo": "fecha",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "fecha_fin",
       "label": "Fin real",
       "tipo": "fecha",
       "visible": true,
       "ancho": "half"
      },
      {
       "key": "n_responsables",
       "label": "Personas responsables",
       "tipo": "numero",
       "visible": true,
       "ancho": "half",
       "ayuda": "En SISPLA es una lista de personas con costo y rata por hora (tabla responsable_seguimiento). En la demo solo se cargó la cantidad."
      },
      {
       "key": "observacion",
       "label": "Observación",
       "tipo": "textolargo",
       "visible": true,
       "ancho": "full"
      },
      {
       "key": "sispla_id",
       "label": "ID en SISPLA",
       "tipo": "texto",
       "visible": true,
       "ancho": "half",
       "ayuda": "Identificador del registro en la base del SISPLA original. Solo informativo; no se usa para nada más. Corresponde a la tabla seguimientos."
      }
     ]
    }
   },
   "catalogos": {
    "tipo_portafolio": {
     "id": "tipo_portafolio",
     "nombre": "Tipos de portafolio",
     "opciones": [
      {
       "valor": "inversion",
       "etiqueta": "Inversión",
       "color": "#2E5C8A"
      },
      {
       "valor": "funcionamiento",
       "etiqueta": "Funcionamiento",
       "color": "#2E7D5B"
      }
     ]
    },
    "unidad_gestora": {
     "id": "unidad_gestora",
     "nombre": "Unidades gestoras",
     "opciones": [
      {
       "valor": "despacho_superior",
       "etiqueta": "Despacho Superior",
       "color": "#2E5C8A"
      },
      {
       "valor": "direccion_de_administracion_ejecutiva_y_finanzas",
       "etiqueta": "Dirección de Administración, Ejecutiva y Finanzas",
       "color": "#2E7D5B"
      },
      {
       "valor": "direccion_de_arquitectura_tecnologica",
       "etiqueta": "Dirección de Arquitectura Tecnológica",
       "color": "#C08A1E"
      },
      {
       "valor": "direccion_de_ciencias_de_la_informacion",
       "etiqueta": "Dirección de Ciencias de la Información",
       "color": "#6B5B95"
      },
      {
       "valor": "direccion_de_cumplimiento_normas_y_solu_verticales",
       "etiqueta": "Dirección de Cumplimiento Normas y Solu Verticales",
       "color": "#3A8A8A"
      },
      {
       "valor": "direccion_de_tecnologia",
       "etiqueta": "Dirección de Tecnología",
       "color": "#5A6B7C"
      },
      {
       "valor": "direccion_de_transformacion_digital",
       "etiqueta": "Dirección de Transformación Digital",
       "color": "#2E7D8A"
      },
      {
       "valor": "oficina_institucional_de_recursos_humanos",
       "etiqueta": "Oficina Institucional de Recursos Humanos",
       "color": "#B23A3A"
      }
     ]
    },
    "tipo_proyecto": {
     "id": "tipo_proyecto",
     "nombre": "Tipos de proyecto",
     "opciones": [
      {
       "valor": "proyecto",
       "etiqueta": "Proyecto",
       "color": "#2E5C8A"
      },
      {
       "valor": "actividad",
       "etiqueta": "Actividad",
       "color": "#2E7D5B"
      },
      {
       "valor": "incidencia",
       "etiqueta": "Incidencia",
       "color": "#C08A1E"
      }
     ]
    },
    "area": {
     "id": "area",
     "nombre": "Áreas",
     "opciones": [
      {
       "valor": "administrativo",
       "etiqueta": "Administrativo",
       "color": "#2E5C8A"
      },
      {
       "valor": "analitica",
       "etiqueta": "Analítica",
       "color": "#2E7D5B"
      },
      {
       "valor": "aplicacion",
       "etiqueta": "Aplicación",
       "color": "#C08A1E"
      },
      {
       "valor": "base_de_datos",
       "etiqueta": "Base de Datos",
       "color": "#6B5B95"
      },
      {
       "valor": "bus_de_servicio",
       "etiqueta": "Bus de Servicio",
       "color": "#3A8A8A"
      },
      {
       "valor": "consultoria",
       "etiqueta": "Consultoría",
       "color": "#5A6B7C"
      },
      {
       "valor": "datos",
       "etiqueta": "Datos",
       "color": "#2E7D8A"
      },
      {
       "valor": "desarrollo",
       "etiqueta": "Desarrollo",
       "color": "#B23A3A"
      },
      {
       "valor": "dods",
       "etiqueta": "DoDs",
       "color": "#8A94A0"
      },
      {
       "valor": "gobernanza",
       "etiqueta": "Gobernanza",
       "color": "#2E5C8A"
      },
      {
       "valor": "hub_de_datos",
       "etiqueta": "Hub de Datos",
       "color": "#2E7D5B"
      },
      {
       "valor": "ia",
       "etiqueta": "IA",
       "color": "#C08A1E"
      },
      {
       "valor": "implementacion",
       "etiqueta": "Implementación",
       "color": "#6B5B95"
      },
      {
       "valor": "infraestructura",
       "etiqueta": "Infraestructura",
       "color": "#3A8A8A"
      },
      {
       "valor": "pm",
       "etiqueta": "PM",
       "color": "#5A6B7C"
      },
      {
       "valor": "politicas_y_procedimientos",
       "etiqueta": "Políticas y Procedimientos",
       "color": "#2E7D8A"
      },
      {
       "valor": "procesos",
       "etiqueta": "Procesos",
       "color": "#B23A3A"
      }
     ]
    },
    "linea_estrategica": {
     "id": "linea_estrategica",
     "nombre": "Líneas estratégicas",
     "opciones": [
      {
       "valor": "enfoque_competitividad_pais",
       "etiqueta": "Enfoque competitividad país.",
       "color": "#2E5C8A"
      },
      {
       "valor": "uso_de_data_para_predecir_tendencias",
       "etiqueta": "Uso de Data para Predecir Tendencias.",
       "color": "#2E7D5B"
      },
      {
       "valor": "uso_de_data_para_disenar_normas_y_servicios_gubern",
       "etiqueta": "Uso de data para diseñar normas y servicios gubern",
       "color": "#C08A1E"
      },
      {
       "valor": "uso_de_data_para_medicion_de_resultados",
       "etiqueta": "Uso de data para medición de resultados.",
       "color": "#6B5B95"
      },
      {
       "valor": "enfoque_de_procesos_de_negocio",
       "etiqueta": "Enfoque de Procesos de Negocio",
       "color": "#3A8A8A"
      },
      {
       "valor": "infraestructura_tic",
       "etiqueta": "Infraestructura TIC",
       "color": "#5A6B7C"
      },
      {
       "valor": "gobernanza_de_datos",
       "etiqueta": "Gobernanza de Datos",
       "color": "#2E7D8A"
      },
      {
       "valor": "datos_abiertos",
       "etiqueta": "Datos Abiertos",
       "color": "#B23A3A"
      },
      {
       "valor": "politicas_estandares_marcos_de_aplicaciones_y_o",
       "etiqueta": "Políticas, estandarés, marcos de Aplicaciones y (o",
       "color": "#8A94A0"
      },
      {
       "valor": "imagen_institucional_y_transparencia",
       "etiqueta": "Imagen Institucional y Transparencia",
       "color": "#2E5C8A"
      },
      {
       "valor": "transformacion_digital_enfocado_en_el_ciudadano",
       "etiqueta": "Transformación Digital Enfocado en el Ciudadano",
       "color": "#2E7D5B"
      },
      {
       "valor": "intercambio_de_datos",
       "etiqueta": "Intercambio de Datos",
       "color": "#C08A1E"
      },
      {
       "valor": "estrategia_de_datos",
       "etiqueta": "Estrategia de Datos",
       "color": "#6B5B95"
      },
      {
       "valor": "seguridad_y_confiabilidad_de_los_sistemas",
       "etiqueta": "Seguridad y Confiabilidad de los Sistemas",
       "color": "#3A8A8A"
      },
      {
       "valor": "innovacion_y_conectividad",
       "etiqueta": "Innovación y Conectividad",
       "color": "#5A6B7C"
      }
     ]
    },
    "division": {
     "id": "division",
     "nombre": "Divisiones del proyecto",
     "opciones": [
      {
       "valor": "por_definir",
       "etiqueta": "Por Definir",
       "color": "#2E5C8A"
      },
      {
       "valor": "formulacion",
       "etiqueta": "Formulación",
       "color": "#2E7D5B"
      },
      {
       "valor": "adquisicion",
       "etiqueta": "Adquisición",
       "color": "#C08A1E"
      },
      {
       "valor": "ejecucion",
       "etiqueta": "Ejecución",
       "color": "#6B5B95"
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
      },
      {
       "valor": "urgente",
       "etiqueta": "Urgente",
       "color": "#7A1F1F"
      }
     ]
    },
    "estatus": {
     "id": "estatus",
     "nombre": "Estatus de avance",
     "opciones": [
      {
       "valor": "no_iniciado",
       "etiqueta": "No Iniciado",
       "color": "#8A94A0"
      },
      {
       "valor": "analisis",
       "etiqueta": "Análisis",
       "color": "#6B5B95"
      },
      {
       "valor": "en_progreso",
       "etiqueta": "En Progreso",
       "color": "#2E5C8A"
      },
      {
       "valor": "calidad",
       "etiqueta": "Calidad",
       "color": "#C08A1E"
      },
      {
       "valor": "completo",
       "etiqueta": "Completo",
       "color": "#2E7D5B"
      },
      {
       "valor": "aplazado",
       "etiqueta": "Aplazado",
       "color": "#5A6B7C"
      },
      {
       "valor": "cancelado",
       "etiqueta": "Cancelado",
       "color": "#B23A3A"
      }
     ]
    },
    "proveedor": {
     "id": "proveedor",
     "nombre": "Proveedores",
     "opciones": [
      {
       "valor": "negocios_y_soluciones_informaticas_s_a",
       "etiqueta": "Negocios y Soluciones Informáticas S.A",
       "color": "#2E5C8A"
      },
      {
       "valor": "3_tech",
       "etiqueta": "3-TECH",
       "color": "#2E7D5B"
      },
      {
       "valor": "aig",
       "etiqueta": "AIG",
       "color": "#C08A1E"
      },
      {
       "valor": "axxis_systems",
       "etiqueta": "Axxis Systems",
       "color": "#6B5B95"
      },
      {
       "valor": "maxialatam",
       "etiqueta": "MaxiaLatam",
       "color": "#3A8A8A"
      },
      {
       "valor": "electro_sistema",
       "etiqueta": "Electro Sistema",
       "color": "#5A6B7C"
      },
      {
       "valor": "zertifika",
       "etiqueta": "Zertifika",
       "color": "#2E7D8A"
      },
      {
       "valor": "megapractical",
       "etiqueta": "Megapractical",
       "color": "#B23A3A"
      },
      {
       "valor": "rootstack",
       "etiqueta": "Rootstack",
       "color": "#8A94A0"
      }
     ]
    },
    "grupo": {
     "id": "grupo",
     "nombre": "Grupos",
     "opciones": [
      {
       "valor": "comite_de_manejo_de_contingencias_o_equipo_de_crisis_cmc",
       "etiqueta": "Comité de Manejo de Contingencias o Equipo de Crisis (CMC)",
       "color": "#2E5C8A"
      },
      {
       "valor": "equipo_de_evaluacion_de_danos_eed",
       "etiqueta": "Equipo de Evaluación de Daños (EED)",
       "color": "#2E7D5B"
      },
      {
       "valor": "equipo_de_base_de_datos_y_aplicaciones_ebda",
       "etiqueta": "Equipo de Base de Datos y Aplicaciones (EBDA)",
       "color": "#C08A1E"
      },
      {
       "valor": "equipo_de_infraestructura_y_soporte_equipo_de_operaciones_de_crisis",
       "etiqueta": "Equipo de Infraestructura y Soporte (Equipo de Operaciones de Crisis)",
       "color": "#6B5B95"
      },
      {
       "valor": "cordinador_de_los_planes_de_contingencia",
       "etiqueta": "Cordinador de los Planes de Contingencia",
       "color": "#3A8A8A"
      },
      {
       "valor": "grupo_de_prueba",
       "etiqueta": "Grupo de Prueba",
       "color": "#5A6B7C"
      }
     ]
    },
    "tipo_seguimiento": {
     "id": "tipo_seguimiento",
     "nombre": "Tipos de seguimiento",
     "opciones": [
      {
       "valor": "por_definir",
       "etiqueta": "Por Definir",
       "color": "#2E5C8A"
      }
     ]
    }
   },
   "menu": [
    {
     "id": "m1",
     "label": "Portafolio de proyectos",
     "icono": "▣",
     "tipo": "arbol",
     "visible": true
    },
    {
     "id": "m2",
     "label": "Todos los proyectos",
     "icono": "▸",
     "tipo": "lista",
     "target": "proyecto",
     "visible": true
    },
    {
     "id": "m12",
     "label": "Todos los seguimientos",
     "icono": "▸",
     "tipo": "lista",
     "target": "seguimiento",
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
     "label": "Seguimientos por estatus",
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
     "nombre": "Seguimientos por estatus",
     "tipo": "seguimiento",
     "alcance": "",
     "campos": [
      "nombre",
      "ruta",
      "actividad",
      "dias",
      "fecha_planificada_fin"
     ],
     "filtro": {
      "campo": "",
      "valor": ""
     },
     "agrupar": "estado"
    },
    {
     "id": "r2",
     "nombre": "Proyectos por unidad gestora",
     "tipo": "proyecto",
     "alcance": "",
     "campos": [
      "codigo",
      "nombre",
      "estado",
      "prioridad",
      "costo_total"
     ],
     "filtro": {
      "campo": "",
      "valor": ""
     },
     "agrupar": "unidad_gestora"
    },
    {
     "id": "r3",
     "nombre": "Costo total por división",
     "tipo": "proyecto",
     "alcance": "",
     "campos": [
      "codigo",
      "nombre",
      "ruta",
      "costo_hora",
      "costo_total"
     ],
     "filtro": {
      "campo": "",
      "valor": ""
     },
     "agrupar": "division"
    }
   ]
  },
  "datos": {
   "nodos": [
    {
     "id": "pf1",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-001",
     "nombre": "SIn Especificar",
     "creado": "2018-07-09",
     "datos": {
      "tipo": "funcionamiento",
      "sponsor": "Sin Espcificar",
      "pmanager": "Sin Especificar",
      "url": "",
      "fecha_inicio": "",
      "fecha_fin": "",
      "areas": [],
      "grupos": [
       "comite_de_manejo_de_contingencias_o_equipo_de_crisis_cmc",
       "equipo_de_evaluacion_de_danos_eed",
       "equipo_de_base_de_datos_y_aplicaciones_ebda",
       "equipo_de_infraestructura_y_soporte_equipo_de_operaciones_de_crisis",
       "cordinador_de_los_planes_de_contingencia",
       "grupo_de_prueba"
      ],
      "sispla_id": "1"
     }
    },
    {
     "id": "pf2",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-002",
     "nombre": "Refrendo Electrónico y Gestión de Cobro en Línea",
     "creado": "2024-01-11",
     "datos": {
      "tipo": "inversion",
      "sponsor": "DI",
      "pmanager": "DI",
      "url": "",
      "fecha_inicio": "2024-01-11",
      "fecha_fin": "2024-01-11",
      "areas": [
       "procesos"
      ],
      "grupos": [
       "comite_de_manejo_de_contingencias_o_equipo_de_crisis_cmc",
       "equipo_de_evaluacion_de_danos_eed",
       "equipo_de_base_de_datos_y_aplicaciones_ebda",
       "equipo_de_infraestructura_y_soporte_equipo_de_operaciones_de_crisis",
       "cordinador_de_los_planes_de_contingencia",
       "grupo_de_prueba"
      ],
      "sispla_id": "2"
     }
    },
    {
     "id": "pf3",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-003",
     "nombre": "Recursos Humanos",
     "creado": "2024-03-14",
     "datos": {
      "tipo": "inversion",
      "sponsor": "OIRH",
      "pmanager": "OIRH",
      "url": "",
      "fecha_inicio": "2024-03-14",
      "fecha_fin": "2024-03-14",
      "areas": [
       "procesos"
      ],
      "grupos": [
       "equipo_de_evaluacion_de_danos_eed",
       "equipo_de_base_de_datos_y_aplicaciones_ebda",
       "equipo_de_infraestructura_y_soporte_equipo_de_operaciones_de_crisis"
      ],
      "sispla_id": "3"
     }
    },
    {
     "id": "pf4",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-004",
     "nombre": "Interoperabilidad y Bus de Servicio",
     "creado": "2024-02-29",
     "datos": {
      "tipo": "inversion",
      "sponsor": "DICI",
      "pmanager": "DICI",
      "url": "",
      "fecha_inicio": "2024-02-29",
      "fecha_fin": "2024-02-29",
      "areas": [
       "procesos"
      ],
      "grupos": [
       "equipo_de_evaluacion_de_danos_eed",
       "equipo_de_base_de_datos_y_aplicaciones_ebda",
       "equipo_de_infraestructura_y_soporte_equipo_de_operaciones_de_crisis"
      ],
      "sispla_id": "4"
     }
    },
    {
     "id": "pf5",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-005",
     "nombre": "Medición",
     "creado": "2023-04-04",
     "datos": {
      "tipo": "funcionamiento",
      "sponsor": "DICI",
      "pmanager": "DICI",
      "url": "",
      "fecha_inicio": "2024-03-19",
      "fecha_fin": "2024-03-19",
      "areas": [
       "procesos"
      ],
      "grupos": [],
      "sispla_id": "5"
     }
    },
    {
     "id": "pf6",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-006",
     "nombre": "Plan contra Desastre e Inventario",
     "creado": "2024-03-14",
     "datos": {
      "tipo": "funcionamiento",
      "sponsor": "DTI",
      "pmanager": "DTI",
      "url": "",
      "fecha_inicio": "2024-03-14",
      "fecha_fin": "2024-03-14",
      "areas": [
       "procesos"
      ],
      "grupos": [],
      "sispla_id": "6"
     }
    },
    {
     "id": "pf7",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-007",
     "nombre": "Digitalización",
     "creado": "2025-03-24",
     "datos": {
      "tipo": "inversion",
      "sponsor": "Despacho Superior",
      "pmanager": "Ciencias de la Información",
      "url": "",
      "fecha_inicio": "2025-03-24",
      "fecha_fin": "2025-02-24",
      "areas": [
       "procesos"
      ],
      "grupos": [],
      "sispla_id": "7"
     }
    },
    {
     "id": "pf8",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-008",
     "nombre": "Transporte",
     "creado": "2024-03-14",
     "datos": {
      "tipo": "funcionamiento",
      "sponsor": "Director",
      "pmanager": "Director",
      "url": "",
      "fecha_inicio": "2024-03-14",
      "fecha_fin": "2024-03-14",
      "areas": [
       "procesos"
      ],
      "grupos": [],
      "sispla_id": "8"
     }
    },
    {
     "id": "pf10",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-010",
     "nombre": "Hub de Datos",
     "creado": "2023-03-23",
     "datos": {
      "tipo": "inversion",
      "sponsor": "Dirección de Ciencias de la Información",
      "pmanager": "Director",
      "url": "",
      "fecha_inicio": "",
      "fecha_fin": "",
      "areas": [
       "procesos"
      ],
      "grupos": [],
      "sispla_id": "10"
     }
    },
    {
     "id": "pf11",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-011",
     "nombre": "Ciberseguridad",
     "creado": "2023-04-04",
     "datos": {
      "tipo": "funcionamiento",
      "sponsor": "Director",
      "pmanager": "Director",
      "url": "",
      "fecha_inicio": "2026-08-14",
      "fecha_fin": "2026-08-14",
      "areas": [
       "procesos"
      ],
      "grupos": [],
      "sispla_id": "11"
     }
    },
    {
     "id": "pf12",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-012",
     "nombre": "311",
     "creado": "2023-09-18",
     "datos": {
      "tipo": "inversion",
      "sponsor": "Javier Garrido",
      "pmanager": "Javier Garrido",
      "url": "",
      "fecha_inicio": "2023-09-14",
      "fecha_fin": "2024-12-31",
      "areas": [
       "procesos"
      ],
      "grupos": [],
      "sispla_id": "12"
     }
    },
    {
     "id": "pf13",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-013",
     "nombre": "Identificación y Mapeo de Trámites",
     "creado": "2023-12-27",
     "datos": {
      "tipo": "inversion",
      "sponsor": "Despacho Superior / Naiemeh Hjouj",
      "pmanager": "Evelyn Rodríguez",
      "url": "",
      "fecha_inicio": "2023-12-27",
      "fecha_fin": "2024-01-31",
      "areas": [
       "procesos"
      ],
      "grupos": [],
      "sispla_id": "13"
     }
    },
    {
     "id": "pf14",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-014",
     "nombre": "Municipios eficientes y transparentes. MuNet",
     "creado": "2024-01-11",
     "datos": {
      "tipo": "inversion",
      "sponsor": "Transformación Digital",
      "pmanager": "Director de Transformación Dig",
      "url": "",
      "fecha_inicio": "2024-01-11",
      "fecha_fin": "2024-01-11",
      "areas": [
       "procesos"
      ],
      "grupos": [],
      "sispla_id": "14"
     }
    },
    {
     "id": "pf15",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-015",
     "nombre": "Soporte, Monitoreo y Mantenimiento de Aplicación y Base de Datos",
     "creado": "2024-01-15",
     "datos": {
      "tipo": "funcionamiento",
      "sponsor": "Dirección de Servicios TI",
      "pmanager": "Dirección de Servicios TI",
      "url": "",
      "fecha_inicio": "2019-01-15",
      "fecha_fin": "2019-12-31",
      "areas": [
       "procesos"
      ],
      "grupos": [],
      "sispla_id": "15"
     }
    },
    {
     "id": "pf16",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-016",
     "nombre": "Gestión de Dato",
     "creado": "2024-02-28",
     "datos": {
      "tipo": "inversion",
      "sponsor": "Ciencias de la Información",
      "pmanager": "Ciencias de la Información",
      "url": "",
      "fecha_inicio": "2024-02-28",
      "fecha_fin": "2024-05-15",
      "areas": [
       "procesos"
      ],
      "grupos": [],
      "sispla_id": "16"
     }
    },
    {
     "id": "pf17",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-017",
     "nombre": "Panamá Solidario",
     "creado": "2024-05-16",
     "datos": {
      "tipo": "inversion",
      "sponsor": "Estado",
      "pmanager": "Estado",
      "url": "",
      "fecha_inicio": "2020-04-15",
      "fecha_fin": "2023-10-31",
      "areas": [
       "procesos"
      ],
      "grupos": [],
      "sispla_id": "17"
     }
    },
    {
     "id": "pf18",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-018",
     "nombre": "Gestor Documental",
     "creado": "2024-06-11",
     "datos": {
      "tipo": "funcionamiento",
      "sponsor": "Ciencias de la Información",
      "pmanager": "Ciencias de la Información",
      "url": "",
      "fecha_inicio": "2024-06-11",
      "fecha_fin": "2024-12-31",
      "areas": [],
      "grupos": [],
      "sispla_id": "18"
     }
    },
    {
     "id": "pf19",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-019",
     "nombre": "Sistema de Evaluación de Solicitudes",
     "creado": "2024-10-24",
     "datos": {
      "tipo": "funcionamiento",
      "sponsor": "Soluciones Transversales",
      "pmanager": "Soluciones Transversales",
      "url": "https://ses.aig.gob.pa",
      "fecha_inicio": "2024-10-24",
      "fecha_fin": "2024-10-24",
      "areas": [],
      "grupos": [],
      "sispla_id": "19"
     }
    },
    {
     "id": "pf20",
     "tipo": "portafolio",
     "parentId": null,
     "codigo": "PF-020",
     "nombre": "Por Asignar I",
     "creado": "2024-12-17",
     "datos": {
      "tipo": "funcionamiento",
      "sponsor": "Ciencias de la Información",
      "pmanager": "Ciencias de la Información",
      "url": "",
      "fecha_inicio": "2011-01-04",
      "fecha_fin": "2030-01-04",
      "areas": [],
      "grupos": [],
      "sispla_id": "20"
     }
    },
    {
     "id": "py1",
     "tipo": "proyecto",
     "parentId": "pf16",
     "codigo": "PF-016.1",
     "nombre": "Establecer una Estrategia y Marco de Trabajo de Gobernanza de Datos en la AIG Li",
     "creado": "2023-11-15",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "gobernanza",
      "linea_estrategica": "gobernanza_de_datos",
      "division": "por_definir",
      "prioridad": "alta",
      "estado": "cancelado",
      "proveedor": "aig",
      "fecha_inicio": "2023-11-15",
      "fecha_fin": "2023-12-29",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 0,
      "costo_total": 0,
      "sispla_id": "1"
     }
    },
    {
     "id": "py2",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.1",
     "nombre": "Desarrollo, Soporte y Mantenimiento para el BUS de Servicio Empresarial OS ZATO Li",
     "creado": "2023-11-17",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "bus_de_servicio",
      "linea_estrategica": "intercambio_de_datos",
      "division": "formulacion",
      "prioridad": "alta",
      "estado": "completo",
      "proveedor": "aig",
      "fecha_inicio": "2023-11-17",
      "fecha_fin": "2024-04-02",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 0,
      "costo_total": 0,
      "sispla_id": "2"
     }
    },
    {
     "id": "py3",
     "tipo": "proyecto",
     "parentId": "pf6",
     "codigo": "PF-006.1",
     "nombre": "Ajustes al Sistema de Planificación contra Desastre e Inventario 202312",
     "creado": "2023-12-21",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "desarrollo",
      "linea_estrategica": "infraestructura_tic",
      "division": "por_definir",
      "prioridad": "alta",
      "estado": "completo",
      "proveedor": "aig",
      "fecha_inicio": "2016-12-01",
      "fecha_fin": "2016-12-01",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "3"
     }
    },
    {
     "id": "py4",
     "tipo": "proyecto",
     "parentId": "pf13",
     "codigo": "PF-013.1",
     "nombre": "Enlace con instituciones y empresa Consultía para catálogo de trámites",
     "creado": "2023-12-27",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "consultoria",
      "linea_estrategica": "transformacion_digital_enfocado_en_el_ciudadano",
      "division": "por_definir",
      "prioridad": "media",
      "estado": "no_iniciado",
      "proveedor": "aig",
      "fecha_inicio": "2024-01-31",
      "fecha_fin": "2023-12-27",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 0,
      "costo_total": 0,
      "sispla_id": "4"
     }
    },
    {
     "id": "py5",
     "tipo": "proyecto",
     "parentId": "pf15",
     "codigo": "PF-015.1",
     "nombre": "Servicio de Soporte, Monitoreo y Mantenimiento de Aplicación y Base de Datos para la AIG 2024 A",
     "creado": "2024-01-15",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "desarrollo",
      "linea_estrategica": "infraestructura_tic",
      "division": "adquisicion",
      "prioridad": "alta",
      "estado": "completo",
      "proveedor": "aig",
      "fecha_inicio": "2024-01-12",
      "fecha_fin": "2024-05-17",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 0,
      "costo_total": 0,
      "sispla_id": "5"
     }
    },
    {
     "id": "py6",
     "tipo": "proyecto",
     "parentId": "pf8",
     "codigo": "PF-008.1",
     "nombre": "Gestión de Cambio",
     "creado": "2024-02-28",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "desarrollo",
      "linea_estrategica": "enfoque_de_procesos_de_negocio",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2024-02-13",
      "fecha_fin": "2024-03-29",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "6"
     }
    },
    {
     "id": "py7",
     "tipo": "proyecto",
     "parentId": "pf16",
     "codigo": "PF-016.2",
     "nombre": "Talleres de Sensibilización para Servidores Públicos en la Gestión de Datos",
     "creado": "2024-02-28",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "datos",
      "linea_estrategica": "estrategia_de_datos",
      "division": "adquisicion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2024-02-28",
      "fecha_fin": "2024-04-30",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "7"
     }
    },
    {
     "id": "py8",
     "tipo": "proyecto",
     "parentId": "pf16",
     "codigo": "PF-016.3",
     "nombre": "Contratación de los Servicios para la Creación e Implementación de Escuela Virtual (e-Learning) para",
     "creado": "2024-02-28",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "datos",
      "linea_estrategica": "estrategia_de_datos",
      "division": "adquisicion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2024-02-28",
      "fecha_fin": "2024-04-30",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "8"
     }
    },
    {
     "id": "py9",
     "tipo": "proyecto",
     "parentId": "pf16",
     "codigo": "PF-016.4",
     "nombre": "Elaboración de Diagnóstico de Madurez de Gestión de Datos en Panamá",
     "creado": "2024-03-15",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "datos",
      "linea_estrategica": "estrategia_de_datos",
      "division": "formulacion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2023-11-15",
      "fecha_fin": "2024-03-26",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 0,
      "costo_total": 1,
      "sispla_id": "9"
     }
    },
    {
     "id": "py10",
     "tipo": "proyecto",
     "parentId": "pf18",
     "codigo": "PF-018.1",
     "nombre": "Archivística para la AIG",
     "creado": "2024-06-11",
     "datos": {
      "unidad_gestora": "direccion_de_administracion_ejecutiva_y_finanzas",
      "tipo": "proyecto",
      "area": "procesos",
      "linea_estrategica": "infraestructura_tic",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2024-06-11",
      "fecha_fin": "2024-12-31",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 15,
      "costo_total": 5000,
      "sispla_id": "10"
     }
    },
    {
     "id": "py11",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.2",
     "nombre": "Reglamentación de la Ley 144 para garantizar la interoperabilidad",
     "creado": "2024-10-18",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "bus_de_servicio",
      "linea_estrategica": "politicas_estandares_marcos_de_aplicaciones_y_o",
      "division": "ejecucion",
      "prioridad": "alta",
      "estado": "cancelado",
      "proveedor": "aig",
      "fecha_inicio": "2024-10-10",
      "fecha_fin": "2024-10-18",
      "no_documento": "0",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 5000,
      "sispla_id": "11"
     }
    },
    {
     "id": "py12",
     "tipo": "proyecto",
     "parentId": "pf19",
     "codigo": "PF-019.1",
     "nombre": "Desarrollo e Implementación del SES 3-0",
     "creado": "2024-10-24",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "desarrollo",
      "linea_estrategica": "imagen_institucional_y_transparencia",
      "division": "ejecucion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2024-05-01",
      "fecha_fin": "2024-12-14",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 0,
      "costo_total": 1,
      "sispla_id": "12"
     }
    },
    {
     "id": "py13",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.3",
     "nombre": "Integración SENACYT con la DGI",
     "creado": "2024-11-27",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "bus_de_servicio",
      "linea_estrategica": "transformacion_digital_enfocado_en_el_ciudadano",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "completo",
      "proveedor": "aig",
      "fecha_inicio": "2024-10-11",
      "fecha_fin": "2024-10-14",
      "no_documento": "164",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 48,
      "sispla_id": "13"
     }
    },
    {
     "id": "py14",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.4",
     "nombre": "Integración ANATI con RP",
     "creado": "2024-11-29",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "bus_de_servicio",
      "linea_estrategica": "transformacion_digital_enfocado_en_el_ciudadano",
      "division": "ejecucion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2024-11-14",
      "fecha_fin": "2024-12-31",
      "no_documento": "166",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 30,
      "sispla_id": "14"
     }
    },
    {
     "id": "py15",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.5",
     "nombre": "Integracion SENACYT con lIdentificacion del Portal Único",
     "creado": "2024-12-17",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "bus_de_servicio",
      "linea_estrategica": "transformacion_digital_enfocado_en_el_ciudadano",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2024-12-01",
      "fecha_fin": "2024-12-27",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "15"
     }
    },
    {
     "id": "py16",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.6",
     "nombre": "Estrategia de convenio para integración de entidades con el bus",
     "creado": "2025-01-20",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "bus_de_servicio",
      "linea_estrategica": "innovacion_y_conectividad",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "analisis",
      "proveedor": "aig",
      "fecha_inicio": "2024-10-11",
      "fecha_fin": "2025-07-31",
      "no_documento": "170",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "16"
     }
    },
    {
     "id": "py17",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.7",
     "nombre": "Integración MUPA con MICI",
     "creado": "2025-02-06",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "bus_de_servicio",
      "linea_estrategica": "innovacion_y_conectividad",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "completo",
      "proveedor": "aig",
      "fecha_inicio": "2024-07-19",
      "fecha_fin": "2025-02-21",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "17"
     }
    },
    {
     "id": "py18",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.8",
     "nombre": "Interoperabilidad entre ISTMO y el SCAFID y otros set de datos",
     "creado": "2025-02-10",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "actividad",
      "area": "bus_de_servicio",
      "linea_estrategica": "innovacion_y_conectividad",
      "division": "formulacion",
      "prioridad": "media",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2025-02-10",
      "fecha_fin": "2024-10-24",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "18"
     }
    },
    {
     "id": "py19",
     "tipo": "proyecto",
     "parentId": "pf12",
     "codigo": "PF-012.1",
     "nombre": "311 - Implementación del Sistema de Administración de Casos",
     "creado": "2025-02-10",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "aplicacion",
      "linea_estrategica": "innovacion_y_conectividad",
      "division": "ejecucion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2024-09-02",
      "fecha_fin": "2025-02-28",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "19"
     }
    },
    {
     "id": "py20",
     "tipo": "proyecto",
     "parentId": "pf3",
     "codigo": "PF-003.1",
     "nombre": "SARH",
     "creado": "2025-02-10",
     "datos": {
      "unidad_gestora": "oficina_institucional_de_recursos_humanos",
      "tipo": "proyecto",
      "area": "aplicacion",
      "linea_estrategica": "innovacion_y_conectividad",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "en_progreso",
      "proveedor": "rootstack",
      "fecha_inicio": "2023-01-02",
      "fecha_fin": "2025-02-10",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 0,
      "costo_total": 0,
      "sispla_id": "20"
     }
    },
    {
     "id": "py21",
     "tipo": "proyecto",
     "parentId": "pf12",
     "codigo": "PF-012.2",
     "nombre": "311 - Contratación de Vigencia Expirada de Centro de Contacto 202304 al 202305",
     "creado": "2025-02-18",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "consultoria",
      "linea_estrategica": "transformacion_digital_enfocado_en_el_ciudadano",
      "division": "adquisicion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2024-10-01",
      "fecha_fin": "2025-03-28",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "21"
     }
    },
    {
     "id": "py22",
     "tipo": "proyecto",
     "parentId": "pf12",
     "codigo": "PF-012.3",
     "nombre": "311 - Licitación de Centro de Contacto por Tres Años",
     "creado": "2025-02-20",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "consultoria",
      "linea_estrategica": "innovacion_y_conectividad",
      "division": "adquisicion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2024-10-28",
      "fecha_fin": "2025-08-30",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "22"
     }
    },
    {
     "id": "py23",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.9",
     "nombre": "Integración PROMTUR con ATP - Enlaces",
     "creado": "2025-02-27",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "bus_de_servicio",
      "linea_estrategica": "innovacion_y_conectividad",
      "division": "ejecucion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2024-10-30",
      "fecha_fin": "2025-06-30",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "23"
     }
    },
    {
     "id": "py24",
     "tipo": "proyecto",
     "parentId": "pf7",
     "codigo": "PF-007.1",
     "nombre": "Contratación para la Implementación de Sistema de Digitalización de Documentos en Migración",
     "creado": "2025-03-06",
     "datos": {
      "unidad_gestora": "despacho_superior",
      "tipo": "proyecto",
      "area": "consultoria",
      "linea_estrategica": "innovacion_y_conectividad",
      "division": "formulacion",
      "prioridad": "media",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2025-02-12",
      "fecha_fin": "2025-11-27",
      "no_documento": "0152",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "24"
     }
    },
    {
     "id": "py25",
     "tipo": "proyecto",
     "parentId": "pf7",
     "codigo": "PF-007.2",
     "nombre": "Digitalización de Documentos - Contratación",
     "creado": "2025-03-06",
     "datos": {
      "unidad_gestora": "despacho_superior",
      "tipo": "proyecto",
      "area": "consultoria",
      "linea_estrategica": "transformacion_digital_enfocado_en_el_ciudadano",
      "division": "adquisicion",
      "prioridad": "media",
      "estado": "analisis",
      "proveedor": "aig",
      "fecha_inicio": "2025-02-24",
      "fecha_fin": "2025-04-30",
      "no_documento": "0181",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "25"
     }
    },
    {
     "id": "py26",
     "tipo": "proyecto",
     "parentId": "pf15",
     "codigo": "PF-015.2",
     "nombre": "Servicio de soporte, monitoreo y mantenimiento de aplicaciones y base de datos para la AIG 2025 A",
     "creado": "2025-03-11",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "aplicacion",
      "linea_estrategica": "transformacion_digital_enfocado_en_el_ciudadano",
      "division": "adquisicion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2025-03-03",
      "fecha_fin": "2025-07-31",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 200000,
      "sispla_id": "26"
     }
    },
    {
     "id": "py27",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.10",
     "nombre": "Marco o Esquema Nacional de Interoperabilidad Li",
     "creado": "2025-03-18",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "consultoria",
      "linea_estrategica": "innovacion_y_conectividad",
      "division": "adquisicion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2025-03-06",
      "fecha_fin": "2025-07-31",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "27"
     }
    },
    {
     "id": "py28",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.11",
     "nombre": "Integración AIG PUC-SSO con el SNM RUEX",
     "creado": "2025-04-02",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "bus_de_servicio",
      "linea_estrategica": "intercambio_de_datos",
      "division": "ejecucion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2025-03-26",
      "fecha_fin": "2025-04-30",
      "no_documento": "0",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "28"
     }
    },
    {
     "id": "py29",
     "tipo": "proyecto",
     "parentId": "pf16",
     "codigo": "PF-016.5",
     "nombre": "Establecer una Estrategia y Marco de Trabajo de Gobernanza de Datos en la AIG Li",
     "creado": "2025-04-25",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "datos",
      "linea_estrategica": "innovacion_y_conectividad",
      "division": "adquisicion",
      "prioridad": "media",
      "estado": "cancelado",
      "proveedor": "aig",
      "fecha_inicio": "2025-04-25",
      "fecha_fin": "2025-12-31",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "29"
     }
    },
    {
     "id": "py30",
     "tipo": "proyecto",
     "parentId": "pf12",
     "codigo": "PF-012.4",
     "nombre": "311 - Implementación del Sistema de Gestión de Caso del 311 en el Municipio de Panamá",
     "creado": "2025-10-03",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "implementacion",
      "linea_estrategica": "transformacion_digital_enfocado_en_el_ciudadano",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "no_iniciado",
      "proveedor": "aig",
      "fecha_inicio": "2025-10-03",
      "fecha_fin": "2026-01-05",
      "no_documento": "0191-SGC-MunicipioSanmiguelito",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "30"
     }
    },
    {
     "id": "py31",
     "tipo": "proyecto",
     "parentId": "pf12",
     "codigo": "PF-012.5",
     "nombre": "311 - Contratación de Vigencia Expirada de Centro de Contacto 202306 al 202412",
     "creado": "2025-10-14",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "administrativo",
      "linea_estrategica": "transformacion_digital_enfocado_en_el_ciudadano",
      "division": "adquisicion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2025-10-10",
      "fecha_fin": "2025-10-31",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "31"
     }
    },
    {
     "id": "py32",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.12",
     "nombre": "Desarrollar e Implementar Servicio Consultar Empresa por Representante Legal",
     "creado": "2025-12-02",
     "datos": {
      "unidad_gestora": "direccion_de_transformacion_digital",
      "tipo": "proyecto",
      "area": "bus_de_servicio",
      "linea_estrategica": "intercambio_de_datos",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "analisis",
      "proveedor": "aig",
      "fecha_inicio": "2025-11-27",
      "fecha_fin": "2026-02-27",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "32"
     }
    },
    {
     "id": "py33",
     "tipo": "proyecto",
     "parentId": "pf5",
     "codigo": "PF-005.1",
     "nombre": "Crear Portal para la publicación de Dashbard",
     "creado": "2026-08-13",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "dods",
      "linea_estrategica": "uso_de_data_para_medicion_de_resultados",
      "division": "ejecucion",
      "prioridad": "alta",
      "estado": "completo",
      "proveedor": "aig",
      "fecha_inicio": "2022-02-01",
      "fecha_fin": "2022-06-30",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "33"
     }
    },
    {
     "id": "py34",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.13",
     "nombre": "Interoperabilidad Expediente Médico MINSA vs CSS",
     "creado": "2026-08-13",
     "datos": {
      "unidad_gestora": "despacho_superior",
      "tipo": "proyecto",
      "area": "datos",
      "linea_estrategica": "transformacion_digital_enfocado_en_el_ciudadano",
      "division": "ejecucion",
      "prioridad": "alta",
      "estado": "analisis",
      "proveedor": "aig",
      "fecha_inicio": "2026-08-13",
      "fecha_fin": "2026-12-31",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "34"
     }
    },
    {
     "id": "py35",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.14",
     "nombre": "Soporte y Mantenimiento para el BUS de Servicio Empresarial OS ZATO 2027-2029 Li",
     "creado": "2026-08-13",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "infraestructura",
      "linea_estrategica": "intercambio_de_datos",
      "division": "adquisicion",
      "prioridad": "alta",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2026-08-13",
      "fecha_fin": "2027-04-30",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "35"
     }
    },
    {
     "id": "py36",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.15",
     "nombre": "MEDUCA - Caso8 - SCDU - Integración con la API de la Universidad de Panamá (UP)",
     "creado": "2026-08-14",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "datos",
      "linea_estrategica": "intercambio_de_datos",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2026-08-14",
      "fecha_fin": "2026-08-28",
      "no_documento": "Torre Control CASO #242",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "36"
     }
    },
    {
     "id": "py37",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.16",
     "nombre": "MEDUCA - Caso9 - SCDU - Integración con la API de la UMIP",
     "creado": "2026-08-14",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "datos",
      "linea_estrategica": "intercambio_de_datos",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2026-08-14",
      "fecha_fin": "2026-08-28",
      "no_documento": "Torre Control CASO #403",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "37"
     }
    },
    {
     "id": "py38",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.17",
     "nombre": "MEDUCA - Caso11 - SCDU - Integración con la API de la Universidad de Panamá (UTP)",
     "creado": "2026-08-14",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "datos",
      "linea_estrategica": "intercambio_de_datos",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2026-08-14",
      "fecha_fin": "2026-08-28",
      "no_documento": "Torre Control CASO #493",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "38"
     }
    },
    {
     "id": "py39",
     "tipo": "proyecto",
     "parentId": "pf11",
     "codigo": "PF-011.1",
     "nombre": "Crear DMZ para Servidores Institucionales",
     "creado": "2026-08-14",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "infraestructura",
      "linea_estrategica": "seguridad_y_confiabilidad_de_los_sistemas",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2026-08-14",
      "fecha_fin": "2026-08-28",
      "no_documento": "Correo 14/08/2026",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "39"
     }
    },
    {
     "id": "py40",
     "tipo": "proyecto",
     "parentId": "pf4",
     "codigo": "PF-004.18",
     "nombre": "Integración MIDA PGA con Panamá Conecta",
     "creado": "2026-08-14",
     "datos": {
      "unidad_gestora": "direccion_de_ciencias_de_la_informacion",
      "tipo": "proyecto",
      "area": "datos",
      "linea_estrategica": "intercambio_de_datos",
      "division": "ejecucion",
      "prioridad": "media",
      "estado": "en_progreso",
      "proveedor": "aig",
      "fecha_inicio": "2026-08-06",
      "fecha_fin": "2026-08-28",
      "no_documento": "",
      "ticket": "",
      "costo_hora": 1,
      "costo_total": 1,
      "sispla_id": "40"
     }
    },
    {
     "id": "sg1",
     "tipo": "seguimiento",
     "parentId": "py1",
     "codigo": "PF-016.1.1",
     "nombre": "Tramitar Requisición",
     "creado": "2023-11-01",
     "datos": {
      "actividad": 5,
      "dias": 10,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2023-11-01",
      "fecha_planificada_fin": "2023-11-15",
      "fecha_inicio": "2023-11-01",
      "fecha_fin": "2023-11-15",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "1"
     }
    },
    {
     "id": "sg2",
     "tipo": "seguimiento",
     "parentId": "py1",
     "codigo": "PF-016.1.2",
     "nombre": "Corrección de la Requisición",
     "creado": "2023-10-23",
     "datos": {
      "actividad": 5.4,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-10-23",
      "fecha_planificada_fin": "2023-10-23",
      "fecha_inicio": "2023-10-23",
      "fecha_fin": "2023-10-23",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "2"
     }
    },
    {
     "id": "sg4",
     "tipo": "seguimiento",
     "parentId": "py1",
     "codigo": "PF-016.1.3",
     "nombre": "Firma del documento por la Unidad Gestora y el Despacho Superior",
     "creado": "2023-11-16",
     "datos": {
      "actividad": 5.6,
      "dias": 2,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2023-11-16",
      "fecha_planificada_fin": "2023-11-16",
      "fecha_inicio": "2023-11-16",
      "fecha_fin": "2023-11-16",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "4"
     }
    },
    {
     "id": "sg5",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.1",
     "nombre": "Tramitar Requisición",
     "creado": "2023-11-17",
     "datos": {
      "actividad": 5,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-17",
      "fecha_planificada_fin": "2023-11-17",
      "fecha_inicio": "2023-11-17",
      "fecha_fin": "2023-11-17",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "5"
     }
    },
    {
     "id": "sg6",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.2",
     "nombre": "Confección de Requisición",
     "creado": "2023-11-17",
     "datos": {
      "actividad": 5.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-17",
      "fecha_planificada_fin": "2023-11-17",
      "fecha_inicio": "2023-11-17",
      "fecha_fin": "2023-11-17",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "6"
     }
    },
    {
     "id": "sg7",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.3",
     "nombre": "Firma del documento por la Unidad Gestora y el Despacho Superior",
     "creado": "2023-11-17",
     "datos": {
      "actividad": 5.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-17",
      "fecha_planificada_fin": "2023-11-17",
      "fecha_inicio": "2023-11-17",
      "fecha_fin": "2023-11-17",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "7"
     }
    },
    {
     "id": "sg8",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.4",
     "nombre": "Solicitar SES",
     "creado": "2023-10-02",
     "datos": {
      "actividad": 6,
      "dias": 15,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-10-02",
      "fecha_planificada_fin": "2023-11-15",
      "fecha_inicio": "2023-10-02",
      "fecha_fin": "2023-11-15",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "8"
     }
    },
    {
     "id": "sg9",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.5",
     "nombre": "Llenar la solicitud en el Sistema de Evaluación",
     "creado": "2023-10-02",
     "datos": {
      "actividad": 6.1,
      "dias": 15,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-10-02",
      "fecha_planificada_fin": "2023-10-02",
      "fecha_inicio": "2023-10-02",
      "fecha_fin": "2023-10-02",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "9"
     }
    },
    {
     "id": "sg10",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.6",
     "nombre": "Evaluar la Solicitud",
     "creado": "2023-10-02",
     "datos": {
      "actividad": 6.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-10-02",
      "fecha_planificada_fin": "2023-11-15",
      "fecha_inicio": "2023-10-02",
      "fecha_fin": "2023-11-15",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "10"
     }
    },
    {
     "id": "sg11",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.7",
     "nombre": "Emisión del Certificado SES",
     "creado": "2023-11-15",
     "datos": {
      "actividad": 6.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-15",
      "fecha_planificada_fin": "2023-11-15",
      "fecha_inicio": "2023-11-15",
      "fecha_fin": "2023-11-15",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "11"
     }
    },
    {
     "id": "sg12",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.8",
     "nombre": "Confeccionar Memorando de Entrega de Documento al BID",
     "creado": "2023-11-15",
     "datos": {
      "actividad": 9,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-15",
      "fecha_planificada_fin": "2023-11-15",
      "fecha_inicio": "2023-11-15",
      "fecha_fin": "2023-11-15",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "12"
     }
    },
    {
     "id": "sg13",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.9",
     "nombre": "Confección del Documento",
     "creado": "2023-11-20",
     "datos": {
      "actividad": 9.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-20",
      "fecha_planificada_fin": "2023-11-20",
      "fecha_inicio": "2023-11-20",
      "fecha_fin": "2023-11-20",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "13"
     }
    },
    {
     "id": "sg14",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.10",
     "nombre": "Revisión del Memorando",
     "creado": "2023-11-20",
     "datos": {
      "actividad": 9.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-20",
      "fecha_planificada_fin": "2023-11-20",
      "fecha_inicio": "2023-11-20",
      "fecha_fin": "2023-11-20",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "14"
     }
    },
    {
     "id": "sg15",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.11",
     "nombre": "Entrega del memorando",
     "creado": "2023-11-20",
     "datos": {
      "actividad": 9.5,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-20",
      "fecha_planificada_fin": "2023-11-20",
      "fecha_inicio": "2023-11-20",
      "fecha_fin": "2023-11-20",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "15"
     }
    },
    {
     "id": "sg16",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.12",
     "nombre": "Crear Formulario de Desglose de Precio",
     "creado": "2023-11-20",
     "datos": {
      "actividad": 10,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-20",
      "fecha_planificada_fin": "2023-11-22",
      "fecha_inicio": "2023-11-20",
      "fecha_fin": "2023-11-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "16"
     }
    },
    {
     "id": "sg17",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.13",
     "nombre": "Validación de datos requeridos en formulario de Desglose de Precio",
     "creado": "2023-11-20",
     "datos": {
      "actividad": 10.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-20",
      "fecha_planificada_fin": "2023-11-20",
      "fecha_inicio": "2023-11-20",
      "fecha_fin": "2023-11-20",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "17"
     }
    },
    {
     "id": "sg18",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.14",
     "nombre": "Llenar el formulario de Desglose de Precio",
     "creado": "2023-11-22",
     "datos": {
      "actividad": 10.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-22",
      "fecha_planificada_fin": "2023-11-22",
      "fecha_inicio": "2023-11-22",
      "fecha_fin": "2023-11-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "18"
     }
    },
    {
     "id": "sg19",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.15",
     "nombre": "Validación del Documento por parte del Programa PD",
     "creado": "2023-11-22",
     "datos": {
      "actividad": 10.4,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-22",
      "fecha_planificada_fin": "2023-11-22",
      "fecha_inicio": "2023-11-22",
      "fecha_fin": "2023-11-22",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "19"
     }
    },
    {
     "id": "sg20",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.16",
     "nombre": "Firma del Formulario de Desglose de Precio",
     "creado": "2023-11-22",
     "datos": {
      "actividad": 10.5,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-22",
      "fecha_planificada_fin": "2023-11-22",
      "fecha_inicio": "2023-11-22",
      "fecha_fin": "2023-11-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "20"
     }
    },
    {
     "id": "sg21",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.17",
     "nombre": "Confeccionar y Entregar Cronograma de Trabajo",
     "creado": "2023-11-22",
     "datos": {
      "actividad": 11,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-22",
      "fecha_planificada_fin": "2023-11-22",
      "fecha_inicio": "2023-11-22",
      "fecha_fin": "2023-11-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "21"
     }
    },
    {
     "id": "sg22",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.18",
     "nombre": "Revisión de formato para confección del cronograma",
     "creado": "2023-11-22",
     "datos": {
      "actividad": 11.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-22",
      "fecha_planificada_fin": "2023-11-22",
      "fecha_inicio": "2023-11-22",
      "fecha_fin": "2023-11-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "22"
     }
    },
    {
     "id": "sg23",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.19",
     "nombre": "Confeccionar Cronograma",
     "creado": "2023-11-22",
     "datos": {
      "actividad": 11.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-22",
      "fecha_planificada_fin": "2023-11-23",
      "fecha_inicio": "2023-11-22",
      "fecha_fin": "2023-11-23",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "23"
     }
    },
    {
     "id": "sg24",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.20",
     "nombre": "Entrega y o culminación de  Cronograma",
     "creado": "2023-11-22",
     "datos": {
      "actividad": 11.4,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-22",
      "fecha_planificada_fin": "2023-11-24",
      "fecha_inicio": "2023-11-22",
      "fecha_fin": "2023-11-24",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "24"
     }
    },
    {
     "id": "sg25",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.21",
     "nombre": "Sustentar Proyecto ante el Consejo Nacional de Innovación Gubernamental",
     "creado": "2023-09-11",
     "datos": {
      "actividad": 4,
      "dias": 5,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-09-11",
      "fecha_planificada_fin": "2023-09-20",
      "fecha_inicio": "2023-09-11",
      "fecha_fin": "2023-09-20",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "25"
     }
    },
    {
     "id": "sg26",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.22",
     "nombre": "Preparar documentación para la Convocatoria ante CNIG",
     "creado": "2023-09-11",
     "datos": {
      "actividad": 4.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-09-11",
      "fecha_planificada_fin": "2023-09-11",
      "fecha_inicio": "2023-09-11",
      "fecha_fin": "2023-09-11",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "26"
     }
    },
    {
     "id": "sg27",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.23",
     "nombre": "Sustentación ante el CNIG",
     "creado": "2023-09-13",
     "datos": {
      "actividad": 4.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-09-13",
      "fecha_planificada_fin": "2023-09-13",
      "fecha_inicio": "2023-09-13",
      "fecha_fin": "2023-09-13",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "27"
     }
    },
    {
     "id": "sg28",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.24",
     "nombre": "Aprobación por el CNIG",
     "creado": "2023-09-13",
     "datos": {
      "actividad": 4.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-09-13",
      "fecha_planificada_fin": "2023-09-13",
      "fecha_inicio": "2023-09-13",
      "fecha_fin": "2023-09-13",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "28"
     }
    },
    {
     "id": "sg29",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.25",
     "nombre": "Confección y firma de la Resolución de Autorización por el CNIG",
     "creado": "2023-10-12",
     "datos": {
      "actividad": 4.4,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-10-12",
      "fecha_planificada_fin": "2023-10-12",
      "fecha_inicio": "2023-10-12",
      "fecha_fin": "2023-10-12",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "29"
     }
    },
    {
     "id": "sg30",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.26",
     "nombre": "Entrega a la Unidad Gestora de la resolución de aprobación por el CNIG",
     "creado": "2023-10-13",
     "datos": {
      "actividad": 4.5,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-10-13",
      "fecha_planificada_fin": "2023-10-13",
      "fecha_inicio": "2023-10-13",
      "fecha_fin": "2023-10-13",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "30"
     }
    },
    {
     "id": "sg31",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.27",
     "nombre": "Entrega de la Resolución de aprobación a la Unidad Coordinadora del BID en AIG",
     "creado": "2023-11-23",
     "datos": {
      "actividad": 4.6,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-23",
      "fecha_planificada_fin": "2023-11-23",
      "fecha_inicio": "2023-11-23",
      "fecha_fin": "2023-11-23",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "31"
     }
    },
    {
     "id": "sg32",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.28",
     "nombre": "Solicitar Información",
     "creado": "2023-05-10",
     "datos": {
      "actividad": 1,
      "dias": 60,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-05-10",
      "fecha_planificada_fin": "2023-05-10",
      "fecha_inicio": "2023-05-10",
      "fecha_fin": "2023-05-10",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "32"
     }
    },
    {
     "id": "sg33",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.29",
     "nombre": "Publicación de la Solicitud de Información",
     "creado": "2023-05-10",
     "datos": {
      "actividad": 1.1,
      "dias": 60,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-05-10",
      "fecha_planificada_fin": "2023-06-30",
      "fecha_inicio": "2023-05-10",
      "fecha_fin": "2023-06-30",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "33"
     }
    },
    {
     "id": "sg34",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.30",
     "nombre": "Hacer resumen de la solicitud de Información",
     "creado": "2023-07-04",
     "datos": {
      "actividad": 1.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-07-04",
      "fecha_planificada_fin": "2023-07-04",
      "fecha_inicio": "2023-07-04",
      "fecha_fin": "2023-07-04",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "34"
     }
    },
    {
     "id": "sg35",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.31",
     "nombre": "Perfil de la Comisión Evaluadora - PCE",
     "creado": "2023-11-23",
     "datos": {
      "actividad": 15,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-23",
      "fecha_planificada_fin": "2023-11-23",
      "fecha_inicio": "2024-03-12",
      "fecha_fin": "2024-03-14",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "35"
     }
    },
    {
     "id": "sg36",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.32",
     "nombre": "Llenar y entregar el Formulario del PCE",
     "creado": "2023-11-23",
     "datos": {
      "actividad": 15.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-23",
      "fecha_planificada_fin": "2023-11-23",
      "fecha_inicio": "2024-03-12",
      "fecha_fin": "2024-03-13",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "36"
     }
    },
    {
     "id": "sg37",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.33",
     "nombre": "Revisar Formulario del PCE",
     "creado": "2023-11-23",
     "datos": {
      "actividad": 15.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2023-11-23",
      "fecha_planificada_fin": "2023-11-23",
      "fecha_inicio": "2024-03-14",
      "fecha_fin": "2024-03-14",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "37"
     }
    },
    {
     "id": "sg38",
     "tipo": "seguimiento",
     "parentId": "py3",
     "codigo": "PF-006.1.1",
     "nombre": "Previas al Cambio",
     "creado": "2023-12-21",
     "datos": {
      "actividad": 1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2023-12-21",
      "fecha_planificada_fin": "2023-12-21",
      "fecha_inicio": "2023-12-21",
      "fecha_fin": "2023-12-21",
      "n_responsables": 0,
      "observacion": "",
      "sispla_id": "38"
     }
    },
    {
     "id": "sg39",
     "tipo": "seguimiento",
     "parentId": "py4",
     "codigo": "PF-013.1.1",
     "nombre": "Kickoff",
     "creado": "2023-12-27",
     "datos": {
      "actividad": 1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "no_iniciado",
      "fecha_planificada_inicio": "2023-12-27",
      "fecha_planificada_fin": "2023-12-27",
      "fecha_inicio": "2023-12-27",
      "fecha_fin": "2023-12-27",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "39"
     }
    },
    {
     "id": "sg40",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.1",
     "nombre": "Expresión de Interés de la empresa por la Contratación por Simple Prorroga",
     "creado": "2024-01-12",
     "datos": {
      "actividad": 1,
      "dias": 5,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-12",
      "fecha_planificada_fin": "2024-01-19",
      "fecha_inicio": "2024-01-12",
      "fecha_fin": "2024-01-19",
      "n_responsables": 3,
      "observacion": "",
      "sispla_id": "40"
     }
    },
    {
     "id": "sg41",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.2",
     "nombre": "Nota a la Empresa para el trámite por contratación por Simple Prórroga",
     "creado": "2024-01-15",
     "datos": {
      "actividad": 1.1,
      "dias": 3,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-15",
      "fecha_planificada_fin": "2024-01-19",
      "fecha_inicio": "2024-01-17",
      "fecha_fin": "2024-01-19",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "41"
     }
    },
    {
     "id": "sg42",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.3",
     "nombre": "Confeccionar Nota para Simple prórroga",
     "creado": "2024-01-18",
     "datos": {
      "actividad": 1.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-18",
      "fecha_planificada_fin": "2024-01-19",
      "fecha_inicio": "2024-01-18",
      "fecha_fin": "2024-01-18",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "42"
     }
    },
    {
     "id": "sg43",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.4",
     "nombre": "Dar formato y mejorar la nota para solicitud de servicio por simple prórroga",
     "creado": "2024-01-18",
     "datos": {
      "actividad": 1.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-18",
      "fecha_planificada_fin": "2024-01-18",
      "fecha_inicio": "2024-01-18",
      "fecha_fin": "2024-01-18",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "43"
     }
    },
    {
     "id": "sg44",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.5",
     "nombre": "Enviar Nota de Solicitud de Simple Prorroga al Proveedor",
     "creado": "2024-01-18",
     "datos": {
      "actividad": 1.4,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-18",
      "fecha_planificada_fin": "2024-01-18",
      "fecha_inicio": "2024-01-19",
      "fecha_fin": "2024-01-19",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "44"
     }
    },
    {
     "id": "sg45",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.6",
     "nombre": "Solicitud de contratación por Simple Prórroga",
     "creado": "2024-01-18",
     "datos": {
      "actividad": 2,
      "dias": 5,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-18",
      "fecha_planificada_fin": "2024-01-18",
      "fecha_inicio": "2024-01-19",
      "fecha_fin": "2024-01-19",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "45"
     }
    },
    {
     "id": "sg46",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.7",
     "nombre": "Confeccionar Solicitud de contratación por Simple Prórroga",
     "creado": "2024-01-18",
     "datos": {
      "actividad": 2.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-18",
      "fecha_planificada_fin": "2024-01-18",
      "fecha_inicio": "2024-01-19",
      "fecha_fin": "2024-01-19",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "46"
     }
    },
    {
     "id": "sg47",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.8",
     "nombre": "Dar formato y mejora la Solicitud de contratación por Simple Prórroga",
     "creado": "2024-01-18",
     "datos": {
      "actividad": 2.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-18",
      "fecha_planificada_fin": "2024-01-18",
      "fecha_inicio": "2024-01-19",
      "fecha_fin": "2024-01-19",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "47"
     }
    },
    {
     "id": "sg48",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.9",
     "nombre": "Firmar la Solicitud de contratación por Simple Prórroga",
     "creado": "2024-01-19",
     "datos": {
      "actividad": 2.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-19",
      "fecha_planificada_fin": "2024-01-19",
      "fecha_inicio": "2024-01-19",
      "fecha_fin": "2024-01-19",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "48"
     }
    },
    {
     "id": "sg49",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.10",
     "nombre": "Informe de Justificación por Simple Prórroga",
     "creado": "2024-01-19",
     "datos": {
      "actividad": 3,
      "dias": 3,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-19",
      "fecha_planificada_fin": "2024-01-19",
      "fecha_inicio": "2024-01-19",
      "fecha_fin": "2024-01-24",
      "n_responsables": 3,
      "observacion": "",
      "sispla_id": "49"
     }
    },
    {
     "id": "sg50",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.11",
     "nombre": "Confeccionar Informe de Justificación por Simple Prórroga",
     "creado": "2024-01-19",
     "datos": {
      "actividad": 3.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-19",
      "fecha_planificada_fin": "2024-01-19",
      "fecha_inicio": "2024-01-19",
      "fecha_fin": "2024-01-19",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "50"
     }
    },
    {
     "id": "sg51",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.12",
     "nombre": "Dar formato y mejorar Informe de Justificación por Simple Prórroga",
     "creado": "2024-01-19",
     "datos": {
      "actividad": 3.2,
      "dias": 5,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-19",
      "fecha_planificada_fin": "2024-01-19",
      "fecha_inicio": "2024-01-22",
      "fecha_fin": "2024-01-23",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "51"
     }
    },
    {
     "id": "sg52",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.13",
     "nombre": "Firmar la Solicitud de contratación por Simple Prórroga",
     "creado": "2024-01-19",
     "datos": {
      "actividad": 3.3,
      "dias": 5,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-19",
      "fecha_planificada_fin": "2024-01-19",
      "fecha_inicio": "2024-01-24",
      "fecha_fin": "2024-01-24",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "52"
     }
    },
    {
     "id": "sg53",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.14",
     "nombre": "Propuesta Técnica",
     "creado": "2024-01-12",
     "datos": {
      "actividad": 4,
      "dias": 5,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-12",
      "fecha_planificada_fin": "2024-01-12",
      "fecha_inicio": "2024-01-12",
      "fecha_fin": "2024-01-12",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "53"
     }
    },
    {
     "id": "sg54",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.15",
     "nombre": "Solicitar Propuesta Técnica",
     "creado": "2024-01-12",
     "datos": {
      "actividad": 4.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-12",
      "fecha_planificada_fin": "2024-01-12",
      "fecha_inicio": "2024-01-12",
      "fecha_fin": "2024-01-12",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "54"
     }
    },
    {
     "id": "sg55",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.16",
     "nombre": "Confeccionar y Entregar propuesta Técnica",
     "creado": "2024-01-19",
     "datos": {
      "actividad": 4.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-19",
      "fecha_planificada_fin": "2024-01-19",
      "fecha_inicio": "2024-01-19",
      "fecha_fin": "2024-01-25",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "55"
     }
    },
    {
     "id": "sg56",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.17",
     "nombre": "Revisar y visto bueno de Propuesta Técnica",
     "creado": "2024-01-19",
     "datos": {
      "actividad": 4.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-19",
      "fecha_planificada_fin": "2024-01-19",
      "fecha_inicio": "2024-01-19",
      "fecha_fin": "2024-01-23",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "56"
     }
    },
    {
     "id": "sg57",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.18",
     "nombre": "Contrato Por Simple Prorroga Borrador para Publicación",
     "creado": "2024-01-12",
     "datos": {
      "actividad": 5,
      "dias": 60,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-12",
      "fecha_planificada_fin": "2024-03-12",
      "fecha_inicio": "2024-01-12",
      "fecha_fin": "2024-03-12",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "57"
     }
    },
    {
     "id": "sg58",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.19",
     "nombre": "Confeccionar Contrato por Simple Prorroga Sin Partida, Sin Fianza",
     "creado": "2024-01-12",
     "datos": {
      "actividad": 5.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-12",
      "fecha_planificada_fin": "2024-01-12",
      "fecha_inicio": "2024-01-12",
      "fecha_fin": "2024-01-12",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "58"
     }
    },
    {
     "id": "sg59",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.20",
     "nombre": "Incorporar Partida Presupuestaria al Contrato por Simple Prórroga",
     "creado": "2024-02-06",
     "datos": {
      "actividad": 5.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-06",
      "fecha_planificada_fin": "2024-02-06",
      "fecha_inicio": "2024-02-06",
      "fecha_fin": "2024-02-06",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "59"
     }
    },
    {
     "id": "sg60",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.21",
     "nombre": "Revisar y Ajustar Contrato por Simple Prorroga",
     "creado": "2024-02-06",
     "datos": {
      "actividad": 5.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-06",
      "fecha_planificada_fin": "2024-02-06",
      "fecha_inicio": "2024-02-06",
      "fecha_fin": "2024-02-06",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "60"
     }
    },
    {
     "id": "sg61",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.22",
     "nombre": "Solicitud de Certificación de Partida Presupuestaria",
     "creado": "2024-01-19",
     "datos": {
      "actividad": 6,
      "dias": 30,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-19",
      "fecha_planificada_fin": "2024-02-19",
      "fecha_inicio": "2024-01-19",
      "fecha_fin": "2024-01-30",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "61"
     }
    },
    {
     "id": "sg62",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.23",
     "nombre": "Solicitar Certificación de Partida Presupuestaria - Propuesta y Borrador de Contrato",
     "creado": "2024-01-19",
     "datos": {
      "actividad": 6.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-19",
      "fecha_planificada_fin": "2024-01-19",
      "fecha_inicio": "2024-01-19",
      "fecha_fin": "2024-01-19",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "62"
     }
    },
    {
     "id": "sg63",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.24",
     "nombre": "Verificar y ajustar documentación para la Certificación de Partida Presupuestaria",
     "creado": "2024-01-22",
     "datos": {
      "actividad": 6.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-22",
      "fecha_planificada_fin": "2024-02-22",
      "fecha_inicio": "2024-01-24",
      "fecha_fin": "2024-01-24",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "63"
     }
    },
    {
     "id": "sg64",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.25",
     "nombre": "Entregar Certificación de Partida",
     "creado": "2024-02-19",
     "datos": {
      "actividad": 6.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-19",
      "fecha_planificada_fin": "2024-02-19",
      "fecha_inicio": "2024-01-30",
      "fecha_fin": "2024-01-30",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "64"
     }
    },
    {
     "id": "sg65",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.26",
     "nombre": "Documentación para incorporar en el portal de Panamá Compras",
     "creado": "2024-02-20",
     "datos": {
      "actividad": 7,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-20",
      "fecha_planificada_fin": "2024-03-06",
      "fecha_inicio": "2024-03-01",
      "fecha_fin": "2024-03-15",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "65"
     }
    },
    {
     "id": "sg66",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.27",
     "nombre": "Entregar documentación y borrador de contrato con certificación de Partida",
     "creado": "2024-02-20",
     "datos": {
      "actividad": 7.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-20",
      "fecha_planificada_fin": "2024-02-20",
      "fecha_inicio": "2024-03-01",
      "fecha_fin": "2024-03-08",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "66"
     }
    },
    {
     "id": "sg67",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.28",
     "nombre": "Solicitud de Certificación de SES",
     "creado": "2024-01-31",
     "datos": {
      "actividad": 8,
      "dias": 20,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-31",
      "fecha_planificada_fin": "2024-02-21",
      "fecha_inicio": "2024-03-04",
      "fecha_fin": "2024-03-11",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "67"
     }
    },
    {
     "id": "sg68",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.29",
     "nombre": "Gestionar documentación para solicitar SES",
     "creado": "2024-01-31",
     "datos": {
      "actividad": 8.1,
      "dias": 2,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-31",
      "fecha_planificada_fin": "2024-02-01",
      "fecha_inicio": "2024-01-31",
      "fecha_fin": "2024-02-26",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "68"
     }
    },
    {
     "id": "sg69",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.30",
     "nombre": "Solicitar SES",
     "creado": "2024-02-02",
     "datos": {
      "actividad": 8.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-02",
      "fecha_planificada_fin": "2024-02-02",
      "fecha_inicio": "2024-03-04",
      "fecha_fin": "2024-03-04",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "69"
     }
    },
    {
     "id": "sg70",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.31",
     "nombre": "Revisar SES por el Coordinador",
     "creado": "2024-02-06",
     "datos": {
      "actividad": 8.3,
      "dias": 15,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-06",
      "fecha_planificada_fin": "2024-02-21",
      "fecha_inicio": "2024-03-04",
      "fecha_fin": "2024-03-07",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "70"
     }
    },
    {
     "id": "sg71",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.32",
     "nombre": "Requisición",
     "creado": "2024-01-31",
     "datos": {
      "actividad": 9,
      "dias": 17,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-31",
      "fecha_planificada_fin": "2024-02-16",
      "fecha_inicio": "2024-01-31",
      "fecha_fin": "2024-02-29",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "71"
     }
    },
    {
     "id": "sg72",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.33",
     "nombre": "Confeccionar Requisición",
     "creado": "2024-01-31",
     "datos": {
      "actividad": 9.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-01-31",
      "fecha_planificada_fin": "2024-01-31",
      "fecha_inicio": "2024-01-31",
      "fecha_fin": "2024-01-31",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "72"
     }
    },
    {
     "id": "sg73",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.34",
     "nombre": "Solicitar firma de Requisción al Despacho Superior",
     "creado": "2024-02-01",
     "datos": {
      "actividad": 9.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-01",
      "fecha_planificada_fin": "2024-02-01",
      "fecha_inicio": "2024-02-01",
      "fecha_fin": "2024-02-01",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "73"
     }
    },
    {
     "id": "sg74",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.35",
     "nombre": "Recibir Requisición firmada por el Despacho Superior",
     "creado": "2024-02-02",
     "datos": {
      "actividad": 9.3,
      "dias": 14,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-02",
      "fecha_planificada_fin": "2024-02-16",
      "fecha_inicio": "2024-02-02",
      "fecha_fin": "2024-02-29",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "74"
     }
    },
    {
     "id": "sg75",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.36",
     "nombre": "Perfeccionamiento de Contrato por Simple Prórroga",
     "creado": "2024-02-01",
     "datos": {
      "actividad": 10,
      "dias": 15,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2024-02-01",
      "fecha_planificada_fin": "2024-02-29",
      "fecha_inicio": "2024-02-01",
      "fecha_fin": "2024-02-29",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "75"
     }
    },
    {
     "id": "sg76",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.37",
     "nombre": "Incluir Partida Presupuestaria",
     "creado": "2024-02-01",
     "datos": {
      "actividad": 10.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "cancelado",
      "fecha_planificada_inicio": "2024-02-01",
      "fecha_planificada_fin": "2024-02-01",
      "fecha_inicio": "2024-02-01",
      "fecha_fin": "2024-02-01",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "76"
     }
    },
    {
     "id": "sg77",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.38",
     "nombre": "Incluir Fianza de Cumplimiento",
     "creado": "2024-02-20",
     "datos": {
      "actividad": 10.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "no_iniciado",
      "fecha_planificada_inicio": "2024-02-20",
      "fecha_planificada_fin": "2024-02-20",
      "fecha_inicio": "2024-02-20",
      "fecha_fin": "2024-02-20",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "77"
     }
    },
    {
     "id": "sg78",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.39",
     "nombre": "Asignar Número de Contrato",
     "creado": "2024-02-29",
     "datos": {
      "actividad": 10.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "no_iniciado",
      "fecha_planificada_inicio": "2024-02-29",
      "fecha_planificada_fin": "2024-02-29",
      "fecha_inicio": "2024-02-29",
      "fecha_fin": "2024-02-29",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "78"
     }
    },
    {
     "id": "sg79",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.40",
     "nombre": "Incorporar Paz y Salvo",
     "creado": "2024-03-01",
     "datos": {
      "actividad": 10.4,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-01",
      "fecha_planificada_fin": "2024-03-01",
      "fecha_inicio": "2024-03-22",
      "fecha_fin": "2024-03-22",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "79"
     }
    },
    {
     "id": "sg80",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.41",
     "nombre": "Generar documento de solicitud a refrendo",
     "creado": "2024-03-01",
     "datos": {
      "actividad": 10.5,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "no_iniciado",
      "fecha_planificada_inicio": "2024-03-01",
      "fecha_planificada_fin": "2024-03-01",
      "fecha_inicio": "2024-03-01",
      "fecha_fin": "2024-03-01",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "80"
     }
    },
    {
     "id": "sg81",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.42",
     "nombre": "Firmar contrato por el proovedor",
     "creado": "2024-03-01",
     "datos": {
      "actividad": 10.6,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "no_iniciado",
      "fecha_planificada_inicio": "2024-03-01",
      "fecha_planificada_fin": "2024-03-08",
      "fecha_inicio": "2024-04-11",
      "fecha_fin": "2024-04-11",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "81"
     }
    },
    {
     "id": "sg82",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.43",
     "nombre": "Firmar contrato el Administrador General",
     "creado": "2024-03-11",
     "datos": {
      "actividad": 10.7,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "no_iniciado",
      "fecha_planificada_inicio": "2024-03-11",
      "fecha_planificada_fin": "2024-03-15",
      "fecha_inicio": "2024-03-11",
      "fecha_fin": "2024-03-15",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "82"
     }
    },
    {
     "id": "sg83",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.44",
     "nombre": "Refrendo del Contrato",
     "creado": "2024-03-15",
     "datos": {
      "actividad": 11,
      "dias": 30,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-15",
      "fecha_planificada_fin": "2024-04-15",
      "fecha_inicio": "2024-03-15",
      "fecha_fin": "2024-04-15",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "83"
     }
    },
    {
     "id": "sg84",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.45",
     "nombre": "Refrendar Contrato",
     "creado": "2024-03-15",
     "datos": {
      "actividad": 11.1,
      "dias": 30,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-15",
      "fecha_planificada_fin": "2024-04-15",
      "fecha_inicio": "2024-05-14",
      "fecha_fin": "2024-05-14",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "84"
     }
    },
    {
     "id": "sg85",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.46",
     "nombre": "Certificado de Idoneidad de la JTIA",
     "creado": "2024-02-02",
     "datos": {
      "actividad": 12,
      "dias": 5,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-02",
      "fecha_planificada_fin": "2024-02-09",
      "fecha_inicio": "2024-02-02",
      "fecha_fin": "2024-03-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "85"
     }
    },
    {
     "id": "sg86",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.47",
     "nombre": "Solicitar Certificado de la JTIA",
     "creado": "2024-02-02",
     "datos": {
      "actividad": 12.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-02",
      "fecha_planificada_fin": "2024-02-02",
      "fecha_inicio": "2024-02-02",
      "fecha_fin": "2024-02-02",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "86"
     }
    },
    {
     "id": "sg87",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.48",
     "nombre": "Entrega de Certificado de la JTIA por el proveedor",
     "creado": "2024-02-02",
     "datos": {
      "actividad": 12.2,
      "dias": 5,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-02",
      "fecha_planificada_fin": "2024-02-09",
      "fecha_inicio": "2024-03-22",
      "fecha_fin": "2024-03-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "87"
     }
    },
    {
     "id": "sg88",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.49",
     "nombre": "Pacto de Integridad ente la AIG y el Proveedor",
     "creado": "2024-02-02",
     "datos": {
      "actividad": 13,
      "dias": 7,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-02",
      "fecha_planificada_fin": "2024-02-09",
      "fecha_inicio": "2024-04-02",
      "fecha_fin": "2024-04-26",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "88"
     }
    },
    {
     "id": "sg89",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.50",
     "nombre": "Confeccionar Pacto de Integridad",
     "creado": "2024-02-02",
     "datos": {
      "actividad": 13.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-02",
      "fecha_planificada_fin": "2024-02-02",
      "fecha_inicio": "2024-04-02",
      "fecha_fin": "2024-04-04",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "89"
     }
    },
    {
     "id": "sg90",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.51",
     "nombre": "Firmar pacto de integridad proveedor",
     "creado": "2024-02-06",
     "datos": {
      "actividad": 13.2,
      "dias": 2,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-06",
      "fecha_planificada_fin": "2024-02-07",
      "fecha_inicio": "2024-04-05",
      "fecha_fin": "2024-04-05",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "90"
     }
    },
    {
     "id": "sg91",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.52",
     "nombre": "Firmar Pacto de Integridad por el Administrador General",
     "creado": "2024-02-07",
     "datos": {
      "actividad": 13.3,
      "dias": 3,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-07",
      "fecha_planificada_fin": "2024-02-09",
      "fecha_inicio": "2024-04-09",
      "fecha_fin": "2024-04-26",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "91"
     }
    },
    {
     "id": "sg92",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.53",
     "nombre": "Paz y Salvo",
     "creado": "2024-02-19",
     "datos": {
      "actividad": 14,
      "dias": 3,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-19",
      "fecha_planificada_fin": "2024-03-01",
      "fecha_inicio": "2024-02-19",
      "fecha_fin": "2024-03-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "92"
     }
    },
    {
     "id": "sg93",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.54",
     "nombre": "Solicitar y entrega del Paz y Salvo de la DGI",
     "creado": "2024-02-19",
     "datos": {
      "actividad": 14.1,
      "dias": 15,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-19",
      "fecha_planificada_fin": "2024-03-01",
      "fecha_inicio": "2024-02-19",
      "fecha_fin": "2024-03-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "93"
     }
    },
    {
     "id": "sg94",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.55",
     "nombre": "Solicitar y Entrega de Paz y Salvo del CSS",
     "creado": "2024-02-19",
     "datos": {
      "actividad": 14.2,
      "dias": 15,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-19",
      "fecha_planificada_fin": "2024-03-01",
      "fecha_inicio": "2024-02-19",
      "fecha_fin": "2024-03-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "94"
     }
    },
    {
     "id": "sg95",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.56",
     "nombre": "Certificado de Registro Público",
     "creado": "2024-02-05",
     "datos": {
      "actividad": 15,
      "dias": 15,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-05",
      "fecha_planificada_fin": "2024-02-19",
      "fecha_inicio": "2024-02-05",
      "fecha_fin": "2024-03-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "95"
     }
    },
    {
     "id": "sg96",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.57",
     "nombre": "Solicitar y Entrega por el proveedor, certificado de Registro Público",
     "creado": "2024-02-05",
     "datos": {
      "actividad": 15.1,
      "dias": 15,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-05",
      "fecha_planificada_fin": "2024-02-19",
      "fecha_inicio": "2024-02-05",
      "fecha_fin": "2024-03-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "96"
     }
    },
    {
     "id": "sg97",
     "tipo": "seguimiento",
     "parentId": "py6",
     "codigo": "PF-008.1.1",
     "nombre": "Análisis de Requerimiento",
     "creado": "2024-02-28",
     "datos": {
      "actividad": 0.1,
      "dias": 20,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2024-02-13",
      "fecha_planificada_fin": "2024-02-13",
      "fecha_inicio": "2024-02-13",
      "fecha_fin": "2024-02-13",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "97"
     }
    },
    {
     "id": "sg98",
     "tipo": "seguimiento",
     "parentId": "py7",
     "codigo": "PF-016.2.1",
     "nombre": "Revisión de Especificaciones Técnicas",
     "creado": "2024-02-29",
     "datos": {
      "actividad": 1,
      "dias": 2,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2024-03-04",
      "fecha_planificada_fin": "2024-03-04",
      "fecha_inicio": "2024-02-29",
      "fecha_fin": "2024-03-04",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "98"
     }
    },
    {
     "id": "sg99",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.34",
     "nombre": "Proceso de Aclaración - (Homologación)",
     "creado": "2024-03-11",
     "datos": {
      "actividad": 16,
      "dias": 30,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-23",
      "fecha_planificada_fin": "2024-03-22",
      "fecha_inicio": "2024-02-23",
      "fecha_fin": "2024-03-22",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "99"
     }
    },
    {
     "id": "sg100",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.35",
     "nombre": "Reunión aclaratoria - “Desarrollo, soporte y mantenimiento para el bus de servicio empresarial Open",
     "creado": "2024-03-11",
     "datos": {
      "actividad": 16.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-22",
      "fecha_planificada_fin": "2024-03-22",
      "fecha_inicio": "2024-03-22",
      "fecha_fin": "2024-03-22",
      "n_responsables": 4,
      "observacion": "",
      "sispla_id": "100"
     }
    },
    {
     "id": "sg101",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.36",
     "nombre": "Publicar respuesta y preguntas de la Reunión Aclaratoria y esperar si hay mas consultas",
     "creado": "2024-03-11",
     "datos": {
      "actividad": 16.2,
      "dias": 7,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-02-23",
      "fecha_planificada_fin": "2024-02-23",
      "fecha_inicio": "2024-02-23",
      "fecha_fin": "2024-02-23",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "101"
     }
    },
    {
     "id": "sg102",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.37",
     "nombre": "Responder preguntas nuevas y pendientes después de reunión informática.",
     "creado": "2024-03-11",
     "datos": {
      "actividad": 16.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-05",
      "fecha_planificada_fin": "2024-03-05",
      "fecha_inicio": "2024-03-05",
      "fecha_fin": "2024-03-05",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "102"
     }
    },
    {
     "id": "sg103",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.38",
     "nombre": "Revisar y Ajustar preguntas de la reunión de aclaración",
     "creado": "2024-03-11",
     "datos": {
      "actividad": 16.4,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-11",
      "fecha_planificada_fin": "2024-03-11",
      "fecha_inicio": "2024-03-11",
      "fecha_fin": "2024-03-11",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "103"
     }
    },
    {
     "id": "sg104",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.39",
     "nombre": "Publicar respuestas una vez corregiditas y ajustadas",
     "creado": "2024-03-11",
     "datos": {
      "actividad": 16.5,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-12",
      "fecha_planificada_fin": "2024-03-12",
      "fecha_inicio": "2024-03-12",
      "fecha_fin": "2024-03-12",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "104"
     }
    },
    {
     "id": "sg105",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.40",
     "nombre": "Proceso para recibir ofertas",
     "creado": "2024-03-11",
     "datos": {
      "actividad": 17,
      "dias": 15,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-12",
      "fecha_planificada_fin": "2024-03-25",
      "fecha_inicio": "2024-03-12",
      "fecha_fin": "2024-03-25",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "105"
     }
    },
    {
     "id": "sg106",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.41",
     "nombre": "Publicar anuncio para confección de propuesta y mecanismo de entrega",
     "creado": "2024-03-12",
     "datos": {
      "actividad": 17.1,
      "dias": 10,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-12",
      "fecha_planificada_fin": "2024-03-25",
      "fecha_inicio": "2024-03-12",
      "fecha_fin": "2024-03-25",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "106"
     }
    },
    {
     "id": "sg107",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.42",
     "nombre": "Aperturar Sobres",
     "creado": "2024-03-12",
     "datos": {
      "actividad": 17.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-25",
      "fecha_planificada_fin": "2024-03-25",
      "fecha_inicio": "2024-03-25",
      "fecha_fin": "2024-03-25",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "107"
     }
    },
    {
     "id": "sg108",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.43",
     "nombre": "Conformar Comisión Evaluadora",
     "creado": "2024-03-12",
     "datos": {
      "actividad": 15.4,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-20",
      "fecha_planificada_fin": "2024-03-20",
      "fecha_inicio": "2024-03-20",
      "fecha_fin": "2024-03-20",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "108"
     }
    },
    {
     "id": "sg109",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.44",
     "nombre": "Proceso de Evaluación y Verificación de Propuesta",
     "creado": "2024-03-12",
     "datos": {
      "actividad": 18,
      "dias": 7,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-26",
      "fecha_planificada_fin": "2024-04-02",
      "fecha_inicio": "2024-03-26",
      "fecha_fin": "2024-04-02",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "109"
     }
    },
    {
     "id": "sg110",
     "tipo": "seguimiento",
     "parentId": "py2",
     "codigo": "PF-004.1.45",
     "nombre": "Evaluar y Verificar Propuesta y sacar informe",
     "creado": "2024-03-12",
     "datos": {
      "actividad": 18.1,
      "dias": 7,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-27",
      "fecha_planificada_fin": "2024-04-02",
      "fecha_inicio": "2024-03-27",
      "fecha_fin": "2024-04-02",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "110"
     }
    },
    {
     "id": "sg111",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.58",
     "nombre": "Revisar SES por el Despacho Superior",
     "creado": "2024-03-15",
     "datos": {
      "actividad": 8.4,
      "dias": 7,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-04-15",
      "fecha_planificada_fin": "2024-04-15",
      "fecha_inicio": "2024-03-07",
      "fecha_fin": "2024-03-12",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "111"
     }
    },
    {
     "id": "sg112",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.59",
     "nombre": "Crear usuario y subir documentación al Portal de Panamá Compra",
     "creado": "2024-03-15",
     "datos": {
      "actividad": 7.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-05-02",
      "fecha_planificada_fin": "2024-05-03",
      "fecha_inicio": "2024-03-11",
      "fecha_fin": "2024-03-11",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "112"
     }
    },
    {
     "id": "sg113",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.60",
     "nombre": "Aprobar declaración de Incapacidad de contratar en el portal de Panamá Compras.",
     "creado": "2024-03-15",
     "datos": {
      "actividad": 7.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-13",
      "fecha_planificada_fin": "2024-03-15",
      "fecha_inicio": "2024-03-13",
      "fecha_fin": "2024-03-13",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "113"
     }
    },
    {
     "id": "sg114",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.61",
     "nombre": "Enviar documentación a Legal para terminar el Perfeccionamiento del Contrato",
     "creado": "2024-03-15",
     "datos": {
      "actividad": 7.4,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-03-13",
      "fecha_planificada_fin": "2024-03-13",
      "fecha_inicio": "2024-03-15",
      "fecha_fin": "2024-03-15",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "114"
     }
    },
    {
     "id": "sg115",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.62",
     "nombre": "Recibir de Compras Número de Proceso producto de la publicación de la Licitación por Procedimiento E",
     "creado": "2024-03-15",
     "datos": {
      "actividad": 10.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-05-14",
      "fecha_planificada_fin": "2024-05-14",
      "fecha_inicio": "2024-03-14",
      "fecha_fin": "2024-03-14",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "115"
     }
    },
    {
     "id": "sg116",
     "tipo": "seguimiento",
     "parentId": "py5",
     "codigo": "PF-015.1.63",
     "nombre": "Entregar copia de contrato al proveedor",
     "creado": "2024-05-20",
     "datos": {
      "actividad": 11.2,
      "dias": 3,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-05-14",
      "fecha_planificada_fin": "2024-05-14",
      "fecha_inicio": "2024-05-14",
      "fecha_fin": "2024-05-17",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "116"
     }
    },
    {
     "id": "sg117",
     "tipo": "seguimiento",
     "parentId": "py14",
     "codigo": "PF-004.4.1",
     "nombre": "Ver Correo 10/02/25 12:12 pm",
     "creado": "2025-02-10",
     "datos": {
      "actividad": 0.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2025-02-10",
      "fecha_planificada_fin": "2025-02-10",
      "fecha_inicio": "2025-02-10",
      "fecha_fin": "2025-02-10",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "117"
     }
    },
    {
     "id": "sg119",
     "tipo": "seguimiento",
     "parentId": "py20",
     "codigo": "PF-003.1.1",
     "nombre": "Reporte de marcaciones",
     "creado": "2025-02-10",
     "datos": {
      "actividad": 0.1,
      "dias": 7,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2025-02-10",
      "fecha_planificada_fin": "2025-02-10",
      "fecha_inicio": "2025-02-10",
      "fecha_fin": "2025-02-10",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "119"
     }
    },
    {
     "id": "sg120",
     "tipo": "seguimiento",
     "parentId": "py20",
     "codigo": "PF-003.1.2",
     "nombre": "Check Box transparencia",
     "creado": "2025-02-10",
     "datos": {
      "actividad": 0.2,
      "dias": 7,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-10-28",
      "fecha_planificada_fin": "2024-10-28",
      "fecha_inicio": "2024-10-28",
      "fecha_fin": "2024-10-28",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "120"
     }
    },
    {
     "id": "sg121",
     "tipo": "seguimiento",
     "parentId": "py20",
     "codigo": "PF-003.1.3",
     "nombre": "Ajuste - notificaciones de Gestión de permisos SARH",
     "creado": "2025-02-10",
     "datos": {
      "actividad": 0.3,
      "dias": 5,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-12-27",
      "fecha_planificada_fin": "2025-01-02",
      "fecha_inicio": "2024-12-27",
      "fecha_fin": "2024-12-31",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "121"
     }
    },
    {
     "id": "sg122",
     "tipo": "seguimiento",
     "parentId": "py20",
     "codigo": "PF-003.1.4",
     "nombre": "Check Box excepción de marcaciones - Personal en calidad de préstamo inst.",
     "creado": "2025-02-10",
     "datos": {
      "actividad": 0.4,
      "dias": 7,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-12-30",
      "fecha_planificada_fin": "2025-02-07",
      "fecha_inicio": "2024-12-30",
      "fecha_fin": "2025-02-03",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "122"
     }
    },
    {
     "id": "sg123",
     "tipo": "seguimiento",
     "parentId": "py20",
     "codigo": "PF-003.1.5",
     "nombre": "Reorganización",
     "creado": "2025-02-12",
     "datos": {
      "actividad": 0.5,
      "dias": 5,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2024-12-16",
      "fecha_planificada_fin": "2025-01-03",
      "fecha_inicio": "2024-12-16",
      "fecha_fin": "2025-01-03",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "123"
     }
    },
    {
     "id": "sg124",
     "tipo": "seguimiento",
     "parentId": "py17",
     "codigo": "PF-004.7.1",
     "nombre": "Integrase con el servicio MICI_AvisosCancelados",
     "creado": "2025-02-21",
     "datos": {
      "actividad": 0.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2025-02-21",
      "fecha_planificada_fin": "2025-02-21",
      "fecha_inicio": "2025-02-21",
      "fecha_fin": "2025-02-21",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "124"
     }
    },
    {
     "id": "sg125",
     "tipo": "seguimiento",
     "parentId": "py26",
     "codigo": "PF-015.2.1",
     "nombre": "SES - Subsanar había que agregar capitulo II y se hizo cuando se corrigió el pliego por legal",
     "creado": "2025-04-16",
     "datos": {
      "actividad": 0.1,
      "dias": 10,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2025-04-16",
      "fecha_planificada_fin": "2025-04-16",
      "fecha_inicio": "2025-04-16",
      "fecha_fin": "2025-04-16",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "125"
     }
    },
    {
     "id": "sg126",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.1",
     "nombre": "Certificación de Partida Presupuestaria",
     "creado": "2025-10-14",
     "datos": {
      "actividad": 1,
      "dias": 5,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2025-10-10",
      "fecha_planificada_fin": "2025-10-17",
      "fecha_inicio": "2025-10-10",
      "fecha_fin": "2025-10-17",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "126"
     }
    },
    {
     "id": "sg127",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.2",
     "nombre": "Entrega de Propuesta del Proveedor para la Certificación de Partida",
     "creado": "2025-10-14",
     "datos": {
      "actividad": 1.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2025-10-10",
      "fecha_planificada_fin": "2025-10-10",
      "fecha_inicio": "2025-10-10",
      "fecha_fin": "2025-10-10",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "127"
     }
    },
    {
     "id": "sg128",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.3",
     "nombre": "Certificar Monto Mensual y Total para la Certificación de Partida.",
     "creado": "2025-10-14",
     "datos": {
      "actividad": 1.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2025-10-10",
      "fecha_planificada_fin": "2025-10-10",
      "fecha_inicio": "2025-10-10",
      "fecha_fin": "2025-10-10",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "128"
     }
    },
    {
     "id": "sg129",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.4",
     "nombre": "Certificar Partida Presupuestaria",
     "creado": "2025-10-14",
     "datos": {
      "actividad": 1.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2025-10-10",
      "fecha_planificada_fin": "2025-10-17",
      "fecha_inicio": "2025-10-10",
      "fecha_fin": "2025-10-17",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "129"
     }
    },
    {
     "id": "sg130",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.5",
     "nombre": "Confeccionar y Perfeccionar ITF",
     "creado": "2025-10-14",
     "datos": {
      "actividad": 2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2025-10-13",
      "fecha_planificada_fin": "2025-10-17",
      "fecha_inicio": "2025-10-13",
      "fecha_fin": "2025-10-17",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "130"
     }
    },
    {
     "id": "sg131",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.6",
     "nombre": "Crear ITF",
     "creado": "2025-10-14",
     "datos": {
      "actividad": 2.1,
      "dias": 2,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2025-10-13",
      "fecha_planificada_fin": "2025-10-14",
      "fecha_inicio": "2025-10-13",
      "fecha_fin": "2025-10-14",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "131"
     }
    },
    {
     "id": "sg132",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.7",
     "nombre": "Revisar ITF por Cordinadora",
     "creado": "2025-10-14",
     "datos": {
      "actividad": 2.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2025-10-13",
      "fecha_planificada_fin": "2025-10-14",
      "fecha_inicio": "2025-10-13",
      "fecha_fin": "2025-10-14",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "132"
     }
    },
    {
     "id": "sg133",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.8",
     "nombre": "Revisar ITF por Legal",
     "creado": "2025-10-14",
     "datos": {
      "actividad": 2.4,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2025-10-15",
      "fecha_planificada_fin": "2025-10-17",
      "fecha_inicio": "2025-10-15",
      "fecha_fin": "2025-10-15",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "133"
     }
    },
    {
     "id": "sg134",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.9",
     "nombre": "Comparar y Ajustar ITF con correcciones anteriores a este acto como el de la DGCP",
     "creado": "2025-10-15",
     "datos": {
      "actividad": 2.3,
      "dias": 2,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2025-10-15",
      "fecha_planificada_fin": "2025-10-16",
      "fecha_inicio": "2025-10-15",
      "fecha_fin": "2025-10-15",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "134"
     }
    },
    {
     "id": "sg135",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.10",
     "nombre": "Firmar ITF por el Despacho Superior",
     "creado": "2025-10-15",
     "datos": {
      "actividad": 2.5,
      "dias": 2,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2025-10-16",
      "fecha_planificada_fin": "2025-10-17",
      "fecha_inicio": "2025-10-15",
      "fecha_fin": "2025-10-16",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "135"
     }
    },
    {
     "id": "sg136",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.11",
     "nombre": "Crear y Perfeccionar Contrato",
     "creado": "2025-10-15",
     "datos": {
      "actividad": 3,
      "dias": 5,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2025-10-16",
      "fecha_planificada_fin": "2025-10-20",
      "fecha_inicio": "2025-10-16",
      "fecha_fin": "2025-10-20",
      "n_responsables": 3,
      "observacion": "",
      "sispla_id": "136"
     }
    },
    {
     "id": "sg137",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.12",
     "nombre": "Confeccionar Contrato",
     "creado": "2025-10-15",
     "datos": {
      "actividad": 3.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "no_iniciado",
      "fecha_planificada_inicio": "2025-10-16",
      "fecha_planificada_fin": "2025-10-16",
      "fecha_inicio": "2025-10-16",
      "fecha_fin": "2025-10-16",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "137"
     }
    },
    {
     "id": "sg138",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.13",
     "nombre": "Revisar Contrato por la Oficina de Legal",
     "creado": "2025-10-15",
     "datos": {
      "actividad": 3.2,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "no_iniciado",
      "fecha_planificada_inicio": "2025-10-20",
      "fecha_planificada_fin": "2025-10-20",
      "fecha_inicio": "2025-10-20",
      "fecha_fin": "2025-10-20",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "138"
     }
    },
    {
     "id": "sg139",
     "tipo": "seguimiento",
     "parentId": "py31",
     "codigo": "PF-012.5.14",
     "nombre": "Firmar Contrato por Despacho Superior",
     "creado": "2025-10-15",
     "datos": {
      "actividad": 3.3,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "no_iniciado",
      "fecha_planificada_inicio": "2025-10-24",
      "fecha_planificada_fin": "2025-11-24",
      "fecha_inicio": "2025-10-24",
      "fecha_fin": "2025-11-24",
      "n_responsables": 3,
      "observacion": "",
      "sispla_id": "139"
     }
    },
    {
     "id": "sg140",
     "tipo": "seguimiento",
     "parentId": "py32",
     "codigo": "PF-004.12.1",
     "nombre": "Solicitar Servicios",
     "creado": "2025-12-02",
     "datos": {
      "actividad": 0.1,
      "dias": 1,
      "tipo": "por_definir",
      "estado": "completo",
      "fecha_planificada_inicio": "2025-11-27",
      "fecha_planificada_fin": "2025-11-27",
      "fecha_inicio": "2025-11-27",
      "fecha_fin": "2025-11-27",
      "n_responsables": 1,
      "observacion": "",
      "sispla_id": "140"
     }
    },
    {
     "id": "sg141",
     "tipo": "seguimiento",
     "parentId": "py36",
     "codigo": "PF-004.15.1",
     "nombre": "Integrar con la API de la Universidad de Panamá (UP) con Panamá Conecta",
     "creado": "2026-08-14",
     "datos": {
      "actividad": 0.1,
      "dias": 15,
      "tipo": "por_definir",
      "estado": "en_progreso",
      "fecha_planificada_inicio": "2026-08-14",
      "fecha_planificada_fin": "2026-08-28",
      "fecha_inicio": "2026-08-14",
      "fecha_fin": "2026-08-28",
      "n_responsables": 2,
      "observacion": "",
      "sispla_id": "141"
     }
    }
   ],
   "archivos": [],
   "historial": []
  },
  "version": 6,
  "modificado": 1789417173962
 }
};
