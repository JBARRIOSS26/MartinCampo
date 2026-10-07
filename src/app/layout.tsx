import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Fundas y Cubiertas Martín del Campo | Protección Premium Hecha en México",
  description:
    "Fundas y cubiertas de alta gama hechas a la medida en México. Protección impermeable para lavadoras, vehículos, motos y hogar. Telas de grado marino con filtro UV. Envíos a todo México.",
  keywords: [
    "fundas a la medida",
    "cubiertas impermeables",
    "fundas para lavadora",
    "cubiertas para auto",
    "protección UV",
    "hecho en México",
    "Guadalajara",
  ],
  openGraph: {
    title: "Fundas y Cubiertas Martín del Campo",
    description: "Protección a la Medida para tus Inversiones Más Valiosas",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
