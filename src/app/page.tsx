import TopAnnouncementBar from "@/components/TopAnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import CatalogSection from "@/components/CatalogSection";
import CompanyMissionVision from "@/components/CompanyMissionVision";
import ValuePropsSection from "@/components/ValuePropsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-white selection:bg-accent selection:text-white">
      {/* 1. Barra de Anuncios Superior */}
      <TopAnnouncementBar />

      {/* 2. Barra de Navegación Sticky con Logotipo Oficial */}
      <Navbar />

      {/* Contenido Principal */}
      <main className="flex-1">
        {/* 3. Hero Section Split-Screen con Visual Real de Taller */}
        <HeroSection />

        {/* 4. Grid de Categorías Especializadas */}
        <CategoryGrid />

        {/* 5. Catálogo Completo Interactivo con Selector de Color, Medidas y WhatsApp */}
        <CatalogSection />

        {/* 6. Sección Institucional (Misión, Visión y Valores Corporativos) */}
        <CompanyMissionVision />

        {/* 7. Propuesta de Valor y Métricas de Confianza */}
        <ValuePropsSection />

        {/* 8. Testimonios Reales y Prueba Social (Socios Comerciales & Familias) */}
        <TestimonialsCarousel />

        {/* 9. Banner de Conversión / Cotizaciones Especiales */}
        <CtaBanner />
      </main>

      {/* 10. Footer Institucional */}
      <Footer />
    </div>
  );
}
