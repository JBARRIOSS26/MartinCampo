"use client";

import { motion } from "framer-motion";
import {
  Target,
  Compass,
  ShieldCheck,
  Users,
  Lightbulb,
  CheckCircle,
  Gem,
  Award,
} from "lucide-react";

const corporateValues = [
  {
    icon: ShieldCheck,
    title: "Calidad Garantizada",
    description:
      "Seleccionamos rigurosamente telas impermeables de grado marino y costuras con hilo náutico que resisten intemperie extrema sin deteriorarse.",
  },
  {
    icon: Users,
    title: "Orientación al Cliente",
    description:
      "Escuchamos activamente cada necesidad particular para brindar asesoría técnica y confección que resuelva con precisión tus requerimientos.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Continua",
    description:
      "Exploramos continuamente formulaciones textiles, herrajes y patrones que eleven la funcionalidad y practicidad de cada funda.",
  },
  {
    icon: CheckCircle,
    title: "Confiabilidad",
    description:
      "Tiempos de entrega certeros, facturación transparente y el respaldo de más de 15 años de trayectoria sólida en la industria mexicana.",
  },
  {
    icon: Gem,
    title: "Orgullo por el Detalle",
    description:
      "Cuidado artesanal en cada corte, vivo perimetral, ojal y remate, honrando la tradición de confección mexicana de alta gama.",
  },
];

export default function CompanyMissionVision() {
  return (
    <section id="empresa" className="py-20 sm:py-28 bg-white border-t border-border-light relative overflow-hidden">
      {/* Elemento de fondo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Institucional */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/5 border border-brand/10 mb-4">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold text-brand uppercase tracking-widest">
              Identidad Corporativa
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand tracking-tight mb-5">
            Compromiso con la Excelencia Textil
          </h2>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            En <strong>Martín del Campo Fundas y Cubiertas</strong> concebimos cada protección como un
            escudo duradero para tus inversiones. Nuestro taller en Guadalajara combina técnica artesanal,
            materiales de vanguardia y atención personalizada.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Grid de Misión y Visión (Tarjetas Sobrias y Elegantes) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-surface-gray rounded-3xl p-8 sm:p-10 border border-border-light hover:border-brand/30 transition-all duration-300 shadow-sm hover:shadow-xl group"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand text-white flex items-center justify-center mb-6 shadow-md shadow-brand/20 group-hover:scale-105 transition-transform">
              <Target className="w-7 h-7 text-accent" />
            </div>

            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
              Nuestro Propósito
            </span>
            <h3 className="text-2xl font-extrabold text-brand tracking-tight mb-4">
              Misión
            </h3>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Continuar con la búsqueda constante de nuevos y mejores materiales que aporten cualidades
              significativas a nuestros productos, manteniendo la resistencia y durabilidad esperadas.
            </p>

            <div className="mt-8 pt-6 border-t border-border-light/70 flex items-center gap-3 text-xs font-semibold text-brand">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Materiales certificados • Larga vida útil</span>
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-surface-gray rounded-3xl p-8 sm:p-10 border border-border-light hover:border-brand/30 transition-all duration-300 shadow-sm hover:shadow-xl group"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand text-white flex items-center justify-center mb-6 shadow-md shadow-brand/20 group-hover:scale-105 transition-transform">
              <Compass className="w-7 h-7 text-accent" />
            </div>

            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
              Hacia Dónde Vamos
            </span>
            <h3 className="text-2xl font-extrabold text-brand tracking-tight mb-4">
              Visión
            </h3>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Ser una empresa reconocida a nivel nacional por la excelencia ofrecida en cada uno de
              nuestros productos y su capacidad de cumplir con las necesidades particulares de nuestros clientes.
            </p>

            <div className="mt-8 pt-6 border-t border-border-light/70 flex items-center gap-3 text-xs font-semibold text-brand">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Cobertura en toda la República Mexicana</span>
            </div>
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* Valores Corporativos (Tarjetas Minimalistas) */}
        {/* ======================================================== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
              Pilares Fundamentales
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand tracking-tight">
              Nuestros Valores Corporativos
            </h3>
            <p className="text-sm text-text-secondary mt-2">
              Principios que guían cada trazo, costura y conversación con nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateValues.slice(0, 3).map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-surface-gray rounded-2xl p-6 sm:p-8 border border-border-light/80 hover:border-brand/25 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-border-light flex items-center justify-center mb-5 text-brand shadow-sm">
                  <val.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-brand mb-2.5">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {corporateValues.slice(3, 5).map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx + 3) * 0.1 }}
                className="bg-surface-gray rounded-2xl p-6 sm:p-8 border border-border-light/80 hover:border-brand/25 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-border-light flex items-center justify-center mb-5 text-brand shadow-sm">
                  <val.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-brand mb-2.5">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
