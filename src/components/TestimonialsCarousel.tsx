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
  logo?: string;
  quote: string;
  stars: number;
  highlight: string;
  type: "comercial" | "residencial";
}

export const CLIENT_LOGOS = [
  { name: "Universidad de Guadalajara", logo: "/assets/images/LogosClientes/UDG.jpeg" },
  { name: "Laboratorios PiSA Farmacéutica", logo: "/assets/images/LogosClientes/PiSA.jpeg" },
  { name: "Hospital Ángeles", logo: "/assets/images/LogosClientes/HospitalAngeles.jpeg" },
  { name: "INAH (Antropología e Historia)", logo: "/assets/images/LogosClientes/INAH.jpeg" },
  { name: "Boletomóvil", logo: "/assets/images/LogosClientes/Boletomovil.jpeg" },
  { name: "Castellón Pianos", logo: "/assets/images/LogosClientes/CastellonPianos.jpeg" },
  { name: "Lorsa", logo: "/assets/images/LogosClientes/Lorsa.jpeg" },
  { name: "Lonas Zamora", logo: "/assets/images/LogosClientes/LonasZamora.jpeg" },
  { name: "BDI", logo: "/assets/images/LogosClientes/BDI.jpeg" },
  { name: "Venteks", logo: "/assets/images/LogosClientes/Venteks.jpeg" },
  { name: "Pare", logo: "/assets/images/LogosClientes/Pare.jpeg" },
  { name: "Natulier", logo: "/assets/images/LogosClientes/Natulier.jpeg" },
  { name: "Huber", logo: "/assets/images/LogosClientes/Huber.jpeg" },
  { name: "Cuca y Lupe", logo: "/assets/images/LogosClientes/Cuca y lupe.jpeg" },
];

const testimonials: Testimonial[] = [
  {
    author: "Alejandro Castellón",
    role: "Dirección General",
    organization: "Castellón Pianos (Desde 1919)",
    logo: "/assets/images/LogosClientes/CastellonPianos.jpeg",
    highlight: "Más de 15 años de relación comercial continua",
    quote:
      "El giro de nuestro negocio 'Castellón Pianos' es la venta de Pianos e instrumentos de Teclado, mantenemos relación con la Sra. Imelda desde hace aproximadamente 15 años, es nuestro proveedor de confección de fundas para los instrumentos musicales; ella es una persona profesional y confiable y no hemos tenido contratiempos en el tiempo de conocerla.",
    stars: 5,
    type: "comercial",
  },
  {
    author: "Carlos Latuff",
    role: "Cliente Comercial",
    organization: "Procesos Industrializables Creativos / HUBER",
    logo: "/assets/images/LogosClientes/Huber.jpeg",
    highlight: "Atención al cliente, tiempos y calidad",
    quote:
      "Excelente atención al cliente, tiempos de entrega y calidad de sus productos. Siempre es un gusto trabajar con proveedores tan comprometidos con sus clientes.",
    stars: 5,
    type: "comercial",
  },
  {
    author: "Amorita",
    role: "Socio Comercial",
    organization: "Lonas Zamora",
    logo: "/assets/images/LogosClientes/LonasZamora.jpeg",
    highlight: "Trato amable, cálido y excelente calidad",
    quote:
      "Excelente proveedor! Trato amable, cálido y cordial. Fundas para auto, moto y confecciones especiales con excelente calidad!",
    stars: 5,
    type: "comercial",
  },
  {
    author: "José Ortega",
    role: "Cliente Comercial",
    organization: "Acuarios Michin",
    highlight: "Muy buen material y atención al cliente",
    quote:
      "Muy buen material y atención al cliente.",
    stars: 5,
    type: "comercial",
  },
  {
    author: "Carlos González",
    role: "Alianza Comercial Corporativa",
    organization: "Lorsa",
    logo: "/assets/images/LogosClientes/Lorsa.jpeg",
    highlight: "Alianza y recomendación comercial institucional",
    quote:
      "Alianza y recomendación comercial de respaldo corporativo e institucional con Fundas y Cubiertas Martín del Campo.",
    stars: 5,
    type: "comercial",
  },
  {
    author: "Ricardo López",
    role: "Cliente Particular",
    organization: "Múltiples Confecciones Especiales",
    highlight: "Fundas a medida: televisores y aparatos de ejercicio",
    quote:
      "Quiero agradecer muchísimo por su trabajo de ejecución de diferentes fundas solicitadas a medidas especiales desde la funda de televisores hasta la de aparatos para hacer ejercicios de los cuales estoy muy conforme.",
    stars: 5,
    type: "residencial",
  },
  {
    author: "Pilar Morfín",
    role: "Hogar y Familia",
    organization: "Cliente Residencial",
    highlight: "Facilitan el quehacer diario protegiendo el hogar",
    quote:
      "Cuando conocí los productos que fundas Martín del Campo ofrecen para cualquier artículo que necesito guardar, han hecho la diferencia en mi quehacer como ama de casa.... gracias por facilitarme la vida.",
    stars: 5,
    type: "residencial",
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
                    {current.logo ? (
                      <div className="w-14 h-14 p-1 rounded-2xl bg-white border border-border-light shadow-sm flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img
                          src={current.logo}
                          alt={current.organization || current.author}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand to-brand-light text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-brand/20 flex-shrink-0">
                        {current.author.charAt(0)}
                      </div>
                    )}
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

                  <div className="flex items-center gap-2">
                    {current.logo && (
                      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-brand/5 text-brand rounded-full border border-brand/10 text-xs font-bold">
                        <span>Cliente Verificado</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 w-fit">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Calificación 5 Estrellas</span>
                    </div>
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

        {/* Franja de Marcas y Clientes Satisfechos */}
        <div className="mt-14 max-w-6xl mx-auto pt-10 border-t border-border-light">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-text-muted bg-surface-gray px-4 py-1.5 rounded-full border border-border-light">
              Empresas e Instituciones que confían en Fundas Martín del Campo
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 items-center">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="w-full h-16 p-2 bg-white rounded-2xl border border-border-light shadow-xs hover:shadow-md hover:border-accent/40 transition-all flex items-center justify-center group"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-11 max-w-full object-contain grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
