import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { keywords } from "./components/keywords";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

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

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const FB_PIXEL_ID = "2855624541267230";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
      </Script>
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
