import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const keywords = [
  "registro de marcas",
  "marca registrada",
  "registro de marca no Brasil",
  "como registrar uma marca",
  "registro de marca INPI",
  "proteção de marca",
  "marca e patente",
  "propriedade intelectual",
  "processo de registro de marca",
  "marca comercial",
  "consulta de marca registrada",
  "pesquisa de marcas",
  "registro de logomarca",
  "direitos sobre marcas",

  // Legal and Regulatory
  "registro de marca INPI (Instituto Nacional da Propriedade Industrial)",
  "legislação de marcas",
  "lei de marcas e patentes",
  "proteção legal de marca",
  "custos de registro de marca",
  "requerimento de marca",
  "regularização de marca",
  "processo legal de registro de marca",
  "renovação de marca registrada",
  "registro de marca internacional",
  "oposição de marca",
  "monitoramento de marca registrada",

  // Industry-Specific Keywords
  "registro de marca para empresa",
  "registro de marca para produtos",
  "registro de marca para serviços",
  "registro de nome fantasia",
  "registro de marca para startups",
  "registro de marca para e-commerce",
  "marca registrada para franquias",
  "registro de marca no setor de moda",
  "registro de marca para software",
  "registro de marca para alimentos e bebidas",

  // Business-Oriented Keywords
  "vantagens do registro de marca",
  "importância do registro de marca",
  "proteção de nome de empresa",
  "valor de uma marca registrada",
  "como proteger sua marca",
  "consulta de disponibilidade de marca",
  "registro de marca empresarial",
  "segurança jurídica para marcas",
  "registro de marcas em tribunais",

  // Procedural Keywords
  "como dar entrada no registro de marca",
  "etapas do registro de marca",
  "como acompanhar o registro de marca",
  "quanto tempo demora para registrar uma marca",
  "documentação para registro de marca",
  "guia completo para registrar uma marca",
  "etapas de proteção de marca",

  // Competitor and Defense Keywords
  "defesa de marca registrada",
  "violação de marca registrada",
  "ação judicial por marca registrada",
  "evitar plágio de marca",
  "disputa de marca registrada",
  "conflito de marcas",
];

export const metadata: Metadata = {
  title: "Jade Marcas",
  description: "Jade Marcas - Registro de marcas",
  keywords,
  authors: [{ name: "Jade Marcas", url: "https://www.jademarcas.com" }],
  openGraph: {
    title: "Jade Marcas",
    description: "Registro de marcas",
    url: "https://www.jademarcas.com",
    siteName: "Jade Marcas",
    images: [
      {
        url: "https://www.jademarcas.com/jademarcas.svg",
        width: 800,
        height: 600,
        alt: "Jade Marcas branding image",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "Jade Marcas",
  appleWebApp: {
    title: "Jade Marcas",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.jademarcas.com",
  },
  headline: "Jade Marcas - Registro de Marcas",
  description:
    "Registre a sua marca com o serviço especializado da Jade Marcas. Oferecemos suporte completo no processo de registro de marca.",
  image: "https://www.jademarcas.com/jademarcas.svg",
  dateCreated: "2024-10-10T08:00:00-03:00",
  datePublished: "2024-10-10T08:00:00-03:00",
  dateModified: "2024-10-10T08:00:00-03:00",
  author: {
    "@type": "Organization",
    name: "Jade Marcas",
    url: "https://www.jademarcas.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Jade Marcas",
    logo: {
      "@type": "ImageObject",
      url: "https://www.jademarcas.com/jademarcas.svg",
      width: 300,
      height: 60,
    },
  },
  inLanguage: "pt-BR",
  isFamilyFriendly: "true",
  wordCount: "1200",
  commentCount: "10",
  keywords,
  articleSection: "Negócios",
  citation: "https://www.jademarcas.com",
  accessibilitySummary:
    "Esta página mostra como funciona o registro de uma marca e oferece um serviço para o registro.",
  genre: "Guia",
  about: {
    "@type": "Thing",
    name: "Registro de Marcas",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Jade Marcas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style>
          {`html {
             scroll-behavior: smooth;
      }`}
        </style>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
