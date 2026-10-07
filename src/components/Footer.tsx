"use client";

import {
  Award,
  Truck,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const soluciones = [
    { label: "Fundas para Lavadoras y Secadoras", href: "#catalogo-productos" },
    { label: "Protector para Asadores de Jardín", href: "#catalogo-productos" },
    { label: "Protector para Futbolito y Billar", href: "#catalogo-productos" },
    { label: "Fundas para Pantallas TV Exterior", href: "#catalogo-productos" },
    { label: "Cubiertas para Autos y Pickups", href: "#catalogo-productos" },
    { label: "Fundas Térmicas para Motocicletas", href: "#catalogo-productos" },
    { label: "Confección Textil a Medida", href: "#catalogo-productos" },
  ];

  const enlacesRapidos = [
    { label: "Cotizador por WhatsApp", href: "https://wa.me/5213314008921" },
    { label: "Aviso de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
    { label: "Guía de Medición Paso a Paso", href: "#" },
    { label: "Facturación CFDI 4.0", href: "#" },
    { label: "Garantía de Calidad", href: "#" },
  ];

  const paqueterias = ["DHL Express", "FedEx", "Estafeta", "Paquetexpress"];

  return (
    <footer className="bg-brand text-white border-t border-white/10">
      {/* Contenido Principal de 4 Columnas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Columna 1: Corporativo & Logotipo Oficial */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
              <img
                src="/assets/images/Logo/logo-martin-campo.jpg"
                alt="Martín del Campo Fundas y Cubiertas"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-white/75 leading-relaxed pt-1">
              Líderes en confección textil de alta resistencia en México. Protegemos tus
              equipos del hogar, vehículos e inversiones con telas impermeables de grado marino
              y patronaje milimétrico artesanal.
            </p>

            {/* Sellos de Calidad */}
            <div className="pt-2 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-white/90">
                <Award className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Hecho con orgullo en Guadalajara, México</span>
              </div>
              <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-white/90">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Garantía de Satisfacción 100%</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Soluciones */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
              Catálogo de Soluciones
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

          {/* Columna 3: Enlaces Rápidos & Cotizaciones */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
              Atención y Cotización
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
              <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-3">
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
                    className="px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[11px] font-semibold text-center text-white/85"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Datos de Contacto Directo */}
            <div className="pt-2 border-t border-white/10 space-y-2 text-xs text-white/70">
              <a
                href="https://wa.me/5213314008921"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: (33) 1400-8921</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Teléfono Taller: (33) 3812-4090</span>
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
