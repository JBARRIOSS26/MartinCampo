"use client";

import { Truck, ShieldCheck, FileText, Phone, MapPin } from "lucide-react";

export default function TopAnnouncementBar() {
  return (
    <div className="bg-brand text-white border-b border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
        {/* Left: Contacto directo */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5213314008921"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/90 hover:text-white font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
            <span className="hidden sm:inline">Atención y Cotización Directa:</span>
            <span className="font-bold text-accent">(33) 1400-8921</span>
          </a>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:flex items-center gap-1.5 text-white/75">
            <MapPin className="w-3.5 h-3.5 text-teal flex-shrink-0" />
            <span>Taller en Guadalajara • Envíos a todo México</span>
          </span>
        </div>

        {/* Right: Garantía y Facturación */}
        <div className="flex items-center gap-4 text-white/80">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-teal flex-shrink-0" />
            <span>Telas Impermeables Calibre 6</span>
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-accent flex-shrink-0" />
            <span>Facturación CFDI 4.0</span>
          </span>
        </div>
      </div>
    </div>
  );
}
