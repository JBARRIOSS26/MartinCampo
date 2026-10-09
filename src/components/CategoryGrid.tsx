"use client";

import { motion, type Variants } from "framer-motion";
import {
  WashingMachine,
  Car,
  Home,
  Ruler,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import type { CategoryId } from "@/data/products";

interface CategoryItem {
  id: CategoryId;
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  color: string;
  iconBg: string;
  iconColor: string;
  cta: string;
  ctaIcon?: React.ElementType;
}

const categories: CategoryItem[] = [
  {
    id: "lavadoras",
    title: "Lavadoras y Secadoras",
    description: "Protección especializada para tu línea blanca con ajuste perfecto.",
    icon: WashingMachine,
    tags: ["Frontal", "Superior", "Torres"],
    color: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    cta: "Ver modelos",
  },
  {
    id: "vehiculos",
    title: "Vehículos y Motos",
    description: "Cubiertas de grado marino que protegen la carrocería y pintura.",
    icon: Car,
    tags: ["Sedán / SUV", "Pickups", "Motocicletas"],
    color: "from-emerald-500/10 to-emerald-600/5",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    cta: "Ver modelos",
  },
  {
    id: "hogar",
    title: "Hogar y Jardín",
    description: "Fundas resistentes al clima para tu espacio exterior e interior.",
    icon: Home,
    tags: ["Asadores", "Futbolito y Billar", "Pantallas TV", "Mesas"],
    color: "from-violet-500/10 to-violet-600/5",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    cta: "Ver modelos",
  },
  {
    id: "personalizadas",
    title: "Personalizadas a Medida",
    description: "Fabricamos la funda exacta que necesitas para cualquier equipo.",
    icon: Ruler,
    tags: ["Medición Exprés", "Uso Rudo", "Garantía"],
    color: "from-orange-500/10 to-orange-600/5",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    cta: "Cotizar a medida",
    ctaIcon: Sparkles,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CategoryGrid() {
  const handleSelectCategory = (catId: CategoryId) => {
    // Despachar evento para que CatalogSection filtre de inmediato
    window.dispatchEvent(
      new CustomEvent("selectCategory", { detail: catId })
    );

    // Desplazamiento suave hacia la sección de productos
    const section = document.getElementById("catalogo-productos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="catalogo" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-orange-50/30 via-white to-cyan-50/30 border-b border-orange-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 border border-orange-200 text-accent text-xs font-bold tracking-widest uppercase rounded-full mb-4 shadow-xs">
            Catálogo Especializado
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand tracking-tight">
            Nuestras Soluciones{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-cyan-600 bg-clip-text text-transparent">
              de Protección
            </span>
          </h2>
          <p className="mt-3 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Fundas y cubiertas diseñadas para proteger lo que más importa. Haz clic en cualquier
            categoría para desglosar sus modelos y medidas.
          </p>
        </motion.div>

        {/* Grid de Tarjetas Coloridas con la paleta de la marca */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat, idx) => {
            const CtaIcon = cat.ctaIcon || ArrowRight;
            // Estilos específicos para distribuir los 3 colores del logo
            const cardStyles = [
              {
                border: "border-sky-200 hover:border-sky-400 hover:shadow-sky-500/10",
                bg: "bg-gradient-to-b from-sky-50/80 via-white to-white",
                bar: "bg-gradient-to-r from-cyan-500 to-sky-600",
                tagBg: "bg-sky-50 text-sky-800 border-sky-200/60",
                cta: "text-sky-600 group-hover:text-sky-700",
              },
              {
                border: "border-cyan-200 hover:border-cyan-400 hover:shadow-cyan-500/10",
                bg: "bg-gradient-to-b from-cyan-50/80 via-white to-white",
                bar: "bg-gradient-to-r from-cyan-400 to-teal-500",
                tagBg: "bg-cyan-50 text-cyan-800 border-cyan-200/60",
                cta: "text-cyan-600 group-hover:text-cyan-700",
              },
              {
                border: "border-orange-200 hover:border-orange-400 hover:shadow-orange-500/10",
                bg: "bg-gradient-to-b from-orange-50/80 via-white to-white",
                bar: "bg-gradient-to-r from-orange-500 to-amber-500",
                tagBg: "bg-orange-50 text-orange-800 border-orange-200/60",
                cta: "text-accent group-hover:text-accent-hover",
              },
              {
                border: "border-amber-200 hover:border-amber-400 hover:shadow-amber-500/10",
                bg: "bg-gradient-to-b from-amber-50/80 via-white to-white",
                bar: "bg-gradient-to-r from-brand to-cyan-600",
                tagBg: "bg-amber-50 text-amber-900 border-amber-200/60",
                cta: "text-brand group-hover:text-accent",
              },
            ][idx % 4];

            return (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => handleSelectCategory(cat.id)}
                className={`group relative rounded-3xl p-6 cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl select-none border ${cardStyles.border} ${cardStyles.bg} flex flex-col justify-between`}
              >
                {/* Barra de color superior en cada tarjeta */}
                <div className={`h-1.5 w-14 rounded-full ${cardStyles.bar} mb-5`} />

                <div>
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${cat.iconBg} rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                  >
                    <cat.icon className={`w-7 h-7 ${cat.iconColor}`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-extrabold text-brand mb-2 group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-md border ${cardStyles.tagBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <div className={`pt-3 border-t border-black/[0.04] flex items-center justify-between text-sm font-bold ${cardStyles.cta} transition-colors`}>
                  <div className="flex items-center gap-1.5">
                    <CtaIcon className="w-4 h-4" />
                    <span>{cat.cta}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
