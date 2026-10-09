"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  WashingMachine,
  Car,
  Home,
  Ruler,
  MessageCircle,
} from "lucide-react";
import type { CategoryId } from "@/data/products";

interface CatalogNavOption {
  label: string;
  icon: React.ElementType;
  catId: CategoryId;
}

const catalogItems: CatalogNavOption[] = [
  { label: "Lavadoras y Secadoras", icon: WashingMachine, catId: "lavadoras" },
  { label: "Para el Hogar y Jardín", icon: Home, catId: "hogar" },
  { label: "Vehículos y Motos", icon: Car, catId: "vehiculos" },
  { label: "Fundas Personalizadas", icon: Ruler, catId: "personalizadas" },
];

const navLinks = [
  { label: "Inicio", href: "#inicio", active: true },
  { label: "Catálogo", href: "#catalogo-productos", hasDropdown: true },
  { label: "Nosotros", href: "#empresa" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCatalogOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectCatalogItem = (catId: CategoryId) => {
    setCatalogOpen(false);
    setMobileOpen(false);

    // Despachar evento para sincronizar con CatalogSection
    window.dispatchEvent(
      new CustomEvent("selectCategory", { detail: catId })
    );

    const section = document.getElementById("catalogo-productos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-border-light"
          : "bg-white border-b border-border-light/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-[86px]">
          {/* Logo Oficial de Martín del Campo - Ampliado y nítido */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 flex-shrink-0 group py-1.5"
            title="Inicio - Martín del Campo Fundas y Cubiertas"
          >
            <img
              src="/assets/images/Logo/logo-transparent.png"
              alt="Martín del Campo Fundas y Cubiertas"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] drop-shadow-xs"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setCatalogOpen(true)}
                  onMouseLeave={() => setCatalogOpen(false)}
                >
                  <a
                    href="#catalogo-productos"
                    onClick={(e) => {
                      const section = document.getElementById("catalogo-productos");
                      if (section) {
                        e.preventDefault();
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg text-text-secondary hover:text-brand hover:bg-surface-gray transition-colors cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        catalogOpen ? "rotate-180" : ""
                      }`}
                    />
                  </a>

                  <AnimatePresence>
                    {catalogOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-border-light overflow-hidden z-50 p-2"
                      >
                        {catalogItems.map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => handleSelectCatalogItem(item.catId)}
                            className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm text-text-primary hover:bg-surface-gray hover:text-brand transition-colors group text-left cursor-pointer"
                          >
                            <div className="w-9 h-9 bg-surface-gray rounded-xl flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                              <item.icon className="w-4.5 h-4.5 text-text-secondary group-hover:text-brand transition-colors" />
                            </div>
                            <span className="font-semibold">{item.label}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    link.active
                      ? "text-brand bg-brand/5"
                      : "text-text-secondary hover:text-brand hover:bg-surface-gray"
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Right Actions: Cotizador por WhatsApp */}
          <div className="flex items-center gap-2.5">
            {/* Botón WhatsApp Directo */}
            <a
              href="https://wa.me/5213314008921?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20y%20cotizaci%C3%B3n%20de%20sus%20fundas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 h-10 rounded-xl bg-[#25d366]/10 hover:bg-[#25d366] text-[#25d366] hover:text-white border border-[#25d366]/30 font-bold text-xs transition-all shadow-sm"
              title="Cotizar por WhatsApp"
            >
              <MessageCircle className="w-4.5 h-4.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* CTA Catálogo / Cotizar */}
            <a
              href="#catalogo-productos"
              onClick={(e) => {
                const section = document.getElementById("catalogo-productos");
                if (section) {
                  e.preventDefault();
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 h-10 bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 shadow-md shadow-accent/25 hover:shadow-lg"
            >
              Cotizar Modelo
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-text-secondary hover:text-brand hover:bg-surface-gray transition-colors border border-border-light cursor-pointer"
              aria-label="Menú principal"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-border-light bg-white shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setCatalogOpen(!catalogOpen)}
                      className="w-full flex items-center justify-between px-3.5 py-3 text-sm font-bold text-text-primary rounded-xl hover:bg-surface-gray transition-colors cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          catalogOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {catalogOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 space-y-1 pb-2">
                            {catalogItems.map((item) => (
                              <button
                                key={item.label}
                                type="button"
                                onClick={() => handleSelectCatalogItem(item.catId)}
                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary rounded-xl hover:bg-surface-gray hover:text-brand transition-colors text-left cursor-pointer"
                              >
                                <item.icon className="w-4 h-4 text-accent" />
                                <span>{item.label}</span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3.5 py-3 text-sm font-bold rounded-xl transition-colors ${
                      link.active
                        ? "text-brand bg-brand/5"
                        : "text-text-primary hover:bg-surface-gray"
                    }`}
                  >
                    {link.label}
                  </a>
                )
              )}

              <div className="pt-3 border-t border-border-light mt-3 space-y-2">
                <a
                  href="https://wa.me/5213314008921?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20cotizaci%C3%B3n%20de%20sus%20fundas."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full h-11 bg-[#25d366] hover:bg-[#20ba59] text-white text-sm font-bold rounded-xl shadow-md transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Cotizar por WhatsApp: (33) 1400-8921</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
