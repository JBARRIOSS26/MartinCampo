"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Ruler,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  HelpCircle,
  FileText,
  Factory,
  Armchair,
  Car,
  Bath,
  Speaker,
  Cpu,
} from "lucide-react";

const CATEGORIAS_MEDIDA = [
  { id: "maquinaria", label: "Maquinaria / Industrial", icon: Factory, desc: "Generadores, compresores, tableros o plantas de luz" },
  { id: "muebles", label: "Mobiliario y Terrazas", icon: Armchair, desc: "Salas de jardín, barras, mesas especiales, camastros" },
  { id: "vehiculos", label: "Vehículo / Especial", icon: Car, desc: "Remolques, botes, carritos de golf, motos adaptadas" },
  { id: "jacuzzi", label: "Jacuzzi o Alberca", icon: Bath, desc: "Tinas de hidromasaje, cubiertas térmicas o de intemperie" },
  { id: "audio", label: "Audio / Equipamiento", icon: Speaker, desc: "Bafles, consolas, pantallas gigantes, instrumentos" },
  { id: "otro", label: "Otro / Proyecto Único", icon: Cpu, desc: "Cualquier silueta geométrica o necesidad específica" },
];

const TIPOS_PROTECCION = [
  { id: "intemperie", label: "100% Intemperie Calibre 6", badge: "Más Solicitado", desc: "Lona impermeable uso rudo contra lluvias torrenciales y rayos UV" },
  { id: "afelpado", label: "Vinipiel Afelpado Premium", badge: "Máximo Cuidado", desc: "Interior suave que no raya pinturas finas, cristales ni acabados de autor" },
  { id: "ligero", label: "Oxford / Antipolvo Comercial", badge: "Uso Interior", desc: "Protección ligera y transpirable para bodegas y talleres" },
];

const ADICIONALES = [
  { id: "cierres", label: "Cierres náuticos reforzados" },
  { id: "velcro", label: "Solapas con velcro de alta adherencia" },
  { id: "ojillos", label: "Ojillos perimetrales para amarrar" },
  { id: "resorte", label: "Elástico / resorte inferior ajustable" },
];

