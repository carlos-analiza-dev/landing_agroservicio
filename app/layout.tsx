import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_STRAPI_HOST as string),
  title: {
    default: "Analiza | Soluciones Digitales",
    template: "%s | Analiza",
  },
  description:
    "Empresa especializada en desarrollo web, aplicaciones móviles y soluciones digitales a medida para tu negocio.",
  applicationName: "Analiza",
  keywords: [
    "desarrollo web",
    "aplicaciones móviles",
    "software a medida",
    "Next.js",
    "Strapi",
  ],
  authors: [{ name: "Analiza" }],
  creator: "Analiza",
  publisher: "Analiza",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: process.env.NEXT_PUBLIC_STRAPI_HOST,
    title: "Analiza | Soluciones Digitales",
    description: "Creamos soluciones digitales modernas, rápidas y escalables.",
    siteName: "Analiza",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Analiza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Analiza | Soluciones Digitales",
    description: "Creamos soluciones digitales modernas, rápidas y escalables.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="grow mt-20">{children}</main>
          <Footer />
        </div>
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
