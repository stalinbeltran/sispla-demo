/* Estado de la demo SisPla guardado el 2026-09-15T13:24:48.356Z desde la demo (botón Guardar). No editar a mano. */
window.SISPLA_GUARDADO={
 "guardadoEn": 1789478688356,
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
       "key": "responsables",
       "label": "Personas responsables",
       "tipo": "multiple",
       "visible": true,
       "ancho": "full",
       "catalogo": "persona",
       "ayuda": "En SISPLA cada responsable lleva además costo y rata por hora (tabla responsable_seguimiento); en la demo solo se registra quién. La lista Personas trae solo a quienes ya son responsables de algún seguimiento; se amplía en Listas de opciones."
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
    "persona": {
     "id": "persona",
     "nombre": "Personas",
     "opciones": [
      {
       "valor": "p2",
       "etiqueta": "Evelyn Rodriguez",
       "color": "#2E5C8A"
      },
      {
       "valor": "p4",
       "etiqueta": "Javier Garrido",
       "color": "#2E7D5B"
      },
      {
       "valor": "p6",
       "etiqueta": "Paulo Rodriguez",
       "color": "#C08A1E"
      },
      {
       "valor": "p12",
       "etiqueta": "Lidia Ibeth Serrano Quiroz",
       "color": "#6B5B95"
      },
      {
       "valor": "p13",
       "etiqueta": "Gwendolyn Calzadilla",
       "color": "#3A8A8A"
      },
      {
       "valor": "p14",
       "etiqueta": "Thays Zorrilla",
       "color": "#5A6B7C"
      },
      {
       "valor": "p22",
       "etiqueta": "alfredo petterson",
       "color": "#2E7D8A"
      },
      {
       "valor": "p23",
       "etiqueta": "akepanamaenlinea",
       "color": "#B23A3A"
      },
      {
       "valor": "p24",
       "etiqueta": "app-corecovid",
       "color": "#8A94A0"
      },
      {
       "valor": "p28",
       "etiqueta": "app-panamadigital",
       "color": "#2E5C8A"
      },
      {
       "valor": "p31",
       "etiqueta": "app-sici-te",
       "color": "#2E7D5B"
      },
      {
       "valor": "p34",
       "etiqueta": "consulta-ldelvasto",
       "color": "#C08A1E"
      },
      {
       "valor": "p45",
       "etiqueta": "eregistro1",
       "color": "#6B5B95"
      },
      {
       "valor": "p46",
       "etiqueta": "Alfredo Remón",
       "color": "#3A8A8A"
      },
      {
       "valor": "p47",
       "etiqueta": "Guadalupe Inyira Franco Peña",
       "color": "#5A6B7C"
      },
      {
       "valor": "p48",
       "etiqueta": "Ivonne Ortega",
       "color": "#2E7D8A"
      },
      {
       "valor": "p50",
       "etiqueta": "Omar Arcia",
       "color": "#B23A3A"
      },
      {
       "valor": "p51",
       "etiqueta": "Vanesa Arosemena",
       "color": "#8A94A0"
      },
      {
       "valor": "p53",
       "etiqueta": "Joel Crisanto Luque Jimenez",
       "color": "#2E5C8A"
      },
      {
       "valor": "p54",
       "etiqueta": "Jenny Aracelly Villareal Jimenez",
       "color": "#2E7D5B"
      },
      {
       "valor": "p55",
       "etiqueta": "Reinerio  Becerra",
       "color": "#C08A1E"
      },
      {
       "valor": "p56",
       "etiqueta": "Yasmery Marleyn Yanis Alonso",
       "color": "#6B5B95"
      },
      {
       "valor": "p57",
       "etiqueta": "Patricia Ivonne Pinzón Quiróz",
       "color": "#3A8A8A"
      },
      {
       "valor": "p58",
       "etiqueta": "Alberto Ostía",
       "color": "#5A6B7C"
      },
      {
       "valor": "p59",
       "etiqueta": "Zulma Del Carmen González Diamantopulos",
       "color": "#2E7D8A"
      },
      {
       "valor": "p85",
       "etiqueta": "Adolfo Fábrega",
       "color": "#B23A3A"
      },
      {
       "valor": "p118",
       "etiqueta": "Jessyann Mendez",
       "color": "#8A94A0"
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p45"
      ],
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
      "responsables": [
       "p24"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p34"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p28"
      ],
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
      "responsables": [
       "p28"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p28"
      ],
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
      "responsables": [
       "p28"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4",
       "p45"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p24"
      ],
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
      "responsables": [
       "p24"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p31"
      ],
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
      "responsables": [
       "p24"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4",
       "p12"
      ],
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
      "responsables": [
       "p4",
       "p12"
      ],
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
      "responsables": [
       "p55"
      ],
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
      "responsables": [],
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
      "responsables": [
       "p2"
      ],
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
      "responsables": [
       "p2",
       "p4",
       "p46"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p51"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p51"
      ],
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
      "responsables": [
       "p46"
      ],
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
      "responsables": [
       "p4",
       "p46",
       "p51"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p51"
      ],
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
      "responsables": [
       "p4",
       "p46"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4",
       "p46"
      ],
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
      "responsables": [
       "p50"
      ],
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
      "responsables": [
       "p50"
      ],
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
      "responsables": [
       "p50"
      ],
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
      "responsables": [
       "p4",
       "p50"
      ],
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
      "responsables": [
       "p47"
      ],
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
      "responsables": [
       "p2"
      ],
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
      "responsables": [
       "p47"
      ],
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
      "responsables": [
       "p47"
      ],
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
      "responsables": [
       "p48"
      ],
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
      "responsables": [
       "p2",
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p53"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4",
       "p46"
      ],
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
      "responsables": [
       "p50"
      ],
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
      "responsables": [
       "p50"
      ],
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
      "responsables": [
       "p50"
      ],
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
      "responsables": [
       "p50"
      ],
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
      "responsables": [
       "p4",
       "p50"
      ],
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
      "responsables": [
       "p54"
      ],
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
      "responsables": [
       "p4",
       "p54"
      ],
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
      "responsables": [
       "p4",
       "p46"
      ],
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
      "responsables": [
       "p50"
      ],
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
      "responsables": [
       "p50",
       "p54"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4",
       "p46"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p6"
      ],
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
      "responsables": [
       "p2",
       "p4"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4",
       "p55",
       "p56",
       "p57"
      ],
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
      "responsables": [
       "p55"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4",
       "p55"
      ],
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
      "responsables": [
       "p55"
      ],
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
      "responsables": [
       "p55"
      ],
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
      "responsables": [
       "p55"
      ],
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
      "responsables": [
       "p4",
       "p55"
      ],
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
      "responsables": [
       "p55"
      ],
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
      "responsables": [
       "p55"
      ],
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
      "responsables": [
       "p12"
      ],
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
      "responsables": [
       "p58"
      ],
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
      "responsables": [
       "p2"
      ],
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
      "responsables": [
       "p13"
      ],
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
      "responsables": [
       "p59"
      ],
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
      "responsables": [
       "p23"
      ],
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
      "responsables": [
       "p50",
       "p54"
      ],
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
      "responsables": [
       "p12"
      ],
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
      "responsables": [
       "p22"
      ],
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
      "responsables": [
       "p22"
      ],
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
      "responsables": [
       "p22"
      ],
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
      "responsables": [
       "p22"
      ],
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
      "responsables": [
       "p6",
       "p22"
      ],
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
      "responsables": [
       "p12"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p4",
       "p47"
      ],
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
      "responsables": [
       "p4",
       "p118"
      ],
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
      "responsables": [
       "p4",
       "p118"
      ],
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
      "responsables": [
       "p47"
      ],
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
      "responsables": [
       "p4",
       "p118"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p118"
      ],
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
      "responsables": [
       "p50",
       "p118"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p14",
       "p85"
      ],
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
      "responsables": [
       "p4",
       "p50",
       "p118"
      ],
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
      "responsables": [
       "p4"
      ],
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
      "responsables": [
       "p50"
      ],
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
      "responsables": [
       "p14",
       "p50",
       "p85"
      ],
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
      "responsables": [
       "p12"
      ],
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
      "responsables": [
       "p12",
       "p22"
      ],
      "observacion": "",
      "sispla_id": "141"
     }
    }
   ],
   "archivos": [
    {
     "id": "d1",
     "nodoId": "py2",
     "nombre": "ARV-2023-001 AnaliticaDatoCSS",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2023-06-30",
     "origen": "AIG",
     "detalle": "Reunión de incio para un posible proyecto de análsis de dato para la CSS · Pc\\\\004 ServidorProyectos\\\\001 AIG\\\\0141-AnaliticaCSS\\\\001 Planificacion  CC: Analtica de Datos (registrado por Javier Garrido)",
     "sispla_id": "1"
    },
    {
     "id": "d2",
     "nodoId": "py5",
     "nombre": "ARV-2024-001 EFI",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-02-09",
     "origen": "AIG",
     "detalle": "Reunión con el MEF y el BID, viendo la arquitectura y alternativas de intercambio de datos. Se conversa de la parte de los convenios y el SSO de Panamá Digital · \\\\004 ServidorProyectos\\\\001 AIG\\\\0149-EcosistemaFiscalInteligente\\\\001 Planificacion (registrado por Javier Garrido)",
     "sispla_id": "2"
    },
    {
     "id": "d3",
     "nodoId": "py2",
     "nombre": "IG-2024-001 Actividades2020-2025",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-02-26",
     "origen": "AIG",
     "detalle": "Resumen de actividades y proyectos durante el período de 2020 - 2025 · 03 Coordinacion\\\\001 Gestion\\\\003 LogrosEIniciativas\\\\2024 (registrado por Javier Garrido)",
     "sispla_id": "3"
    },
    {
     "id": "d4",
     "nodoId": "py2",
     "nombre": "IG-2024-002 ListoTE",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-02-26",
     "origen": "AIG",
     "detalle": "Se presenta problemas en el consumo del bus de servicio de ZATO por medio de la plata forma LISTO, donde arrojó problemas del WAF y de captcha como componentes de seguridad. Al solventar el problema, se sobre paso la cuota de consumo diaria del servicio web que el Tribunal Electoral le ha dado a la AIG · 003 Coordinacion\\\\018 AuditoriasCasosSolicitudes (registrado por Javier Garrido)",
     "sispla_id": "4"
    },
    {
     "id": "d5",
     "nodoId": "pf1",
     "nombre": "ARV-2024-002 archivisticaDigitalizacion",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-02-28",
     "origen": "AIG",
     "detalle": "Reunión con el Equipo de Archivos Nacionales y la AIG · 004 ServidorProyectos\\\\001 AIG\\\\0152-ArchivisticaDigitalizacion\\\\001 Planificacion (registrado por Lourdes Montenegro)",
     "sispla_id": "5"
    },
    {
     "id": "d6",
     "nodoId": "py2",
     "nombre": "IG-2024-003 SVIConsultas",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-03-05",
     "origen": "AIG",
     "detalle": "Respuesta a consultas realizadas por el Tribunal Electoral en nota No. 113-DTIC del 29 de febrero de 2024, la parte donde consultan sobre el uso que le están dando a los Webservices. · \\\\Analítica de Datos - General\\\\09 BUS DE SERVICIO\\\\ZATO\\\\04 Documentacion\\\\05 Auditoria\\\\202302 TE (registrado por Javier Garrido)",
     "sispla_id": "6"
    },
    {
     "id": "d7",
     "nodoId": "pf1",
     "nombre": "ARV-2024-003 ArchivisticaVisita",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-03-21",
     "origen": "AIG",
     "detalle": "Visita del personal de archivos nacionales a diferentes áreas de la AIG, para conocer el personal y ver cómo manejan su archivo. (registrado por Lourdes Montenegro)",
     "sispla_id": "7"
    },
    {
     "id": "d8",
     "nodoId": "py5",
     "nombre": "ARV-2024-004 Visita a Almacén de Metro Park",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-05-30",
     "origen": "AIG",
     "detalle": "visita a las instalaciones de la bodega de AIG en Metro Park, para revisar el estado en que se encuentran los documentos y el almacenamiento en la bodega (registrado por Evelyn Rodriguez)",
     "sispla_id": "8"
    },
    {
     "id": "d9",
     "nodoId": "py5",
     "nombre": "ARV-2024-005 ARV-20245-AIG-Primera reunión del Comité",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-05-31",
     "origen": "AIG",
     "detalle": "Se convocaron a todos los representantes de las direcciones involucradas en el proyecto y se asignaron tareas (registrado por Evelyn Rodriguez)",
     "sispla_id": "9"
    },
    {
     "id": "d10",
     "nodoId": "py2",
     "nombre": "ARV-2024-006 1era Reunion con el equipo del 311",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-07-23",
     "origen": "AIG",
     "detalle": "Se convoca a una reunion a todos los supervisores del 311, para conocer el estatus actual del centro en cuanto a proyectos y funciones, en aras de tener la mayor información para ser presentado al equipo de la nueva administración. · Participantes: Dirección de Ciencias de la Información\\nCentro 311\\nGeraldine Santander\\nRuth Rivas\\nKarla Him\\nDegnis García\\n\\nOficina Sede:\\nJavier Garrido\\nRolando Becerra\\nEvelyn Rodriguez\\n (registrado por Javier Garrido)",
     "sispla_id": "10"
    },
    {
     "id": "d11",
     "nodoId": "py2",
     "nombre": "IG-2024-004 RespuestaOficio8405",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-07-23",
     "origen": "AIG",
     "detalle": "Respuesta a la Solicitud de Información hecha por el Ministerio Público, Fiscalía Metropolitana, Sección Tercera de Delitos contra el Patrimonio, Oficio No. 8405/2022400005772/JC, Carpetilla No. 202400005772, Fechado: 28 de junio de 2024, Panamá. (registrado por Javier Garrido)",
     "sispla_id": "11"
    },
    {
     "id": "d12",
     "nodoId": "py2",
     "nombre": "IG-2024-005 SistemaEventosDeportivos",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-09-02",
     "origen": "AIG",
     "detalle": "Se atiendo un personal de la empresa w2edit. Diego Ortiz, Carlos Chial y DIego Gómezm, donde presentan un sistema de control de eventos deportivos. · La solicitud de atención se hace a través del Despacho Superior. \\n003 Coordinacion\\\\001 Gestion\\\\007 ActasyNotasInternasExternas\\\\2024 (registrado por Javier Garrido)",
     "sispla_id": "12"
    },
    {
     "id": "d13",
     "nodoId": "py2",
     "nombre": "IG-2024-006 MefCGR",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-09-12",
     "origen": "AIG",
     "detalle": "Se resumen algunas de las integraciones que están relacionadas con los sistemas que se gestionan en la Contraloría General de la República (CGR) y el Ministerio de Economía y Finanzas (MEF).  · 004 ServidorProyectos\\\\001 AIG\\\\0160-IntegracionMEF-CGR\\\\002 Ejecución (registrado por Javier Garrido)",
     "sispla_id": "13"
    },
    {
     "id": "d14",
     "nodoId": "py5",
     "nombre": "ARV-2024-007 Billetera Electrónica - Tribunal Electoral y AIG",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-10-17",
     "origen": "AIG",
     "detalle": "Luego de recibir una Adenda para modificar el Acuerdo entre AIG y el Tribunal Electoral solicitada mediante nota al TE firmada por el Ing. Alberto Ostía, solicitamos reunión al Ing. Olivardía para identificar los requerimiento para que AIG pueda hacer uso de este servicio a nivel de validación de los ciudadanos. · Ubicación del Documento: Analítica de Datos/General/09 BUS DE SERVICIO/ZATO/04Documentación/07 Reuniones\\nhttps://aigpanama.sharepoint.com/:f:/s/PowerBI/EqJIfqtyHwpDrazP4nntLx4B-6f40-QP1BiDNJ85tNkXfQ?e=MYhPO2\\n (registrado por Evelyn Rodriguez)",
     "sispla_id": "14"
    },
    {
     "id": "d15",
     "nodoId": "py5",
     "nombre": "ARV-2024-008 20241018 - Acta de reunión Integración ANATI - Registro Públio",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-10-18",
     "origen": "AIG",
     "detalle": "Por medio de correo eclectrónico del Ing. Francisco Guinard, se coordinó la 1era reunión de forma virtual entre ANATI, RP y AIG, para intercambiar información referente a los requerimiento con el fin de que cada vez que se actualice información en RP está tambien sea actualizada en ANATI. · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "15"
    },
    {
     "id": "d16",
     "nodoId": "py5",
     "nombre": "ARV-2024-009 2da Reunion para revisión de Resolución 55 - Estandares WEB",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-10-24",
     "origen": "AIG",
     "detalle": "Revisión del Documento de Estándares WEB contenido en la Resolución N°55 de 1 de marzo de 2011 · Nomber del Documento: 20241024 - Acta de reunión Revisión de Resolución N°55 1 de marzo de 2011 de Estándares WEB\\nUbicación del documento: Teams - Equipos - Ciencias de la Información - General - Archivos - 03 ProyectosActividades - 41 Estándares WEB (registrado por Evelyn Rodriguez)",
     "sispla_id": "16"
    },
    {
     "id": "d17",
     "nodoId": "py5",
     "nombre": "ARV-2024-010 ARV-202410-AIG-20241101 - Acta de reunión Integración ANATI - Registro Público",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-11-06",
     "origen": "AIG",
     "detalle": "Se llevo a cabo la 2da reunion para revisar los resultados de las comparaciones de las tablas entre ANATI y RP (registrado por Evelyn Rodriguez)",
     "sispla_id": "17"
    },
    {
     "id": "d18",
     "nodoId": "py5",
     "nombre": "ARV-2024-011 20241107 - Acta de reunión Integración ANATI - Registro Público",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-11-13",
     "origen": "AIG",
     "detalle": "Reunión técnica entre ANATI y AIG para revisar detalles de los requerimientos para la integarción · Analítica de Datos - General\\\\09 BUS DE SERVICIO\\\\ZATO\\\\05 Proyectos\\\\21 ANATI\\\\ACTAS (registrado por Evelyn Rodriguez)",
     "sispla_id": "18"
    },
    {
     "id": "d19",
     "nodoId": "py5",
     "nombre": "ARV-2024-012 20241114 - Acta de reunión Integración ANATI - Registro Público",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-11-14",
     "origen": "AIG",
     "detalle": "Reunión \"téctnica\" entre los equipos de tecnología de ANATI y AIG\\nPara evaluar y revisar avances (registrado por Evelyn Rodriguez)",
     "sispla_id": "19"
    },
    {
     "id": "d20",
     "nodoId": "py5",
     "nombre": "ARV-2024-013 20241129 - Acta de reunión Integración ANATI - Registro Público",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-11-29",
     "origen": "AIG",
     "detalle": "Reunión de seguimiento Interoperabilidad ANATI - RP (registrado por Evelyn Rodriguez)",
     "sispla_id": "20"
    },
    {
     "id": "d21",
     "nodoId": "py5",
     "nombre": "ARV-2024-014 20241202 - Acta de reunión Mejoras al e-TAX 2.0 DGI_AIG",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2024-12-02",
     "origen": "AIG",
     "detalle": "A solicitud de Heidi Taborda - Jefa | Departamento de Sistemas de Información Tributaria, se coordinó una reunion virtual para conocer detalles de la información que se requiere. (registrado por Evelyn Rodriguez)",
     "sispla_id": "21"
    },
    {
     "id": "d22",
     "nodoId": "py5",
     "nombre": "ARV-2025-001 DIGITALIZACIÓN y BUS DE INTEROPERABILIDAD CON ANATI",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-01-07",
     "origen": "AIG",
     "detalle": "Se extiende invitación para los temas agregados en la agenda.\\nEn caso de ser necesario pueden agregar a quien consideren prudente.\\nAGENDA:\\nDIGITALIZACIÓN DE DOCUMENTOS: 1. Requerimientos 2. Avances de ANATI a la fecha\\nBUS DE SERVICIO: 1. Análisis entre AIG & ANATI - sobre datos que se puedan poner en el BUS DE INTEROPERABILIDAD (registrado por Evelyn Rodriguez)",
     "sispla_id": "22"
    },
    {
     "id": "d23",
     "nodoId": "py5",
     "nombre": "ARV-2025-002 Segunda Reunión - ANATI & AIG - Reunión de seguimiento Archivística y Bus de Interoperabilidad",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-01-21",
     "origen": "AIG",
     "detalle": "Por parte de ANATI, presentación de proyecto/planes de proyectos que tienen en referencia a los temas  (registrado por Evelyn Rodriguez)",
     "sispla_id": "23"
    },
    {
     "id": "d24",
     "nodoId": "py5",
     "nombre": "ARV-2025-003 INTEROPERABILIDAD - MIDA",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-01-31",
     "origen": "AIG",
     "detalle": "El MIDA solicita poder accede al BUS de interoperabilidad para consumier ciertos servicios · https://aigpanama.sharepoint.com/:b:/r/sites/PowerBI/Documentos%20compartidos/General/09%20BUS%20DE%20SERVICIO/ZATO/05%20Proyectos/22%20MIDA/20250130%20-%20Acta%20de%20reuni%C3%B3n%20Interoperabilidad%20-%20MIDA.pdf?csf=1&web=1&e=rPWi5S\\n (registrado por Evelyn Rodriguez)",
     "sispla_id": "24"
    },
    {
     "id": "d25",
     "nodoId": "py14",
     "nombre": "ARV-2025-004 Digitalización y Requerimientos",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-02-11",
     "origen": "ANTAI",
     "detalle": "Levantamiento de los requerimientos para la Digitalización de Documentos. Al final se tocaron puntos de Arquitectura e Infraestructura, Interoperabilidad y acuerdos. · 003 Coordinacion\\\\004 Documentos\\\\008 Reuniones (registrado por Lidia Ibeth Serrano Quiroz)",
     "sispla_id": "25"
    },
    {
     "id": "d26",
     "nodoId": "py14",
     "nombre": "ARV-2025-005 Consumir Servicios de TE por el Bus de Interoperabilidad",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-02-11",
     "origen": "INEC",
     "detalle": "Proyecto de INEC para consumir Servicios del Tribunal Electoral por medio del Bus de Interoperabilidad. · 003 Coordinacion\\\\004 Documentos\\\\008 Reuniones (registrado por Lidia Ibeth Serrano Quiroz)",
     "sispla_id": "26"
    },
    {
     "id": "d27",
     "nodoId": "py17",
     "nombre": "ARV-2025-006 Reunión SNM-AIG Digitalizació - Interoperabilidad",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-02-26",
     "origen": "SNM",
     "detalle": "Reunión presencial en el SNM para tomar posible información que se pueda alojar en el Bus de Interoperabilidad y otros requerimientos del SNM para digitalizar tramites · https://aigpanama.sharepoint.com/:f:/r/sites/PowerBI/Documentos%20compartidos/General/09%20BUS%20DE%20SERVICIO/ZATO/05%20Proyectos/16%20SNM/ACTAS?csf=1&web=1&e=PNqDVR\\n (registrado por Lidia Ibeth Serrano Quiroz)",
     "sispla_id": "27"
    },
    {
     "id": "d28",
     "nodoId": "py17",
     "nombre": "ARV-2025-007 Reunión ATP- AIG Interoperabilidad y otros requerimientos",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-02-28",
     "origen": "ATP",
     "detalle": "Reunión presencial en ATP, para tomar posible información que se pueda alojar en el Bus de Interoperabilidad y otros requerimientos de la ATP para digitalizar formularios de exámen · https://aigpanama.sharepoint.com/:f:/r/sites/PowerBI/Documentos%20compartidos/General/09%20BUS%20DE%20SERVICIO/ZATO/05%20Proyectos/24%20ATP/ACTAS?csf=1&web=1&e=v2YZO7 (registrado por Lidia Ibeth Serrano Quiroz)",
     "sispla_id": "28"
    },
    {
     "id": "d29",
     "nodoId": "py17",
     "nombre": "ARV-2025-008 ATP- AIG Interoperabilidad y otros requerimientos",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-02-28",
     "origen": "ATP",
     "detalle": "Reunión presencial en ATP, para tomar posible información que se pueda alojar en el Bus de Interoperabilidad y otros requerimientos de la ATP para digitalizar formularios de exámen · https://aigpanama.sharepoint.com/:f:/r/sites/PowerBI/Documentos%20compartidos/General/09%20BUS%20DE%20SERVICIO/ZATO/05%20Proyectos/24%20ATP/ACTAS?csf=1&web=1&e=fbB2A8 (registrado por Lidia Ibeth Serrano Quiroz)",
     "sispla_id": "29"
    },
    {
     "id": "d30",
     "nodoId": "py5",
     "nombre": "ARV-2025-009 ANTAI - Digitalización de Documentos",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-03-20",
     "origen": "AIG",
     "detalle": "Reunión para revisar el tema en particular de la Digitalización de Documentos, en especial las Declaraciones Juradas\\nPor parte de ANTAI: Ing. Ronald Villalaz – Director de Informática / Licdo. Joel Ortiz de la Dirección de Conflicto de Intereses.\\nPor parte de AIG: Evelyn Rodriguez / Alfredo Peterson (registrado por Evelyn Rodriguez)",
     "sispla_id": "30"
    },
    {
     "id": "d31",
     "nodoId": "py5",
     "nombre": "N-2025-001 AIG-DCI-JG-N-No.1-2025",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-06-06",
     "origen": "AIG",
     "detalle": "Correspondencia saliente dirigida a SEÑORES AUDITORES DE LA CONTRALORÍA GENERAL DE LA REPÚBLICA en respuesta a la SOLICITUD DE INFORMACIÓN INTERNA NÚM.17-2025 · Ubicacion: Teams: Ciencias de información - General\\\\07 AuditoriasCasosSolicitudes\\\\001 Contraloria\\\\ContratoNo172020 (registrado por Evelyn Rodriguez)",
     "sispla_id": "31"
    },
    {
     "id": "d32",
     "nodoId": "py5",
     "nombre": "N-2025-002 AIG-DCI-JG-N-No.2-2025",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-06-17",
     "origen": "AIG",
     "detalle": "Segunda nota de respuesta a SDI de la Contraloria\\nCorrespondencia saliente dirigida a SEÑORES AUDITORES DE LA CONTRALORÍA GENERAL DE LA REPÚBLICA en respuesta a la SOLICITUD DE INFORMACIÓN INTERNA NÚM.17-2025 · Ubicacion: Teams: Ciencias de información - General\\\\07 AuditoriasCasosSolicitudes\\\\001 Contraloria\\\\ContratoNo172020\\t\\n (registrado por Evelyn Rodriguez)",
     "sispla_id": "32"
    },
    {
     "id": "d33",
     "nodoId": "py31",
     "nombre": "N-2025-003 Respuesta a Consultas de la CGR y Fiscalia",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-07-15",
     "origen": "AIG",
     "detalle": "a · a (registrado por Javier Garrido)",
     "sispla_id": "33"
    },
    {
     "id": "d34",
     "nodoId": "py31",
     "nombre": "MEMO-2025-001 JAVIER GARRIDO",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-07-16",
     "origen": "AIG",
     "detalle": "Memorando de respuesta · AIG-DCI-JG-M-No.001-2025 (registrado por Javier Garrido)",
     "sispla_id": "34"
    },
    {
     "id": "d35",
     "nodoId": "py5",
     "nombre": "MEMO-2025-002 AIG-DCI-JG-M-No.002-2025",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-08-06",
     "origen": "AIG",
     "detalle": "Para: ZULMA GONZALEZ\\nJUSTIFICACIÓN PARA EL CENA - PROYECTO SERVICIO DE ATENCIÓN CIUDADANA CON INTELIGENCIA ARTIFICIAL (IA), A TRAVÉS DE LA LÍNEA 3-1-1 Y CANALES DIGITALES · teams - Ciencias de información - Documentos\\\\General\\\\03 ProyectosActividades\\\\44 0185-IAEnElSGC\\\\001 Planificacion\\\\12 CENA (registrado por Evelyn Rodriguez)",
     "sispla_id": "35"
    },
    {
     "id": "d36",
     "nodoId": "py31",
     "nombre": "MEMO-2025-003 Proceso Administrativo",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-08-06",
     "origen": "AIG",
     "detalle": "Proceso Disciplinario · Pc\\\\003 Coordinacion\\\\004 Documentos\\\\001 FormulariosAdministrativos\\\\ProcesosDisciplinarios (registrado por Javier Garrido)",
     "sispla_id": "36"
    },
    {
     "id": "d37",
     "nodoId": "py31",
     "nombre": "N-2025-004 Centro de Contacto",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-08-22",
     "origen": "AIG",
     "detalle": "Aclaración de la Contratación del Servicio de Centro de Contacto · \\\\Centro de Atención Ciudadana 311 - Documentos\\\\General\\\\01 Proyectos\\\\0187-CentroContacto202509-12\\\\001 Planificacion\\\\08 AclaracionDelServicio (registrado por Javier Garrido)",
     "sispla_id": "37"
    },
    {
     "id": "d38",
     "nodoId": "py31",
     "nombre": "N-2025-005 RespuestaNota0262025",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-08-25",
     "origen": "ATTT",
     "detalle": "en atención a la Nota No. 026 del año 2025, mediante la cual presenta varias consultas orientadas a optimizar los procesos de atención y ampliar su alcance. Agradecemos su interés y preocupación por mejorar la gestión enfocada en el ciudadano. · Ciencias de información - General\\\\02 Gestion\\\\07 Documentos\\\\01 Notas (registrado por Javier Garrido)",
     "sispla_id": "38"
    },
    {
     "id": "d39",
     "nodoId": "py31",
     "nombre": "MEMO-2025-004 Gira Viatico",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-09-02",
     "origen": "AIG",
     "detalle": "Visto Bueno para viáticos para los Asesores de Calidad y la giras a los municipios. · D:\\\\Pc\\\\003 Coordinacion\\\\004 Documentos\\\\001 FormulariosAdministrativos\\\\Memos (registrado por Javier Garrido)",
     "sispla_id": "39"
    },
    {
     "id": "d40",
     "nodoId": "py31",
     "nombre": "MEMO-2025-005 Macast",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-09-29",
     "origen": "AIG",
     "detalle": "Respuesta a preguntas relacionadas a la carpetilla 2023000, en donde el despacho superior solicita que las Direcciones de Ciencias de la Información, Transformación Digital y Arquitectura respondan las preguntas al documento de la empresa de abogados MACAST. · Respuestas a consultas realizadas por MACAST & CO, Abogados (registrado por Javier Garrido)",
     "sispla_id": "40"
    },
    {
     "id": "d41",
     "nodoId": "py31",
     "nombre": "N-2025-006 Oficio No.3078-2025-MP-CB 311",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-10-03",
     "origen": "AIG",
     "detalle": "Solicitan interponga sus buenos oficios, a fin de que indique  a la mayor brevedad posible si el vehículo marca KIA , modelo PIcanto, con placa No.EF2005, mantiene algún reporte en el cual se haya gestionado ha solicitud de un patio de grúas en el mes de septiembre hasta el mes de diciembre de 2024... · Luego de la búsqueda realizada en Respond, con las generales del vehículo mencionadas en el Oficio No.3078-2025-MP-CB, principalmente el número de placa EF2005, puedo mencionar que no existe registro de remoción a través del 3-1-1.  Respuesta de Degnis García. (registrado por Javier Garrido)",
     "sispla_id": "41"
    },
    {
     "id": "d42",
     "nodoId": "py31",
     "nombre": "MEMO-2025-006 Macast-02",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-11-12",
     "origen": "AIG",
     "detalle": " Ciencias de la Información, Transformación Digital y OIRH respondan las preguntas al documento de la empresa de abogados MACAST.\\tRespuestas a consultas realizadas por MACAST & CO, Abogados · 003 Coordinacion\\\\018 AuditoriasCasosSolicitudes\\\\006 Abogados (registrado por Javier Garrido)",
     "sispla_id": "42"
    },
    {
     "id": "d43",
     "nodoId": "py5",
     "nombre": "ARV-2025-010 20241118 - ENSA / AIG - Primeros pasos para planificaciones futuras",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-11-18",
     "origen": "AIG",
     "detalle": "Crear un espacio de diálogo y colaboración entre nuestras respectivas entidades que permita sentar las bases para un trabajo conjunto de alto impacto, en beneficio de la eficiencia institucional y de la ciudadanía a la que servimos, para la construcción de futuros planes de focalización de subsidios gubernamentales. (registrado por Evelyn Rodriguez)",
     "sispla_id": "43"
    },
    {
     "id": "d44",
     "nodoId": "py31",
     "nombre": "MEMO-2025-008 Oficio No.21016",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-12-15",
     "origen": "AIG",
     "detalle": "información  obtenida del Sistema Cedulad según la base de datos entregada por C&W.\\ncédula: E-8-139698.   OFICIO No.21016. /AG. Ministerio Público\\n · 003 Coordinacion\\\\018 AuditoriasCasosSolicitudes\\\\002 Fiscalias (registrado por Javier Garrido)",
     "sispla_id": "44"
    },
    {
     "id": "d45",
     "nodoId": "py31",
     "nombre": "MEMO-2025-009 SPA No3884-25",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-12-15",
     "origen": "AIG",
     "detalle": "En atención a la solicitud realizada por la Oficina de Asesoría Legal, emitir respuesta en forma Memo, a la Dirección de Ciencias de la Información, relacionado al Oficio Oficio SPA No3884-25 · 003 Coordinacion\\\\018 AuditoriasCasosSolicitudes\\\\002 Fiscalias (registrado por Javier Garrido)",
     "sispla_id": "45"
    },
    {
     "id": "d46",
     "nodoId": "py32",
     "nombre": "N-2025-007 Oficio No. DRP-AR-3142-25",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2025-12-16",
     "origen": "AIG",
     "detalle": "La solicitud obedece a la necesidad de contar con informaciónque contribuya al adecuado desarrollo de las investigaciones disciplinarisa que actual,ente se tramitan en esta Direcciónde Fiscalización. · desean saber si algunas de las siguientes unidades policiales realizó comunicación con el centro de Atención Ciudadana (311) con el fin de solicitar un servicio de Grúa (registrado por Lidia Ibeth Serrano Quiroz)",
     "sispla_id": "46"
    },
    {
     "id": "d47",
     "nodoId": "py31",
     "nombre": "N-2026-001 Denuncia por SEA-DELI PANAMA, S.A.",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-01-02",
     "origen": "AIG",
     "detalle": "Nota dirigida al Centro de Atención Ciudadana (311) en referencia a una Denuncia por tráfico ilegal de langostinos hacia Costa Rica y solicitud de intervención inmediata (registrado por Javier Garrido)",
     "sispla_id": "47"
    },
    {
     "id": "d48",
     "nodoId": "py31",
     "nombre": "MEMO-2026-001 JustificacionSimpleProrroga311",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-02-06",
     "origen": "AIG",
     "detalle": "Memo para solicitar Solicitud de Prorroga para los meses de enero a abril del 2026, para el centro de contacto gubernamental 3-1-1. mientras sale la licitación pública del nuevo centro de contacto gubernamental. · \\\\Centro de Atención Ciudadana 311 - Documentos\\\\General\\\\01 Proyectos\\\\0195-CentroContacto202601-04\\\\001 Planificacion\\\\02 SolicitudProrroga (registrado por Javier Garrido)",
     "sispla_id": "48"
    },
    {
     "id": "d49",
     "nodoId": "py5",
     "nombre": "ARV-2026-001 20260212 - Acta de reunión  - MOP/AIG - Servicio de JTIA",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-02-12",
     "origen": "AIG",
     "detalle": "Revisión de inconsistencias en el Servicio de JTIA · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "49"
    },
    {
     "id": "d50",
     "nodoId": "py5",
     "nombre": "ARV-2026-002 MIVIOT - Reunión de prueba de conexion a la BD",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-03-04",
     "origen": "AIG",
     "detalle": "Probar conexión a la BD para el trabajo de PROYECTO EFI · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "50"
    },
    {
     "id": "d51",
     "nodoId": "py31",
     "nombre": "MEMO-2026-002 Gira Viatico 311",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-03-05",
     "origen": "AIG",
     "detalle": "Se requiere el Visto Bueno del Señor Administrador para el personal que estará involucrado en la misión oficial antes mencionada.\\nPor este medio se solicita la autorización de viáticos para el personal del 311 que participará en la Gira Nacional para el 311 En tu Entidad y el 311 En Tu Comunidad, contando con la participación del personal detallado a continuación.\\n · AIG\\\\Ciencias de información - General\\\\01 Administrativo\\\\03 Giras (registrado por Javier Garrido)",
     "sispla_id": "51"
    },
    {
     "id": "d52",
     "nodoId": "py31",
     "nombre": "N-2026-002 311 MP",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-03-10",
     "origen": "AIG",
     "detalle": "Ministerio Público, Sección Cuarta de delitos contra el patrimonio económico, Fiscalía Metro Polítana. Resolución 27. 21/01/2026 · 003 Coordinacion\\\\018 AuditoriasCasosSolicitudes\\\\002 Fiscalias (registrado por Javier Garrido)",
     "sispla_id": "52"
    },
    {
     "id": "d53",
     "nodoId": "py5",
     "nombre": "MEMO-2026-003 Solicitud de Aprobación para publicar SDI - Interoperabilidad",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-03-20",
     "origen": "AIG",
     "detalle": "Solicitud de Aprobación para publicación de Solicitud De Información.\\nproyecto “Contratación de una Firma Consultora Especializada para el Diseño del Marco Nacional de Interoperabilidad”. · AIG\\\\Ciencias de información - General/03 ProyectosActividades/37 0154-EstrategiaNacionalInteroperabilidad/001 Planificación/01 TDR/03 SDI (registrado por Evelyn Rodriguez)",
     "sispla_id": "53"
    },
    {
     "id": "d54",
     "nodoId": "py5",
     "nombre": "ARV-2026-003 Metodología para manejo de actualización de la base de conocimiento",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-03-20",
     "origen": "AIG",
     "detalle": "Documento que establece los procedimientos de actualizacion de la Base de Datos de Conocimiento y  las notificaciones de manejo de casos del Asistente Virtual con algún error · Ciencias de Información/General/03 ProyectosAtividades/44 0185-IAEnElSGC/002 Ejecución (registrado por Evelyn Rodriguez)",
     "sispla_id": "54"
    },
    {
     "id": "d55",
     "nodoId": "py5",
     "nombre": "MEMO-2026-004 MEMO AIG-DCI-JG-M-No.004-2026 - Simple Prorroga - SONDA",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-03-23",
     "origen": "AIG",
     "detalle": "Solicitud de Aprobación de Simple Prórroga – Contrato No. 06-2025 · AIG\\\\Ciencias de información - General/03 ProyectosActividades/38 0168-ServicioAplicacionesBBDDs/001 Planificación/2026 - Simple Prorroga (registrado por Evelyn Rodriguez)",
     "sispla_id": "55"
    },
    {
     "id": "d56",
     "nodoId": "py5",
     "nombre": "ARV-2026-004 PANAMÁ CONECTA - Consulta pública de los Avisos De Operación",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-04-08",
     "origen": "AIG",
     "detalle": "Reunión para evaluar la implementación de una consulta pública de avisos de operación en Panamá Conecta, con el fin de facilitar el acceso a información por parte de instituciones sin solicitudes manuales · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "56"
    },
    {
     "id": "d57",
     "nodoId": "py5",
     "nombre": "ARV-2026-005 PROCURADURIA / AIG - Intercambio de datos del SPA (Sistema Penal Acusatorio)",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-04-27",
     "origen": "AIG",
     "detalle": "Reunión de coordinación para revisar la solicitud de interoperabilidad entre la Procuraduría General de la Nación y la AIG, relacionada con el acceso a información del Sistema Penal Acusatorio (SPA), buscando una solución que permita la consulta de datos sin afectar producción. · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "57"
    },
    {
     "id": "d58",
     "nodoId": "py5",
     "nombre": "ARV-2026-006 MITRADEL / AIG - Información de Contratos Digitales mediante API",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-04-28",
     "origen": "AIG",
     "detalle": "Reunión para revisar la solicitud de MITRADEL sobre el consumo de información de contratos digitales desde Panamá Conecta mediante API, con el fin de consolidar contratos presenciales y digitales en un solo sistema. · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "58"
    },
    {
     "id": "d59",
     "nodoId": "py5",
     "nombre": "ARV-2026-007 EDUPAN _ AIG - Reunión de Revisión de Reportes",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-05-06",
     "origen": "AIG",
     "detalle": "Reunión de seguimiento entre AIG y EDUPAN para revisar el estado de los informes pendientes del proyecto, validar el modelo de reportes solicitado por AIG y establecer un cronograma de regularización y entrega de informes mensuales. · TEAMS - Ciencias de Información/General/03ProyectosActividades/44 0185-IAEnElSGC/Ejecucion/Reuniones de preparacion y prerequisitos (registrado por Evelyn Rodriguez)",
     "sispla_id": "59"
    },
    {
     "id": "d60",
     "nodoId": "py5",
     "nombre": "ARV-2026-008 AIG / OJ - SPA / Ministerio Público - Reunión técnica – Intercambio de datos SPA",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-05-13",
     "origen": "AIG",
     "detalle": "Reunión técnica de seguimiento para evaluar alternativas de interoperabilidad y acceso a información del Sistema Penal Acusatorio (SPA), considerando restricciones técnicas, seguridad, infraestructura y viabilidad legal. · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "60"
    },
    {
     "id": "d61",
     "nodoId": "py5",
     "nombre": "ARV-2026-009 Revision de  los desarrollos y avances de los proyectos",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-05-15",
     "origen": "AIG",
     "detalle": "Reunión de seguimiento para revisar el avance de los proyectos desarrollados por el equipo contratado por la VITRINA del BID, validar el estado de tareas ejecutadas, revisar ambientes QA y producción, e identificar mejoras para el control y seguimiento de proyectos tecnológicos. · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "61"
    },
    {
     "id": "d62",
     "nodoId": "py5",
     "nombre": "ARV-2026-010 Implementación del trámite de Solicitud de Carta de Naturalización dentro de Panamá Conecta",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-05-19",
     "origen": "AIG",
     "detalle": "Reunión de coordinación técnica entre la AIG y el Servicio Nacional de Migración (SNM) para revisar los requerimientos funcionales y técnicos relacionados con la implementación del trámite de Solicitud de Carta de Naturalización dentro de Panamá Conecta. Durante la sesión se discutió la necesidad de crear un nuevo servicio web para interoperabilidad con el sistema RUEX, debido a que el servicio existente ya se encuentra siendo utilizado por otros sistemas institucionales. Asimismo, se validaron parámetros de entrada y salida requeridos para agilizar el proceso de registro y minimizar la cantidad de información ingresada manualmente por los solicitantes. (registrado por Evelyn Rodriguez)",
     "sispla_id": "62"
    },
    {
     "id": "d63",
     "nodoId": "py5",
     "nombre": "ARV-2026-011 SNM/AIG -Implementación del trámite de Solicitud de Carta de Naturalización dentro de Panamá Conecta",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-05-19",
     "origen": "AIG",
     "detalle": "Reunión de coordinación técnica entre la AIG y el Servicio Nacional de Migración (SNM) para revisar los requerimientos funcionales y técnicos relacionados con la implementación del trámite de Solicitud de Carta de Naturalización dentro de Panamá Conecta. Durante la sesión se discutió la necesidad de crear un nuevo servicio web para interoperabilidad con el sistema RUEX, debido a que el servicio existente ya se encuentra siendo utilizado por otros sistemas institucionales. Asimismo, se validaron parámetros de entrada y salida requeridos para agilizar el proceso de registro y minimizar la cantidad de información ingresada manualmente por los solicitantes. · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "63"
    },
    {
     "id": "d64",
     "nodoId": "py31",
     "nombre": "N-2026-003 Justicación Adenda",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-05-19",
     "origen": "AIG",
     "detalle": "Justificación de Adenda 1, para el contrato No 06-25 - Servicio de Soporte y Mantenimiento de Aplicaciones y Base de Datos. · Ciencias de información - General\\\\03 ProyectosActividades\\\\38 0199-ServicioAplicacionesBBDDs\\\\0168-ConsultoriaAplicaciones 2025\\\\001 Planificacion\\\\Adendas (registrado por Javier Garrido)",
     "sispla_id": "64"
    },
    {
     "id": "d65",
     "nodoId": "py5",
     "nombre": "ARV-2026-012 Integración JC Betania en el BUS de AIG",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-05-21",
     "origen": "AIG",
     "detalle": "Reunión de coordinación técnica entre la AIG, la Junta Comunal de Betania e Innovation Lab para revisar las posibilidades de integración del sistema ZENTRUM/ERP y CRM 311 de la Junta Comunal de Betania con el BUS de Interoperabilidad Gubernamental de la AIG. Durante la sesión se conversó sobre el interés de consumir servicios disponibles para validación de información ciudadana, empresarial, paz y salvo y otros datos institucionales; así como sobre la posible integración con el Sistema de Gestión de Casos del 3-1-1 para evitar duplicidades y facilitar el intercambio de información sobre reportes ciudadanos. También se explicaron los pasos técnicos y formales requeridos para el consumo de servicios a través del BUS. · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "65"
    },
    {
     "id": "d66",
     "nodoId": "py5",
     "nombre": "ARV-2026-013 Acta SecENERGIA/AIG Articulacion Portal SIE Datos Abiertos",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-05-25",
     "origen": "AIG",
     "detalle": "Se requiere la coordinación entre la AIG y la Secretaría Nacional de Energía (SNE) para revisar los requerimientos relacionados con la posible articulación entre el Portal del Sistema de Información Energética (SIE) y el Portal de Datos Abiertos. · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "66"
    },
    {
     "id": "d67",
     "nodoId": "py5",
     "nombre": "ARV-2026-014 SecENERGIA/AIG - Articulacion Portal SIE a Datos Abiertos",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-05-25",
     "origen": "AIG",
     "detalle": "Coordinación entre la AIG y la Secretaría Nacional de Energía (SNE) para revisar los requerimientos relacionados con la posible articulación entre el Portal del Sistema de Información Energética (SIE) y el Portal de Datos Abiertos.  · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "67"
    },
    {
     "id": "d68",
     "nodoId": "py5",
     "nombre": "ARV-2026-015 PNUD  AIG - proyecto regional SIGOB proximos pasos",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-05-28",
     "origen": "AIG",
     "detalle": "Reunión de coordinación entre la AIG y el Programa de las Naciones Unidas para el Desarrollo (PNUD), con el propósito de revisar el alcance del proyecto regional SIGOB y definir próximos pasos de articulación técnica. · Teams/Ciencia de información/03 ProyectosActividades/23 PNUD - SIGOB TRANSDOC/20260527 - Presentación del Proyecto SIGOB TRANSDOC (registrado por Evelyn Rodriguez)",
     "sispla_id": "68"
    },
    {
     "id": "d69",
     "nodoId": "py31",
     "nombre": "MEMO-2026-005 AgustinOrtiz",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-06-01",
     "origen": "AIG",
     "detalle": "Respuesta a Nota enviada por el abogado Agustín Ortiz, referente a la carpetilla No 202200073179A. Investigación en la Fiscalía Superior Especialidad en Delitos de Propiedad Intelectual · Pc\\\\003 Coordinacion\\\\018 AuditoriasCasosSolicitudes\\\\006 Abogados\\\\AgustinOrtiz (registrado por Javier Garrido)",
     "sispla_id": "69"
    },
    {
     "id": "d70",
     "nodoId": "py5",
     "nombre": "ARV-2026-016 EDUPAN _ AIG - Acta Informes Mensuales Pasos a Seguir",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-06-09",
     "origen": "AIG",
     "detalle": "Revisar los informes mensuales del servicio, y luego de realizar algunas pruebas en el ambiente de desarrollo se coordinó reunión para definir los pasos a seguir y fortalecer el control de calidad del asistente virtual. Conversar sobre la necesidad de afinar el comportamiento del Asistente Virtual, documentar inconsistencias detectadas en pruebas, revisar la correcta creación y categorización de casos, y establecer una metodología de pruebas que permita identificar incidentes, aplicar correcciones y validar resultados antes de su paso a producción. · TEAMS - Ciencias de Información/General/03ProyectosActividades/44 0185-IAEnElSGC/Ejecucion/Reuniones de preparacion y prerequisitos (registrado por Evelyn Rodriguez)",
     "sispla_id": "70"
    },
    {
     "id": "d71",
     "nodoId": "py5",
     "nombre": "ARV-2026-017 Articulación Portal SIE y Datos Abiertos - Reunion de seguimiento",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-06-09",
     "origen": "AIG",
     "detalle": "Reunión de seguimiento a la primera reunión entre la AIG y la Secretaría Nacional de Energía (SNE) para continuar la articulación relacionada con la publicación de información del sector energético en el Portal de Datos Abiertos. En esta segunda reunión se integra el Ing. Rolando Becerra, experto y administrador del sitio web www.datosabiertos.gob.pa y quien explicará todo lo relacionado con el portal y el concepto de datos abiertos. (registrado por Evelyn Rodriguez)",
     "sispla_id": "71"
    },
    {
     "id": "d72",
     "nodoId": "py20",
     "nombre": "N-2026-004 GobiernoAbierto",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-06-11",
     "origen": "ANTAI",
     "detalle": "Modernizar y asegurar la plataforma web Gobierno Abierto mediante la actualización de componentes tecnológicos, la revisión de seguridad, la transferencia de conocimiento y control administrativo a personal institucional, así como la implementación de buenas prácticas para la gestión futura del sitio. · \\\\Ciencias de información - General\\\\03 ProyectosActividades\\\\48 0194-VitrinaDeRecursos\\\\002 Ejecución\\\\ActaInstitucion (registrado por Paulo Rodriguez)",
     "sispla_id": "72"
    },
    {
     "id": "d73",
     "nodoId": "py31",
     "nombre": "MEMO-2026-003 Oficio 15132016 311",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-06-26",
     "origen": "OJ",
     "detalle": "Copia autenticada de la certificación del caso No. 278182, relacionado a un remolque de vehículo. Supuesto delito contra el Patrimonio Económico, en la modalidad de apropiación indebida. Oficio No 1513-2026/RC/CHA. Carpetilla No. 202500100229. 12 de mayo de 2026. Ministerio Público, Fiscalía Metropolitana, Sección Cuarta del Delito contra el Patrimonio Económico. · Pc\\\\003 Coordinacion\\\\018 AuditoriasCasosSolicitudes\\\\003 Ciudadana (registrado por Javier Garrido)",
     "sispla_id": "73"
    },
    {
     "id": "d74",
     "nodoId": "py5",
     "nombre": "ARV-2026-018 Revisión de casos de QA",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-06-26",
     "origen": "AIG",
     "detalle": "Reunión de seguimiento entre la AIG y EDUPAN para revisar casos de QA, requerimientos pendientes e informes mensuales del proyecto.  (registrado por Evelyn Rodriguez)",
     "sispla_id": "74"
    },
    {
     "id": "d75",
     "nodoId": "py5",
     "nombre": "ARV-2026-019 Implementación de IA para asistir al Ciudadanos en la creación de casos",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-06-29",
     "origen": "AIG",
     "detalle": "Se quiere revisar las alternativas orientadas a fortalecer la implementación de inteligencia artificial en los canales de atención, particularmente en la guía o bot ciudadano al momento de realizar trámites (registrado por Evelyn Rodriguez)",
     "sispla_id": "75"
    },
    {
     "id": "d76",
     "nodoId": "py5",
     "nombre": "ARV-2026-020 Reunión técnica PNUD-AIG para revisar alternativas de integración e interoperabilidad entre Transdoc",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-07-01",
     "origen": "AIG",
     "detalle": "Durante la primera reunión sostenida el 27 de mayo, se acordó coordinar reunión técnica para revisar arquitectura, plataformas y puntos de interoperabilidad. · Teams/Ciencia de información/03 ProyectosActividades/23 PNUD - SIGOB TRANSDOC/20260630 - Primera Reunión Técnica (registrado por Evelyn Rodriguez)",
     "sispla_id": "76"
    },
    {
     "id": "d77",
     "nodoId": "py36",
     "nombre": "ARV-2026-021 Validación de flujo Avisos Cancelados MICI-AIG-MUPA",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-07-03",
     "origen": "AIG",
     "detalle": "Reunión de seguimiento técnico para validar el flujo funcional y técnico de la integración entre el MICI y el Municipio de Panamá mediante el BUS de Interoperabilidad de la AIG. Se confirmó que la comunicación opera desde el MICI hacia el MUPA utilizando los servicios expuestos por este último a través del BUS, verificándose el funcionamiento de las notificaciones de apertura y cierre de avisos de operación y acordándose documentar formalmente el cierre de la integración. (registrado por Lidia Ibeth Serrano Quiroz)",
     "sispla_id": "77"
    },
    {
     "id": "d78",
     "nodoId": "py5",
     "nombre": "ARV-2026-022 Integraciones de la Alcaldía de Panamá (MUPA) al Bus de Interoperabilidad Gubernamental (BIG)",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-07-03",
     "origen": "AIG",
     "detalle": "El Ing. Josue Obando, Director de Tecnología del MUPA mediante correo electrónico solicita reunión con la AIG para revisar todos los requisitos para interactuar a través del Bus de Interoperabilidad Gubernamental (BIG) de la AIG, con varias entidades a fin de mejorar sus procesos y trámites con los contribuyentes.\\nLa reunión tiene como finalidad identificar los servicios de datos que MUPA requiere consumir, revisar la disponibilidad de servicios existentes dentro del BIG y definir el camino de trabajo para documentar, priorizar y formalizar las integraciones requeridas.\\n · Teams/Analitica deDatos/09 Interoperqabilidad/08 2026 - Reuniones - Integraciones_Entidades/01 MUPA (registrado por Evelyn Rodriguez)",
     "sispla_id": "78"
    },
    {
     "id": "d79",
     "nodoId": "py36",
     "nombre": "ARV-2026-023 Requerimientos de Integración del Municipio de Colón",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-07-10",
     "origen": "AIG",
     "detalle": "En atención a la Nota No. 205-EPK-TES, remitida por Tesorería del Municipio de Colón al Despacho Superior de la AIG, la cual fue posteriormente canalizada a la Dirección de Ciencias de la Información para su evaluación y atención, se coordinó una reunión de trabajo con el propósito de aclarar el requerimiento presentado por el Municipio.\\nDurante la reunión se analizaron los aspectos funcionales y técnicos relacionados con la integración del Municipio de Colón al Bus de Interoperabilidad Gubernamental de la AIG, evaluando las alternativas disponibles para facilitar el acceso a la información de los Avisos de Operación administrados por el Ministerio de Comercio e Industrias (MICI). El objetivo es que la Tesorería Municipal pueda consultar oportunamente las aperturas y cierres de Avisos de Operación, fortaleciendo los procesos de fiscalización y recaudación municipal mediante el intercambio seguro de información entre instituciones del Estado.\\n · Necesidad del Municipio de consultar aperturas y cierres de avisos de operación del MICI.\\nUso del Bus de Interoperabilidad como mecanismo de intercambio de información.\\nExplicación de servicios web, credenciales y fichas técnicas.\\nAlternativas: desarrollo de interfaz propia del municipio de Colón (Sistema STAB en desarrollo) para que luego se integren en el Bus de Interoperabilidad o implementación mediante Panamá Conecta.\\nNecesidad de definir los datos requeridos y validar aspectos legales sobre uso de la información\\n (registrado por Lidia Ibeth Serrano Quiroz)",
     "sispla_id": "79"
    },
    {
     "id": "d80",
     "nodoId": "py5",
     "nombre": "ARV-2026-024 Tesorería/AIG - Reunión de evaluación técnica para validar requerimientos de interoperabilidad",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-07-10",
     "origen": "AIG",
     "detalle": "La Dirección General de Tesorería solicitó una reunión técnica con la AIG para revisar las posibles interoperabilidades requeridas en el marco de un proyecto orientado a que los acreedores/proveedores se registren en una plataforma institucional.  Según lo expuesto, la plataforma busca permitir que el acreedor cuente con usuario y contraseña para acceder a un portal donde, si es nuevo, pueda solicitar un código de acreedor al sistema ISA o al sistema contable correspondiente; o, si ya cuenta con código de proveedor, pueda realizar modificaciones a su información.   · C:\\\\Users\\\\evrodriguez\\\\OneDrive - Autoridad Nacional para la Innovación Gubernamental\\\\AIG\\\\Minutas de Reuniones (registrado por Evelyn Rodriguez)",
     "sispla_id": "80"
    },
    {
     "id": "d81",
     "nodoId": "py5",
     "nombre": "ARV-2026-025 EDUPAN/AIG Integración de IA con PanamaConecta para trámites",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-07-15",
     "origen": "AIG",
     "detalle": "La reunión fue convocada a partir de una sugerencia del Ing. Javier Garrido, con el propósito de revisar de qué manera se puede aprovechar la base de conocimiento de la gestión de casos y de Panamá Conecta para fortalecer el asistente virtual mediante inteligencia artificial.  · TEAMS - Ciencias de Información/General/03ProyectosActividades/44 0185-IAEnElSGC/Ejecucion/Reuniones de preparacion y prerequisitos (registrado por Evelyn Rodriguez)",
     "sispla_id": "81"
    },
    {
     "id": "d82",
     "nodoId": "py20",
     "nombre": "N-2026-005 Academia de Ética y Transparencia para Servidores Públicos",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-07-20",
     "origen": "ANTAI",
     "detalle": "Modernizar y asegurar la plataforma web academia.antai.gob.pa de acuerdo nuevos requerimientos, actualización de componentes tecnológicos, la revisión de seguridad, la transferencia de conocimiento y control administrativo a personal institucional, así como la implementación de buenas prácticas para la gestión futura del sitio. · \\\\Ciencias de información - General\\\\03 ProyectosActividades\\\\48 0194-VitrinaDeRecursos\\\\002 Ejecución\\\\ActaInstitucion (registrado por Paulo Rodriguez)",
     "sispla_id": "82"
    },
    {
     "id": "d83",
     "nodoId": "py31",
     "nombre": "MEMO-2026-007 Oficio1840-2026 RC CHA 311",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-07-22",
     "origen": "AIG",
     "detalle": "Certificación del reporte No. 22502725, relacionado a un remolque de vehículo. Lo anterior se requiere dentro de la investigación que adelanta el Ministerio Público, por el supuesto Delito Contra El Patrimonio Económico, en la modalidad de Apropiación Indebida. Licda Chamelis Araúz CH. Fiscal Adjunta de la Fiscalía Metropolitana, Sección Cuarta de Delitos Contra el Patrimonio Económico. Con fecha 17 de junio de 2026, fecha de ingreso a AIG el 25/06/26, remitida respuesta a la Oficina de Asesoría Legal de la AIG el 29 de junio y a solicitud de la Secretaría del Despacho Superior se esta haciendo un memo como respuesta, bajo un proceso que no está tipificado. · Pc\\\\003 Coordinacion\\\\018 AuditoriasCasosSolicitudes\\\\003 Ciudadana (registrado por Javier Garrido)",
     "sispla_id": "83"
    },
    {
     "id": "d84",
     "nodoId": "py31",
     "nombre": "N-2026-006 Oficio NoFGC-DS-SIEPP-2432-2026",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-07-24",
     "origen": "AIG",
     "detalle": "Respuesta a Oficio NoFGC-DS-SIEPP-2432-2026, de la Fiscalía General de Cuentas · 003 Coordinacion\\\\018 AuditoriasCasosSolicitudes\\\\002 Fiscalias (registrado por Javier Garrido)",
     "sispla_id": "84"
    },
    {
     "id": "d85",
     "nodoId": "py5",
     "nombre": "ARV-2026-026 EDUPAN _AIG - Revisión de CASOS DE QA - 7 de agosto",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-08-07",
     "origen": "AIG",
     "detalle": "Reunión de seguimiento entre la Autoridad Nacional para la Innovación Gubernamental (AIG) y EDUPAN, realizada para revisar el estado de los casos de QA, los reportes mensuales remitidos por EDUPAN y los pendientes derivados de reuniones previas relacionadas con el Asistente Virtual del Sistema de Gestión de Casos 3-1-1, integrado a Panamá Conecta y otros canales digitales. · TEAMS - Ciencias de Información/General/03ProyectosActividades/44 0185-IAEnElSGC/Ejecucion/Reuniones de preparacion y prerequisitos (registrado por Evelyn Rodriguez)",
     "sispla_id": "85"
    },
    {
     "id": "d86",
     "nodoId": "py5",
     "nombre": "ARV-2026-027 Integraciones MUPA - Bus de Interoperabilidad AIG",
     "clase": "documento",
     "tamano": 0,
     "fecha": "2026-08-25",
     "origen": "AIG",
     "detalle": "Reunión de Seguimiento a los requerimientos de integración del Municipio de Panamá con el Bus de Interoperabilidad Gubernamental de la AIG. · Teams/Analitica deDatos/09 Interoperqabilidad/08 2026 - Reuniones - Integraciones_Entidades/01 MUPA (registrado por Evelyn Rodriguez)",
     "sispla_id": "86"
    }
   ],
   "historial": []
  },
  "version": 7,
  "modificado": 1789478688356
 }
};
