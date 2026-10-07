import TopAnnouncementBar from "@/components/TopAnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import CatalogSection from "@/components/CatalogSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-white selection:bg-accent selection:text-white">
      {/* 1. Barra de Anuncios Superior */}
      <TopAnnouncementBar />

      {/* 2. Barra de Navegación Sticky */}
      <Navbar />

      {/* Contenido Principal */}
      <main className="flex-1">
        {/* 3. Hero Section Split-Screen */}
        <HeroSection />

        {/* 4. Grid de Categorías Especializadas */}
        <CategoryGrid />

        {/* 5. Catálogo Completo Interactivo con Filtros, Búsqueda y Detalle */}
        <CatalogSection />

        {/* 6. Propuesta de Valor y Métricas de Confianza */}
        <ValuePropsSection />

        {/* 7. Testimonios de Clientes Verificados */}
        <TestimonialsCarousel />

        {/* 8. Banner de Conversión / Cotizaciones Especiales */}
        <CtaBanner />
      </main>

      {/* 9. Footer Institucional */}
      <Footer />
    </div>
  );
}
