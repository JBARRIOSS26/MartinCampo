import type { Metadata } from "next";
import TopAnnouncementBar from "@/components/TopAnnouncementBar";
import Navbar from "@/components/Navbar";
import CatalogSection from "@/components/CatalogSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Catálogo Completo de Fundas y Cubiertas | Martín del Campo",
  description:
    "Explora nuestro catálogo de fundas para lavadoras, vehículos, muebles de jardín y confección a medida. Telas de grado marino 100% impermeables.",
};

export default function CatalogoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-white selection:bg-accent selection:text-white">
      <TopAnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <CatalogSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
