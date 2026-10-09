"use client";

import { motion } from "framer-motion";
import {
  Layers,
  ShieldCheck,
  Crosshair,
  Flag,
  Clock,
  Truck,
  FileText,
} from "lucide-react";

const valueProps = [
  {
    icon: Layers,
    title: "Material de Máxima Calidad",
    description:
      "Telas vinílicas de grado marino y poliéster Oxford 600D con pespuntes reforzados en hilo náutico. Resistencia superior al desgaste.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Protección Total (Polvo y Clima)",
    description:
      "Bloqueo UV certificado, resistencia a lluvias torrenciales, salitre costero y acumulación de polvo. Tus bienes siempre protegidos.",
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Crosshair,
    title: "Ajuste Perfecto a la Medida",
    description:
      "Patronaje específico por modelo y marca. Broches de presión industriales, elásticos antiviento y velcro de alta adherencia.",
    color: "bg-violet-100",
    iconColor: "text-violet-600",
  },
];

const metrics = [
  {
    icon: Flag,
    label: "100% Hecho en México",
    sublabel: "Guadalajara, Jalisco",
  },
  {
    icon: Clock,
    label: "15+ Años Experiencia",
    sublabel: "Confección especializada",
  },
  {
    icon: Truck,
    label: "24/48 hrs Despacho",
    sublabel: "Exprés nacional",
  },
  {
    icon: FileText,
    label: "CFDI 4.0",
    sublabel: "Facturación inmediata",
  },
];

export default function ValuePropsSection() {
  return (
    <section
      id="diferenciadores"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-surface-gray border-t border-border-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100/80 border border-orange-200 text-accent text-xs font-bold tracking-widest uppercase rounded-full mb-4">
            Diferenciadores Clave
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand tracking-tight">
            ¿Por qué elegir Martín del Campo?
          </h2>
          <p className="mt-3 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Más de 15 años perfeccionando el patronaje y confección de cubiertas protectoras para intemperie.
          </p>
        </motion.div>

        {/* Value Cards Coloridas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((prop, i) => {
            const themes = [
              {
                border: "border-sky-200/90 hover:border-sky-400 hover:shadow-sky-500/10",
                bg: "bg-gradient-to-b from-sky-50/80 via-white to-white",
                bar: "bg-gradient-to-r from-blue-600 to-cyan-500",
              },
              {
                border: "border-cyan-200/90 hover:border-cyan-400 hover:shadow-cyan-500/10",
                bg: "bg-gradient-to-b from-cyan-50/80 via-white to-white",
                bar: "bg-gradient-to-r from-cyan-400 to-teal-500",
              },
              {
                border: "border-orange-200/90 hover:border-orange-400 hover:shadow-orange-500/10",
                bg: "bg-gradient-to-b from-orange-50/80 via-white to-white",
                bar: "bg-gradient-to-r from-orange-500 to-amber-500",
              },
            ][i % 3];

            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`group rounded-3xl border ${themes.border} ${themes.bg} p-7 transition-all duration-300 hover:shadow-xl shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <div className={`h-1.5 w-12 rounded-full ${themes.bar} mb-5`} />
                  <div
                    className={`w-14 h-14 ${prop.color} rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                  >
                    <prop.icon className={`w-7 h-7 ${prop.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-extrabold text-brand mb-2.5">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
