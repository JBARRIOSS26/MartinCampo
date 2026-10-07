"use client";

import {
  Shield,
  Award,
  Truck,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const soluciones = [
    { label: "Fundas para Lavadoras y Secadoras", href: "#catalogo" },
    { label: "Cubiertas para Autos y Pickups", href: "#catalogo" },
    { label: "Fundas para Motocicletas", href: "#catalogo" },
    { label: "Fundas para Salas y Muebles de Jardín", href: "#catalogo" },
    { label: "Fundas para Asadores y Calentadores", href: "#catalogo" },
    { label: "Confección Industrial a Medida", href: "#contacto" },
  ];

  const enlacesRapidos = [
    { label: "Aviso de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
    { label: "Guía de Medición Paso a Paso", href: "#" },
    { label: "Solicitud de Factura CFDI 4.0", href: "#" },
    { label: "Tiempos y Costos de Envío", href: "#" },
    { label: "Garantía de Satisfacción", href: "#" },
  ];

  const paqueterias = ["DHL Express", "FedEx", "Estafeta", "Paquetexpress"];

  return (
    <footer className="bg-brand text-white border-t border-white/10">
      {/* Contenido Principal de 4 Columnas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Columna 1: Corporativo & Sellos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight block">
                  Martín del Campo
                </span>
                <span className="text-[10px] text-white/60 uppercase tracking-widest block">
                  Fundas y Cubiertas
                </span>
              </div>
            </div>

            <p className="text-sm text-white/75 leading-relaxed">
              Líderes en confección textil de alta resistencia en México. Protegemos tus
              equipos, vehículos y espacios con telas de grado marino y ajuste milimétrico artesanal.
            </p>

            {/* Sellos de Calidad */}
            <div className="pt-2 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/90">
                <Award className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Hecho con orgullo en México</span>
              </div>
              <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/90">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Garantía de Satisfacción 100%</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Soluciones */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
              Soluciones
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              {soluciones.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent/60 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Enlaces Rápidos */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              {enlacesRapidos.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent/60 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Envíos & Contacto */}
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                Envíos a Todo México
              </h3>
              <p className="text-xs text-white/70 mb-3 flex items-center gap-2">
                <Truck className="w-4 h-4 text-accent" />
                <span>Despacho seguro mediante alianzas líderes:</span>
              </p>
              <div className="grid grid-cols-2 gap-2">
                {paqueterias.map((p) => (
                  <span
                    key={p}
                    className="px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-semibold text-center text-white/85"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Datos de Contacto Directo */}
            <div className="pt-2 border-t border-white/10 space-y-2 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>(33) 3812-4090 / (33) 1400-8921</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>contacto@fundasmartindelcampo.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Guadalajara, Jalisco, México</span>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="pt-1 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent text-white transition-all"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent text-white transition-all"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer / Copyright */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60 text-center sm:text-left">
          <p>© 2026 Fundas y Cubiertas Martín del Campo. Todos los derechos reservados.</p>
          <p className="font-medium text-white/75">
            Confección Textil de Alta Gama • Hecho con orgullo en Guadalajara, México
          </p>
        </div>
      </div>
    </footer>
  );
}
