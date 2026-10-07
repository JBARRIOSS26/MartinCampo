"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  Ruler,
  Check,
  MessageCircle,
  Truck,
  FileText,
  Clock,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import type { Product } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  const [selectedMedida, setSelectedMedida] = useState<string>("");

  // Inicializar medida sugerida cuando cambia de producto
  useEffect(() => {
    if (product && product.medidasSugeridas.length > 0) {
      setSelectedMedida(product.medidasSugeridas[0]);
    }
  }, [product]);

  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  // Enlace directo de WhatsApp con información del producto y la medida seleccionada
  const whatsappMessage = `Hola Fundas Martín del Campo, me interesa cotizar:
*Producto:* ${product.nombre}
*Categoría:* ${product.categoriaLabel}
*Medida elegida:* ${selectedMedida || "Medida a convenir"}
*Precio base:* ${product.precioDesde || "A medida"}

¿Podrían indicarme disponibilidad y costo de envío?`;

  const whatsappUrl = `https://wa.me/5213314008921?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop con Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-border-light overflow-hidden z-10 my-8"
          >
            {/* Botón Cerrar */}
            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-text-secondary hover:text-brand shadow-md flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Columna Izquierda: Imagen y Badges */}
              <div className="relative bg-surface-gray min-h-[260px] md:min-h-full flex flex-col justify-between p-6">
                <div className="absolute inset-0">
                  <img
                    src={product.imagen}
                    alt={product.nombre}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
                </div>

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/95 text-brand text-xs font-bold rounded-full shadow-sm">
                    {product.categoriaLabel}
                  </span>
                </div>

                <div className="relative z-10 text-white space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>Confección Premium Hecha en México</span>
                  </div>
                  <p className="text-xl font-extrabold leading-tight">
                    {product.precioDesde || "Cotización a medida"}
                  </p>
                </div>
              </div>

              {/* Columna Derecha: Especificaciones Técnicas y Cotizador */}
              <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-brand tracking-tight mb-2">
                    {product.nombre}
                  </h2>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {product.descripcionLarga}
                  </p>

                  {/* Selector de Medidas Sugeridas */}
                  <div className="mb-6">
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2 flex items-center gap-1.5">
                      <Ruler className="w-4 h-4 text-accent" />
                      <span>Selecciona tu Medida / Talla:</span>
                    </label>
                    <div className="space-y-2">
                      {product.medidasSugeridas.map((medida, index) => {
                        const isSelected = selectedMedida === medida;
                        return (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setSelectedMedida(medida)}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                              isSelected
                                ? "border-brand bg-brand/5 font-semibold text-brand shadow-sm"
                                : "border-border-light hover:border-brand/40 bg-white text-text-secondary"
                            }`}
                          >
                            <span>{medida}</span>
                            {isSelected && (
                              <div className="w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0 ml-2">
                                <Check className="w-3 h-3" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Características Técnicas */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-2.5">
                      Especificaciones de Material:
                    </h4>
                    <ul className="space-y-2 text-xs text-text-secondary">
                      {product.caracteristicas.map((caract, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{caract}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Indicadores de Confianza */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-text-secondary bg-surface-gray p-3 rounded-xl mb-6 border border-border-light/60">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span>Despacho: {product.tiempoEntrega || "24/48 hrs"}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-accent" />
                      <span>Envío Nacional</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-accent" />
                      <span>Factura CFDI 4.0</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                      <span>Garantía Directa</span>
                    </div>
                  </div>
                </div>

                {/* Acciones de Cotización */}
                <div className="space-y-2.5 pt-4 border-t border-border-light">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg shadow-[#25d366]/20 transition-all hover:shadow-[#25d366]/35"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Cotizar por WhatsApp Ahora</span>
                  </a>

                  <a
                    href="tel:3338124090"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-surface-gray hover:bg-border-light/50 text-text-primary font-semibold text-xs transition-colors border border-border-light"
                  >
                    <PhoneCall className="w-4 h-4 text-brand" />
                    <span>Llamar a Asesor: (33) 3812-4090</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
