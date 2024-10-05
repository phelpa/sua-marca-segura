import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jade Marcas",
  description: "Jade Marcas - Registro de marcas",
  keywords: [
    "marcas",
    "registro de marcas",
    "branding",
    "design",
    "business",
    "Jade Marcas",
    "pesquisa de marca",
  ],
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
