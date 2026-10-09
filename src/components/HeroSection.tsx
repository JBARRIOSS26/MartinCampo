"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
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

export default function HeroSection() {

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-sky-50/30 text-text-primary border-b border-orange-100/60"
    >
      {/* ====== Fondos luminosos y orbes con la paleta viva del logotipo ====== */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Orbe Cálido Naranja / Mandarina (Color principal del logo) */}
        <motion.div
          className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-orange-400/25 via-amber-300/20 to-transparent blur-[110px]"
          animate={{ scale: [1, 1.12, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbe Turquesa / Cyan Vibrante (Color secundario del logo) */}
        <motion.div
          className="absolute top-1/4 -right-28 w-[580px] h-[580px] rounded-full bg-gradient-to-bl from-cyan-400/25 via-teal-300/20 to-transparent blur-[120px]"
          animate={{ scale: [1.1, 1, 1.1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Retícula decorativa suave */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Hexágonos flotantes sutiles (evocando el isotipo del cubo/hexágono) */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute top-16 right-[48%] w-20 h-20 text-cyan-400/25 hidden xl:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <polygon points="50,4 93,28 93,72 50,96 7,72 7,28" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute bottom-28 left-[45%] w-14 h-14 text-orange-400/25 hidden xl:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <polygon points="50,4 93,28 93,72 50,96 7,72 7,28" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ====== Columna Izquierda: Mensaje Comercial (Luminoso, Colorido y Directo) ====== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 relative z-10"
          >
            {/* Badge distintivo colorido */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-cyan-50 border border-orange-200/80 mb-6 shadow-xs"
            >
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-cyan-500 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-cyan-600" />
              </span>
              <span className="text-xs font-bold tracking-wide text-brand">
                Taller Textil Especializado • Guadalajara, México
              </span>
            </motion.div>

            {/* Título Principal con los Colores del Logo */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight text-brand mb-5">
              Fundas y Cubiertas
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-cyan-600 bg-clip-text text-transparent">
                de Alta Resistencia
              </span>
              <br />
              <span className="relative inline-block text-brand">
                Hechas a la Medida
                <motion.svg
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute left-0 -bottom-2 w-full h-3 text-cyan-500"
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
                    transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.svg>
              </span>
            </h1>

            {/* Descripción limpia y persuasiva */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              Protección 100% impermeable con telas de gama alta calibre 6 y vinipiel afelpado.
              Confeccionadas a la medida exacta para electrodomésticos, vehículos, asadores, mesas de juego y mobiliario de terraza.
            </p>

            {/* CTAs con Contraste y Energía */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-9">
              <motion.a
                id="hero-cta-catalogo"
                href="#catalogo-productos"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/25 overflow-hidden text-sm sm:text-base"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <span className="relative">Explorar Catálogo</span>
                <ArrowRight className="relative w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                id="hero-cta-whatsapp"
                href="https://wa.me/5213314008921?text=Hola,%20quisiera%20cotizar%20una%20funda%20a%20la%20medida."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold rounded-xl transition-all shadow-md shadow-[#25d366]/20 text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Cotizar por WhatsApp</span>
              </motion.a>
            </div>

            {/* Métricas de Confianza */}
            <div className="flex items-stretch gap-6 sm:gap-8 mb-7 pt-2 border-t border-orange-100">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={i > 0 ? "pl-6 sm:pl-8 border-l border-orange-100" : ""}
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-brand leading-none">
                    {s.value}
                  </p>
                  <p className="text-xs sm:text-sm text-text-secondary mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Calificación y Garantía */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-extrabold text-brand">4.9/5</span>
                <span className="text-xs text-text-secondary">satisfacción comprobada</span>
              </div>
              <div className="flex items-center gap-1.5 text-text-secondary">
                <ShieldCheck className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm">Garantía directa del fabricante</span>
              </div>
            </div>
          </motion.div>

          {/* ====== Columna Derecha: Imagen Destacada Limpia Sin Recuadro ====== */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center"
          >
            {/* Resplandor ambiental de marca (suave, sin recuadro rígido) */}
            <div
              aria-hidden
              className="absolute -inset-4 sm:-inset-10 bg-gradient-to-tr from-orange-400/25 via-cyan-400/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
            />

            {/* Imagen oficial sin recuadro / sin marco oscuro */}
            <div className="relative w-full max-w-lg lg:max-w-xl mx-auto flex items-center justify-center p-2 sm:p-4">
              <motion.img
                src="/assets/images/Logo/hero-auto-transparente.webp"
                alt="Fundas y cubiertas automotrices a la medida Martín del Campo"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(15,41,66,0.18)]"
              />

              {/* Badge Flotante 1: 100% Impermeable */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute top-2 left-2 sm:-left-3 z-10"
              >
                <div className="rounded-2xl px-3.5 py-2 sm:py-2.5 shadow-lg flex items-center gap-2.5 bg-white/95 border border-cyan-200/90 backdrop-blur-md">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600">
                    <Droplets className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand">100% Impermeable</p>
                    <p className="text-[10px] text-text-secondary">Calibre 6 y Vinipiel</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge Flotante 2: Ajuste Milimétrico */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.4 }}
                className="absolute bottom-2 right-2 sm:-right-3 z-10"
              >
                <div className="rounded-2xl px-3.5 py-2 sm:py-2.5 shadow-lg flex items-center gap-2.5 bg-white/95 border border-orange-200/90 backdrop-blur-md">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-orange-50 rounded-xl flex items-center justify-center text-accent">
                    <Crosshair className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand">Ajuste Milimétrico</p>
                    <p className="text-[10px] text-text-secondary">Patronaje a la medida</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge Flotante Superior: Fabricación Nacional */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -top-3 right-4 sm:right-6 hidden sm:block z-10"
              >
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-bold shadow-md shadow-orange-500/25">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>Fabricación Directa de Taller</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ====== La ÚNICA cinta de información en movimiento de la página ====== */}
      <div className="relative border-t border-orange-200/50 bg-white/90 backdrop-blur-md shadow-xs">
        <div className="hero-marquee-mask overflow-hidden py-3.5">
          <div className="animate-ticker flex w-max">
            {[...categoriasMarquee, ...categoriasMarquee].map((c, i) => (
              <a
                key={i}
                href="#catalogo-productos"
                className="flex items-center gap-2 px-6 text-xs sm:text-sm font-bold text-brand/80 hover:text-accent transition-colors whitespace-nowrap"
              >
                <c.icon className="w-4 h-4 text-accent" />
                <span>{c.label}</span>
                <span className="ml-6 text-cyan-500 font-bold">⬢</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
