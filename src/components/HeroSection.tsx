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
              <span className="text-xs font-semibold text-brand tracking-wide">
                Confección Mexicana de Alta Gama
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold leading-[1.15] tracking-tight text-text-primary mb-5">
              Protección a la Medida
              <br />
              para tus{" "}
              <span className="gradient-text">
                Inversiones Más Valiosas
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              Cubiertas 100% impermeables con telas de grado marino, costura con hilo
              náutico y ajuste milimétrico artesanal. Diseñadas para durar, fabricadas
              con orgullo en México.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <motion.a
                href="#catalogo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 h-12 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
              >
                Explorar Catálogo
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 h-12 bg-white border-2 border-border-light text-text-primary font-semibold rounded-xl hover:border-brand/30 hover:bg-surface-gray transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                Pedir Funda Personalizada
              </motion.a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i <= 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400 text-amber-400"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-text-primary">4.9/5</span>
                <span className="text-xs text-text-secondary">(+12,000 reseñas)</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-text-secondary">
                <ShieldCheck className="w-4 h-4 text-brand" />
                <span className="font-medium">Garantía directa del fabricante</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-brand/5 via-brand/10 to-accent/5 border border-white/50 shadow-2xl">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 via-transparent to-accent/10" />

              {/* Image placeholder with premium visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-brand/10 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="w-12 h-12 text-brand" />
                  </div>
                  <p className="text-brand font-semibold text-lg mb-1">
                    Protección Premium
                  </p>
                  <p className="text-text-secondary text-sm">
                    Fundas artesanales de alta gama para cada necesidad
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-4 left-4 w-40 h-40 bg-brand/10 rounded-full blur-3xl" />
            </div>

            {/* Floating Badge 1 - 100% Impermeable */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -left-4 sm:left-4 top-6 sm:top-8 animate-float"
            >
              <div className="glass rounded-xl px-4 py-3 shadow-lg flex items-center gap-2.5">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-primary">100% Impermeable</p>
                  <p className="text-[10px] text-text-secondary">Grado marino</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 2 - Ajuste Milimétrico */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -right-2 sm:right-6 bottom-8 sm:bottom-10"
              style={{ animation: "float 3s ease-in-out 1.5s infinite" }}
            >
              <div className="glass rounded-xl px-4 py-3 shadow-lg flex items-center gap-2.5">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Crosshair className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-primary">Ajuste Milimétrico</p>
                  <p className="text-[10px] text-text-secondary">Patronaje por modelo</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
