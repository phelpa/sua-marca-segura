import Image from "next/image";
import { WhatsAppIcon } from "./icons/whatsapp-icon";
import { FormPenIcon } from "./icons/form-pen-icon";
import { SafetyIcon } from "./icons/safety-icon";
import { CheckedIcon } from "./icons/checked-icon";
import { EmailForm } from "./components/email-form";
import { BalanceIcon } from "./icons/balance-icon";
import { MagnifyingGlassIcon } from "./icons/magnifying-glass-icon";

const textWhatsApp =
  "Ol%C3%A1%2C%20gostaria%20de%20ajuda%20para%20registrar%20a%20minha%20marca";
export default function Home() {
  return (
    <div className="text-white">
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
          className="flex gap-8 border-2 border-white p-2 rounded-xl mr-18 mr-6"
        >
          <div className="hover:underline">Preços e Planos</div>
        </a>
      </div>
      <main className="flex flex-wrap font-poppins bg-[#3DA4CD] justify-around pt-12 pb-12 pl-4 pr-4 gap-24">
        <div className="bg-[#3DA4CD]">
          <h1 className="text-6xl font-bold mb-4 text-white">
            Registre sua marca
          </h1>
          <h2 className="text-3xl mb-2 text-white ">
            E garanta o futuro dos seus negócios
          </h2>

          <div className="flex mt-12 gap-16 mt-12">
            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/5515991349679?text=${textWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[rgb(0,40,80)] px-6 py-2 rounded-md hover:bg-blue-900 transition-colors mt-4"
              >
                <div className="flex items-center gap-2 p-1">
                  <div>Entrar em contato</div>
                  <WhatsAppIcon />
                </div>
              </a>
            </div>
          </div>

          <ul className="list-disc list-inside  ml-5 text-[color:#0a3e5d] text-2xl mt-16 ">
            <li className="mb-2">Pesquisa de viabilidade da sua marca</li>
            <li className="mb-2">Pedido de registro com advogado</li>
            <li className="mb-2">Recursos em casos específicos</li>
            <li className="mb-2">Manutenção da marca e suporte</li>
            <li className="mb-2">Agilidade no atendimento</li>
          </ul>
        </div>

        {/*FORM */}
        <div className="shadow-lg rounded-md p-12 w-full max-w-md bg-[#0F4C70] text-[#287EAF] border border-[color:#0F4C70]">
          <div className="text-white text-2xl pb-2">Quero mais informações</div>
          <div className="text-white text-1xl mb-3 pb-3  ">
            Tire suas dúvidas entrando em contato
          </div>
          <EmailForm />
        </div>
      </main>

      <div className="text-[color:#676767] text-3xl text-center font-poppins pt-12 pb-8 bg-[color:#f0f8ff]">
        Como funciona
      </div>
      <div className="flex font-poppins justify-around p-4 pb-16 text-[color:#676767] gap-3 bg-[color:#f0f8ff] flex-wrap">
        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[240px]">
          <FormPenIcon fill="#676767" />
          <div className="mt-2 ">
            Pesquise se sua marca está disponível e ganhe desconto no plano
            duplo
          </div>
        </div>
        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[240px]  ">
          <BalanceIcon />
          <div className="mt-2">
            Registro com advogado especializado em propriedade intelectual
          </div>
        </div>

        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[240px] ">
          <MagnifyingGlassIcon />
          <div className="mt-2">
            Acompanhamento do processo e recursos em situações específicas
          </div>
        </div>

        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[240px] ">
          <SafetyIcon fill="#676767" />
          <div className="mt-2 ">
            Sua marca registrada com segurança e certificada pelo INPI
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
            <span className="text-4xl">R$</span>
            <span className="text-6xl ">289</span>
            <span className="text-4xl">,90</span>
          </div>
          <div className="text-center text-[color:#0a3e5d] pt-1">
            em até 12x sem juros de R$24,16
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
          <a
            href="https://jade-marcas.pay.yampi.com.br/r/O0JC5LDD9Y"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 mb-4"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            <button className="mt-4 px-6 py-3 text-white bg-green-600 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300">
              Comprar
            </button>
          </a>
        </div>

        <div className="shadow-lg rounded-md p-6 border bg-white w-[400px] relative">
          <div className="mt-2 text-center text-[color:#0a3e5d] text-2xl mb-4">
            Plano Registro
          </div>

          <div className="flex justify-center items-end text-[color:#3DA4CD] items-end font-semibold ">
            <span className="text-4xl">R$</span>
            <span className="text-6xl">949</span>
            <span className="text-4xl">,90</span>
          </div>
          <div className="text-center text-[color:#0a3e5d] pt-1">
            em até 12x sem juros de R$79,16
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
            <a
              href="https://jade-marcas.pay.yampi.com.br/r/TU1ZPZWXG3"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 mb-4"
              style={{ left: "50%", transform: "translateX(-50%)" }}
            >
              <button className="mt-4 px-6 py-3 text-white bg-green-600 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300">
                Comprar
              </button>
            </a>
          </div>
        </div>

        <div className="shadow-lg rounded-md p-6 border bg-white w-[400px]">
          <div className="mt-2 text-center text-[color:#0a3e5d] text-2xl mb-4">
            Plano Duplo
          </div>

          <div className="flex justify-center items-end text-[color:#3DA4CD] items-end font-semibold ">
            <span className="text-4xl">R$</span>
            <span className="text-6xl ">1139</span>
            <span className="text-4xl">,80</span>
          </div>
          <div className="text-center text-[color:#0a3e5d] pt-1">
            em até 12x sem juros de R$94,16
          </div>

          <div className="h-[1px] bg-[color:#3DA4CD] mt-2"></div>

          <div className="text-center text-[color:#3DA4CD] p-3 font-bold">
            A pesquisa fica por R$ 190,00 nesse plano
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
            <a
              href="https://jade-marcas.pay.yampi.com.br/r/180JRPOZYR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 px-6 py-3 text-white bg-green-600 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300">
                Comprar
              </button>
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-[#0F4C70] p-6 text-white ">
        <div className="flex justify-between mb-16 flex-wrap">
          <Image
            src="/jademarcas2.svg"
            alt="Jade Marcas Icon"
            width={260}
            height={90}
          />
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
