import Image from "next/image";
import { keywords } from "../components/keywords";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.jademarcas.com/promocao",
  },
  headline: "Promoção de Registro de Marcas - Jade Marcas",
  description:
    "Aproveite a nossa promoção para registrar a sua marca com suporte especializado. Jade Marcas oferece todo o suporte necessário para proteger a sua marca.",
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
  articleSection: "Promoção",
  citation: "https://www.jademarcas.com/promocao",
  accessibilitySummary:
    "Esta página apresenta uma promoção especial para o registro de marcas, com suporte completo oferecido pela Jade Marcas.",
  genre: "Guia",
  about: {
    "@type": "Thing",
    name: "Registro de Marcas",
  },
};

export default function Home() {
  return (
    <div className="text-white bg-neutral-900 min-h-screen p-8 sm:p-12 lg:p-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-wrap justify-between items-center gap-8 lg:gap-12">
        <div className="flex flex-col gap-8 w-full lg:w-2/5 text-center lg:text-left items-center lg:items-start">
          <div>
            <Image
              src="/jademarcas2.svg"
              alt="Jade Marcas Icon"
              width={260}
              height={90}
              className="mb-2"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl w-full lg:w-4/5 mt-4">
            A partir de agora, a sua empresa realmente vai te pertencer
          </h2>
          <h2 className="text-2xl sm:text-3xl w-full lg:w-4/5 mt-4 text-white/75">
            Proteja seu negócio garantindo a exclusividade do nome que você
            escolheu e construa uma base sólida para o futuro da sua empresa
          </h2>
        </div>

        <div className="flex justify-center w-full lg:w-2/5">
          <Image
            src="/jademarcas.png"
            alt="jade marcas advogada"
            width={500}
            height={500}
            className="w-[300px] sm:w-[400px] lg:w-[500px] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
