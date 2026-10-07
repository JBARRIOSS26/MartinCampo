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
      id="empresa"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-surface-gray"
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
          <span className="inline-block px-4 py-1.5 bg-brand/5 text-brand text-xs font-bold tracking-widest uppercase rounded-full mb-4">
            Diferenciadores
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-3 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Más de 15 años perfeccionando el arte de la protección textil. Cada
            funda es una pieza de ingeniería artesanal.
          </p>
        </motion.div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {valueProps.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl border border-border-light p-7 transition-all duration-300 hover:shadow-xl hover:shadow-brand/5 hover:border-brand/15"
            >
              <div
                className={`w-14 h-14 ${prop.color} rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
              >
                <prop.icon className={`w-7 h-7 ${prop.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2.5">
                {prop.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand rounded-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <metric.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">
                    {metric.label}
                  </p>
                  <p className="text-xs text-white/60 mt-0.5">{metric.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
