"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

interface Testimonial {
  author: string;
  role: string;
  organization?: string;
  quote: string;
  stars: number;
  highlight: string;
  type: "comercial" | "residencial";
}

const testimonials: Testimonial[] = [
  {
    author: "Carlos Latuff",
    role: "Cliente Comercial",
    highlight: "Excelente atención, tiempos de entrega y calidad",
    quote:
      "La calidad de los materiales y la confección superaron nuestras expectativas. Tienen una excelente atención al cliente y cumplen cabalmente con los tiempos de entrega pactados. Muy recomendados.",
    stars: 5,
    type: "comercial",
  },
  {
    author: "José Ortega",
    role: "Dirección de Operaciones",
    organization: "Acuarios Michin",
    highlight: "Muy buen material de alta resistencia y atención impecable",
    quote:
      "En Acuarios Michin requerimos materiales de alta resistencia ante la humedad constante y uso continuo. El equipo de Fundas Martín del Campo nos brindó una atención sobresaliente y un material de primera calidad.",
    stars: 5,
    type: "comercial",
  },
  {
    author: "Ricardo López",
    role: "Cliente Residencial & Deportivo",
    highlight: "Fundas a medida exacta desde televisores hasta aparatos de ejercicio",
    quote:
      "Agradezco enormemente la precisión en la ejecución de mis fundas a medida. Les encargué desde la cubierta para la pantalla de la terraza hasta fundas para aparatos de ejercicio; todas ajustaron al milímetro.",
    stars: 5,
    type: "residencial",
  },
  {
    author: "Lonas Zamora / Amorita",
    role: "Socio Comercial",
    organization: "Lonas Zamora",
    highlight: "Trato sumamente amable y calidad insuperable en fundas para auto y moto",
    quote:
      "Destaco el trato amable y la seriedad con la que trabajan. La calidad y resistencia de sus fundas para autos y motocicletas son inmejorables en el mercado nacional.",
    stars: 5,
    type: "comercial",
  },
  {
    author: "Alejandro Castellón",
    role: "Dirección General",
    organization: "Castellón Pianos",
    highlight: "9 años de relación comercial proveyendo fundas para teclados y pianos",
    quote:
      "Llevamos más de 9 años de relación comercial sólida con Fundas Martín del Campo, quienes nos proveen fundas protectoras para instrumentos musicales de teclado y pianos con una confección artesanal impecable.",
    stars: 5,
    type: "comercial",
  },
  {
    author: "Pilar Morfín",
    role: "Hogar y Familia",
    highlight: "Facilitan el quehacer diario protegiendo los electrodomésticos del hogar",
    quote:
      "Como ama de casa, sus fundas me facilitan muchísimo el día a día. Mi lavadora está en el patio y con esta funda se mantiene como nueva, sin polvo, sin sarro y sin maltratarse por el sol.",
    stars: 5,
    type: "residencial",
  },
  {
    author: "Carlos González",
    role: "Gerencia Corporativa",
    organization: "Lorsa",
    highlight: "Testimonio corporativo: durabilidad comprobada y confiabilidad total",
    quote:
      "En Lorsa confiamos plenamente en las cubiertas de Martín del Campo para proyectos de gran volumen. Su capacidad de confección a medida y el estándar riguroso de sus telas avalan su profesionalismo.",
    stars: 5,
    type: "comercial",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<"todos" | "comercial" | "residencial">("todos");

  const filteredList = testimonials.filter(
    (t) => filter === "todos" || t.type === filter
  );

  // Auto avance cada 7 segundos si no interactúa
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredList.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [filteredList.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredList.length);
  };

  const current = filteredList[currentIndex] || filteredList[0];

  return (
    <section className="py-20 sm:py-28 bg-surface-gray border-t border-border-light relative overflow-hidden">
      {/* Resplandor decorativo con colores del logo */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-teal/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-4 shadow-xs">
            <HeartHandshake className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest">
              Experiencias y Casos de Éxito
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand tracking-tight mb-4">
            Clientes Satisfechos y{" "}
            <span className="bg-gradient-to-r from-accent via-orange-500 to-teal bg-clip-text text-transparent">
              Socios Comerciales
            </span>
          </h2>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Historias y testimonios reales de empresas, instituciones y familias que protegen sus
            equipos con la confección y durabilidad de <strong>Martín del Campo</strong>.
          </p>

          {/* Filtros de Testimonios */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {(
              [
                { id: "todos", label: "Todos los Testimonios" },
                { id: "comercial", label: "Empresas e Instituciones" },
                { id: "residencial", label: "Clientes Residenciales" },
              ] as const
            ).map((btn) => (
              <button
                key={btn.id}
                onClick={() => {
                  setFilter(btn.id);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === btn.id
                    ? "bg-accent text-white shadow-md shadow-accent/25"
                    : "bg-white text-text-secondary hover:text-brand border border-border-light hover:border-accent/40"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Único Recuadro Dinámico de Testimonio (Limpio y sin duplicados) */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-border-light ring-1 ring-black/[0.03]">
            <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-20 h-20 text-accent/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`${filter}-${currentIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Estrellas y Highlight */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
                    <div className="flex items-center">
                      {[...Array(current.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4.5 h-4.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-amber-900">5.0 / 5.0</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-wider border border-accent/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    {current.highlight}
                  </span>
                </div>

                {/* Cita Textual */}
                <blockquote className="text-lg sm:text-2xl font-medium text-text-primary leading-relaxed italic">
                  "{current.quote}"
                </blockquote>

                {/* Autor y Organización */}
                <div className="pt-5 border-t border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand to-brand-light text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-brand/20">
                      {current.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-brand text-base sm:text-lg leading-tight">
                        {current.author}
                      </h4>
                      <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
                        {current.role}
                        {current.organization && (
                          <span className="font-semibold text-accent">
                            {" "}
                            • {current.organization}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 w-fit">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Testimonio Verificado</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controles de Navegación del Carrusel */}
            <div className="mt-8 flex items-center justify-between pt-6 border-t border-border-light">
              <div className="flex items-center gap-1.5">
                {filteredList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx
                        ? "w-8 bg-accent"
                        : "w-2.5 bg-border-light hover:bg-brand/30"
                    }`}
                    aria-label={`Ir al testimonio ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Testimonio anterior"
                  className="w-10 h-10 rounded-xl bg-surface-gray hover:bg-accent hover:text-white text-text-secondary flex items-center justify-center transition-all cursor-pointer border border-border-light"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Testimonio siguiente"
                  className="w-10 h-10 rounded-xl bg-surface-gray hover:bg-accent hover:text-white text-text-secondary flex items-center justify-center transition-all cursor-pointer border border-border-light"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
