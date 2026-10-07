"use client";

import { motion } from "framer-motion";
import { MessageCircle, Zap, ShieldCheck, Truck } from "lucide-react";

export default function CtaBanner() {
  const whatsappUrl =
    "https://wa.me/5213314008921?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20personalizada%20a%20la%20medida.";

  return (
    <section
      id="contacto"
      className="relative py-16 sm:py-20 lg:py-24 bg-brand overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            ¿Necesitas una funda con medidas especiales?
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Fabricamos fundas y cubiertas a la medida exacta para mesas de juego, asadores, pantallas,
            muebles especiales o equipo industrial. Cotización inmediata directamente por WhatsApp.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 h-13 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-[#25d366]/30 hover:shadow-xl hover:shadow-[#25d366]/40 text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Cotizar por WhatsApp Ahora</span>
            </motion.a>

            <motion.a
              href="tel:3338124090"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-13 bg-transparent border-2 border-white/25 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-sm sm:text-base"
            >
              <span>Llamar a Asesor: (33) 3812-4090</span>
            </motion.a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { icon: Zap, label: "Respuesta Rápida por WhatsApp" },
              { icon: ShieldCheck, label: "Cotización Sin Compromiso" },
              { icon: Truck, label: "Envíos a Todo México" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-white/60"
              >
                <item.icon className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
