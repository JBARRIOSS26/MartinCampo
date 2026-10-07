"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Star,
  ShieldCheck,
  Droplets,
  Crosshair,
  MessageCircle,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-surface via-white to-surface-gray overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0f2942 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/5 border border-brand/10 mb-6"
            >
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold text-brand tracking-wide">
                Confección Textil de Alta Gama Hecha en México
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold leading-[1.15] tracking-tight text-text-primary mb-5">
              Fundas y Cubiertas
              <br />
              <span className="gradient-text">
                de Alta Resistencia
              </span>
              <br />
              Hechas a la Medida
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              Protección 100% impermeable con telas de gama alta calibre 6 y vinipiel afelpado.
              Diseñadas para lavadoras, asadores, futbolitos, billares, pantallas y vehículos.
              Cotización personalizada directa por WhatsApp.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
              <motion.a
                href="#catalogo-productos"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 h-12 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
              >
                <span>Explorar Catálogo</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://wa.me/5213314008921?text=Hola,%20quisiera%20cotizar%20una%20funda%20a%20la%20medida."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 h-12 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-[#25d366]/25 hover:shadow-xl hover:shadow-[#25d366]/35"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Cotizar por WhatsApp</span>
              </motion.a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-text-primary">4.9/5</span>
                <span className="text-xs text-text-secondary">(Taller con +15 años de experiencia)</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-text-secondary">
                <ShieldCheck className="w-4 h-4 text-brand" />
                <span className="font-medium">Garantía directa del fabricante</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Showcase with Real Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image Showcase */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-border-light shadow-2xl group">
              <img
                src="/assets/images/hero-showcase.jpg"
                alt="Fundas y Cubiertas de Alta Protección Martín del Campo"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-transparent to-black/10" />

              {/* Inset Label */}
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent bg-brand/90 px-3 py-1 rounded-full border border-white/20 shadow-sm">
                    Línea Premium Intemperie
                  </span>
                  <p className="text-base sm:text-lg font-bold mt-1.5 text-white drop-shadow">
                    Centros de Lavado, Hogar y Vehículos
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge 1 - 100% Impermeable */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -left-3 sm:left-4 top-4 sm:top-6"
            >
              <div className="glass rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 border border-white/60">
                <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-primary">100% Impermeable</p>
                  <p className="text-[10px] text-text-secondary">Calibre 6 y Vinipiel</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 2 - Ajuste Milimétrico */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -right-2 sm:right-4 -bottom-4 sm:bottom-6"
            >
              <div className="glass rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 border border-white/60">
                <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Crosshair className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-primary">Ajuste Milimétrico</p>
                  <p className="text-[10px] text-text-secondary">Patronaje artesanal</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
