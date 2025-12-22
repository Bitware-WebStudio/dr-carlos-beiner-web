import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/interactive/Header";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/interactive/WhatsAppButton";
import StickyCTA from "@/components/interactive/StickyCTA";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0066CC",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Dr. Carlos Beiner | Cirugía Bucal en Providencia - Muelas del Juicio, Urgencias e Implantes",
    template: "%s | Dr. Carlos Beiner"
  },
  description: "Cirujano Dentista especializado en Cirugía Bucal con +15 años de experiencia en Providencia, Santiago. Muelas del juicio, urgencias dentales, implantes. A pasos de Metro Pedro de Valdivia. Agenda por WhatsApp.",
  keywords: ["cirugía bucal", "muelas del juicio", "extracción dental", "implantes dentales", "urgencias dentales", "dentista providencia", "cirujano dentista santiago"],
  authors: [{ name: "Dr. Carlos Beiner Mangiamarchi" }],
  creator: "Dr. Carlos Beiner",
  publisher: "Dr. Carlos Beiner",
  metadataBase: new URL("https://dr-carlos-beiner.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dr. Carlos Beiner | Cirugía Bucal en Providencia",
    description: "Cirujano Dentista especializado en muelas del juicio, urgencias e implantes dentales. +15 años de experiencia en Providencia, Santiago.",
    url: "https://dr-carlos-beiner.vercel.app/",
    siteName: "Dr. Carlos Beiner - Cirugía Bucal",
    images: [
      {
        url: "https://res.cloudinary.com/dvofqghc7/image/upload/v1765850490/Gemini_Generated_Image_65t8365t8365t836_sbkwfr.png",
        width: 1200,
        height: 630,
        alt: "Dr. Carlos Beiner - Cirugía Bucal",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Carlos Beiner | Cirugía Bucal en Providencia",
    description: "Cirujano Dentista especializado en muelas del juicio, urgencias e implantes dentales. +15 años de experiencia.",
    images: ["https://res.cloudinary.com/dvofqghc7/image/upload/v1765850490/Gemini_Generated_Image_65t8365t8365t836_sbkwfr.png"],
  },
  icons: {
    icon: "https://res.cloudinary.com/dvofqghc7/image/upload/c_pad,ar_1:1,b_white,w_64,h_64,f_png/v1765851124/Gemini_Generated_Image_6py4o66py4o66py4_vkq9ja.png?v=2",
    shortcut: "https://res.cloudinary.com/dvofqghc7/image/upload/c_pad,ar_1:1,b_white,w_64,h_64,f_png/v1765851124/Gemini_Generated_Image_6py4o66py4o66py4_vkq9ja.png?v=2",
    apple: "https://res.cloudinary.com/dvofqghc7/image/upload/c_pad,ar_1:1,b_white,w_180,h_180,f_png/v1765851124/Gemini_Generated_Image_6py4o66py4o66py4_vkq9ja.png?v=2",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://dr-carlos-beiner.vercel.app/#organization",
  "name": "Dr. Carlos Beiner Mangiamarchi",
  "alternateName": "Dr. Carlos Beiner - Cirugía Bucal",
  "description": "Cirujano Dentista especializado en Cirugía Bucal con más de 15 años de experiencia. Muelas del juicio, urgencias dentales e implantes.",
  "url": "https://dr-carlos-beiner.vercel.app/",
  "logo": "https://res.cloudinary.com/dvofqghc7/image/upload/v1765850490/Gemini_Generated_Image_65t8365t8365t836_sbkwfr.png",
  "image": "https://res.cloudinary.com/dvofqghc7/image/upload/v1765850709/Gemini_Generated_Image_wckr7qwckr7qwckr_n6dxba.png",
  "telephone": "+56933850580",
  "email": "carlosbeiner@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nueva Providencia 1860",
    "addressLocality": "Providencia",
    "addressRegion": "Región Metropolitana",
    "postalCode": "7500000",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-33.4252",
    "longitude": "-70.6087"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "CLP",
  "paymentAccepted": "Efectivo, Tarjeta de crédito, Tarjeta de débito, Transferencia",
  "areaServed": {
    "@type": "City",
    "name": "Santiago"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Cirugía Bucal",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Extracción de Muelas del Juicio",
          "description": "Extracción segura y sin dolor de terceros molares con técnicas mínimamente invasivas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Urgencias Dentales",
          "description": "Atención inmediata para emergencias dentales: dolor agudo, traumatismos, infecciones"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Implantes Dentales",
          "description": "Implantes de titanio premium con tecnología de guía digital para resultados precisos"
        }
      }
    ]
  }
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuándo debo extraer las muelas del juicio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La extracción se recomienda cuando causan dolor, infecciones, están impactadas o afectan otros dientes. Una evaluación con rayos X determina la necesidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Duele la extracción de muelas del juicio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Durante el procedimiento no sentirás dolor gracias a la anestesia local. Después puede haber molestias que se controlan con medicamentos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto dura la recuperación después de una extracción?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mayoría de los pacientes se recuperan en 3-7 días. Seguir las indicaciones post-operatorias asegura una recuperación rápida y sin complicaciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde está ubicado el consultorio del Dr. Carlos Beiner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En Nueva Providencia 1860, Providencia, Santiago. A pasos del Metro Pedro de Valdivia (Línea 1)."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans text-neutral-800 bg-white antialiased`}>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="faq-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
