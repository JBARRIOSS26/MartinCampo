export interface Product {
  id: string;
  nombre: string;
  categoria: "lavadoras" | "hogar" | "vehiculos" | "personalizadas";
  categoriaLabel: string;
  descripcionCorta: string;
  descripcionLarga: string;
  medidasSugeridas: string[];
  caracteristicas: string[];
  precioDesde?: string;
  imagen: string;
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
  // --- CATEGORÍA 1: LAVADORAS Y SECADORAS ---
  {
    id: "lavadora-carga-frontal",
    nombre: "Funda para Lavadora Carga Frontal",
    categoria: "lavadoras",
    categoriaLabel: "Lavadoras y Secadoras",
    descripcionCorta:
      "Cubierta impermeable con panel frontal abatible con cierre para operar sin retirar la funda.",
    descripcionLarga:
      "Diseñada específicamente para lavadoras y secadoras contemporáneas de carga frontal (LG, Samsung, Whirlpool, Mabe). Fabricada en lona Oxford 600D con recubrimiento vinílico impermeable y protección UV para evitar la decoloración por el sol. Incluye cierres náuticos inoxidables que permiten abrir la escotilla sin retirar la cubierta.",
    medidasSugeridas: [
      "Estándar 16-18 kg (60 x 65 x 85 cm)",
      "Grande 19-22 kg (68 x 70 x 98 cm)",
      "Jumbo 23-26 kg (70 x 78 x 100 cm)",
    ],
    caracteristicas: [
      "100% Impermeable grado marino",
      "Filtro UV contra resequedad solar",
      "Apertura frontal con doble cierre",
      "Respaldo semi-abierto para ventilación y mangueras",
      "Costura reforzada con hilo náutico",
    ],
    precioDesde: "$680 MXN",
    imagen:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "lavadora-carga-superior",
    nombre: "Funda para Lavadora Carga Superior con Tapa Abatible",
    categoria: "lavadoras",
    categoriaLabel: "Lavadoras y Secadoras",
    descripcionCorta:
      "Tapa superior con velcro y elástico perimetral antiviento. Acceso rápido a tina y controles.",
    descripcionLarga:
      "Protección integral para lavadoras de carga superior. Cuenta con una cubierta superior articulada con velcro industrial que se levanta fácilmente para cargar prendas y dosificar detergente. Su elástico de ajuste perimetral evita que el viento la levante en patios o azoteas.",
    medidasSugeridas: [
      "Chica 13-15 kg (60 x 60 x 95 cm)",
      "Mediana 17-19 kg (66 x 68 x 105 cm)",
      "Grande 20-24 kg (70 x 72 x 110 cm)",
    ],
    caracteristicas: [
      "Tapa superior plegable con velcros",
      "Tela vinílica resistente a la lluvia torrencial",
      "Ventana transparente para panel digital",
      "Elástico perimetral de ajuste milimétrico",
      "Bolsillo lateral para manual o manguera",
    ],
    precioDesde: "$620 MXN",
    imagen:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80",
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
    ],
    caracteristicas: [
      "Doble apertura frontal independiente",
      "Protección contra lluvia, polvo y sarro",
      "Broches inferiores de alta sujeción",
      "Ranura posterior para ducto de desfogue de secadora",
    ],
    precioDesde: "$1,150 MXN",
    imagen:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80",
    tiempoEntrega: "48 hrs",
  },

  // --- CATEGORÍA 2: PARA EL HOGAR Y JARDÍN ---
  {
    id: "funda-asador-premium",
    nombre: "Funda Impermeable para Asador de Jardín",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Resistente a calor residual, lluvia y grasa. Ajuste con correas tipo hebilla antiviento.",
    descripcionLarga:
      "Protege tu asador (Weber, Char-Broil, Nexgrill, empotrado) de la corrosión por humedad y suciedad. Elaborada con poliéster laminado con interior afelpado suave para no rayar el acero inoxidable y jaretas inferiores ajustables con broches rápidos clic.",
    medidasSugeridas: [
      "Mediano 2-3 Quemadores (120 x 60 x 110 cm)",
      "Grande 4-5 Quemadores (150 x 65 x 115 cm)",
      "Kettle / Bola Carbón (70 diam x 90 cm)",
    ],
    caracteristicas: [
      "Impermeabilidad grado intemperie extrema",
      "Correas laterales de ajuste y hebillas clic",
      "Rejillas de ventilación oculta anticondensación",
      "Manijas reforzadas para fácil colocación y retiro",
    ],
    precioDesde: "$790 MXN",
    imagen:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    popular: true,
    tiempoEntrega: "24 a 48 hrs",
  },
  {
    id: "funda-sala-terraza",
    nombre: "Cubierta para Sala Exterior y Seccional de Terraza",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Protección para sillones modulares y salas en L o rectangulares con faldón antiviento.",
    descripcionLarga:
      "Evita que tus cojines de exterior se empapen o se decoloren por el sol. Confeccionada con caída de agua optimizada, cordón perimetral de ajuste continuo y tela transpirable que evita la proliferación de hongos o humedad encerrada.",
    medidasSugeridas: [
      "Sillón 3 plazas (210 x 90 x 80 cm)",
      "Sala Seccional en 'L' (250 x 250 x 85 cm)",
      "Set Comedor 6 sillas (220 x 150 x 90 cm)",
      "A la medida exacta de tu mobiliario",
    ],
    caracteristicas: [
      "Tratamiento hidrófugo de máxima repelencia",
      "Costuras dobles con sellado térmico",
      "Cordón de choque con tensor de bloqueo",
      "Protección contra polvo, excremento de aves y resina",
    ],
    precioDesde: "$1,280 MXN",
    imagen:
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=800&q=80",
    tiempoEntrega: "48 a 72 hrs",
  },
  {
    id: "funda-calentador-patio",
    nombre: "Funda para Calentador de Patio Tipo Pirámide / Hongo",
    categoria: "hogar",
    categoriaLabel: "Para el Hogar y Jardín",
    descripcionCorta:
      "Cubierta cilíndrica o cónica con cremallera completa de arriba a abajo.",
    descripcionLarga:
      "Cubre tu calentador de gas para terraza cuando no esté en temporada. Cuenta con cierre de apertura total de fácil acceso y base con jareta de amarre para que no se deslice con ráfagas de viento.",
    medidasSugeridas: [
      "Tipo Hongo estándar (Base 50 cm, Sombrero 85 cm, Alto 225 cm)",
      "Tipo Pirámide de vidrio (55 x 55 x 228 cm)",
    ],
    caracteristicas: [
      "Cremallera frontal resistente de punta a punta",
      "Repelente al agua y al polvo fino",
      "Costuras náuticas de alta tensión",
    ],
    precioDesde: "$690 MXN",
    imagen:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    tiempoEntrega: "24 a 48 hrs",
  },

  // --- CATEGORÍA 3: VEHÍCULOS Y MOTOS ---
  {
    id: "cubierta-sedan-suv",
    nombre: "Cubierta Automotriz Afelpada para Sedán y SUV",
    categoria: "vehiculos",
    categoriaLabel: "Vehículos y Motos",
    descripcionCorta:
      "Capa externa impermeable con interior de algodón afelpado que cuida la pintura y el barniz.",
    descripcionLarga:
      "La protección definitiva contra el sol mexicano, lluvia ácida, salitre marino y rayones de gatos. Confeccionada con patrón milimétrico según la silueta de tu vehículo. Incluye bolsas para espejos retrovisores, cierre lateral para ingresar al auto sin quitar la funda y cinchas inferiores con broche para viento.",
    medidasSugeridas: [
      "Sedán Mediano (Versa, Civic, Jetta)",
      "Sedán Grande (Accord, Camry, Serie 3)",
      "SUV Compacta (HR-V, Kicks, Tracker)",
      "SUV Familiar (CR-V, RAV4, CX-5, Tiguan)",
      "SUV Grande / 3 filas (Explorer, Tahoe, Suburban)",
    ],
    caracteristicas: [
      "Capa interior de algodón afelpado suave anti-rayones",
      "Capa exterior vinílica impermeable con filtro UV 50+",
      "Cierre lateral de acceso a la puerta del conductor",
      "Bolsas para espejos retrovisores y elásticos en fascia",
      "Correas con broche clic bajo chasis antiviento",
    ],
    precioDesde: "$1,450 MXN",
    imagen:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
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
      "Protege tanto la cabina como la batea de pickups de trabajo o de lujo (Hilux, Tacoma, Ranger, Lobo F-150, Silverado, RAM). Fabricada en lona pesada calibre 600D resistente a desgarres y rayos solares implacables.",
    medidasSugeridas: [
      "Pickup Mediana Doble Cabina (Hilux, Tacoma, Frontier)",
      "Pickup Grande Cabina Regular (F-150, Cheyenne)",
      "Pickup Grande Doble Cabina (RAM 1500/2500, Lobo, Silverado)",
    ],
    caracteristicas: [
      "Ajuste para batea con rollbar o caja seca",
      "Refuerzo en puntos de fricción y esquinas",
      "Ojales reforzados para candado de seguridad",
      "100% resistente al agua y agentes químicos",
    ],
    precioDesde: "$1,850 MXN",
    imagen:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=800&q=80",
    tiempoEntrega: "48 hrs",
  },
  {
    id: "funda-motocicleta",
    nombre: "Funda Térmica e Impermeable para Moto y Cuatrimoto",
    categoria: "vehiculos",
    categoriaLabel: "Vehículos y Motos",
    descripcionCorta:
      "Panel térmico inferior que tolera el calor del tubo de escape y orificios para candado.",
    descripcionLarga:
      "Protección compacta y ultra resistente para motos deportivas, scooters, chopper, touring o cuatrimotos (ATV). No se derrite con el tubo de escape tibio gracias a sus paneles térmicos de protección en la zona baja.",
    medidasSugeridas: [
      "Scooter / 125-250cc (200 x 90 x 100 cm)",
      "Deportiva / Naked 300-900cc (220 x 95 x 110 cm)",
      "Touring / Adventure con Maletas (245 x 105 x 125 cm)",
      "Cuatrimoto ATV (220 x 120 x 115 cm)",
    ],
    caracteristicas: [
      "Panel térmico anticalor de escape",
      "Ojales de aluminio delanteros para candado en U",
      "Elásticos perimetrales de tensión continua",
      "Incluye bolsa de transporte compacta",
    ],
    precioDesde: "$590 MXN",
    imagen:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    tiempoEntrega: "24 hrs",
  },

  // --- CATEGORÍA 4: FUNDAS PERSONALIZADAS A MEDIDA ---
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
      "Medidas exactas según plano técnico proporcionado",
    ],
    caracteristicas: [
      "Lona vinílica impermeable uso rudo 18 oz",
      "Aperturas con solapas de inspección rápida",
      "Ojillos perimetrales galvanizados cada 40 cm",
      "Opciones retardantes al fuego (opcional)",
    ],
    precioDesde: "Cotización a medida",
    imagen:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    popular: true,
    tiempoEntrega: "3 a 5 días hábiles",
  },
  {
    id: "personalizada-embarcaciones",
    nombre: "Funda Náutica para Lanchas, Jetski y Motores Marinos",
    categoria: "personalizadas",
    categoriaLabel: "Fundas Personalizadas",
    descripcionCorta:
      "Telas marinas transpirables resistentes a salitre, sol implacable y remolque en carretera.",
    descripcionLarga:
      "Confeccionamos cubiertas de fondeo y de viaje para motos acuáticas, lanchas de pesca, consolas centrales y capotas para motores fuera de borda (Yamaha, Mercury, Suzuki). Hilo de pespunte 100% náutico resistente a la sal marina.",
    medidasSugeridas: [
      "Moto de agua Jet Ski / Sea-Doo (2 a 3 plazas)",
      "Capucha de motor fuera de borda (40 HP a 300 HP)",
      "Lancha de proa abierta 16 a 24 pies",
    ],
    caracteristicas: [
      "Lona acrílica tipo Sunbrella / Oxford marino",
      "Cinchas de amarre reforzadas aptas para carretera",
      "Resistencia inigualable a rayos UV y moho",
    ],
    precioDesde: "Cotización a medida",
    imagen:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    tiempoEntrega: "4 a 6 días hábiles",
  },
  {
    id: "personalizada-diseno-especial",
    nombre: "Funda para Muebles Especiales, Jacuzzis y Equipamiento Médico",
    categoria: "personalizadas",
    categoriaLabel: "Fundas Personalizadas",
    descripcionCorta:
      "Patronaje artesanal para cualquier silueta geométrica, equipo delicado o mobiliario de autor.",
    descripcionLarga:
      "¿Tienes un mueble curvado, un jacuzzi exterior, una mesa de billar, o un equipo de laboratorio sensible al polvo? Nuestro equipo de maestros confeccionistas en Guadalajara desarrolla el patrón exclusivo que garantiza una cobertura impecable y estética.",
    medidasSugeridas: [
      "Jacuzzi / Tina de hidromasaje exterior",
      "Mesa de billar o ping pong",
      "Cualquier especificación milimétrica",
    ],
    caracteristicas: [
      "Levantamiento de medidas guiado por videollamada o plantilla",
      "Acabados invisibles o vivos en color contrastante",
      "Acolchado protector interno disponible",
      "Garantía de ajuste 100% exacto",
    ],
    precioDesde: "Cotización a medida",
    imagen:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    tiempoEntrega: "3 a 5 días hábiles",
  },
];
