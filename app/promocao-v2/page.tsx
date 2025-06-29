import Image from "next/image";
import { keywords } from "../components/keywords";
import { XIcon } from "../icons/x-icon";
import { JadeCheckedIcon } from "../icons/jade-checked-icon";
import { BuyButton3 } from "../components/buy-button3";
import { InpiIcon } from "../icons/inpi-icon";
import { McDonaldsLogo } from "../icons/mc-donalds-logo";
import { StarbucksLogo } from "../icons/starbucks-logo";
import { CocaColaLogo } from "../icons/coca-cola-logo";
import { BuyButton4 } from "../components/buy-button4";
import { IfoodIcon } from "../icons/ifood-icon";
import { NetflixLogo } from "../icons/netflix-logo";

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
    <div className="text-white bg-gray-950 min-h-screen bg-cover bg-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col p-4 sm:p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-8 lg:gap-12 w-full lg:w-2/5 text-center lg:text-left items-center lg:items-start">
            <div>
              <Image
                src="/jademarcas2.svg"
                alt="Jade Marcas Icon"
                width={260}
                height={90}
                className="mb-2 w-48 sm:w-64 lg:w-[260px]"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl w-full mt-4 font-light leading-tight">
              A partir de agora, sua marca estará protegida com o registro
              oficial no INPI
            </h2>

            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-8 w-full sm:w-auto">
              <InpiIcon className="w-64 h-14 sm:w-auto sm:h-auto" />
              <BuyButton4
                title="QUERO REGISTRAR MINHA MARCA NO INPI"
                className="min-w-[200px] text-sm sm:text-base"
              />
            </div>

            <h2 className="text-lg sm:text-xl lg:text-2xl w-full mt-4 text-white">
              <span className="block mb-2">
                Proteja sua marca por 10 anos com o registro no INPI, realizado
                por especialistas de forma rápida e simples.
              </span>
              <span className="block text-green-500 ">
                O único registro de marca com pesquisa de viabilidade ilimitada
                e assessoria jurídica para qualquer dúvida.
              </span>
            </h2>
          </div>

          <div
            className="w-full lg:w-auto flex justify-center"
            style={{
              background:
                "radial-gradient(circle closest-side, #0d6b48 10%, rgb(3, 7, 18) 100%)",
            }}
          >
            <Image
              src="/jademelhorada.png"
              alt="Jade Helpa, a advogada da Jade Marcas"
              width={420}
              height={220}
              className="mb-2 w-64 sm:w-80 lg:w-[420px] h-auto"
            />
          </div>
        </div>
      </div>
      <hr className="my-8 lg:my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-200 to-transparent opacity-5 dark:via-neutral-200" />

      <hr className="border-gray-800" />

      <div
        className="flex justify-center flex-col gap-6 lg:gap-8 w-full pt-4 px-4 sm:px-8 lg:px-12"
        style={{ backgroundColor: "#101010" }}
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">
          <div className="w-full lg:w-3/5 flex gap-4 lg:gap-8 flex-wrap justify-center lg:justify-start lg:pl-8 relative">
            <McDonaldsLogo className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40" />
            <StarbucksLogo className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40" />
            <CocaColaLogo className="w-40 h-12 sm:w-60 sm:h-18 lg:w-80 lg:h-24" />
            <IfoodIcon className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40" />
            <NetflixLogo className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40" />
            <div className="font-serif absolute bottom-0 left-0 pl-2 text-sm sm:text-base lg:text-lg">
              Todas as marcas que você conhece são registradas no INPI
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-2/5">
            <div className="text-xl sm:text-2xl lg:text-3xl font-serif">
              Se você pesquisou por registro de marca e encontrou essa página, é
              com <span className="text-green-700">você mesmo</span> que eu
              quero conversar.
            </div>
            <div className="text-base sm:text-lg lg:text-xl font-light">
              Eu sei que não é fácil (ou não está sendo) construir um negócio do
              zero, é uma verdadeira jornada de altos e baixos, e todo dia sua
              mente rodopia pensando em novas formas de ganhar mais dinheiro.
            </div>

            <div className="text-base sm:text-lg lg:text-xl font-light">
              Parece que não, mas existe algo mais importante que ganhar
              dinheiro:
            </div>

            <div className="text-lg sm:text-xl lg:text-2xl font-light underline decoration-green-700 text-green-400">
              Assegurar todo o investimento que você já fez no seu negócio e que
              ainda vai fazer por 10 anos.
            </div>

            <div className="text-base sm:text-lg lg:text-xl font-light">
              Só é dono da marca quem registra, com o registro você evita o
              desastre que seria perder o nome do seu negócio e ter que
              recomeçar do zero.
            </div>
            <div className="text-base sm:text-lg lg:text-xl font-light">
              Tudo que está associado a sua marca vai continuar sendo seu e tudo
              que você construir a partir de hoje também.
            </div>
          </div>
        </div>
      </div>
      <div
        className="border-gray-800 h-8 lg:h-12"
        style={{ backgroundColor: "#101010" }}
      />

      <hr className="border-gray-800" />

      <div
        style={{ backgroundColor: "#fff" }}
        className="flex justify-center pt-4 lg:pt-8 px-4 sm:px-8"
      >
        <Image
          src="/grafico6.png"
          alt="gráfico da sua empresa com a marca registrada"
          width={1100}
          height={500}
          className="mb-2 w-full max-w-4xl h-auto"
        />
      </div>

      <div className="flex justify-center items-center flex-col gap-8 lg:gap-16 mt-8 lg:mt-16 px-4 sm:px-8">
        <div className="text-center text-2xl sm:text-3xl lg:text-4xl w-full lg:w-2/3 font-light">
          A sua marca é um dos seus bens mais valiosos, é o rosto do seu
          negócio, o nome em que sua empresa é conhecida no mercado.
        </div>
        <div className="w-full lg:w-2/3 text-lg sm:text-xl lg:text-2xl text-center text-white/75">
          É mais que óbvio que é necessário proteger esse patrimônio, mas não é
          tão óbvio outros benefícios que o registro traz para o seu negócio :
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-12 max-w-4xl p-4 lg:p-6 bg-gray-900 border border-gray-500 w-full">
          <Image
            src="/juizbravo.png"
            width={200}
            height={200}
            alt="disputa legal"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[200px] lg:h-[200px]"
          />
          <div className="flex flex-col gap-3 lg:gap-4 text-center lg:text-left">
            <div className="text-xl sm:text-2xl lg:text-3xl">
              <span className="text-[#52edb3]">|</span> Sem problemas com a
              justiça
            </div>
            <div className="text-base sm:text-lg lg:text-2xl text-white/75">
              A sua marca registrada evita dores de cabeça com a justiça caso
              alguém queira ter uma marca com o mesmo nome
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-12 max-w-4xl p-4 lg:p-6 bg-gray-900 border border-gray-500 w-full">
          <div className="flex flex-col gap-3 lg:gap-4 text-center lg:text-left order-2 lg:order-1">
            <div className="text-xl sm:text-2xl lg:text-3xl">
              <span className="text-[#52edb3]">|</span> Instagram protegido da
              sua empresa
            </div>
            <div className="text-base sm:text-lg lg:text-2xl text-white/75">
              Todo dia o Instagram recebe denúncias e derruba páginas que estão
              usando um nome de marca já registrado.
            </div>
          </div>
          <Image
            src="/instagramlogo.png"
            width={200}
            height={200}
            alt="disputa legal"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[200px] lg:h-[200px] order-1 lg:order-2"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-12 max-w-4xl p-4 lg:p-6 bg-gray-900 border border-gray-500 w-full">
          <Image
            src="/caralogostarbucks.jpeg"
            width={200}
            height={200}
            alt="felicidade de ter o logo registrado"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[200px] lg:h-[200px]"
          />
          <div className="flex flex-col gap-3 lg:gap-4 text-center lg:text-left">
            <div className="text-xl sm:text-2xl lg:text-3xl">
              <span className="text-[#52edb3]">|</span> Segurança de ter a sua
              marca protegida por 10 anos
            </div>
            <div className="text-base sm:text-lg lg:text-2xl text-white/75">
              Não tem maior tranquilidade que saber que a sua marca é realmente
              sua, o nome é seu e você pode crescer sem preocupações
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-8 lg:mt-16 mb-4 gap-6 lg:gap-16 justify-center px-4 sm:px-8">
        <div className="flex flex-col gap-8 lg:gap-12 w-full lg:w-3/5">
          <div className="text-2xl sm:text-3xl uppercase text-green-400">
            🔎 PESQUISA ILIMITADA DE VIABILIDADE DE MARCA
          </div>

          <div className="text-lg sm:text-xl lg:text-2xl font-light w-full">
            Para sempre vamos pesquisar se o nome que você quer usar já pertence
            a outra pessoa. Você vai poder solicitar quantas pesquisas quiser,
            para qualquer nome, sempre que precisar.
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl font-light w-full">
            Sabemos que a sua empresa vai crescer e que outras idéias e nomes
            podem aparecer e toda vez que isso acontecer vamos estar a
            disposição para fazer uma pesquisa completa da viabilidade desse
            nome.
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl font-light w-full">
            Já pensou em fazer essa pesquisa sozinho? Não é fácil ou simples.
          </div>

          <div className="text-lg sm:text-xl lg:text-2xl font-light w-full">
            Com toda a nossa experiência em marcas vamos fazer isso para você.
            Vamos te ajudar a encontrar o nome perfeito para o seu negócio e
            garantir que esse nome seja seu.{" "}
            <span className="text-lg sm:text-xl lg:text-2xl font-light underline decoration-green-700 text-green-400">
              Lembrando que isso é para sempre!
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 lg:mt-24 mb-4 px-4 sm:px-8">
        <div className="text-center text-2xl sm:text-3xl lg:text-4xl font-medium">
          Registrar a marca não é opcional.
        </div>
      </div>
      <div className="text-lg sm:text-xl lg:text-2xl text-center text-white/75 mb-6 lg:mb-8 px-4 sm:px-8">
        É a única forma de garantir sua exclusividade e proteção.
      </div>

      <div className="flex justify-center gap-4 lg:gap-8 xl:gap-16 flex-wrap px-4 sm:px-8">
        {/* Unregistered Brand Card */}
        <div className="border border-gray-700 rounded-lg w-full max-w-md lg:max-w-lg xl:max-w-[500px] bg-gray-900 flex flex-col mb-6 lg:mb-8">
          <div className="border border-gray-700 rounded-lg p-4 lg:p-6 text-lg sm:text-xl lg:text-2xl bg-red-700 text-center">
            MARCA SEM REGISTRO
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 p-4 lg:p-6 xl:p-12 pt-6 lg:pt-8 bg-gray-900 text-base sm:text-lg lg:text-xl flex-grow">
            <div className="flex gap-2 items-start">
              <div className="mt-1">
                <XIcon />
              </div>
              <div className="font-light">Sem garantia de exclusividade</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="mt-1">
                <XIcon />
              </div>
              <div className="font-light">Risco de perder a marca</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="mt-1">
                <XIcon />
              </div>
              <div className="font-light">Falta de credibilidade</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="mt-1">
                <XIcon />
              </div>
              <div className="font-light">Risco de processos judiciais</div>
            </div>

            <div className="flex gap-2 items-start">
              <div className="mt-1">
                <XIcon />
              </div>
              <div className="font-light">
                Problemas para registrar domínio e redes sociais
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-3 lg:p-4 rounded-lg text-center text-base sm:text-lg m-4 lg:m-8 uppercase">
            <div>Muito risco, nenhuma segurança</div>
          </div>
        </div>

        {/* Registered Brand Card */}
        <div className="border border-gray-700 rounded-lg w-full max-w-md lg:max-w-lg xl:max-w-[500px]">
          <div className="border border-gray-700 rounded-lg p-4 lg:p-6 text-lg sm:text-xl lg:text-2xl bg-green-700 text-center">
            MARCA COM REGISTRO
          </div>
          <div className="flex flex-col gap-3 lg:gap-4 p-4 lg:p-6 xl:p-12 pt-6 lg:pt-8 bg-gray-900 text-base sm:text-lg lg:text-xl">
            <div className="flex gap-2 items-start">
              <div className="mt-1">
                <JadeCheckedIcon />
              </div>
              <div className="font-light">
                Exclusividade da marca por 10 anos, com possibilidade de
                renovação
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="mt-1">
                <JadeCheckedIcon />
              </div>
              <div className="font-light">Proteção legal garantida</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="mt-1">
                <JadeCheckedIcon />
              </div>
              <div className="font-light">
                Maior credibilidade e valor de mercado
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="mt-1">
                <JadeCheckedIcon />
              </div>
              <div className="font-light">
                Segurança para expandir seu negócio
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="mt-1">
                <JadeCheckedIcon />
              </div>
              <div className="font-light">Diferencial competitivo</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="mt-1">
                <JadeCheckedIcon />
              </div>
              <div className="font-light">
                Segurança para registrar domínios e garantir sua identidade
                digital
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="mt-1">
                <JadeCheckedIcon />
              </div>
              <div className="font-light">
                Acesso ao selo de marca registrada no Mercado Livre
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-8 lg:gap-16 mt-8 lg:mt-16 px-4 sm:px-8">
        <div className="text-center text-2xl sm:text-3xl lg:text-4xl w-full lg:w-3/5 font-light">
          Quanto você pagaria para proteger tudo que você construiu e vai
          construir pelos próximos 10 anos?
        </div>

        <div className="w-full lg:w-4/5 text-lg sm:text-xl lg:text-2xl text-center font-light mb-4">
          É exatamente essa proteção que você vai garantir. A partir do pedido
          do registro tudo que está associado a sua marca estará protegido. É o
          melhor investimento que você pode fazer para o seu negócio.
        </div>
      </div>

      <div className="flex justify-center items-center mt-12 mb-12 px-4 sm:px-8">
        <InpiIcon className="lg:w-[220px]" />
        <div className="text-2xl sm:text-3xl lg:text-4xl mx-2 sm:mx-4">+</div>
        <Image
          src="/jademarcas2.svg"
          alt="Jade Marcas Icon"
          width={180}
          height={150}
          className="mb-2 lg:w-[220px]"
        />
      </div>

      <div className="flex flex-col justify-center items-center space-y-3 lg:space-y-4 w-full lg:w-3/5 mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center text-base sm:text-lg lg:text-xl border-b border-white w-full pb-3 lg:pb-4">
          <span>Pesquisa ilimitada de viabilidade de marca</span>
          <span style={{ color: "#4C72C4" }}>R$ 397</span>
        </div>
        <div className="flex justify-between items-center text-base sm:text-lg lg:text-xl border-b border-white w-full pb-3 lg:pb-4">
          <span>Acompanhamento até a certificação</span>
          <span style={{ color: "#4C72C4" }}>R$ 447</span>
        </div>
        <div className="flex justify-between items-center text-base sm:text-lg lg:text-xl border-b border-white w-full pb-3 lg:pb-4">
          <span>Consultoria e suporte ilimitados</span>
          <span style={{ color: "#4C72C4" }}>R$ 289</span>
        </div>
        <div className="flex justify-between items-center text-base sm:text-lg lg:text-xl border-b border-white w-full pb-3 lg:pb-4">
          <span>Todos os recursos necessários</span>
          <span style={{ color: "#4C72C4" }}>R$ 543</span>
        </div>
        <div className="flex justify-between items-center text-base sm:text-lg lg:text-xl border-b border-white w-full pb-3 lg:pb-4">
          <span>Certificação da marca no INPI por 10 anos</span>
          <span style={{ color: "#4C72C4" }}>R$ 1128</span>
        </div>
        <div className="flex justify-between items-center text-base sm:text-lg lg:text-xl border-b border-white w-full pb-3 lg:pb-4">
          <span>TOTAL</span>
          <span
            className="text-green-400 text-lg sm:text-xl lg:text-2xl"
            style={{ color: "#4C72C4" }}
          >
            R$ 2.804
          </span>
        </div>
        <div className="flex justify-between items-center text-base sm:text-lg lg:text-xl text-green-400 border-b border-white w-full pb-3 lg:pb-4">
          <span>BÔNUS: Três sessões de assessoria jurídica</span>
          <span>Grátis</span>
        </div>
      </div>

      <div
        className="flex justify-center items-center flex-col pt-8 lg:pt-16 mt-6 lg:mt-8 px-4 sm:px-8"
        style={{ backgroundColor: "#101010" }}
      >
        <div className="w-full lg:w-2/3 xl:w-2/5 text-xl sm:text-2xl lg:text-3xl text-center font-light mb-4 font-serif leading-tight">
          Mas eu não quero que a sua decisão entre o
          <span className="text-2xl sm:text-3xl lg:text-[40px] text-[#EDA4A4] mt-2">
            {" "}
            NÃO{" "}
          </span>{" "}
          e o
          <span className="text-2xl sm:text-3xl lg:text-[40px] text-[#A4EDB4] mt-2">
            {" "}
            SIM{" "}
          </span>
          seja por uma questão de preço
        </div>

        <div className="flex w-full lg:w-3/5 flex-col lg:flex-row border border-gray-500 items-center mt-8 lg:mt-16 mb-4 gap-6 lg:gap-16 p-4 lg:p-8">
          <div className="flex flex-col gap-6 lg:gap-8 rounded-lg w-full text-center p-4 lg:p-8 order-3 lg:order-2">
            <div className="flex flex-col gap-2 lg:gap-3">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif">
                OFERTA LIMITADA
              </div>

              <div className="text-xl sm:text-2xl lg:text-3xl font-serif">
                💰 Investimento único para garantir que a sua marca esteja
                protegida para sempre
              </div>
            </div>
            <div className="uppercase font-medium text-base sm:text-lg">
              Tudo isso por apenas
            </div>
            <div
              className="text-[#00D957] font-bold text-3xl sm:text-4xl lg:text-5xl"
              style={{ marginTop: "-20px" }}
            >
              12x de R$ 68,92
            </div>
            <div
              className="uppercase font-medium text-base sm:text-lg"
              style={{ marginTop: "-20px" }}
            >
              ou R$ 827 à vista
            </div>

            <BuyButton3 />
            <div className="flex justify-center">
              <Image
                src="/comprasegura3.png"
                alt="selo de compra segura"
                width={300}
                height={200}
                className="w-48 sm:w-64 lg:w-auto"
              />
            </div>
            <div className="border-t border-gray-600 w-full my-4"></div>
            <div className="text-xs text-white/75">
              Compra 100% segura! Entraremos em contato imediatamente após a
              confirmação do pagamento
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center mt-8 lg:mt-16 mb-4 gap-6 lg:gap-16 px-4 sm:px-8">
        <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-3/5">
          <div className="text-2xl sm:text-3xl mb-4 flex">
            <div className="uppercase text-green-400">
              BÔNUS: Três sessões de assessoria jurídica
            </div>
          </div>

          <div className="text-base sm:text-lg lg:text-xl font-light w-full lg:w-4/5">
            Vamos também oferecer de forma totalmente gratuita uma oportunidade
            única para receber assessoria jurídica especializada e esclarecer
            todas as suas questões jurídicas.
          </div>
          <div className="text-base sm:text-lg lg:text-xl font-light w-full lg:w-4/5">
            Isso mesmo, você leu corretamente! Agende as três reuniões no
            horário mais conveniente para você. Vamos te ajudar não só com a sua
            marca, mas também com qualquer outra dúvida jurídica que você tenha.
          </div>
        </div>

        <div className="flex justify-center w-full lg:w-auto">
          <Image
            width={280}
            height={200}
            alt="consultoria jurídica"
            src="/consultoria2.jpg"
            className="w-48 sm:w-64 lg:w-auto"
          />
        </div>
      </div>
      <div
        className="flex justify-center items-center flex-col gap-6 lg:gap-8 mt-8 lg:mt-16 mb-6 lg:mb-8 px-4 sm:px-8"
        style={{ backgroundColor: "#101010" }}
      >
        <div className="text-center text-2xl sm:text-3xl lg:text-4xl w-full lg:w-3/5 font-light">
          EXPERIMENTE PRIMEIRO. DECIDA DEPOIS.
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 max-w-4xl p-4 lg:p-8 bg-gray-900 border border-gray-700 rounded-lg w-full">
          <div className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left w-full lg:w-2/3">
            <div className="text-lg sm:text-xl lg:text-2xl font-light">
              Se por qualquer motivo você não ficar 100% satisfeito com nosso
              serviço, você tem 7 dias para solicitar o reembolso integral.
            </div>
            <div className="text-base sm:text-lg lg:text-xl text-white/75">
              Sem perguntas, sem complicações. Seu dinheiro de volta garantido.
            </div>
            <div className="text-sm sm:text-base lg:text-lg text-green-400 font-medium">
              ⭐ Você não tem nada a perder, mas tudo a ganhar!
            </div>
            <BuyButton3 />
          </div>
          <div className="flex justify-center w-full lg:w-auto">
            <Image
              src="/garantia7dias.png"
              alt="garantia de 7 dias"
              width={200}
              height={200}
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[200px] lg:h-[200px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-6 lg:gap-8 mt-8 lg:mt-16 mb-6 lg:mb-8 px-4 sm:px-8">
        <div className="text-center text-2xl sm:text-3xl lg:text-4xl w-full lg:w-3/5 font-light">
          Ficou alguma dúvida?
        </div>
        <div className="text-center text-lg sm:text-xl lg:text-2xl text-white/75 w-full lg:w-3/5">
          Nossa equipe está pronta para esclarecer todas as suas questões sobre
          o registro de marca. Entre em contato conosco pelo WhatsApp!
        </div>
        <a
          href="https://wa.me/5511999999999?text=Olá! Tenho dúvidas sobre o registro de marca. Pode me ajudar?"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-lg text-lg lg:text-xl flex items-center gap-2 lg:gap-3 transition-colors duration-200"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 lg:w-6 lg:h-6"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          FALAR NO WHATSAPP
        </a>
      </div>

      <div className="text-2xl sm:text-3xl mt-8 lg:mt-16 mb-8 lg:mb-12 px-4 sm:px-8">
        <span className="text-[#52edb3] mr-3">|</span>CLIENTES JÁ ATENDIDOS
      </div>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-16 lg:gap-28 px-4 sm:px-8 pb-8 lg:pb-12">
        <div>
          <Image
            src="/infinitygesso3.png"
            width={200}
            height={100}
            alt="infinity gesso marca"
            className="w-32 sm:w-48 lg:w-auto"
          />
        </div>
        <div>
          <Image
            src="/senhortorta.png"
            width={200}
            height={200}
            alt="senhor torta marca"
            className="w-32 sm:w-48 lg:w-auto"
          />
        </div>
        <div>
          <Image
            src="/castelewear.png"
            width={200}
            height={200}
            alt="castele wear marca"
            className="w-32 sm:w-48 lg:w-auto"
          />
        </div>
        <div>
          <Image
            src="/west3.png"
            width={200}
            height={200}
            alt="west marca"
            className="w-32 sm:w-48 lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
