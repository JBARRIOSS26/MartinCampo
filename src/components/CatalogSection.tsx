"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  WashingMachine,
  Home,
  Car,
  Ruler,
  Layers,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { PRODUCTS, CATEGORIES, type Product, type CategoryId } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

interface CatalogSectionProps {
  initialCategory?: CategoryId;
}

export default function CatalogSection({ initialCategory = "todas" }: CatalogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Escuchar cambios de hash o evento custom para cambiar la categoría desde Navbar o CategoryGrid
  useEffect(() => {
    const handleCategoryChange = (e: CustomEvent<CategoryId>) => {
      if (e.detail) {
        setSelectedCategory(e.detail);
        const section = document.getElementById("catalogo-productos");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener(
      "selectCategory" as any,
      handleCategoryChange as EventListener
    );
    return () => {
      window.removeEventListener(
        "selectCategory" as any,
        handleCategoryChange as EventListener
      );
    };
  }, []);

  // Filtrado de productos por categoría y texto de búsqueda
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "todas" || product.categoria === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.descripcionCorta.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.caracteristicas.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Manejador para abrir modal
  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Iconos por categoría
  const getCategoryIcon = (id: CategoryId) => {
    switch (id) {
      case "lavadoras":
        return WashingMachine;
      case "hogar":
        return Home;
      case "vehiculos":
        return Car;
      case "personalizadas":
        return Ruler;
      default:
        return Layers;
    }
  };

  return (
    <section id="catalogo-productos" className="py-16 sm:py-24 bg-surface-gray border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/5 border border-brand/10 mb-4">
            <SlidersHorizontal className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold text-brand uppercase tracking-wider">
              Explora Nuestro Catálogo Completo
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mb-4">
            Modelos Disponibles y{" "}
            <span className="text-accent">Confección a Medida</span>
          </h2>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Selecciona la categoría de tu interés, conoce los detalles técnicos de cada funda y
            cotiza directamente por WhatsApp con respuesta inmediata de nuestro taller en Guadalajara.
          </p>
        </div>

        {/* Barra de Filtros y Buscador */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-border-light mb-10 space-y-4">
          
          {/* Pestañas de Categoría */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const Icon = getCategoryIcon(cat.id);
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                    isActive
                      ? "bg-brand text-white shadow-md shadow-brand/20"
                      : "bg-surface-gray text-text-secondary hover:text-brand hover:bg-border-light/40"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-accent" : "text-text-muted"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Buscador y Resumen */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-border-light/70">
            {/* Input de Búsqueda */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por modelo, tipo de tela o vehículo..."
                className="w-full h-10 pl-10 pr-4 text-xs sm:text-sm bg-surface-gray border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-text-primary placeholder:text-text-muted transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-text-muted hover:text-text-primary"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Contador de Resultados */}
            <div className="w-full sm:w-auto text-left sm:text-right text-xs font-semibold text-text-secondary">
              Mostrando{" "}
              <span className="text-brand font-bold">{filteredProducts.length}</span>{" "}
              {filteredProducts.length === 1 ? "solución encontrada" : "soluciones encontradas"}
            </div>
          </div>
        </div>

        {/* Grid de Productos */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Estado Vacío cuando no hay resultados */
          <div className="bg-white rounded-3xl border border-dashed border-border-light p-12 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-brand mb-2">
              ¿No encontraste la medida exacta?
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary mb-6 leading-relaxed">
              Recuerda que confeccionamos cualquier tipo de funda o cubierta con patronaje 100%
              personalizado para maquinaria, muebles especiales o vehículos.
            </p>
            <a
              href="https://wa.me/5213314008921?text=Hola,%20estoy%20buscando%20una%20funda%20con%20medidas%20especiales%20que%20no%20encontré%20en%20el%20catálogo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotizar Funda Especial por WhatsApp</span>
            </a>
          </div>
        )}

        {/* Modal de Detalle */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
