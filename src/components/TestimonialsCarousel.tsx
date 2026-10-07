"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, BadgeCheck, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Roberto García M.",
    city: "Guadalajara, Jalisco",
    rating: 5,
    text: "Compré una funda para mi lavadora Samsung de carga frontal y el ajuste es perfecto. Lleva 3 años a la intemperie en mi patio y sigue como nueva. El material es de primera calidad, realmente impermeable.",
    product: "Funda Lavadora Carga Frontal",
    verified: true,
  },
  {
    id: 2,
    name: "Ana Lucía Fernández",
    city: "Monterrey, Nuevo León",
    rating: 5,
    text: "Necesitaba cubrir mi Mazda CX-5 que duerme en la calle. La cubierta que me hicieron a medida es espectacular: no se vuela con el viento, tiene broches de presión y el acabado es premium. Totalmente recomendada.",
    product: "Cubierta Vehículo SUV",
    verified: true,
  },
  {
    id: 3,
    name: "Carlos Mendoza R.",
    city: "Ciudad de México",
    rating: 5,
    text: "Pedí fundas personalizadas para 4 asadores industriales de mi negocio. El equipo de Martín del Campo vino a medir y en 48 horas ya tenía todo listo. La facturación fue inmediata. Servicio de primer nivel.",
    product: "Fundas Personalizadas Industriales",
    verified: true,
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
            Miles de hogares y negocios en México confían en nuestras fundas.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-border-light p-6 transition-all duration-300 hover:shadow-lg hover:border-brand/15 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-brand/8" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Product badge */}
              <div className="inline-flex px-2.5 py-1 bg-surface-gray text-text-secondary text-[11px] font-medium rounded-md mb-4 border border-border-light/50">
                {t.product}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-border-light">
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{t.city}</p>
                </div>
                {t.verified && (
                  <div className="flex items-center gap-1 text-emerald-600">
                    <BadgeCheck className="w-4 h-4" />
                    <span className="text-[10px] font-semibold">Verificada</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-border-light p-6 relative"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-brand/8" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="inline-flex px-2.5 py-1 bg-surface-gray text-text-secondary text-[11px] font-medium rounded-md mb-4 border border-border-light/50">
                {testimonials[current].product}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border-light">
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {testimonials[current].name}
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {testimonials[current].city}
                  </p>
                </div>
                {testimonials[current].verified && (
                  <div className="flex items-center gap-1 text-emerald-600">
                    <BadgeCheck className="w-4 h-4" />
                    <span className="text-[10px] font-semibold">Verificada</span>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white border border-border-light rounded-xl flex items-center justify-center text-text-secondary hover:text-brand hover:border-brand/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-accent" : "w-2 bg-border-light"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 bg-white border border-border-light rounded-xl flex items-center justify-center text-text-secondary hover:text-brand hover:border-brand/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
