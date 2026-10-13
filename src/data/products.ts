export interface ColorVariant {
  id: string;
  nombre: string;
  hex: string;
  imagenes: string[];
}

export interface Product {
  id: string;
  nombre: string;
  categoria: "lavadoras" | "hogar" | "vehiculos" | "personalizadas";
  categoriaLabel: string;
  descripcionCorta: string;
  descripcionLarga: string;
  medidasSugeridas: string[];
  caracteristicas: string[];
  imagen: string; // Portada principal
  imagenesSecundarias?: string[]; // Galería general si no tiene variantes
  colores?: ColorVariant[];
  popular?: boolean;
  tiempoEntrega?: string;
}

export const CATEGORIES = [
  { id: "todas", label: "Todas las Soluciones" },
  { id: "lavadoras", label: "Lavadoras y Secadoras" },
  { id: "hogar", label: "Para el Hogar y Jardín" },
  { id: "vehiculos", label: "Vehículos y Motos" },
  { id: "personalizadas", label: "Fundas Personalizadas" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export const PRODUCTS: Product[] = [
  // =========================================================================
  // --- CATEGORÍA 1: LAVADORAS Y SECADORAS ---
  // =========================================================================
  {
    id: "lavadora-carga-frontal",
    nombre: "Funda para Lavadora Carga Frontal",
    categoria: "lavadoras",
    categoriaLabel: "Lavadoras y Secadoras",
    descripcionCorta:
      "Cubierta impermeable con puerta frontal con cierre para operar sin retirar la funda.",
    descripcionLarga:
      "Diseñada específicamente para lavadoras contemporáneas de carga frontal (LG, Samsung, Whirlpool, Mabe, Electrolux). Fabricada en lona impermeable de alta durabilidad con recubrimiento protector y filtro UV para evitar la decoloración y resequedad solar. Cuenta con puerta frontal con cierre que permite abrir la escotilla cómodamente.",
    medidasSugeridas: [
      "Estándar 16-18 kg (60 x 65 x 85 cm)",
      "Grande 19-22 kg (68 x 70 x 98 cm)",
      "Jumbo 23-26 kg (70 x 78 x 100 cm)",
      "A la medida exacta de tu equipo",
    ],
    caracteristicas: [
      "Material 100% impermeable",
      "Puerta frontal con cierre para operar el equipo",
      "Respaldo abierto para mangueras y ventilación",
    ],
    imagen:
      "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Plata_newD_01.webp",
    colores: [
      {
        id: "plata",
        nombre: "Plata Diamante",
        hex: "#9ca3af",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Plata_newD_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Plata_newD_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Plata_newD_03.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Plata_newch_01.webp",
        ],
      },
      {
        id: "azul-marino",
        nombre: "Azul Marino",
        hex: "#1e3a8a",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_AzulMarino_newempam_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_AzulMarino_newempam_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_AzulMarino_newempam_03-700x700.webp",
        ],
      },
      {
        id: "aqua",
        nombre: "Aqua / Turquesa",
        hex: "#06b6d4",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Aqua_newempaq_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Aqua_newempaq_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Aqua_newempaq_03.webp",
        ],
      },
      {
        id: "rojo",
        nombre: "Rojo Imperial",
        hex: "#dc2626",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Rojo_newempro_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Rojo_newempro_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Rojo_newempro_03.webp",
        ],
      },
      {
        id: "tinto",
        nombre: "Tinto Borgoña",
        hex: "#831843",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Tinto_newempt_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Tinto_newempt_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_Tinto_newempt_03.webp",
        ],
      },
    ],
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "lavadora-carga-superior",
    nombre: "Funda para Lavadora Carga Superior con Tapa Abatible",
    categoria: "lavadoras",
    categoriaLabel: "Lavadoras y Secadoras",
    descripcionCorta:
      "Tapa superior articulada con velcro para acceso rápido a controles sin retirar la funda.",
    descripcionLarga:
      "Protección integral para lavadoras de carga superior. Cuenta con una cubierta superior articulada con velcro que se levanta fácilmente para cargar prendas y dosificar detergente, manteniendo tu equipo protegido en patios o azoteas.",
    medidasSugeridas: [
      "Chica 13-15 kg (60 x 60 x 95 cm)",
      "Mediana 17-19 kg (66 x 68 x 105 cm)",
      "Grande 20-24 kg (70 x 72 x 110 cm)",
      "A la medida exacta de tu equipo",
    ],
    caracteristicas: [
      "Tapa superior plegable con velcro",
      "Tela vinílica resistente a la lluvia y humedad",
      "Fácil acceso al panel de mandos",
    ],
    imagen:
      "/assets/images/Lavadoras y Secadoras/FundaParaLavadora_Plata_m1m_02.webp",
    colores: [
      {
        id: "plata",
        nombre: "Plata Liso",
        hex: "#9ca3af",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaLavadora_Plata_m1m_02.webp",
        ],
      },
      {
        id: "plata-grabado",
        nombre: "Plata Grabado",
        hex: "#cbd5e1",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaLavadora_Platagrabado_m1memp_02-1.webp",
        ],
      },
      {
        id: "azul",
        nombre: "Azul Marino",
        hex: "#1e3a8a",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaLavadora_Azul_m1mempam_02-700x700.webp",
        ],
      },
      {
        id: "turquesa",
        nombre: "Turquesa",
        hex: "#06b6d4",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaLavadora_Turquesa_m1mempaq_02.webp",
        ],
      },
      {
        id: "rojo",
        nombre: "Rojo Imperial",
        hex: "#dc2626",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaLavadora_Rojo_m1mempr_02.webp",
        ],
      },
      {
        id: "tinto",
        nombre: "Tinto",
        hex: "#831843",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaLavadora_Tinto_m1mempt_02.webp",
        ],
      },
    ],
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "torre-lavado-centro",
    nombre: "Funda para Torre o Centro de Lavado",
    categoria: "lavadoras",
    categoriaLabel: "Lavadoras y Secadoras",
    descripcionCorta:
      "Protección vertical de doble altura para centros integrados WashTower y lavasecadoras.",
    descripcionLarga:
      "Funda premium de una sola pieza con doble panel independiente para lavadora inferior y secadora superior. Permite usar cualquiera de los dos tambores de forma autónoma. Excelente resistencia para centros de lavado ubicados en cuartos de servicio abiertos o terrazas.",
    medidasSugeridas: [
      "Torre compacta (68 x 75 x 185 cm)",
      "Torre estándar LG WashTower (70 x 77 x 189 cm)",
      "Centro Mabe / GE (72 x 80 x 195 cm)",
      "A la medida exacta de tu torre",
    ],
    caracteristicas: [
      "Doble apertura frontal independiente para cada equipo",
      "Protección contra lluvia, sol y polvo",
      "Ranura posterior para mangueras y conexiones",
    ],
    imagen:
      "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Plata_CLD_01.webp",
    colores: [
      {
        id: "plata",
        nombre: "Plata Diamante",
        hex: "#9ca3af",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Plata_CLD_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Plata_CLD_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Plata_CLD_03.webp",
        ],
      },
      {
        id: "blanco",
        nombre: "Blanco Glaciar",
        hex: "#f8fafc",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Blanco_CLBA_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Blanco_CLBA_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Blanco_CLBA_03.webp",
        ],
      },
      {
        id: "negro",
        nombre: "Negro Ónix",
        hex: "#18181b",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Negro_CLNE_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Negro_CLNE_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Negro_CLNE_03.webp",
        ],
      },
      {
        id: "grabado",
        nombre: "Grabado Premium",
        hex: "#94a3b8",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Grabado_CLEMP_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Grabado_CLEMP_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Grabado_CLEMP_03.webp",
        ],
      },
      {
        id: "azul",
        nombre: "Azul Marino",
        hex: "#1e3a8a",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Azul_CLAM.webp",
        ],
      },
      {
        id: "tinto",
        nombre: "Tinto Borgoña",
        hex: "#831843",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaCentroLavado_Tinto_CLTI.webp",
        ],
      },
    ],
    popular: true,
    tiempoEntrega: "48 hrs",
  },
  {
    id: "secadora-independiente",
    nombre: "Funda para Secadora de Ropa",
    categoria: "lavadoras",
    categoriaLabel: "Lavadoras y Secadoras",
    descripcionCorta:
      "Protección para secadoras de gas o eléctricas.",
    descripcionLarga:
      "Cubierta fabricada con ajuste anatómico para secadoras de gas o eléctricas. Protege tu equipo contra intemperie, lluvia, sol, polvo y rayaduras en cuartos de lavado o patios.",
    medidasSugeridas: [
      "Secadora Estándar 18-20 kg (68 x 72 x 102 cm)",
      "Secadora Grande 22-24 kg (74 x 78 x 110 cm)",
      "A la medida exacta de tu secadora",
    ],
    caracteristicas: [
      "Protección para secadoras de gas o eléctricas",
      "Apertura frontal ergonómica con cierre",
      "Material impermeable y de fácil limpieza",
    ],
    imagen:
      "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_Plata_smda_01.webp",
    colores: [
      {
        id: "plata",
        nombre: "Plata Diamante",
        hex: "#9ca3af",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_Plata_smda_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_Plata_smda_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_plata_smempl_01.webp",
        ],
      },
      {
        id: "aqua",
        nombre: "Aqua / Turquesa",
        hex: "#06b6d4",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_aqua_smwmaq_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_aqua_smwmaq_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_aqua_smwmaq_03.webp",
        ],
      },
      {
        id: "azul",
        nombre: "Azul Marino",
        hex: "#1e3a8a",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_Azul_smemam_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_Azul_smemam_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_Azul_smemam_03.webp",
        ],
      },
      {
        id: "rojo",
        nombre: "Rojo Imperial",
        hex: "#dc2626",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_Rojo_smemro_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_Rojo_smemro_02.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_Rojo_smemro_03.webp",
        ],
      },
      {
        id: "tinto",
        nombre: "Tinto Borgoña",
        hex: "#831843",
        imagenes: [
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_Tinto_smemti_01.webp",
          "/assets/images/Lavadoras y Secadoras/FundaParaSecadora_Tinto_smemti_02.webp",
        ],
      },
    ],
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "funda-pedestal-lavadora",
    nombre: "Funda para Lavadora con Pedestal o Base Elevada",
    categoria: "lavadoras",
    categoriaLabel: "Lavadoras y Secadoras",
    descripcionCorta:
      "Funda extendida que cubre por completo lavadoras montadas sobre pedestal o cajón elevador.",
    descripcionLarga:
      "Solución especializada con altura ampliada para proteger lavadoras que cuentan con pedestal o cajón organizador inferior. Resguarda todo el conjunto contra la humedad del suelo y la lluvia en exteriores.",
    medidasSugeridas: [
      "Altura con pedestal 130 cm (70 x 75 x 130 cm)",
      "Altura con pedestal 134 cm (72 x 80 x 134 cm)",
      "A la medida exacta de tu conjunto",
    ],
    caracteristicas: [
      "Protección continua para lavadora y cajón pedestal",
      "Apertura frontal para tambor y cajón",
      "Material impermeable resistente a la intemperie",
    ],
    imagen:
      "/assets/images/Lavadoras y Secadoras/FundaPedestal_Grabado_F130emp_01.webp",
    imagenesSecundarias: [
      "/assets/images/Lavadoras y Secadoras/FundaPedestal_Grabado_F130emp_01.webp",
      "/assets/images/Lavadoras y Secadoras/FundaPedestal_Grabado_F130emp_02.webp",
      "/assets/images/Lavadoras y Secadoras/FundaPedestal_Grabado_F130emp_03.webp",
      "/assets/images/Lavadoras y Secadoras/FundaPedestal_Grabado_F134emp_01.webp",
      "/assets/images/Lavadoras y Secadoras/FundaPedestal_Grabado_F134emp_02.webp",
      "/assets/images/Lavadoras y Secadoras/FundaPedestal_Grabado_F134emp_03.webp",
    ],
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "lavadora-2-tinas",
    nombre: "Funda para Lavadora de 2 Tinas",
    categoria: "lavadoras",
    categoriaLabel: "Lavadoras y Secadoras",
    descripcionCorta:
      "Diseño específico con doble tapa superior independiente para tina de lavado y centrifugado.",
    descripcionLarga:
      "Funda diseñada con exactitud para lavadoras semiautomáticas de doble tina (Mabe, Koblenz, Acros). Cada tina cuenta con su propia solapa abatible para trabajar sin complicaciones manteniendo el equipo protegido de salpicaduras y sol.",
    medidasSugeridas: [
      "Capacidad 11-13 kg (85 x 50 x 90 cm)",
      "Capacidad 15-18 kg (95 x 55 x 100 cm)",
      "A la medida de tu equipo",
    ],
    caracteristicas: [
      "Doble tapa superior independiente con velcro",
      "Material impermeable resistente al sol y al agua",
      "Fácil colocación y limpieza",
    ],
    imagen:
      "/assets/images/Lavadoras y Secadoras/FundaParaLavadora2tinas_2T_01.webp",
    imagenesSecundarias: [
      "/assets/images/Lavadoras y Secadoras/FundaParaLavadora2tinas_2T_01.webp",
      "/assets/images/Lavadoras y Secadoras/FundaParaLavadora2tinas_2T_02.webp",
    ],
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "lavadora-redonda",
    nombre: "Funda para Lavadora Redonda Tradicional",
    categoria: "lavadoras",
    categoriaLabel: "Lavadoras y Secadoras",
    descripcionCorta:
      "Corte circular para lavadoras tradicionales redondas.",
    descripcionLarga:
      "Corte circular para lavadoras tradicionales redondas. Confección a la medida exacta que protege el motor, la tina y el reloj temporizador contra la intemperie, lluvia y polvo.",
    medidasSugeridas: [
      "Tina 14-16 kg (Diámetro 65 cm x Alto 90 cm)",
      "Tina 18-22 kg (Diámetro 72 cm x Alto 95 cm)",
      "A la medida de tu lavadora redonda",
    ],
    caracteristicas: [
      "Corte circular para lavadoras tradicionales",
      "Tapa superior con cierre perimetral",
      "Material impermeable resistente a la intemperie",
    ],
    imagen:
      "/assets/images/Lavadoras y Secadoras/Funda para lavadora redonda tradicional.webp",
    tiempoEntrega: "24 hrs",
  },

  // =========================================================================
  // --- CATEGORÍA 2: PARA EL HOGAR Y JARDÍN (PRODUCTOS NUEVOS Y EXISTENTES) ---
  // =========================================================================
  {
    id: "funda-asador-exterior",
    nombre: "Protector Impermeable para Asador de Jardín",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Protector impermeable de gama alta calibre 6 para asadores de carbón, gas o tipo medio hexágono.",
    descripcionLarga:
      "Protege tu asador de la corrosión, grasa, cenizas, lluvia y rayos solares. Fabricado en lona impermeable de gama alta calibre 6 con costuras reforzadas e interior protector. Diseñado tanto para asadores tipo carro con alas laterales como para modelos redondos tipo kettle.",
    medidasSugeridas: [
      "Asador Carro / Medio Hexágono (1.54 m largo x 64 cm ancho x 1.29 m alto)",
      "Asador Redondo Grande Kettle (55 cm diámetro x 70 cm alto)",
      "Asador Tipo Barril (Modelo 12)",
      "Asador Eléctrico Compacto tipo Lumin (Modelo 7)",
      "A la medida exacta de tu asador empotrado o móvil",
    ],
    caracteristicas: [
      "Lona impermeable calibre 6",
      "Protección contra lluvia, cenizas y sol",
      "Costuras reforzadas de alta durabilidad",
    ],
    imagen:
      "/assets/images-wm/Hogar/Asador/Portada. Asador medio hexágono.webp",
    imagenesSecundarias: [
      "/assets/images-wm/Hogar/Asador/Portada. Asador medio hexágono.webp",
      "/assets/images-wm/Hogar/Asador/Asador portada.webp",
      "/assets/images-wm/Hogar/Asador/Asador eléctrico Lumin mod 7.webp",
      "/assets/images-wm/Hogar/Asador/Asador tipo barril mod12.webp",
    ],
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "funda-futbolito",
    nombre: "Protector Impermeable para Futbolito",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Cubierta protectora calibre 6 o vinipiel negro afelpado para mesas de futbolito con caída de 60 cm.",
    descripcionLarga:
      "Diseñado para resguardar la mesa de futbolito contra polvo, líquidos, humedad y sol. Cubre el campo de juego, los muñecos y las varillas telescópicas. Disponible en lona calibre 6 para intemperie o en elegante vinipiel negro con interior afelpado suave que no raya la madera ni los acabados.",
    medidasSugeridas: [
      "Estándar / Profesional (1.52 m largo x 1.30 m ancho x 60 cm caída)",
      "A la medida exacta de tu futbolito",
    ],
    caracteristicas: [
      "Disponible en vinipiel negro afelpado o lona calibre 6",
      "Caída envolvente de 60 cm para proteger estructura y varillas",
      "Protección impermeable contra polvo y líquidos",
    ],
    imagen:
      "/assets/images-wm/Hogar/Futbolito/Futbolito portada.webp",
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "funda-mesa-billar",
    nombre: "Protector para Mesa de Billar y Pool",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Protección de grado profesional para paño y bandas en mesas estándar, semiprofesionales y profesionales.",
    descripcionLarga:
      "La mejor protección para tu mesa de billar o pool. Evita que el polvo, la luz solar o derrames accidentales arruinen el paño o la madera fina de las bandas. Confección artesanal con esquinas estructuradas y faldón de 30 cm de caída. Disponible en vinipiel negro afelpado de lujo o lona impermeable calibre 6.",
    medidasSugeridas: [
      "Pool Estándar (2.60 m largo x 1.50 m ancho x 30 cm caída)",
      "Pool Semiprofesional (2.80 m largo x 1.60 m ancho x 30 cm caída)",
      "Pool Profesional (3.20 m largo x 1.70 m ancho x 30 cm caída)",
      "Confección a medida para mesas de carambola o medidas especiales",
    ],
    caracteristicas: [
      "Disponible en vinipiel negro afelpado o lona calibre 6",
      "Faldón con caída de 30 cm para proteger las bandas",
      "Protege el paño contra polvo, derrames y sol",
    ],
    imagen:
      "/assets/images-wm/Hogar/Mesa de billar/Mesa de billar vinipiel.webp",
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "funda-mesa-hexagono",
    nombre: "Protector para Mesa Hexagonal de Jardín o Terraza",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Cubierta geométrica hexagonal de 6 caras confeccionada en lona impermeable calibre 6.",
    descripcionLarga:
      "Patronaje de 6 caras diseñado para mesas hexagonales exteriores de madera, cristal o herrería. Protege la superficie y los cantos con una caída perimetral de 40 cm.",
    medidasSugeridas: [
      "Mesa Hexagonal Lado 60 cm (145 cm frontal x 40 cm caída)",
      "Mesa Hexagonal Lado 72 cm (145 cm frontal x 40 cm caída)",
      "Confección a la medida de tu mesa hexagonal",
    ],
    caracteristicas: [
      "Lona impermeable calibre 6",
      "Patrón exacto de 6 lados con caída de 40 cm",
      "Protección resistente a la intemperie y sol",
    ],
    imagen:
      "/assets/images-wm/Hogar/Mesa hexágono/Mesa hexágono portada.webp",
    imagenesSecundarias: [
      "/assets/images-wm/Hogar/Mesa hexágono/Mesa hexágono portada.webp",
      "/assets/images-wm/Hogar/Mesa hexágono/Comparación Mesa hexágono.webp",
    ],
    tiempoEntrega: "48 hrs",
  },
  {
    id: "funda-mesa-ping-pong",
    nombre: "Protector Impermeable para Mesa de Ping Pong",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Funda a la medida para mesa de ping pong plegada.",
    descripcionLarga:
      "Diseñada a la medida para mesas plegables de ping pong. Su corte específico cubre tanto la parte superior como la base donde se sitúa el sistema de plegado, protegiendo los tableros de humedad y polvo.",
    medidasSugeridas: [
      "Mesa Plegada Estándar (160 cm largo x 140 cm alto x 20 cm sup. / 40 cm base)",
      "Confección a medida para mesas fijas o abiertas",
    ],
    caracteristicas: [
      "Corte anatómico adaptado al plegado de la mesa",
      "Material impermeable y resistente al polvo",
      "Fácil de colocar y retirar",
    ],
    imagen:
      "/assets/images-wm/Hogar/Mesa ping pong/Funda mesa ping pong.webp",
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "funda-pantalla-tv",
    nombre: "Funda Protectora Impermeable para Pantalla de TV Exterior",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Protector impermeable calibre 6 con solapa para soporte de pared. Medidas para pantallas de 40\", 70\", 75\" y más.",
    descripcionLarga:
      "La solución ideal para colocar pantallas de televisión en terrazas, pérgolas, jardines y áreas de alberca. Fabricada en material calibre 6 reflectante y térmico, protege los componentes electrónicos contra lluvia, humedad, polvo y radiación solar. Cuenta con apertura trasera con velcro compatible con soportes fijos o articulados.",
    medidasSugeridas: [
      "Pantalla 40\" (89.2 cm largo x 55.8 cm alto x 6 cm fondo)",
      "Pantalla 70\" (156.06 cm largo x 94.67 cm alto x 6 cm fondo)",
      "Pantalla 75\" (167.08 cm largo x 96.4 cm alto x 6 cm fondo)",
      "A la medida de cualquier pantalla desde 32\" hasta 85\"+",
    ],
    caracteristicas: [
      "Material impermeable calibre 6",
      "Solapa posterior con velcro para soporte de pared",
      "Protección contra lluvia, polvo y sol directo",
    ],
    imagen:
      "/assets/images-wm/Hogar/Pantalla/T.v..webp",
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "bolsa-multiusos-organizadora",
    nombre: "Bolsa Ecológica y Organizadora Multiusos de Lona",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Bolsa de lona resistente de alta durabilidad en colores mezclilla, azul, verde olivo y rosa.",
    descripcionLarga:
      "Bolsa reutilizable confeccionada en lona textil de uso rudo con fuelle de 12 cm y costuras cruzadas reforzadas en las asas. Ideal para compras, almacenamiento de blancos, herramientas o traslados. Súper resistente al peso y de larga vida útil.",
    medidasSugeridas: [
      "Estándar (47 cm ancho x 37 cm alto x 12 cm fuelle)",
      "Confección por volumen con medidas personalizadas",
    ],
    caracteristicas: [
      "Lona textil de alta resistencia y durabilidad",
      "Asas reforzadas para alta capacidad de carga",
      "Variedad de colores y fácil lavado",
    ],
    imagen:
      "/assets/images-wm/Hogar/Bolsa/Bolsas.webp",
    colores: [
      {
        id: "azul-mezclilla",
        nombre: "Azul Mezclilla",
        hex: "#3b5f9e",
        imagenes: [
          "/assets/images-wm/Hogar/Bolsa/1.-Bolsas Azul portada.webp",
        ],
      },
      {
        id: "azul-rey",
        nombre: "Azul Rey",
        hex: "#1d4ed8",
        imagenes: [
          "/assets/images-wm/Hogar/Bolsa/Bolsa 1/Bolsa mezclilla.webp",
          "/assets/images-wm/Hogar/Bolsa/Bolsa 1/WhatsApp Image 2024-11-22 at 12.18.29 PM.webp",
        ],
      },
      {
        id: "verde-olivo",
        nombre: "Verde Olivo",
        hex: "#3f5a2a",
        imagenes: [
          "/assets/images-wm/Hogar/Bolsa/5. Bolsa verde portada.webp",
          "/assets/images-wm/Hogar/Bolsa/Bolsa 1/Bolsa olivo.webp",
          "/assets/images-wm/Hogar/Bolsa/Bolsa 1/WhatsApp Image 2024-11-22 at 12.18.55 PM.webp",
        ],
      },
      {
        id: "verde-esmeralda",
        nombre: "Verde Esmeralda",
        hex: "#0f8a6a",
        imagenes: [
          "/assets/images-wm/Hogar/Bolsa/Bolsa 1/Bolsa Verde.webp",
          "/assets/images-wm/Hogar/Bolsa/Bolsa 1/WhatsApp Image 2024-11-22 at 12.18.05 PM.webp",
        ],
      },
      {
        id: "rosa",
        nombre: "Rosa",
        hex: "#c0397a",
        imagenes: [
          "/assets/images-wm/Hogar/Bolsa/8.- Portada Bolsa rosa.webp",
          "/assets/images-wm/Hogar/Bolsa/Bolsa 1/Bolsa rosa.webp",
          "/assets/images-wm/Hogar/Bolsa/Bolsa 1/WhatsApp Image 2024-11-22 at 12.19.59 PM.webp",
        ],
      },
    ],
    tiempoEntrega: "Inmediata / 24 hrs",
  },
  {
    id: "portatrajes-portavestidos",
    nombre: "Portatraje y Portavestido de Alta Protección",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Funda protectora para trajes y vestidos con cierre completo, ventana transparente y ojal de viaje.",
    descripcionLarga:
      "Protege tus prendas finas contra polvo, arrugas y humedad tanto en el armario como en traslados de viaje. Confeccionado con cierre frontal continuo, ventana de cristal plástico transparente para identificar la prenda y ojal metálico inferior para doblar por la mitad con la percha.",
    medidasSugeridas: [
      "Portatraje Estándar (100 cm largo x 60 cm ancho)",
      "Portavestido Largo (140 cm largo x 60 cm ancho)",
      "Medidas especiales para sastrería y boutiques",
    ],
    caracteristicas: [
      "Cierre frontal completo",
      "Ventana transparente para fácil identificación",
      "Protección contra polvo y arrugas",
    ],
    imagen:
      "/assets/images/Hogar/Portatraje_PTTR_01.webp",
    imagenesSecundarias: [
      "/assets/images/Hogar/Portatraje_PTTR_01.webp",
      "/assets/images/Hogar/Portatraje_PTTR_02.webp",
      "/assets/images/Hogar/Portavestido_PTVE.webp",
    ],
    tiempoEntrega: "24 hrs",
  },
  {
    id: "funda-edredon-blancos",
    nombre: "Funda Organizadora para Edredón y Sábanas",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Organizador impermeable con cierre perimetral y ventana transparente para guardar edredones y blancos.",
    descripcionLarga:
      "Mantén tus edredones, cobijas, colchas y sábanas completamente aislados del polvo, insectos y humedad en tu clóset o bodega. Cuenta con ventana frontal transparente para identificar el contenido sin abrir y asas reforzadas.",
    medidasSugeridas: [
      "Individual / Matrimonial (50 x 40 x 25 cm)",
      "Queen / King Size (65 x 50 x 30 cm)",
      "Bolsa para Sábanas y Almohadas (45 x 35 x 20 cm)",
    ],
    caracteristicas: [
      "Cierre perimetral para fácil apertura",
      "Ventana frontal transparente",
      "Material impermeable contra polvo y humedad",
    ],
    imagen:
      "/assets/images/Hogar/FundaParaEdredon_BOED_01.webp",
    imagenesSecundarias: [
      "/assets/images/Hogar/FundaParaEdredon_BOED_01.webp",
      "/assets/images/Hogar/FundaParaEdredon_BOED_02.webp",
      "/assets/images/Hogar/FundaParaEdredon_BOED_03.webp",
      "/assets/images/Hogar/BolsaParaSabanas_BOSA_01.webp",
    ],
    tiempoEntrega: "24 hrs",
  },
  {
    id: "funda-consolas-videojuegos",
    nombre: "Fundas Protectoras para Consolas de Videojuegos",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Protección antipolvo y líquidos para PlayStation 5, PS5 Slim y Nintendo Switch OLED en poliforro o vinipiel afelpado.",
    descripcionLarga:
      "Fundas a la medida exacta para resguardar tus consolas de videojuegos del polvo, pelusa y accidentes con líquidos cuando no están en uso. Fabricadas en poliforro impermeable o en vinipiel afelpado interior que evita cualquier rasguño en los paneles o carcasas de tu consola.",
    medidasSugeridas: [
      "PlayStation 5 / PS5 Slim (Formato vertical con ranura para cables)",
      "Nintendo Switch y Switch OLED (Cubre consola montada en Dock)",
      "A la medida para Xbox Series X / Series S",
    ],
    caracteristicas: [
      "Disponible en poliforro o vinipiel afelpado suave",
      "Ranura posterior para paso de cables",
      "Protección contra polvo y salpicaduras",
    ],
    imagen:
      "/assets/images-wm/Hogar/Consolas videojuegos/playstation 5 slim sin lectora.webp",
    imagenesSecundarias: [
      "/assets/images-wm/Hogar/Consolas videojuegos/playstation 5 slim sin lectora.webp",
    ],
    popular: true,
    tiempoEntrega: "24 hrs",
  },
  {
    id: "funda-bafle-buffer",
    nombre: "Protector para Bocina / Bafle Torre (Buffer)",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Funda protectora a la medida en vinipiel negro afelpado para bocinas tipo torre, bafles y subwoofers.",
    descripcionLarga:
      "Protege tu bocina torre, bafle o subwoofer de audio del polvo, rayos solares, salpicaduras de agua y rayaduras. Confeccionada en vinipiel de gama alta color negro con interior afelpado suave que cuida el cuerpo, controles y rejillas de tu equipo de sonido.",
    medidasSugeridas: [
      "Medida Especial: 92 cm alto x 44 cm frente x 38 cm fondo",
      "Bafle / Bocina Torre estándar (15 pulgadas)",
      "Confección a la medida exacta de tu bocina o subwoofer",
    ],
    caracteristicas: [
      "Vinipiel color negro con interior afelpado suave",
      "Protección contra polvo, sol y rayaduras",
      "Corte anatómico de fácil colocación",
    ],
    imagen:
      "/assets/images-wm/Hogar/Buffer/Especial 92 x 44 x 38.webp",
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "funda-equipal-tradicional",
    nombre: "Funda Protectora para Equipal Tradicional de Jardín",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Protector impermeable a la silueta tradicional del equipal artesanal para intemperie, terrazas y jardines.",
    descripcionLarga:
      "El equipal artesanal de vara y cuero requiere protección especial contra el sol que reseca la piel y la lluvia que pudre la madera. Confeccionamos protectores anatómicos calibre 6 impermeables que envuelven el respaldo curvo y la base cónica del equipal, prolongando su vida útil por años.",
    medidasSugeridas: [
      "Equipal Silla Clásica (Diámetro 60 cm x Altura 80 cm)",
      "Equipal Sillón Grande / Cantinero (Diámetro 70 cm x Altura 85 cm)",
      "A la medida exacta de tus equipales",
    ],
    caracteristicas: [
      "Material impermeable calibre 6",
      "Diseño curvo anatómico respetando la silueta del equipal",
      "Protege contra el sol y la lluvia",
    ],
    imagen:
      "/assets/images-wm/Hogar/Equipal/1.- equipal portada.webp",
    imagenesSecundarias: [
      "/assets/images-wm/Hogar/Equipal/1.- equipal portada.webp",
    ],
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "funda-mesa-redonda",
    nombre: "Protector Impermeable para Mesa Redonda de Jardín y Terraza",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Cubierta circular impermeable de alta resistencia calibre 6 con caída perimetral para mesas de comedor exterior.",
    descripcionLarga:
      "Cubierta circular con patronaje exacto para mesas redondas de jardín, terraza y restaurantes. Fabricada en lona impermeable calibre 6 de alta resistencia que soporta lluvias y sol directo, evitando que la madera se infle o el cristal se manche de sarro.",
    medidasSugeridas: [
      "Mesa Redonda 4 Personas (Diámetro 1.00 m a 1.20 m)",
      "Mesa Redonda 6-8 Personas (Diámetro 1.40 m a 1.60 m)",
      "Mesa Redonda Grande con Sillas (Diámetro 1.80 m a 2.20 m)",
      "A la medida exacta de tu mesa o conjunto exterior",
    ],
    caracteristicas: [
      "Lona impermeable calibre 6",
      "Corte circular con caída perimetral",
      "Costuras reforzadas resistentes a la intemperie",
    ],
    imagen:
      "/assets/images-wm/Hogar/Mesa Redonda/Portada mesa redonda.webp",
    imagenesSecundarias: [
      "/assets/images-wm/Hogar/Mesa Redonda/Portada mesa redonda.webp",
    ],
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "funda-enmicadora-oficina",
    nombre: "Funda Protectora para Enmicadora Térmica",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Protector antipolvo a la medida para enmicadoras de oficina tipo Office Depot LM401 y similares.",
    descripcionLarga:
      "Las enmicadoras térmicas sufren constantes fallas por acumulación de pelusa y polvo en los rodillos de calor. Nuestra funda a la medida garantiza un sellado limpio contra el polvo, derrames y humedad, prolongando la vida útil y calidad de tus enmicados.",
    medidasSugeridas: [
      "Enmicadora Carta / Oficio Estándar (Office Depot LM401)",
      "Enmicadoras profesionales de uso rudo continuo",
      "Confección a la medida de tu equipo",
    ],
    caracteristicas: [
      "Protege rodillos y componentes contra el polvo",
      "Material impermeable y de fácil limpieza",
      "Confección a la medida exacta",
    ],
    imagen:
      "/assets/images-wm/Hogar/Enmicadora/Enmicadora Office Depot LM401mod.2.webp",
    imagenesSecundarias: [
      "/assets/images-wm/Hogar/Enmicadora/Enmicadora Office Depot LM401mod.2.webp",
    ],
    tiempoEntrega: "24 hrs",
  },
  {
    id: "funda-impresoras-oficina",
    nombre: "Fundas Protectoras para Impresoras y Multifuncionales",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Protección a la medida para equipos HP, Brother, Canon y Epson en tela impermeable o elegante vinipiel.",
    descripcionLarga:
      "El polvo es el enemigo principal de los cabezales, rodillos y bandejas de alimentación de las impresoras. Confeccionamos fundas protectoras específicas para las líneas más populares: HP Smart Tank y LaserJet, Brother DCP y MFC, Canon y Epson EcoTank. Disponibles en tela calibre ligero lavable o en vinipiel afelpado de alta estética ejecutiva.",
    medidasSugeridas: [
      "HP Smart Tank (Modelos 520, 580, 615, 670, 720, 750)",
      "Brother Multifuncionales (DCP-T520W, T720DW, L2660, MFC-J6940DW)",
      "Epson EcoTank (L1210, L3150, L3210, L3250, L4260, L6171)",
      "Canon Pixma y LaserJet comerciales",
      "A la medida de cualquier impresora, plotter o multifuncional",
    ],
    caracteristicas: [
      "Disponible en tela impermeable o vinipiel afelpado",
      "Abertura posterior para paso de cables",
      "Protege cabezales y rodillos del polvo ambiental",
    ],
    imagen:
      "/assets/images-wm/Hogar/Impresora/Hp chica/Portada Hp 580 mod2.webp",
    imagenesSecundarias: [
      "/assets/images-wm/Hogar/Impresora/Hp chica/Portada Hp 580 mod2.webp",
    ],
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },

  // =========================================================================
  // --- CATEGORÍA 3: VEHÍCULOS Y MOTOS ---
  // =========================================================================
  {
    id: "cubierta-sedan-auto",
    nombre: "Cubierta Automotriz Afelpada para Auto y Sedán",
    categoria: "vehiculos",
    categoriaLabel: "Vehículos y Motos",
    descripcionCorta:
      "Cubierta afelpada para auto y sedán que protege la carrocería y pintura.",
    descripcionLarga:
      "Protección contra el sol, polvo, lluvia y rayones. Confeccionada según la silueta de tu vehículo, con exterior impermeable e interior afelpado suave que cuida la pintura y el barniz.",
    medidasSugeridas: [
      "Sedán Mediano (Versa, Civic, Jetta, Sentra)",
      "Sedán Grande (Accord, Camry, Serie 3, Passat)",
      "A la medida exacta de tu marca y modelo",
    ],
    caracteristicas: [
      "Interior afelpado suave que no raya la pintura",
      "Exterior resistente e impermeable",
      "Confección a la silueta de tu vehículo",
    ],
    imagen:
      "/assets/images/Vehiculos/Fundas_Para_Auto.webp",
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "cubierta-camioneta-suv",
    nombre: "Cubierta Protectora para Camioneta SUV",
    categoria: "vehiculos",
    categoriaLabel: "Vehículos y Motos",
    descripcionCorta:
      "Cubierta afelpada a la medida para camionetas familiares y SUV.",
    descripcionLarga:
      "Cubierta para SUV compactas, medianas y grandes. Protege la carrocería y pintura del sol, polvo y lluvia. Confeccionada con interior afelpado suave para cuidar el acabado del vehículo.",
    medidasSugeridas: [
      "SUV Compacta (HR-V, Kicks, Tracker, Duster)",
      "SUV Familiar (CR-V, RAV4, CX-5, Tiguan, Tucson)",
      "SUV Grande / 3 filas (Explorer, Tahoe, Suburban, Durango)",
      "A la medida exacta de tu SUV",
    ],
    caracteristicas: [
      "Interior afelpado suave que cuida la pintura",
      "Exterior impermeable de alta resistencia",
      "Patrón a la medida para cada modelo de SUV",
    ],
    imagen:
      "/assets/images/Vehiculos/Funda_Para_Camioneta-500x500.webp",
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "cubierta-pickup",
    nombre: "Cubierta Especial para Camioneta Pickup",
    categoria: "vehiculos",
    categoriaLabel: "Vehículos y Motos",
    descripcionCorta:
      "Corte específico para pickups con batea cubierta o descubierta.",
    descripcionLarga:
      "Protege tanto la cabina como la batea de pickups contra el sol, polvo y lluvia. Fabricada en lona pesada calibre resistente a la intemperie.",
    medidasSugeridas: [
      "Pickup Mediana Doble Cabina (Hilux, Tacoma, Frontier)",
      "Pickup Grande Cabina Regular (F-150, Cheyenne)",
      "Pickup Grande Doble Cabina (RAM 1500/2500, Lobo, Silverado)",
      "Confección adaptada a batea con rollbar o caja seca",
    ],
    caracteristicas: [
      "Corte a la medida para cabina y batea",
      "Material resistente al sol y la intemperie",
      "Costuras reforzadas en puntos de apoyo",
    ],
    imagen:
      "/assets/images/Vehiculos/Funda_Para_Pickup-500x500.webp",
    popular: true,
    tiempoEntrega: "48 hrs",
  },
  {
    id: "funda-motocicleta",
    nombre: "Funda Térmica e Impermeable para Motocicleta",
    categoria: "vehiculos",
    categoriaLabel: "Vehículos y Motos",
    descripcionCorta:
      "Funda impermeable para motocicleta con ajuste a la medida.",
    descripcionLarga:
      "Protección para motocicletas contra polvo, sol y lluvia en cochera o intemperie. Confeccionada en material impermeable resistente para resguardar la pintura y componentes de tu moto.",
    medidasSugeridas: [
      "Scooter / Urbana 125-250cc (200 x 90 x 100 cm)",
      "Deportiva / Naked 300-900cc (220 x 95 x 110 cm)",
      "Touring / Adventure con Maletas (245 x 105 x 125 cm)",
      "A la medida de tu modelo",
    ],
    caracteristicas: [
      "Material impermeable de alta resistencia",
      "Protege pintura, manubrio y componentes del sol y polvo",
      "Corte adaptado a la silueta de la motocicleta",
    ],
    imagen:
      "/assets/images/Vehiculos/Fundas_Para_Motocicleta_1-500x500.webp",
    popular: true,
    tiempoEntrega: "24 hrs",
  },
  {
    id: "funda-cuatrimoto",
    nombre: "Funda Impermeable para Cuatrimoto (ATV)",
    categoria: "vehiculos",
    categoriaLabel: "Vehículos y Motos",
    descripcionCorta:
      "Funda impermeable para cuatrimoto (ATV).",
    descripcionLarga:
      "Protege tu cuatrimoto de polvo, sol y lluvia en cochera o remolque. Diseñada con amplitud para cubrir defensas, llantas y parrillas utilitarias.",
    medidasSugeridas: [
      "Cuatrimoto Chica 250cc (190 x 105 x 100 cm)",
      "Cuatrimoto Estándar 450-700cc (215 x 120 x 115 cm)",
      "Cuatrimoto Grande / 2 Plazas (240 x 125 x 120 cm)",
      "A la medida exacta de tu ATV",
    ],
    caracteristicas: [
      "Material impermeable de uso rudo",
      "Amplitud para cubrir manubrio, defensas y parrillas",
      "Costuras reforzadas de alta durabilidad",
    ],
    imagen:
      "/assets/images/Vehiculos/Fundas_Para_Cuatrimoto.webp",
    tiempoEntrega: "24 hrs",
  },
  {
    id: "funda-bicicleta",
    nombre: "Funda Protectora Impermeable para Bicicleta",
    categoria: "vehiculos",
    categoriaLabel: "Vehículos y Motos",
    descripcionCorta:
      "Cubierta impermeable para bicicleta individual o doble.",
    descripcionLarga:
      "Mantén la cadena, cambios y sillín protegidos del polvo, la lluvia y el sol en cocheras, balcones o pasillos. Material ligero e impermeable de fácil colocación.",
    medidasSugeridas: [
      "Bicicleta Individual Adulto Rodada 26-29 (180 x 60 x 100 cm)",
      "Bicicleta Doble / 2 Bicis (200 x 80 x 110 cm)",
      "A la medida de tu bici de ruta o montaña",
    ],
    caracteristicas: [
      "Material ligero e impermeable",
      "Protege componentes del sol, polvo y humedad",
      "Fácil de colocar y retirar",
    ],
    imagen:
      "/assets/images/Vehiculos/FundaParaBicicleta_BICH.webp",
    tiempoEntrega: "24 hrs",
  },
];
