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
    <div className="text-white bg-gray-950 min-h-screen p-16 sm:p-12 lg:p-16 bg-cover bg-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col ">
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
            <h2 className="text-4xl sm:text-5xl w-full mt-4 fw-200 font-light">
              A partir de agora, a sua empresa realmente vai te pertencer
            </h2>
            <h2 className="text-2xl sm:text-2xl w-full mt-4 text-white/75">
              Proteja seu negócio garantindo a exclusividade do nome que você
              escolheu e construa uma base sólida para o futuro da sua empresa
            </h2>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col gap-16 mt-16">
          <div className="text-center text-4xl lg:w-2/5 font-light">
            Toda empresa tem um patrimônio a proteger e sua marca é um dos bens
            mais valiosos do seu negócio.
          </div>
          <div className="lg:w-2/5 text-2xl text-center text-white/75">
            Uma falha na proteção da sua marca pode abrir espaço para imitações,
            disputas legais e prejuízos
          </div>
          <div className="flex gap-12 lg:w-3/5 p-6 bg-gray-900 border border-gray-500">
            <Image
              src="/juizbravo.png"
              width={200}
              height={200}
              alt="disputa legal"
            />
            <div className="flex flex-col gap-6 ">
              <div className="text-3xl">
                <span className="text-[#52edb3]">|</span> Sem problema com a
                justiça
              </div>
              <div className="text-2xl text-white/75">
                A sua marca registrada evita dores de cabeça com a justiça caso
                alguém queira ter uma marca com o mesmo nome
              </div>
            </div>
          </div>

          <div className="flex gap-12 lg:w-3/5 items-center p-6 bg-gray-900 border border-gray-500">
            <div className="flex flex-col gap-6">
              <div className="text-3xl">
                <span className="text-[#52edb3]">|</span> Evite prejuízos e
                retrabalhos
              </div>
              <div className="text-2xl text-white/75">
                Também evita que você tenha ter que refazer todo trabalho de
                divulgação caso alguém registre a sua marca antes de você
              </div>
            </div>
            <Image
              src="/mulherfrustrada.jpeg"
              width={200}
              height={200}
              alt="disputa legal"
            />
          </div>

          <div className="flex gap-12 lg:w-3/5 items-center p-6 bg-gray-900 border border-gray-500">
            <Image
              src="/caralogostarbucks.jpeg"
              width={200}
              height={200}
              alt="disputa legal"
            />

            <div className="flex flex-col gap-6">
              <div className="text-3xl">
                <span className="text-[#52edb3]">|</span> Segurança de ter a sua
                marca protegida por 10 anos
              </div>
              <div className="text-2xl text-white/75">
                Não tem maior tranquilidade que saber que a sua marca é
                realmente sua, o nome é seu e você pode crescer sem preocupações
              </div>
            </div>
          </div>
        </div>

        <div className="text-3xl mt-16 mb-16">
          <span className="text-[#52edb3] mr-3">|</span>IMPORTÂNCIA DO REGISTRO
          DA MARCA
        </div>
        <div className="text-2xl mb-6 font-light">
          Ter uma marca sem registro é como ter um carro de alto valor sem
          seguro: parece um bom negócio até que algo inesperado aconteça.
        </div>
        <div className="text-2xl font-light">
          O registro da marca não apenas protege contra riscos, mas também
          valoriza o seu negócio, aumentando a credibilidade e o
          profissionalismo. Uma marca protegida se destaca da concorrência e
          abre novas oportunidades de crescimento. Sem essa proteção, sua marca
          é um acidente esperando para acontecer.
        </div>
      </div>
    </div>
  );
}
