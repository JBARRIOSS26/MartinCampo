"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  ShieldCheck,
  Droplets,
  Crosshair,
  MessageCircle,
  WashingMachine,
  Flame,
  Car,
  Tv,
  Bike,
  ShoppingBag,
  Trophy,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "+15", label: "años de taller" },
  { value: "100%", label: "impermeable" },
  { value: "Hecho", label: "en México" },
];

const categoriasMarquee = [
  { icon: WashingMachine, label: "Lavadoras y Secadoras" },
  { icon: Flame, label: "Asadores" },
  { icon: Trophy, label: "Futbolitos y Billares" },
  { icon: Tv, label: "Pantallas" },
  { icon: Car, label: "Autos y Pickups" },
  { icon: Bike, label: "Motos y Bicicletas" },
  { icon: ShoppingBag, label: "Bolsas y Portatrajes" },
];

// Productos reales que "flotan" alrededor de la imagen principal
const productosFlotantes = [
  {
    src: "/assets/images/Lavadoras y Secadoras/FundaParaCargaFrontal_AzulMarino_newempam_01.webp",
    nombre: "Carga Frontal",
    detalle: "Grabado azul marino",
    className: "-left-6 xl:-left-14 top-[38%]",
    delay: 0.9,
    floatDuration: 5,
  },
  {
    src: "/assets/images-wm/Hogar/Futbolito/Futbolito portada.webp",
    nombre: "Futbolito",
    detalle: "Calibre 6 impermeable",
    className: "-right-4 xl:-right-10 top-6",
    delay: 1.05,
    floatDuration: 6,
  },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-brand text-white"
    >
      {/* ====== Fondo con profundidad ====== */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,#1d4a75_0%,#0f2942_45%,#081a2c_100%)]" />

        {/* Orbes de luz animados (colores del logotipo) */}
        <motion.div
          className="absolute -top-40 -right-32 w-[560px] h-[560px] rounded-full bg-accent/30 blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -left-40 w-[620px] h-[620px] rounded-full bg-teal/25 blur-[130px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Retícula técnica con desvanecido */}
        <div className="absolute inset-0 hero-grid opacity-[0.12]" />

        {/* Hexágonos decorativos (forma del logotipo) */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute top-20 left-[46%] w-24 h-24 text-teal/30 hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <polygon points="50,3 93,27 93,73 50,97 7,73 7,27" fill="none" stroke="currentColor" strokeWidth="3" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute bottom-32 right-[44%] w-14 h-14 text-accent/40 hidden lg:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <polygon points="50,3 93,27 93,73 50,97 7,73 7,27" fill="currentColor" />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-24 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">
          {/* ====== Columna izquierda: mensaje ====== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-7"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-teal opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-teal" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-white/90">
                Confección textil de alta gama hecha en México
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
              Fundas y Cubiertas
              <br />
              <span className="hero-gradient-text">de Alta Resistencia</span>
              <br />
              <span className="relative inline-block">
                Hechas a la Medida
                <motion.svg
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute left-0 -bottom-2 w-full h-3 text-teal"
                  initial={{ pathLength: 0 }}
                >
                  <motion.path
                    d="M2 9 C 80 2, 220 2, 298 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                  />
                </motion.svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-9 max-w-xl">
              Protección 100% impermeable con telas de gama alta calibre 6 y vinipiel afelpado.
              Diseñadas para lavadoras, asadores, futbolitos, billares, pantallas y vehículos.
              Cotización personalizada directa por WhatsApp.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <motion.a
                id="hero-cta-catalogo"
                href="#catalogo-productos"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-colors shadow-lg shadow-accent/30 overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="relative">Explorar Catálogo</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                id="hero-cta-whatsapp"
                href="https://wa.me/5213314008921?text=Hola,%20quisiera%20cotizar%20una%20funda%20a%20la%20medida."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-[#25d366] border border-white/20 hover:border-[#25d366] backdrop-blur-md text-white font-bold rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Cotizar por WhatsApp</span>
              </motion.a>
            </div>

            {/* Métricas */}
            <div className="flex items-stretch gap-6 sm:gap-8 mb-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                  className={i > 0 ? "pl-6 sm:pl-8 border-l border-white/15" : ""}
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-white leading-none">
                    {s.value}
                  </p>
                  <p className="text-xs sm:text-sm text-white/55 mt-1.5">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Prueba social */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold">4.9/5</span>
                <span className="text-xs text-white/55">valoración de clientes</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-white/70">
                <ShieldCheck className="w-4 h-4 text-teal" />
                <span className="font-medium">Garantía directa del fabricante</span>
              </div>
            </div>
          </motion.div>

          {/* ====== Columna derecha: vitrina visual ====== */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative lg:pl-6"
          >
            {/* Marco con borde degradado */}
            <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-accent via-white/20 to-teal shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[4/3] rounded-[calc(2rem-2px)] overflow-hidden bg-white p-4 sm:p-6 group flex items-center justify-center">
                <img
                  src="/assets/images/Logo/portada auto 8.png"
                  alt="Fundas y cubiertas de alta protección automotriz y hogar Martín del Campo"
                  className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-700 select-none"
                />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 pointer-events-none">
                  <div className="bg-brand/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shadow-lg">
                    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-accent">
                      <Sparkles className="w-3 h-3" />
                      Línea Automotriz & Hogar
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-white drop-shadow-sm mt-0.5">
                      Protección Térmica e Impermeable
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjetas de producto flotantes (fondo blanco, foto real) */}
            {productosFlotantes.map((p) => (
              <motion.div
                key={p.nombre}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: p.delay, duration: 0.5 }}
                className={`absolute hidden md:block ${p.className}`}
              >
                <motion.a
                  href="#catalogo-productos"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: p.floatDuration, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.06, rotate: -1 }}
                  className="flex items-center gap-3 bg-white text-text-primary rounded-2xl p-2.5 pr-4 shadow-2xl ring-1 ring-black/5"
                >
                  <img
                    src={p.src}
                    alt={p.nombre}
                    className="w-16 h-16 rounded-xl object-contain bg-white border border-border-light"
                  />
                  <div>
                    <p className="text-sm font-bold leading-tight">{p.nombre}</p>
                    <p className="text-[11px] text-text-secondary">{p.detalle}</p>
                    <p className="text-[11px] font-semibold text-accent mt-0.5">Ver modelos →</p>
                  </div>
                </motion.a>
              </motion.div>
            ))}

            {/* Badge 100% Impermeable */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute left-4 sm:left-10 -top-5"
            >
              <div className="rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-xl">
                <div className="w-9 h-9 bg-sky-400/20 rounded-xl flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <p className="text-xs font-bold">100% Impermeable</p>
                  <p className="text-[10px] text-white/60">Calibre 6 y Vinipiel</p>
                </div>
              </div>
            </motion.div>

            {/* Badge Ajuste milimétrico */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="absolute right-4 sm:right-8 -bottom-6"
            >
              <div className="rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 bg-white text-text-primary">
                <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Crosshair className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold">Ajuste Milimétrico</p>
                  <p className="text-[10px] text-text-secondary">Patronaje artesanal</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-1" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ====== Cinta de categorías en movimiento ====== */}
      <div className="relative border-t border-white/10 bg-white/[0.04] backdrop-blur-sm">
        <div className="hero-marquee-mask overflow-hidden py-4">
          <div className="animate-ticker flex w-max">
            {[...categoriasMarquee, ...categoriasMarquee].map((c, i) => (
              <a
                key={i}
                href="#catalogo-productos"
                className="flex items-center gap-2.5 px-7 text-sm font-semibold text-white/70 hover:text-white transition-colors whitespace-nowrap"
              >
                <c.icon className="w-4.5 h-4.5 text-accent" />
                {c.label}
                <span className="ml-7 text-teal/50">⬢</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
