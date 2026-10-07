"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  WashingMachine,
  Car,
  Home,
  Ruler,
  Shield,
} from "lucide-react";
import type { CategoryId } from "@/data/products";

interface CatalogNavOption {
  label: string;
  icon: React.ElementType;
  catId: CategoryId;
}

const catalogItems: CatalogNavOption[] = [
  { label: "Lavadoras y Secadoras", icon: WashingMachine, catId: "lavadoras" },
  { label: "Vehículos y Motos", icon: Car, catId: "vehiculos" },
  { label: "Hogar y Jardín", icon: Home, catId: "hogar" },
  { label: "Personalizadas a Medida", icon: Ruler, catId: "personalizadas" },
];

const navLinks = [
  { label: "Inicio", href: "#inicio", active: true },
  { label: "Catálogo", href: "#catalogo-productos", hasDropdown: true },
  { label: "Empresa", href: "#empresa" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-brand tracking-tight">
                Martín del Campo
              </span>
              <span className="text-[10px] text-text-secondary tracking-widest uppercase">
                Fundas & Cubiertas
              </span>
            </div>
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
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg text-text-secondary hover:text-brand hover:bg-surface-gray transition-colors"
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
                        className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-border-light overflow-hidden"
                      >
                        <div className="p-2">
                          {catalogItems.map((item) => (
                            <button
                              key={item.label}
                              type="button"
                              onClick={() => handleSelectCatalogItem(item.catId)}
                              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-primary hover:bg-surface-gray hover:text-brand transition-colors group text-left"
                            >
                              <div className="w-9 h-9 bg-surface-gray rounded-lg flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                                <item.icon className="w-4.5 h-4.5 text-text-secondary group-hover:text-brand transition-colors" />
                              </div>
                              <span className="font-medium">{item.label}</span>
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
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
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

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="hidden md:flex items-center">
              <AnimatePresence>
                {searchOpen && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    type="text"
                    placeholder="Buscar producto..."
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        const section = document.getElementById("catalogo-productos");
                        if (section) section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="h-9 px-3 text-sm border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent mr-1"
                  />
                )}
              </AnimatePresence>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-text-secondary hover:text-brand hover:bg-surface-gray transition-colors"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>
            </div>

            {/* User */}
            <button className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg text-text-secondary hover:text-brand hover:bg-surface-gray transition-colors">
              <User className="w-[18px] h-[18px]" />
            </button>

            {/* Cart */}
            <button className="relative w-9 h-9 flex items-center justify-center rounded-lg text-text-secondary hover:text-brand hover:bg-surface-gray transition-colors">
              <ShoppingCart className="w-[18px] h-[18px]" />
              <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* CTA */}
            <a
              href="#contacto"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 h-9 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              Cotiza Ahora
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-text-secondary hover:text-brand hover:bg-surface-gray transition-colors"
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
            className="lg:hidden overflow-hidden border-t border-border-light bg-white"
          >
            <div className="px-4 py-4 space-y-1">
              {/* Search on mobile */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="Buscar producto..."
                  className="w-full h-10 pl-10 pr-4 text-sm border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-surface-gray"
                />
              </div>

              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setCatalogOpen(!catalogOpen)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-text-primary rounded-lg hover:bg-surface-gray transition-colors"
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
                          <div className="pl-4 space-y-0.5 pb-1">
                            {catalogItems.map((item) => (
                              <button
                                key={item.label}
                                type="button"
                                onClick={() => handleSelectCatalogItem(item.catId)}
                                className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-text-secondary rounded-lg hover:bg-surface-gray hover:text-brand transition-colors text-left"
                              >
                                <item.icon className="w-4 h-4" />
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
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      link.active
                        ? "text-brand bg-brand/5"
                        : "text-text-primary hover:bg-surface-gray"
                    }`}
                  >
                    {link.label}
                  </a>
                )
              )}

              <div className="pt-3 border-t border-border-light mt-3">
                <a
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full h-11 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  Cotiza Ahora
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
