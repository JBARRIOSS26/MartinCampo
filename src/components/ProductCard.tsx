"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  ShieldCheck,
  Ruler,
  Clock,
  Sparkles,
  MessageCircle,
  Palette,
} from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export default function ProductCard({ product, onOpenModal }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Si la imagen ya se cargó antes de la hidratación, onLoad no se dispara: lo verificamos al montar
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, [product.imagen]);

  // Mensaje para cotización rápida directa por WhatsApp
  const whatsappUrl = `https://wa.me/5213314008921?text=${encodeURIComponent(
    `Hola, me interesa solicitar cotización del producto: "${product.nombre}" (${product.categoriaLabel}). ¿Podrían darme más información?`
  )}`;

  // Estilos de color por categoría para evitar tarjetas planas
  const categoryTheme = (() => {
    switch (product.categoria) {
      case "lavadoras":
        return {
          border: "border-sky-200/90 hover:border-sky-400 hover:shadow-sky-500/10",
          topBar: "from-sky-500 to-cyan-500",
          badgeBg: "bg-sky-50 text-sky-800 border-sky-200",
          imageBg: "from-sky-50/40 via-white to-white",
          pillBg: "bg-sky-50 text-sky-800 border-sky-200/60",
          iconColor: "text-sky-600",
        };
      case "vehiculos":
        return {
          border: "border-teal-200/90 hover:border-teal-400 hover:shadow-teal-500/10",
          topBar: "from-cyan-400 to-teal-500",
          badgeBg: "bg-teal-50 text-teal-800 border-teal-200",
          imageBg: "from-teal-50/40 via-white to-white",
          pillBg: "bg-teal-50 text-teal-800 border-teal-200/60",
          iconColor: "text-teal-600",
        };
      case "hogar":
        return {
          border: "border-orange-200/90 hover:border-orange-400 hover:shadow-orange-500/10",
          topBar: "from-orange-500 to-amber-500",
          badgeBg: "bg-orange-50 text-orange-800 border-orange-200",
          imageBg: "from-orange-50/40 via-white to-white",
          pillBg: "bg-orange-50 text-orange-800 border-orange-200/60",
          iconColor: "text-orange-600",
        };
      default:
        return {
          border: "border-amber-200/90 hover:border-amber-400 hover:shadow-amber-500/10",
          topBar: "from-brand to-cyan-600",
          badgeBg: "bg-amber-50 text-amber-900 border-amber-200",
          imageBg: "from-amber-50/40 via-white to-white",
          pillBg: "bg-amber-50 text-amber-900 border-amber-200/60",
          iconColor: "text-amber-600",
        };
    }
  })();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group bg-white rounded-3xl border ${categoryTheme.border} overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 relative`}
    >
      {/* Franja de acento de color superior */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${categoryTheme.topBar}`} />

      {/* Contenedor de Imagen con fondo sutil degradado */}
      <div className={`relative aspect-[4/3] w-full bg-gradient-to-b ${categoryTheme.imageBg} overflow-hidden p-3 flex items-center justify-center border-b border-border-light/60`}>
        {/* Placeholder mientras carga */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-white/80 animate-pulse flex items-center justify-center pointer-events-none">
            <ShieldCheck className="w-8 h-8 text-text-muted/30" />
          </div>
        )}

        <img
          ref={imgRef}
          src={product.imagen}
          alt={product.nombre}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
          className={`w-full h-full object-contain object-center transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-90"
          }`}
        />

        {/* Gradiente sutil inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Badge de Categoría */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className={`px-3 py-1 text-[11px] font-bold rounded-full shadow-xs border ${categoryTheme.badgeBg}`}>
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
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
          <button
            type="button"
            onClick={() => onOpenModal(product)}
            className="pointer-events-auto px-4 py-2 bg-brand/95 hover:bg-brand text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-lg backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer"
          >
            <Eye className="w-4 h-4 text-accent" />
            Ver Galería y Colores
          </button>
        </div>
      </div>

      {/* Contenido / Información */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Título */}
          <h3
            onClick={() => onOpenModal(product)}
            className="font-extrabold text-brand text-base sm:text-lg leading-snug hover:text-accent cursor-pointer transition-colors line-clamp-2 mb-2"
          >
            {product.nombre}
          </h3>

          {/* Variantes de color en la tarjeta */}
          {product.colores && product.colores.length > 0 && (
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex items-center -space-x-1">
                {product.colores.map((color) => (
                  <span
                    key={color.id}
                    title={color.nombre}
                    className="w-3.5 h-3.5 rounded-full border border-white shadow-xs inline-block"
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-text-secondary">
                {product.colores.length} colores
              </span>
            </div>
          )}

          {/* Descripción corta */}
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2 mb-4">
            {product.descripcionCorta}
          </p>

          {/* Características pills con color */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.caracteristicas.slice(0, 2).map((feat, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-lg border ${categoryTheme.pillBg}`}
              >
                <ShieldCheck className={`w-3 h-3 ${categoryTheme.iconColor} flex-shrink-0`} />
                <span className="truncate max-w-[200px]">{feat}</span>
              </span>
            ))}
          </div>

          {/* Medidas o tiempo de entrega */}
          <div className="flex items-center justify-between text-[11px] text-text-secondary mb-4 pt-3 border-t border-border-light/70">
            <span className="flex items-center gap-1 font-medium">
              <Ruler className="w-3.5 h-3.5 text-accent" />
              <span>{product.medidasSugeridas.length} medidas disponibles</span>
            </span>
            {product.tiempoEntrega && (
              <span className="flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-brand" />
                <span>{product.tiempoEntrega}</span>
              </span>
            )}
          </div>
        </div>

        {/* Footer de Tarjeta: Sin precios - Cotización directa por WhatsApp */}
        <div className="pt-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs text-text-secondary font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Respuesta inmediata</span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Botón WhatsApp Directo */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Cotizar ${product.nombre} por WhatsApp`}
              className="w-9 h-9 rounded-xl bg-[#25d366]/15 hover:bg-[#25d366] text-[#25d366] hover:text-white border border-[#25d366]/40 flex items-center justify-center transition-all shadow-xs hover:shadow-md cursor-pointer"
              title="Cotizar por WhatsApp"
            >
              <MessageCircle className="w-4.5 h-4.5" />
            </a>

            {/* Botón Ver Detalles / Galería con degradado */}
            <button
              type="button"
              onClick={() => onOpenModal(product)}
              className="px-3.5 py-2 bg-gradient-to-r from-orange-500 to-accent hover:from-orange-600 hover:to-accent-hover text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ver Galería</span>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
