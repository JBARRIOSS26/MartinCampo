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
    tags: ["Asadores", "Salas Terraza", "Calentadores"],
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
    <section id="catalogo" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase rounded-full mb-4">
            Catálogo Especializado
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight">
            Nuestras Soluciones
          </h2>
          <p className="mt-3 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Fundas y cubiertas diseñadas para proteger lo que más importa. Haz clic en cualquier
            categoría para desglosar sus modelos y medidas.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {categories.map((cat) => {
            const CtaIcon = cat.ctaIcon || ArrowRight;
            return (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => handleSelectCategory(cat.id)}
                className="group relative bg-white border border-border-light rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-brand/5 hover:border-brand/20 select-none"
              >
                {/* Gradient bg on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 ${cat.iconBg} rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <cat.icon className={`w-6 h-6 ${cat.iconColor}`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-brand transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] font-medium bg-surface-gray text-text-secondary rounded-md border border-border-light/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:text-accent-hover transition-colors">
                    <CtaIcon className="w-3.5 h-3.5" />
                    <span>{cat.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
