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
      <div className="flex flex-col sm:p-12">
        <div className="flex flex-wrap justify-between items-center gap-8 ">
          <div className="flex flex-col gap-12 w-full lg:w-2/5 text-center lg:text-left items-center lg:items-start">
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
              A partir de agora, sua marca estará protegida com o registro
              oficial no INPI
            </h2>

            <div className="flex gap-8">
              <InpiIcon />
              <BuyButton4
                title="QUERO REGISTRAR MINHA MARCA NO INPI"
                className="min-w-[200px]"
              />
            </div>

            <h2 className="text-2xl sm:text-2xl w-full mt-4 text-white">
              Proteja sua marca por 10 anos com o registro no INPI, realizado
              por especialistas de forma rápida, simples e sem complicação para
              você.
            </h2>
          </div>

          <div
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
              className="mb-2"
            />
          </div>
        </div>
      </div>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-200 to-transparent opacity-5 dark:via-neutral-200" />

      <hr className="border-gray-800" />

      <div
        className="flex justify-center flex-col gap-8 w-full pt-4 "
        style={{ backgroundColor: "#101010" }}
      >
        {/* <div className="text-3xl mb-4 flex items-center">
          <span className="text-[#52edb3] mr-3">|</span>
          <div className="uppercase">A IMPORTÂNCIA DO REGISTRO DA MARCA</div>
        </div> */}

        <div className="flex gap-8 w-full">
          <div className="md:w-3/5 flex gap-8 flex-wrap pl-8 relative">
            <McDonaldsLogo className="w-40 h-40" />
            <StarbucksLogo className="w-40 h-40" />
            <CocaColaLogo className="w-80 h-24" />
            <IfoodIcon className="w-40 h-40" />
            <NetflixLogo className="w-40 h-40" />
            <div className="font-serif absolute bottom-0 left-0 pl-2">
              Todas as marcas que você conhece são registradas no INPI
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-3xl font-serif">
              Se você pesquisou por registro de marca e encontrou essa página, é
              com <span className="text-green-700">você mesmo</span> que eu
              quero conversar.
            </div>
            <div className="text-xl font-light">
              Eu sei que não é fácil (ou não está sendo) construir um negócio do
              zero, é uma verdadeira jornada de altos e baixos, e todo dia sua
              mente rodopia pensando em novas formas de ganhar mais dinheiro.
            </div>

            <div className="text-xl font-light">
              Parece que não, mas existe algo mais importante que ganhar
              dinheiro:
            </div>

            <div className="text-2xl font-light underline decoration-green-700 text-green-400">
              Assegurar todo o investimento que você já fez no seu negócio e que
              ainda vai fazer por 10 anos.
            </div>

            <div className="text-xl font-light">
              Só é dono da marca quem registra, com o registro você evita o
              desastre que seria perder o nome do seu negócio e ter que
              recomeçar do zero.
            </div>
            <div className="text-xl font-light">
              Tudo que está associado a sua marca vai continuar sendo seu e tudo
              que você construir a partir de hoje também.
            </div>
          </div>
          {/* <div className="text-xl font-light">
      Registrar a marca não é caro, caro é ter que recomeçar do zero.
    </div> */}
        </div>
      </div>
      <div
        className="border-gray-800 h-12"
        style={{ backgroundColor: "#101010" }}
      />

      <hr className="border-gray-800" />

      <div
        style={{ backgroundColor: "#fff" }}
        className="flex justify-center pt-8"
      >
        <Image
          src="/grafico6.png"
          alt="gráfico da sua empresa com a marca registrada"
          width={1100}
          height={500}
          className="mb-2"
        />
      </div>

      <div className="flex justify-center items-center flex-col gap-16 mt-16">
        <div className="text-center text-4xl lg:w-2/5 font-light">
          A sua marca é um dos seus bens mais valiosos, é o rosto do seu
          negócio, o nome em que sua empresa é identificada no mercado.
        </div>
        <div className="lg:w-2/5 text-2xl text-center text-white/75">
          É mais que óbvio que é necessário proteger esse patrimônio, mas não é
          tão óbvio outros benefícios que o registro traz para o seu negócio :
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 max-w-3xl p-6 bg-gray-900 border border-gray-500">
          <Image
            src="/juizbravo.png"
            width={200}
            height={200}
            alt="disputa legal"
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-[200px] lg:h-[200px]"
          />
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <div className="text-2xl sm:text-3xl">
              <span className="text-[#52edb3]">|</span> Sem problemas com a
              justiça
            </div>
            <div className="text-lg sm:text-2xl text-white/75">
              A sua marca registrada evita dores de cabeça com a justiça caso
              alguém queira ter uma marca com o mesmo nome
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 max-w-3xl p-6 bg-gray-900 border border-gray-500">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <div className="text-2xl sm:text-3xl">
              <span className="text-[#52edb3]">|</span> Evite prejuízos e
              retrabalhos
            </div>
            <div className="text-lg sm:text-2xl text-white/75">
              Também evita que você tenha que recomeçar do zero caso alguém
              registre a sua marca antes de você
            </div>
          </div>
          <Image
            src="/mulherfrustrada.jpeg"
            width={200}
            height={200}
            alt="disputa legal"
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-[200px] lg:h-[200px]"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 max-w-3xl p-6 bg-gray-900 border border-gray-500">
          <Image
            src="/caralogostarbucks.jpeg"
            width={200}
            height={200}
            alt="felicidade de ter o logo registrado"
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-[200px] lg:h-[200px]"
          />
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <div className="text-2xl sm:text-3xl">
              <span className="text-[#52edb3]">|</span> Segurança de ter a sua
              marca protegida por 10 anos
            </div>
            <div className="text-lg sm:text-2xl text-white/75">
              Não tem maior tranquilidade que saber que a sua marca é realmente
              sua, o nome é seu e você pode crescer sem preocupações
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-24 mb-4">
        <div className="text-center text-4xl font-medium">
          Registrar a marca não é opcional.
        </div>
      </div>
      <div className=" text-2xl text-center text-white/75 mb-8">
        É a única forma de garantir sua exclusividade e proteção.
      </div>

      <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
        {/* Unregistered Brand Card */}
        <div className="border border-gray-700 rounded-lg w-full md:w-[500px] bg-gray-900 flex flex-col mb-8 md:mb-0">
          <div className="border border-gray-700 rounded-lg p-6 text-2xl bg-red-700 text-center">
            MARCA SEM REGISTRO
          </div>

          <div className="flex flex-col gap-4 p-6 md:p-12 pt-8 bg-gray-900 text-xl flex-grow-1">
            <div className="flex gap-2 items-center">
              <div>
                <XIcon />
              </div>
              <div className="font-light">Sem garantia de exclusividade</div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <XIcon />
              </div>
              <div className="font-light">Risco de perder a marca</div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <XIcon />
              </div>
              <div className="font-light">Falta de credibilidade</div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <XIcon />
              </div>
              <div className="font-light">Risco de processos judiciais</div>
            </div>

            <div className="flex gap-2 items-center">
              <div>
                <XIcon />
              </div>
              <div className="font-light">
                Problemas para registrar domínio e redes sociais
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-center text-lg m-8 uppercase">
            <div>Muito risco, nenhuma segurança</div>
          </div>
        </div>

        {/* Registered Brand Card */}
        <div className="border border-gray-700 rounded-lg w-full md:w-[500px]">
          <div className="border border-gray-700 rounded-lg p-6 text-2xl bg-green-700 text-center">
            MARCA COM REGISTRO
          </div>
          <div className="flex flex-col gap-4 p-6 md:p-12 pt-8 bg-gray-900 text-xl">
            <div className="flex gap-2 items-center">
              <div>
                <JadeCheckedIcon />
              </div>
              <div className="font-light">
                Exclusividade da marca por 10 anos, com possibilidade de
                renovação
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <JadeCheckedIcon />
              </div>
              <div className="font-light">Proteção legal garantida</div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <JadeCheckedIcon />
              </div>
              <div className="font-light">
                Maior credibilidade e valor de mercado
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <JadeCheckedIcon />
              </div>
              <div className="font-light">
                Segurança para expandir seu negócio
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <JadeCheckedIcon />
              </div>
              <div className="font-light">Diferencial competitivo</div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <JadeCheckedIcon />
              </div>
              <div className="font-light">
                Segurança para registrar domínios e garantir sua identidade
                digital
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <JadeCheckedIcon />
              </div>
              <div className="font-light">
                Acesso ao selo de marca registrada no Mercado Livre
              </div>
            </div>

            {/* <div className="bg-green-900 p-4 rounded-lg text-center">
        <div>Print do Inpi aqui</div>
      </div> */}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-16 mt-16">
        <div className="text-center text-4xl lg:w-3/5 font-light">
          Quanto você pagaria para proteger tudo que você construiu e vai
          construir pelos próximos 10 anos?
        </div>

        <div className="lg:w-4/5 text-2xl text-center font-light">
          É exatamente essa proteção que você vai garantir. A partir do pedido
          do registro tudo que está associado a sua marca estará protegido. É a
          melhor decisão que você pode fazer para o seu negócio.
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-around items-center mt-16 mb-4 gap-8 lg:gap-16">
        <div className="text-4xl font-medium leading-[1.5] text-center lg:text-left order-1 lg:w-1/5  ">
          Investimento no registro JadeMarcas
        </div>

        <div className="flex flex-col gap-8 border border-gray-500 rounded-lg w-full lg:w-[500px] text-center p-8 order-3 lg:order-2">
          <div className="flex justify-center">
            <Image
              src="/jademarcas2.svg"
              alt="Jade Marcas Icon"
              width={260}
              height={90}
              className="mb-2"
            />
          </div>
          <div className="uppercase font-medium text-lg">
            Tudo isso por apenas
          </div>
          <div className="text-[#00D957] font-bold text-5xl">
            12x de R$ 99,90
          </div>

          <BuyButton3 />
          <div className="flex justify-center">
            <Image
              src="/comprasegura3.png"
              alt="selo de compra segura"
              width={300}
              height={200}
            />
          </div>
          <div className="border-t border-gray-600 w-full my-4"></div>
          <div className="text-xs text-white/75">
            Compra 100% segura! Entraremos em contato imediatamente após a
            confirmação do pagamento
          </div>
        </div>

        <ul className="list-disc marker:text-green-400 ml-4 space-y-4 text-lg order-2 lg:order-3 lg:w-1/5">
          <li>Pesquisa ilimitada de viabilidade de marca</li>
          <li>Acompanhamento até a certificação</li>
          <li>Suporte ilimitado</li>
          <li>Todos os recursos necessários</li>
          <li>Certificação da marca no INPI por 10 anos</li>
          <li className="text-green-400">
            BÔNUS: Três sessões de assessoria jurídica
          </li>
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row justify-center mt-16 mb-4 gap-8 lg:gap-16">
        <div className="flex flex-col gap-8 w-full lg:w-3/5">
          <div className="text-3xl mb-4 flex">
            <div className="uppercase">Três sessões de assessoria jurídica</div>
          </div>

          <div className="text-xl font-light w-full lg:w-4/5">
            Vamos também oferecer uma oportunidade única para obter assessoria
            jurídica especializada e esclarecer todas as suas dúvidas.
          </div>
          <div className="text-xl font-light w-full lg:w-4/5">
            Agende as reuniões no horário mais conveniente para você, não te
            ajudaremos somente com sua marca mas também com qualquer outra
            questão jurídica que você tenha.
          </div>
        </div>

        <div className="flex justify-center w-full lg:w-auto">
          <Image
            width={280}
            height={200}
            alt="consultoria jurídica"
            src="/consultoria2.jpg"
          />
        </div>
      </div>

      <div className="text-3xl mt-16 mb-12">
        <span className="text-[#52edb3] mr-3">|</span>CLIENTES JÁ ATENDIDOS
      </div>
      <div className="flex flex-wrap justify-center gap-28">
        <div>
          <Image
            src="/infinitygesso3.png"
            width={200}
            height={100}
            alt="infinity gesso marca"
          />
        </div>
        <div>
          <Image
            src="/senhortorta.png"
            width={200}
            height={200}
            alt="senhor torta marca"
          />
        </div>
        <div>
          <Image
            src="/castelewear.png"
            width={200}
            height={200}
            alt="castele wear marca"
          />
        </div>
        <div>
          <Image src="/west3.png" width={200} height={200} alt="west marca" />
        </div>
      </div>
    </div>
  );
}