export default function CustomQuoteBuilder() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState(CATEGORIAS_MEDIDA[0].id);
  const [proteccion, setProteccion] = useState(TIPOS_PROTECCION[0].id);
  const [largo, setLargo] = useState("");
  const [ancho, setAncho] = useState("");
  const [alto, setAlto] = useState("");
  const [detalles, setDetalles] = useState("");
  const [adicionalesSeleccionados, setAdicionalesSeleccionados] = useState<string[]>(["cierres"]);
  const [tieneFotos, setTieneFotos] = useState(false);

  const toggleAdicional = (id: string) => {
    setAdicionalesSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getTipoLabel = () =>
    CATEGORIAS_MEDIDA.find((c) => c.id === tipoSeleccionado)?.label || "Proyecto a la medida";

  const getProteccionLabel = () =>
    TIPOS_PROTECCION.find((p) => p.id === proteccion)?.label || "Uso rudo";

  const construirMensajeWhatsApp = () => {
    const medidasTexto =
      largo || ancho || alto
        ? `*Medidas aprox:* ${largo || "?"} cm (Largo) x ${ancho || "?"} cm (Ancho) x ${alto || "?"} cm (Alto)`
        : "*Medidas:* A definir con su asesor";

    const adicionalesTexto =
      adicionalesSeleccionados.length > 0
        ? `*Aditamentos requeridos:* ${adicionalesSeleccionados
            .map((a) => ADICIONALES.find((ad) => ad.id === a)?.label)
            .filter(Boolean)
            .join(", ")}`
        : "";

    const fotosTexto = tieneFotos ? "✅ Tengo fotos o planos para enviar por aquí." : "";

    const mensaje = [
      "👋 Hola, buen día Martín del Campo.",
      "Quisiera solicitar una *Cotización de Funda Personalizada a la Medida*:",
      "",
      `📌 *Tipo de proyecto:* ${getTipoLabel()}`,
      `🛡️ *Material sugerido:* ${getProteccionLabel()}`,
      `📐 ${medidasTexto}`,
      adicionalesTexto ? `⚙️ ${adicionalesTexto}` : "",
      detalles ? `📝 *Detalles adicionales:* "${detalles}"` : "",
      fotosTexto,
      "",
      "¿Podrían indicarme costo aproximado y tiempo de entrega?",
    ]
      .filter((line) => line !== "")
      .join("\n");

    return `https://wa.me/5213314008921?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <div className="bg-white rounded-3xl border border-border-light shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10">
      {/* Encabezado del Área */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Taller de Patronaje & Confección Especial</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand tracking-tight mb-2">
          Diseña y Cotiza tu Funda a la Medida Exacta
        </h3>
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
          Para evitar confusiones con fotografías genéricas, aquí puedes describir con precisión lo que
          deseas proteger. Confeccionamos sobre medidas específicas en nuestro taller de Guadalajara y enviamos a todo México.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Columna Izquierda: Formulario Interactivo */}
        <div className="lg:col-span-7 space-y-6">
          {/* Paso 1: Tipo de Proyecto */}
          <div>
            <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-2.5">
              1. ¿Qué deseas proteger?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {CATEGORIAS_MEDIDA.map((cat) => {
                const Icon = cat.icon;
                const isSelected = tipoSeleccionado === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setTipoSeleccionado(cat.id)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-brand text-white border-brand shadow-md"
                        : "bg-surface-gray hover:bg-white border-border-light text-text-primary hover:border-brand/30"
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-2 ${isSelected ? "text-accent" : "text-brand"}`} />
                    <span className="text-xs font-bold leading-tight">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Paso 2: Material / Uso */}
          <div>
            <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-2.5">
              2. Nivel de Protección y Material
            </label>
            <div className="space-y-2">
              {TIPOS_PROTECCION.map((tip) => {
                const isSelected = proteccion === tip.id;
                return (
                  <div
                    key={tip.id}
                    onClick={() => setProteccion(tip.id)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                      isSelected
                        ? "bg-brand/5 border-brand ring-1 ring-brand/20 shadow-sm"
                        : "bg-surface-gray hover:bg-white border-border-light"
                    }`}
                  >
                    <input
                      type="radio"
                      name="proteccion"
                      checked={isSelected}
                      onChange={() => setProteccion(tip.id)}
                      className="mt-1 text-brand focus:ring-accent"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-text-primary">{tip.label}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                          {tip.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-text-secondary mt-0.5 leading-snug">{tip.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Paso 3: Dimensiones sugeridas */}
          <div>
            <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-1.5">
              3. Medidas Aproximadas (Centímetros)
            </label>
            <p className="text-[11px] text-text-secondary mb-2.5">
              Si no tienes las medidas exactas ahora, no te preocupes; te asesoramos en WhatsApp.
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <span className="block text-[11px] font-semibold text-text-secondary mb-1">Largo</span>
                <div className="relative">
                  <input
                    type="number"
                    value={largo}
                    onChange={(e) => setLargo(e.target.value)}
                    placeholder="Ej. 120"
                    className="w-full h-10 px-3 text-xs bg-surface-gray border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 font-semibold"
                  />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-text-muted">cm</span>
                </div>
              </div>
              <div>
                <span className="block text-[11px] font-semibold text-text-secondary mb-1">Ancho / Fondo</span>
                <div className="relative">
                  <input
                    type="number"
                    value={ancho}
                    onChange={(e) => setAncho(e.target.value)}
                    placeholder="Ej. 80"
                    className="w-full h-10 px-3 text-xs bg-surface-gray border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 font-semibold"
                  />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-text-muted">cm</span>
                </div>
              </div>
              <div>
                <span className="block text-[11px] font-semibold text-text-secondary mb-1">Alto</span>
                <div className="relative">
                  <input
                    type="number"
                    value={alto}
                    onChange={(e) => setAlto(e.target.value)}
                    placeholder="Ej. 95"
                    className="w-full h-10 px-3 text-xs bg-surface-gray border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 font-semibold"
                  />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-text-muted">cm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 4: Adicionales y Descripción */}
          <div>
            <label className="block text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
              4. Aditamentos o Accesorios Deseados
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              {ADICIONALES.map((ad) => {
                const isChecked = adicionalesSeleccionados.includes(ad.id);
                return (
                  <button
                    key={ad.id}
                    type="button"
                    onClick={() => toggleAdicional(ad.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                      isChecked
                        ? "bg-brand/5 border-brand text-brand"
                        : "bg-surface-gray border-border-light text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                        isChecked ? "bg-brand text-white border-brand" : "border-border-light bg-white"
                      }`}
                    >
                      {isChecked && "✓"}
                    </div>
                    <span>{ad.label}</span>
                  </button>
                );
              })}
            </div>

            <textarea
              value={detalles}
              onChange={(e) => setDetalles(e.target.value)}
              placeholder="Describe lo que buscas: marca o modelo del equipo, si tiene ruedas o manijas, si estará expuesto a sol directo, etc."
              rows={3}
              className="w-full p-3 text-xs bg-surface-gray border border-border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 placeholder:text-text-muted"
            />

            <label className="mt-2.5 flex items-center gap-2 text-xs font-medium text-text-secondary cursor-pointer select-none">
              <input
                type="checkbox"
                checked={tieneFotos}
                onChange={(e) => setTieneFotos(e.target.checked)}
                className="rounded border-border-light text-brand focus:ring-accent"
              />
              <span>Tengo fotografías o plano del objeto listo para compartir por WhatsApp</span>
            </label>
          </div>
        </div>

        {/* Columna Derecha: Resumen de Cotización & Pasos del Taller */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Card de Resumen con botón de WhatsApp */}
          <div className="bg-gradient-to-br from-brand via-brand to-brand-light text-white rounded-3xl p-6 sm:p-7 shadow-xl">
            <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider mb-3">
              <Ruler className="w-4 h-4" />
              <span>Resumen de tu Solicitud</span>
            </div>

            <h4 className="text-lg font-bold mb-3">{getTipoLabel()}</h4>

            <div className="space-y-2 text-xs text-white/80 pb-5 border-b border-white/10">
              <div className="flex justify-between">
                <span className="text-white/60">Material:</span>
                <span className="font-semibold text-white">{getProteccionLabel().split(" ")[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Medidas:</span>
                <span className="font-semibold text-white">
                  {largo || ancho || alto ? `${largo || "-"} x ${ancho || "-"} x ${alto || "-"} cm` : "Por confirmar"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Tiempo estimado:</span>
                <span className="font-semibold text-emerald-300">3 a 5 días hábiles</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Garantía:</span>
                <span className="font-semibold text-white">Ajuste 100% garantizado</span>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[11px] text-white/70 mb-3 text-center">
                Te enviamos presupuesto formal y asesoría técnica de inmediato:
              </p>
              <a
                href={construirMensajeWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-[#25d366]/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enviar Especificación por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Proceso transparente del taller (Sin imágenes engañosas) */}
          <div className="bg-surface-gray rounded-2xl p-5 border border-border-light space-y-3">
            <h5 className="text-xs font-bold text-brand uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              ¿Cómo funciona la confección personalizada?
            </h5>

            <div className="space-y-2.5 text-xs text-text-secondary">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-brand text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <p>
                  <strong className="text-text-primary">Nos envías tus medidas o fotos:</strong> Te guiamos paso a paso por WhatsApp para tomar las dimensiones críticas.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-brand text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <p>
                  <strong className="text-text-primary">Diseño y cotización cerrada:</strong> Te brindamos precio exacto con opciones de lona marina, vinipiel o afelpado.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-brand text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <p>
                  <strong className="text-text-primary">Confección en Guadalajara:</strong> Cortamos y cosemos con hilo náutico de alta resistencia en 3 a 5 días.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  4
                </span>
                <p>
                  <strong className="text-text-primary">Entrega garantizada:</strong> Enviamos por paquetería con garantía de ajuste exacto sobre las medidas acordadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
