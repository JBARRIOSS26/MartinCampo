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
  ChevronLeft,
  ChevronRight,
  Palette,
} from "lucide-react";
import type { Product, ColorVariant } from "@/data/products";

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
  const [selectedColor, setSelectedColor] = useState<ColorVariant | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Inicializar estado cuando cambia el producto
  useEffect(() => {
    if (product) {
      // Medida inicial
      if (product.medidasSugeridas && product.medidasSugeridas.length > 0) {
        setSelectedMedida(product.medidasSugeridas[0]);
      } else {
        setSelectedMedida("");
      }

      // Color inicial si tiene variantes
      if (product.colores && product.colores.length > 0) {
        setSelectedColor(product.colores[0]);
      } else {
        setSelectedColor(null);
      }

      setActiveImageIndex(0);
    }
  }, [product]);

  // Al cambiar de color, resetear índice de imagen
  const handleColorChange = (color: ColorVariant) => {
    setSelectedColor(color);
    setActiveImageIndex(0);
  };

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

  // Lista de imágenes a mostrar en el visor según el color seleccionado o galería general
  const currentImages: string[] = selectedColor
    ? selectedColor.imagenes
    : product.imagenesSecundarias && product.imagenesSecundarias.length > 0
    ? product.imagenesSecundarias
    : [product.imagen];

  const activeImage = currentImages[activeImageIndex] || product.imagen;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  // Mensaje predeterminado de WhatsApp estructurado con Producto, Color y Medida
  const whatsappDetails = [
    `Hola Fundas Martín del Campo, me interesa cotizar:`,
    `*Producto:* ${product.nombre}`,
    `*Categoría:* ${product.categoriaLabel}`,
    selectedColor ? `*Color seleccionado:* ${selectedColor.nombre}` : null,
    `*Medida elegida:* ${selectedMedida || "Medida a convenir"}`,
    ``,
    `¿Podrían indicarme costo y tiempo de entrega?`,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappUrl = `https://wa.me/5213314008921?text=${encodeURIComponent(
    whatsappDetails
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop con Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand/70 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card Principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-border-light overflow-hidden z-10 my-4 sm:my-8 max-h-[92vh] flex flex-col md:flex-row"
          >
            {/* Botón Cerrar Flotante */}
            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-text-secondary hover:text-brand shadow-lg flex items-center justify-center transition-all cursor-pointer border border-border-light/70"
            >
              <X className="w-5 h-5" />
            </button>

            {/* ======================================================== */}
            {/* COLUMNA IZQUIERDA: Galería de Imágenes Completa con Carrusel */}
            {/* ======================================================== */}
            <div className="w-full md:w-1/2 bg-slate-950/5 flex flex-col justify-between p-4 sm:p-6 border-b md:border-b-0 md:border-r border-border-light">
              {/* Badge Superior */}
              <div className="flex items-center justify-between gap-2 mb-3 z-10">
                <span className="px-3 py-1 bg-white text-brand text-xs font-bold rounded-full shadow-sm border border-border-light/80">
                  {product.categoriaLabel}
                </span>
                {selectedColor && (
                  <span className="px-2.5 py-1 bg-brand/10 text-brand text-[11px] font-semibold rounded-full flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-black/20"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <span>{selectedColor.nombre}</span>
                  </span>
                )}
              </div>

              {/* Visor Principal Grande (Las imágenes se muestran COMPLETAS sin recortarse) */}
              <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-square bg-white rounded-2xl border border-border-light/80 overflow-hidden shadow-inner flex items-center justify-center p-3 sm:p-4 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={activeImage}
                    alt={`${product.nombre} - ${selectedColor?.nombre || "Detalle"}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full object-contain object-center drop-shadow-sm select-none"
                  />
                </AnimatePresence>

                {/* Flechas de Navegación si hay más de 1 imagen */}
                {currentImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      aria-label="Imagen anterior"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-text-primary shadow-md flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105 cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      aria-label="Imagen siguiente"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-text-primary shadow-md flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105 cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Indicador de posición de imagen */}
                {currentImages.length > 1 && (
                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-mono backdrop-blur-sm">
                    {activeImageIndex + 1} / {currentImages.length}
                  </div>
                )}
              </div>

              {/* Carrusel de Miniaturas (Thumbnails) abajo que cambia según el color */}
              {currentImages.length > 1 && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {currentImages.map((img, idx) => {
                      const isActive = activeImageIndex === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-white border-2 transition-all p-1 cursor-pointer ${
                            isActive
                              ? "border-accent ring-2 ring-accent/30 shadow-md scale-105"
                              : "border-border-light hover:border-brand/40 opacity-70 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Miniatura ${idx + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Pie de Galería con garantía */}
              <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-text-secondary">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Fotografía real del taller • Calidad artesanal</span>
              </div>
            </div>

            {/* ======================================================== */}
            {/* COLUMNA DERECHA: Selector de Color, Medidas y Cotizador */}
            {/* ======================================================== */}
            <div className="w-full md:w-1/2 p-5 sm:p-7 lg:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-[92vh]">
              <div>
                {/* Título */}
                <h2 className="text-xl sm:text-2xl font-extrabold text-brand tracking-tight mb-2">
                  {product.nombre}
                </h2>

                {/* Descripción */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                  {product.descripcionLarga}
                </p>

                {/* ======================================================== */}
                {/* SELECTOR DE COLOR INTERACTIVO (SWATCHES) */}
                {/* ======================================================== */}
                {product.colores && product.colores.length > 0 && (
                  <div className="mb-6 p-4 rounded-2xl bg-surface-gray border border-border-light/80">
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-text-primary flex items-center gap-1.5">
                        <Palette className="w-4 h-4 text-accent" />
                        <span>Color Disponible:</span>
                      </label>
                      {selectedColor && (
                        <span className="text-xs font-bold text-brand">
                          {selectedColor.nombre}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {product.colores.map((color) => {
                        const isSelected = selectedColor?.id === color.id;
                        return (
                          <button
                            key={color.id}
                            type="button"
                            onClick={() => handleColorChange(color)}
                            title={color.nombre}
                            className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                              isSelected
                                ? "bg-white border-brand shadow-sm text-brand ring-2 ring-brand/20 font-bold"
                                : "bg-white/80 border-border-light hover:border-brand/40 text-text-secondary"
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded-full border shadow-inner transition-transform group-hover:scale-110 flex-shrink-0 ${
                                isSelected ? "border-brand" : "border-black/20"
                              }`}
                              style={{ backgroundColor: color.hex }}
                            />
                            <span>{color.nombre}</span>
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-brand" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ======================================================== */}
                {/* SELECTOR DE MEDIDAS SUGERIDAS */}
                {/* ======================================================== */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2.5 flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-accent" />
                    <span>Selecciona tu Medida / Modelo:</span>
                  </label>
                  <div className="space-y-2">
                    {product.medidasSugeridas.map((medida, index) => {
                      const isSelected = selectedMedida === medida;
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setSelectedMedida(medida)}
                          className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "border-brand bg-brand/5 font-semibold text-brand shadow-sm"
                              : "border-border-light hover:border-brand/40 bg-white text-text-secondary"
                          }`}
                        >
                          <span className="leading-snug">{medida}</span>
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

                {/* ======================================================== */}
                {/* ESPECIFICACIONES TÉCNICAS */}
                {/* ======================================================== */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-2.5">
                    Especificaciones y Ventajas:
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

                {/* Badges de Confianza */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-text-secondary bg-surface-gray p-3 rounded-xl mb-6 border border-border-light/60">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span>Despacho: {product.tiempoEntrega || "24/48 hrs"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-accent" />
                    <span>Envíos Nacionales</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-accent" />
                    <span>Facturación CFDI 4.0</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                    <span>Garantía de Ajuste</span>
                  </div>
                </div>
              </div>

              {/* ======================================================== */}
              {/* ACCIONES DE COTIZACIÓN POR WHATSAPP */}
              {/* ======================================================== */}
              <div className="space-y-2.5 pt-4 border-t border-border-light">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg shadow-[#25d366]/20 transition-all hover:shadow-[#25d366]/35"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Cotizar por WhatsApp con estos Datos</span>
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export { ProductModal as ProductDetail };
