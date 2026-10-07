"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  ShieldCheck,
  Ruler,
  Clock,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export default function ProductCard({ product, onOpenModal }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Mensaje para cotización rápida directa por WhatsApp
  const whatsappUrl = `https://wa.me/5213314008921?text=${encodeURIComponent(
    `Hola, me interesa solicitar cotización del producto: "${product.nombre}" (${product.categoriaLabel}). ¿Podrían darme más información?`
  )}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group bg-white rounded-2xl border border-border-light overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-brand/20 transition-all duration-300"
    >
      {/* Contenedor de Imagen */}
      <div className="relative aspect-[4/3] w-full bg-surface-gray overflow-hidden">
        {/* Placeholder mientras carga */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-surface-gray animate-pulse flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-text-muted/30" />
          </div>
        )}

        <img
          src={product.imagen}
          alt={product.nombre}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Gradiente sutil inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Badge de Categoría */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-3 py-1 text-[11px] font-semibold bg-white/95 backdrop-blur-md text-brand rounded-full shadow-sm border border-white/40">
            {product.categoriaLabel}
          </span>
          {product.popular && (
            <span className="px-2.5 py-1 text-[10px] font-bold bg-accent text-white rounded-full flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3" />
              Más Vendido
            </span>
          )}
        </div>

        {/* Botón rápido de vista en hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            type="button"
            onClick={() => onOpenModal(product)}
            className="pointer-events-auto px-4 py-2 bg-brand/90 hover:bg-brand text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-lg backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-all"
          >
            <Eye className="w-4 h-4 text-accent" />
            Vista Rápida
          </button>
        </div>
      </div>

      {/* Contenido / Información */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Título */}
          <h3
            onClick={() => onOpenModal(product)}
            className="font-bold text-text-primary text-base sm:text-lg leading-snug hover:text-brand cursor-pointer transition-colors line-clamp-2 mb-2"
          >
            {product.nombre}
          </h3>

          {/* Descripción corta */}
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2 mb-4">
            {product.descripcionCorta}
          </p>

          {/* Características pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.caracteristicas.slice(0, 2).map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] bg-surface-gray text-text-secondary rounded-md border border-border-light/60"
              >
                <ShieldCheck className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                <span className="truncate max-w-[200px]">{feat}</span>
              </span>
            ))}
          </div>

          {/* Medidas o tiempo de entrega */}
          <div className="flex items-center justify-between text-[11px] text-text-secondary mb-4 pt-3 border-t border-border-light/60">
            <span className="flex items-center gap-1">
              <Ruler className="w-3.5 h-3.5 text-accent" />
              <span>{product.medidasSugeridas.length} medidas disponibles</span>
            </span>
            {product.tiempoEntrega && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand" />
                <span>{product.tiempoEntrega}</span>
              </span>
            )}
          </div>
        </div>

        {/* Footer de Tarjeta: Precio y Acciones */}
        <div className="pt-2 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-text-secondary block uppercase tracking-wider font-semibold">
              Precio desde
            </span>
            <span className="text-base font-extrabold text-brand">
              {product.precioDesde || "A medida"}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Botón WhatsApp Directo */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Cotizar ${product.nombre} por WhatsApp`}
              className="w-9 h-9 rounded-xl bg-surface-gray hover:bg-[#25d366]/10 border border-border-light hover:border-[#25d366]/40 flex items-center justify-center text-text-secondary hover:text-[#25d366] transition-colors"
              title="Cotizar por WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
            </a>

            {/* Botón Ver Detalles / Cotizar */}
            <button
              type="button"
              onClick={() => onOpenModal(product)}
              className="px-3.5 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-accent/25 flex items-center gap-1.5"
            >
              <span>Ver Detalles</span>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
