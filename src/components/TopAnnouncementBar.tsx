"use client";

import { Truck, Shield, FileText, Phone } from "lucide-react";

const announcements = [
  { icon: Truck, text: "Envíos asegurados a todo México con paqueterías líderes" },
  { icon: Shield, text: "Telas impermeables de alta gama y filtro UV" },
  { icon: FileText, text: "Facturación CFDI 4.0 inmediata" },
  { icon: Phone, text: "Atención y cotización directa: (33) 1400-8921" },
];

export default function TopAnnouncementBar() {
  return (
    <div className="bg-brand text-white overflow-hidden">
      <div className="relative h-9 flex items-center">
        <div className="animate-ticker flex whitespace-nowrap">
          {[...announcements, ...announcements].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 px-6 text-xs font-medium tracking-wide"
            >
              <item.icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span>{item.text}</span>
              <span className="mx-4 text-white/30">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
