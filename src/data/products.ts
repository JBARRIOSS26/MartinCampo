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
      "Cubierta impermeable con panel frontal abatible con cierre para operar sin retirar la funda.",
    descripcionLarga:
      "Diseñada específicamente para lavadoras contemporáneas de carga frontal (LG, Samsung, Whirlpool, Mabe, Electrolux). Fabricada en lona impermeable de alta durabilidad con recubrimiento protector y filtro UV para evitar la decoloración y resequedad solar. Incluye cierres resistentes que permiten abrir la escotilla cómodamente.",
    medidasSugeridas: [
      "Estándar 16-18 kg (60 x 65 x 85 cm)",
      "Grande 19-22 kg (68 x 70 x 98 cm)",
      "Jumbo 23-26 kg (70 x 78 x 100 cm)",
      "A la medida exacta de tu equipo",
    ],
    caracteristicas: [
      "100% Impermeable y resistente a la intemperie",
      "Filtro UV contra resequedad solar",
      "Apertura frontal con doble cierre reforzado",
      "Respaldo semi-abierto para mangueras y adecuada ventilación",
      "Costura reforzada con hilo náutico de alta tensión",
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
      "Tapa superior articulada con velcro y elástico perimetral antiviento. Acceso rápido a controles.",
    descripcionLarga:
      "Protección integral para lavadoras de carga superior. Cuenta con una cubierta superior articulada con velcro industrial que se levanta fácilmente para cargar prendas y dosificar detergente. Su elástico de ajuste perimetral evita que el viento la mueva en patios o azoteas.",
    medidasSugeridas: [
      "Chica 13-15 kg (60 x 60 x 95 cm)",
      "Mediana 17-19 kg (66 x 68 x 105 cm)",
      "Grande 20-24 kg (70 x 72 x 110 cm)",
      "A la medida exacta de tu equipo",
    ],
    caracteristicas: [
      "Tapa superior plegable con velcros industriales",
      "Tela vinílica resistente a la lluvia y humedad",
      "Fácil acceso al panel de mandos",
      "Elástico perimetral de ajuste continuo",
      "Costuras de alta resistencia con hilo náutico",
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
      "Doble apertura frontal independiente",
      "Protección contra lluvia, sol, sarro y polvo",
      "Broches inferiores de alta sujeción",
      "Ranura posterior para ducto de desfogue de secadora",
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
      "Protección frontal y superior con desfogue posterior para secadoras de gas o eléctricas.",
    descripcionLarga:
      "Cubierta fabricada con ajuste anatómico para secadoras residenciales. Diseñada con ranura trasera de ventilación que permite la salida libre del ducto de gas o aire caliente sin comprometer la protección contra la intemperie.",
    medidasSugeridas: [
      "Secadora Estándar 18-20 kg (68 x 72 x 102 cm)",
      "Secadora Grande 22-24 kg (74 x 78 x 110 cm)",
      "A la medida exacta de tu secadora",
    ],
    caracteristicas: [
      "Apertura frontal ergonómica con cierre",
      "Ranura de ventilación y ducto térmico",
      "Protección 100% impermeable",
      "Costuras náuticas reforzadas",
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
      "Protección continua de equipo y cajón pedestal",
      "Doble apertura para tambor y cajón inferior",
      "Material impermeable grabado y filtro solar UV",
      "Costuras náuticas de alta tensión",
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
      "Elástico perimetral antiviento",
      "Material resistente al sol, agua y sarro",
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
      "Corte circular anatómico con cierre superior para lavadoras tradicionales tipo chacachaca.",
    descripcionLarga:
      "Confección circular a la medida exacta para lavadoras redondas clásicas (Koblenz, Cinsa). Protege el motor inferior, el esmalte de la tina y el reloj temporizador de la intemperie, lluvia y óxido.",
    medidasSugeridas: [
      "Tina 14-16 kg (Diámetro 65 cm x Alto 90 cm)",
      "Tina 18-22 kg (Diámetro 72 cm x Alto 95 cm)",
      "A la medida de tu lavadora redonda",
    ],
    caracteristicas: [
      "Patronaje circular ergonómico",
      "Tapa superior con cierre perimetral",
      "Lona vinílica impermeable de uso rudo",
      "Ajuste inferior con jareta de amarre",
    ],
    imagen:
      "/assets/images/Lavadoras y Secadoras/FundaParaLavadoraRedonda_RED.webp",
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
      "Asador Redondo Estándar (50 cm diámetro x 70 cm alto)",
      "A la medida exacta de tu asador empotrado o móvil",
    ],
    caracteristicas: [
      "Lona impermeable de gama alta calibre 6",
      "Filtro UV contra decoloración y sol implacable",
      "Ajuste perimetral antiviento en la base",
      "Costuras de alta resistencia con hilo náutico",
    ],
    imagen:
      "/assets/images/Hogar/Asador/Portada. Asador medio hexágono.png",
    imagenesSecundarias: [
      "/assets/images/Hogar/Asador/Portada. Asador medio hexágono.png",
      "/assets/images/Hogar/Asador/Asador portada.png",
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
      "Disponible en Vinipiel negro afelpado o Lona impermeable calibre 6",
      "100% Impermeable y resistente al polvo",
      "Caída envolvente de 60 cm para proteger estructura y varillas",
      "Interior afelpado suave anti-rayones",
    ],
    imagen:
      "/assets/images/Hogar/Futbolito/Futbolito portada.png",
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
      "Acabado en Vinipiel negro afelpado de lujo o Lona calibre 6",
      "Protección total del paño contra polvo, líquidos y luz UV",
      "Faldón con caída de 30 cm con esquinas cuadradas reforzadas",
      "Interior suave afelpado que cuida las bandas de madera",
    ],
    imagen:
      "/assets/images/Hogar/Mesa de billar/Mesa de billar vinipiel.png",
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
      "Patronaje geométrico milimétrico de 6 caras diseñado para mesas hexagonales exteriores de madera, cristal o herrería. Protege la superficie y los cantos con una caída perimetral de 40 cm y ajuste firme para resistir vientos fuertes.",
    medidasSugeridas: [
      "Mesa Hexagonal Lado 60 cm (145 cm frontal x 40 cm caída)",
      "Mesa Hexagonal Lado 72 cm (145 cm frontal x 40 cm caída)",
      "Confección a la medida de tu mesa hexagonal",
    ],
    caracteristicas: [
      "Lona impermeable de gama alta calibre 6",
      "Patrón exacto de 6 lados con caída de 40 cm",
      "Ajuste perimetral antiviento",
      "Máxima resistencia a la lluvia torrencial y sol extremo",
    ],
    imagen:
      "/assets/images/Hogar/Mesa hexágono/Mesa hexágono portada.png",
    imagenesSecundarias: [
      "/assets/images/Hogar/Mesa hexágono/Mesa hexágono portada.png",
      "/assets/images/Hogar/Mesa hexágono/Comparación Mesa hexágono.png",
      "/assets/images/Hogar/Mesa hexágono/WhatsApp Image 2024-11-20 at 1.46.08 PM.jpeg",
    ],
    tiempoEntrega: "48 hrs",
  },
  {
    id: "funda-mesa-ping-pong",
    nombre: "Protector Impermeable para Mesa de Ping Pong",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Funda anatómica para mesa de tenis de mesa plegada sobre ruedas con ajuste superior e inferior.",
    descripcionLarga:
      "Diseñada a la medida para mesas plegables de ping pong (Stiga, Butterfly, Kettler). Su corte específico cubre tanto la parte superior angosta (20 cm) como la base ancha (40 cm) donde se sitúan las ruedas y el sistema de plegado, protegiendo los tableros de deformaciones por humedad o calor.",
    medidasSugeridas: [
      "Mesa Plegada Estándar (160 cm largo x 140 cm alto x 20 cm sup. / 40 cm base)",
      "Confección a medida para mesas fijas o abiertas",
    ],
    caracteristicas: [
      "100% Impermeable y resistente al polvo fino",
      "Corte anatómico adaptado al plegado de la mesa",
      "Costuras reforzadas con hilo náutico",
      "Fácil de colocar y retirar en segundos",
    ],
    imagen:
      "/assets/images/Hogar/Mesa ping pong/Funda mesa ping pong.png",
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
      "Material impermeable reflectante térmico calibre 6",
      "Solapa posterior con velcro para soporte de pared",
      "Bolsillo trasero para resguardo del control remoto",
      "Protección contra lluvia, polvo, humedad y sol directo",
    ],
    imagen:
      "/assets/images/Hogar/Pantalla/T.v..png",
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
      "Colores: Azul mezclilla, Azul rey, Verde olivo, Verde esmeralda y Rosa",
      "Asas reforzadas para alta capacidad de carga",
      "Lavable, reutilizable y ecológica",
    ],
    imagen:
      "/assets/images/Hogar/Bolsa/Bolsas.png",
    colores: [
      {
        id: "azul-mezclilla",
        nombre: "Azul Mezclilla",
        hex: "#3b5f9e",
        imagenes: [
          "/assets/images/Hogar/Bolsa/1.-Bolsas Azul portada.png",
        ],
      },
      {
        id: "azul-rey",
        nombre: "Azul Rey",
        hex: "#1d4ed8",
        imagenes: [
          "/assets/images/Hogar/Bolsa/Bolsa 1/Bolsa mezclilla.png",
          "/assets/images/Hogar/Bolsa/Bolsa 1/WhatsApp Image 2024-11-22 at 12.18.29 PM.png",
        ],
      },
      {
        id: "verde-olivo",
        nombre: "Verde Olivo",
        hex: "#3f5a2a",
        imagenes: [
          "/assets/images/Hogar/Bolsa/5. Bolsa verde portada.png",
          "/assets/images/Hogar/Bolsa/Bolsa 1/Bolsa olivo.png",
          "/assets/images/Hogar/Bolsa/Bolsa 1/WhatsApp Image 2024-11-22 at 12.18.55 PM.png",
        ],
      },
      {
        id: "verde-esmeralda",
        nombre: "Verde Esmeralda",
        hex: "#0f8a6a",
        imagenes: [
          "/assets/images/Hogar/Bolsa/Bolsa 1/Bolsa Verde.png",
          "/assets/images/Hogar/Bolsa/Bolsa 1/WhatsApp Image 2024-11-22 at 12.18.05 PM.png",
        ],
      },
      {
        id: "rosa",
        nombre: "Rosa",
        hex: "#c0397a",
        imagenes: [
          "/assets/images/Hogar/Bolsa/8.- Portada Bolsa rosa.png",
          "/assets/images/Hogar/Bolsa/Bolsa 1/Bolsa rosa.png",
          "/assets/images/Hogar/Bolsa/Bolsa 1/WhatsApp Image 2024-11-22 at 12.19.59 PM.png",
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
      "Cierre frontal completo de alta suavidad",
      "Ventana transparente para fácil identificación",
      "Ojal de transporte para viaje",
      "Material transpirable que evita malos olores y humedad",
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
      "Ventana transparente frontal",
      "Cierre perimetral bidireccional",
      "Asas laterales reforzadas de transporte",
      "Tejido impermeable antipolvo y antihumedad",
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

  // =========================================================================
  // --- CATEGORÍA 3: VEHÍCULOS Y MOTOS ---
  // =========================================================================
  {
    id: "cubierta-sedan-auto",
    nombre: "Cubierta Automotriz Afelpada para Auto y Sedán",
    categoria: "vehiculos",
    categoriaLabel: "Vehículos y Motos",
    descripcionCorta:
      "Capa externa impermeable con interior de algodón afelpado que cuida la pintura y el barniz.",
    descripcionLarga:
      "La protección definitiva contra el sol mexicano, lluvia ácida, salitre marino y rayones de gatos. Confeccionada con patrón según la silueta de tu vehículo. Incluye bolsas para espejos retrovisores, elásticos en las fascias y cinchas inferiores con broche para viento.",
    medidasSugeridas: [
      "Sedán Mediano (Versa, Civic, Jetta, Sentra)",
      "Sedán Grande (Accord, Camry, Serie 3, Passat)",
      "A la medida exacta de tu marca y modelo",
    ],
    caracteristicas: [
      "Capa interior de algodón afelpado suave anti-rayones",
      "Capa exterior impermeable con filtro UV 50+",
      "Bolsas para espejos retrovisores y elásticos de fascia",
      "Correas con broche clic bajo chasis antiviento",
      "Costura náutica reforzada",
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
      "Ajuste milimétrico para camionetas familiares y SUV con protección solar e interior afelpado.",
    descripcionLarga:
      "Cubierta automotriz para SUV compactas, medianas y de 3 filas. Protege la pintura, faros y quemacocos del sol extremo, la lluvia torrencial y la resina de árboles. Forro interior de algodón suave para cuidar el acabado automotriz.",
    medidasSugeridas: [
      "SUV Compacta (HR-V, Kicks, Tracker, Duster)",
      "SUV Familiar (CR-V, RAV4, CX-5, Tiguan, Tucson)",
      "SUV Grande / 3 filas (Explorer, Tahoe, Suburban, Durango)",
      "A la medida exacta de tu SUV",
    ],
    caracteristicas: [
      "Interior 100% afelpado que no raya el transparente",
      "Exterior vinílico impermeable de grado intemperie",
      "Elásticos perimetrales de tensión continua",
      "Resistente a salitre y agentes químicos ambientales",
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
      "Corte específico para pickups con batea cubierta o descubierta, rollbar y estribos.",
    descripcionLarga:
      "Protege tanto la cabina como la batea de pickups de trabajo o de lujo (Hilux, Tacoma, Ranger, Lobo F-150, Silverado, RAM). Fabricada en lona pesada calibre resistente a desgarres y rayos solares implacables.",
    medidasSugeridas: [
      "Pickup Mediana Doble Cabina (Hilux, Tacoma, Frontier)",
      "Pickup Grande Cabina Regular (F-150, Cheyenne)",
      "Pickup Grande Doble Cabina (RAM 1500/2500, Lobo, Silverado)",
      "Confección adaptada a batea con rollbar o caja seca",
    ],
    caracteristicas: [
      "Ajuste anatómico para cabina y batea",
      "Refuerzo en puntos de fricción y esquinas",
      "Ojales reforzados para candado de seguridad",
      "100% resistente al agua y a la intemperie",
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
      "Panel térmico inferior que tolera el calor del tubo de escape y orificios para candado.",
    descripcionLarga:
      "Protección compacta y ultra resistente para motos deportivas, scooters, chopper o adventure touring. No se derrite con el tubo de escape tibio gracias a sus paneles térmicos de protección en la zona baja.",
    medidasSugeridas: [
      "Scooter / Urbana 125-250cc (200 x 90 x 100 cm)",
      "Deportiva / Naked 300-900cc (220 x 95 x 110 cm)",
      "Touring / Adventure con Maletas (245 x 105 x 125 cm)",
      "A la medida de tu modelo",
    ],
    caracteristicas: [
      "Panel térmico inferior resistente al calor del escape",
      "Ojales de aluminio delanteros para candado en U",
      "Elásticos perimetrales de tensión continua",
      "Incluye bolsa de transporte compacta",
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
      "Corte amplio con refuerzo para manubrio y parrillas delanteras y traseras de cuatrimotos.",
    descripcionLarga:
      "Protege tu cuatrimoto de lodo, sol, lluvia y polvo en cochera o remolque. Diseñada con amplitud para cubrir rines de tacos, defensas y parrillas utilitarias sin rasgarse.",
    medidasSugeridas: [
      "Cuatrimoto Chica 250cc (190 x 105 x 100 cm)",
      "Cuatrimoto Estándar 450-700cc (215 x 120 x 115 cm)",
      "Cuatrimoto Grande / 2 Plazas (240 x 125 x 120 cm)",
      "A la medida exacta de tu ATV",
    ],
    caracteristicas: [
      "Lona uso rudo impermeable y antipolvo",
      "Costuras náuticas de alta tensión",
      "Broches y elásticos de amarre para viento",
      "Resistente a rayos UV y salpicaduras",
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
      "Cubierta impermeable ligera para bicicletas de montaña, ruta o paseo individual y doble.",
    descripcionLarga:
      "Mantén la cadena, cambios y sillín protegidos del óxido, la lluvia y los rayos solares en cocheras, balcones o pasillos. Material ligero e impermeable con broche inferior antiviento.",
    medidasSugeridas: [
      "Bicicleta Individual Adulto Rodada 26-29 (180 x 60 x 100 cm)",
      "Bicicleta Doble / 2 Bicis (200 x 80 x 110 cm)",
      "A la medida de tu bici de ruta o montaña",
    ],
    caracteristicas: [
      "Impermeable y con filtro contra rayos UV",
      "Broche de clic inferior y elásticos en ruedas",
      "Evita el óxido en transmisión y componentes",
      "Plegado ultra compacto",
    ],
    imagen:
      "/assets/images/Vehiculos/FundaParaBicicleta_BICH.webp",
    tiempoEntrega: "24 hrs",
  },

  // =========================================================================
  // --- CATEGORÍA 4: FUNDAS PERSONALIZADAS A MEDIDA ---
  // =========================================================================
  {
    id: "personalizada-industrial",
    nombre: "Funda a la Medida para Maquinaria y Generadores Eléctricos",
    categoria: "personalizadas",
    categoriaLabel: "Fundas Personalizadas",
    descripcionCorta:
      "Confección sobre plano o toma de medidas en sitio. Lonas vinílicas de uso rudo industrial.",
    descripcionLarga:
      "Solución personalizada para plantas de luz, compresores, tableros de control y maquinaria en plantas fabriles u obras de construcción. Diseñadas con velcro de alta adherencia, orificios para cables o mangueras y rotulación opcional.",
    medidasSugeridas: [
      "Generador portátil 5kVA - 10kVA",
      "Planta de luz estacionaria 20kVA - 100kVA",
      "Medidas exactas según plano o fotos de tu equipo",
    ],
    caracteristicas: [
      "Lona vinílica impermeable uso rudo calibre industrial",
      "Aperturas con solapas de inspección rápida con velcro",
      "Ojillos perimetrales galvanizados cada 40 cm",
      "Opciones retardantes al fuego (opcional)",
    ],
    imagen:
      "/assets/images/Hogar/Mesa ping pong/Funda mesa ping pong.png",
    popular: true,
    tiempoEntrega: "3 a 5 días hábiles",
  },
  {
    id: "personalizada-muebles-especiales",
    nombre: "Funda para Mobiliario Especial, Jacuzzis y Equipamiento",
    categoria: "personalizadas",
    categoriaLabel: "Fundas Personalizadas",
    descripcionCorta:
      "Patronaje artesanal para cualquier silueta geométrica, equipo delicado o mobiliario de autor.",
    descripcionLarga:
      "¿Tienes un mueble curvo, un jacuzzi exterior, una mesa especial o un equipo sensible al polvo? Nuestro equipo de maestros confeccionistas en Guadalajara desarrolla el patrón exclusivo que garantiza una cobertura impecable y estética.",
    medidasSugeridas: [
      "Jacuzzi / Tina de hidromasaje exterior",
      "Mesa o barra de terraza con silueta especial",
      "Cualquier especificación milimétrica a convenir",
    ],
    caracteristicas: [
      "Levantamiento de medidas guiado por WhatsApp con fotos",
      "Acabados invisibles o vivos en color contrastante",
      "Opciones afelpadas o impermeables de uso rudo",
      "Garantía de ajuste 100% exacto",
    ],
    imagen:
      "/assets/images/Hogar/Mesa hexágono/WhatsApp Image 2024-11-20 at 1.46.08 PM.jpeg",
    popular: true,
    tiempoEntrega: "3 a 5 días hábiles",
  },
];
