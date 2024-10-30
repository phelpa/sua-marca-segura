import Image from "next/image";
import { FormPenIcon } from "./icons/form-pen-icon";
import { SafetyIcon } from "./icons/safety-icon";
import { CheckedIcon } from "./icons/checked-icon";
import { BalanceIcon } from "./icons/balance-icon";
import { MagnifyingGlassIcon } from "./icons/magnifying-glass-icon";
import { keywords } from "./components/keywords";
import { JadeCheckedIcon } from "./icons/jade-checked-icon";
import { BuyButton } from "./components/buy-button";
import { BuyButton2 } from "./components/buy-button2";
import { WhatsappButton } from "./components/whatsapp-button";

const jsonLd = {
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

export default function Home() {
  return (
    <div className="text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[#3DA4CD] flex pt-8 flex justify-between">
        <Image
          src="/jademarcas.svg"
          alt="Jade Marcas Icon"
          width={260}
          height={90}
          className="pl-8"
        />
        <a
          href="#nossos-planos"
          className="flex gap-8 border-2 border-white p-2 rounded-xl mr-18 mr-6 ml-4"
        >
          <div className="hover:underline">Preços e Planos</div>
        </a>
      </div>
      <main className="flex flex-wrap font-poppins bg-[#3DA4CD] justify-around pt-12 pb-12 pl-4 pr-4 gap-24">
        <div className="bg-[#3DA4CD]">
          <h1 className="text-4xl font-bold mb-2 text-white text-center">
            A segurança do seu negócio começa com uma marca registrada
          </h1>
          <h2 className="text-3xl mb-12 text-center text-white">
            Durma tranquilo sabendo que está protegido.{" "}
          </h2>

          <div className="flex gap-6 justify-center flex-wrap">
            <div>
              <div className="flex gap-2 text-black text-xl p-1">
                <JadeCheckedIcon />
                Válido por 10 anos em todo território nacional
              </div>
              <div className="flex gap-2 text-black text-xl p-1">
                <JadeCheckedIcon />
                Lançamento de produtos com segurança
              </div>
              <div className="flex gap-2 text-black text-xl p-1">
                <JadeCheckedIcon />
                Selo de loja oficial no mercado livre
              </div>
              <div className="flex gap-2 text-black text-xl p-1">
                <JadeCheckedIcon />
                Benefícios em marketplaces como amazon
              </div>
            </div>

            <div>
              <div className="flex gap-2 text-black text-xl p-1">
                <JadeCheckedIcon />
                Prevenção de conflitos judiciais
              </div>
              <div className="flex gap-2 text-black text-xl p-1">
                <JadeCheckedIcon />
                Proteção contra uso não autorizado
              </div>
              <div className="flex gap-2 text-black text-xl p-1">
                <JadeCheckedIcon />
                Facilidade em resolver disputas online
              </div>
              <div className="flex gap-2 text-black text-xl p-1">
                <JadeCheckedIcon />
                Controle total da sua marca
              </div>
            </div>
          </div>
        </div>

        <WhatsappButton />

        {/*FORM */}
        {/* <div className="shadow-lg rounded-md p-12 w-full max-w-md bg-[#0F4C70] text-[#287EAF] border border-[color:#0F4C70]">
          <div className="text-white text-2xl pb-2">Quero mais informações</div>
          <div className="text-white text-1xl mb-3 pb-3  ">
            Tire suas dúvidas entrando em contato
          </div>
          <EmailForm />
        </div> */}
      </main>

      <div className="text-[color:#676767] text-3xl text-center font-poppins pt-12 pb-8 bg-[color:#f0f8ff]">
        Como funciona
      </div>
      <div className="flex font-poppins justify-around p-4 pb-16 text-[color:#676767] gap-3 bg-[color:#f0f8ff] flex-wrap">
        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[240px]">
          <FormPenIcon fill="#676767" />
          <div className="mt-2 ">
            Pesquisaremos se sua marca está disponível para registro
          </div>
        </div>
        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[240px]  ">
          <BalanceIcon />
          <div className="mt-2">
            Faremos o registro com um advogado especializado em propriedade
            intelectual
          </div>
        </div>

        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[240px] ">
          <MagnifyingGlassIcon />
          <div className="mt-2">
            Acompanharemos o processo e entraremos com recursos em situações
            específicas
          </div>
        </div>

        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[240px] ">
          <SafetyIcon fill="#676767" />
          <div className="mt-2 ">
            Depois disso, sua marca estará registrada e certificada pelo INPI
          </div>
        </div>
        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[240px] ">
          <Image
            src="/jademarcas.svg"
            alt="Jade Marcas Icon"
            width={140}
            height={40}
          />
          <div className="mt-4">
            Pronto! Futuro do seu negócio garantido com total segurança jurídica
          </div>
        </div>
      </div>

      <div
        id="nossos-planos"
        className="text-black text-3xl text-center font-poppins bg-[rgba(133,198,231,0.4)]  pt-12 pb-8"
      >
        Nossos planos
      </div>

      <div className="flex flex-wrap font-poppins justify-around p-4 pb-16 text-[color:#676767] bg-[rgba(133,198,231,0.4)] gap-4">
        <div className="shadow-lg rounded-md p-6 border bg-white w-[400px] relative">
          <div className="mt-2 text-center text-[color:#0a3e5d] text-2xl mb-4">
            Plano Pesquisa
          </div>

          <div className="flex justify-center items-end text-[color:#3DA4CD] items-end font-semibold ">
            <span className="text-4xl pr-3">6x de </span>
            <span className="text-4xl">R$</span>
            <span className="text-4xl "> 48</span>
            <span className="text-4xl">,32</span>
          </div>

          <div className="h-[1px] bg-[color:#3DA4CD] m-5"></div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">
              Pesquisa ilimitada de viabilidade de marca
            </div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Identificação de classificação</div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Relatório com resultado das pesquisas*</div>
          </div>

          <div className="flex flex-col items-end gap-1 mt-4 items-center">
            <div className="mt-4 mb-14 text-xl text-[color:#0a3e5d]">
              {`* Comprando a pesquisa você obterá desconto no plano duplo em até 30 dias`}
            </div>
          </div>
          <BuyButton href="https://jade-marcas.pay.yampi.com.br/r/O0JC5LDD9Y" />
        </div>

        <div className="shadow-lg rounded-md p-6 border bg-white w-[400px] relative">
          <div className="mt-2 text-center text-[color:#0a3e5d] text-2xl mb-4">
            Plano Registro
          </div>

          <div className="flex justify-center items-end text-[color:#3DA4CD] items-end font-semibold mb-6">
            <span className="text-4xl pr-3">12x de </span>
            <span className="text-4xl">R$</span>
            <span className="text-4xl "> 79</span>
            <span className="text-4xl">,16</span>
          </div>

          <div className="h-[1px] bg-[color:#3DA4CD] mt-2"></div>

          <div className="text-center text-[color:#3DA4CD] p-3 font-bold">
            Plano sem pesquisa
          </div>
          <div className="h-[1px] bg-[color:#3DA4CD] mb-5"></div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Pedido de Registro</div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Acompanhamento por 1 ano</div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Recursos necessários</div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Atualizações semanais</div>
          </div>

          <div className="flex items-end gap-1 mb-16">
            <CheckedIcon />
            <div className="mt-2">Certificação da marca</div>
          </div>
          <div style={{ display: "flex", margin: "auto" }}>
            <BuyButton href="https://jade-marcas.pay.yampi.com.br/r/TU1ZPZWXG3" />
          </div>
        </div>

        <div className="shadow-lg rounded-md p-6 border bg-white w-[400px]">
          <div className="mt-2 text-center text-[color:#0a3e5d] text-2xl mb-4">
            Plano Duplo
          </div>

          <div className="flex justify-center items-end text-[color:#3DA4CD] items-end font-semibold mb-6">
            <span className="text-4xl pr-3">12x de </span>
            <span className="text-4xl">R$</span>
            <span className="text-4xl "> 94</span>
            <span className="text-4xl">,99</span>
          </div>

          <div className="h-[1px] bg-[color:#3DA4CD] mt-2"></div>

          <div className="text-center text-[color:#3DA4CD] p-3 font-bold">
            Plano com desconto na pesquisa
          </div>

          <div className="h-[1px] bg-[color:#3DA4CD] mb-5"></div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">
              Pesquisa ilimitada de viabilidade de marca
            </div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Identificação de classificação</div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Relatório com resultado das pesquisas</div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Pedido de Registro</div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Acompanhamento por 1 ano</div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Recursos necessários </div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Atualizações semanais</div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Certificação da marca</div>
          </div>
          <div className="flex flex-col items-end gap-1 mt-4 items-center">
            <BuyButton2 />
          </div>
        </div>
      </div>

      <footer className="bg-[#0F4C70] p-6 text-white ">
        <div className="flex justify-between mb-16 flex-wrap">
          <div>
            <Image
              src="/jademarcas2.svg"
              alt="Jade Marcas Icon"
              width={260}
              height={90}
              className="mb-2"
            />

            <div className="text-sm italic">
              &ldquo;Acaso, haveria alguma coisa maravilhosíssima para
              mim?&rdquo; Jeremias 32:27
            </div>
          </div>

          <div>© 2024 por Jade Marcas - Todos os direitos reservados.</div>
        </div>
        <div className="flex flex-wrap justify-between mb-16">
          <div className="text-sm mb-4">
            <p>CNPJ: 40.209.319/0001-46</p>
            <p>Nome da Empresa: Jade Marcas</p>
            <p>Endereço Comercial: Rua dos Andradas 175, Sorocaba-SP</p>
            <p>Entraremos em contato em até 24h</p>
          </div>

          <div className="text-sm">
            <p className="text-base pb-2">Informações para contato :</p>
            <p>Email: jadehelpa.adv@gmail.com</p>
            <p>
              Whatsapp: &nbsp;
              <a
                href="https://wa.me/5515991349679"
                target="_blank"
                rel="noopener noreferrer"
              >
                15 99134-9679
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
