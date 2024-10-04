import Image from "next/image";
import { WhatsAppIcon } from "./icons/whatsapp-icon";
import { WhatsAppMonocolorIcon } from "./icons/whatsapp-monocolor-icon";
import { FormPenIcon } from "./icons/form-pen-icon";
import { SafetyIcon } from "./icons/safety-icon";
import { CheckedIcon } from "./icons/checked-icon";
import { EmailForm } from "./components/email-form";
import { BalanceIcon } from "./icons/balance-icon";
import { MagnifyingGlassIcon } from "./icons/magnifying-glass-icon";

export default function Home() {
  return (
    <div className="text-white">
      <div className="bg-[#3DA4CD] flex items-center justify-between p-3">
        <div>Sua Marca Segura</div>
        <a
          href="#nossos-planos"
          className="flex gap-8 border-2 border-white p-2 rounded-xl"
        >
          <div className="hover:underline">Preços e Planos</div>
        </a>
      </div>
      <main className="flex flex-wrap font-poppins">
        <div className="w-full sm:w-1/2 bg-[#3DA4CD] pl-8 pt-12">
          <h1 className="text-6xl font-bold mb-4 text-white">
            Registre sua marca
          </h1>
          <h2 className="text-3xl mb-2 text-white ">
            E garanta o futuro dos seus negócios
          </h2>

          <div className="flex mt-12 gap-16 mt-16">
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5515991349679"
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
            <li className="mb-2">Recurso em casos específicos</li>
            <li className="mb-2">Manutenção da marca e suporte</li>
            <li className="mb-2">Agilidade no atendimento</li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 bg-[#3DA4CD] flex justify-center">
          {/*FORM */}
          <div className="flex items-center w-[520px] mt-4 pb-8  ">
            <div className="shadow-lg rounded-md p-12 w-full max-w-md bg-[#0F4C70] text-[#287EAF] border border-[color:#0F4C70]">
              <div className="text-white text-2xl pb-2">
                Quero mais informações
              </div>
              <div className="text-white text-1xl mb-3 pb-3  ">
                Tire suas dúvidas entrando em contato
              </div>
              <EmailForm />
            </div>
          </div>
        </div>
      </main>

      <div className="text-[color:#676767] text-3xl text-center font-poppins pt-12 pb-8 bg-[color:#f0f8ff]">
        Como funciona
      </div>
      <div className="flex font-poppins justify-around p-4 pb-16 text-[color:#676767] gap-8 bg-[color:#f0f8ff] flex-wrap">
        <a
          className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[250px]"
          href="https://wa.me/5515991349679"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormPenIcon fill="#676767" />
          <div className="mt-2 ">
            Pesquise se sua marca está disponível e ganhe desconto no plano de
            registro
          </div>
        </a>
        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[250px]  ">
          <BalanceIcon />
          <div className="mt-2">
            Registro com advogado especializado em propriedade intelectual
          </div>
        </div>

        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[250px] ">
          <MagnifyingGlassIcon />
          <div className="mt-2">
            Acompanhamento de processo e recurso em situações específicas
          </div>
        </div>
        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[250px] ">
          <SafetyIcon fill="#676767" />
          <div className="mt-2 ">
            Sua marca registrada com segurança e certificada pelo INPI
          </div>
        </div>
        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[250px] ">
          {/* <WhatsAppMonocolorIcon fill="#676767" /> */}
          {/* <img
            src="https://i.ibb.co/dfmMpT0/image.png"
            width="24px"
            height="24px"
          /> */}

          <img
            src="  https://i.ibb.co/NyZt231/image.png"
            width="120px"
            height="24px"
          />

          <div className="mt-2 ">Pronto! Futuro do seu negócio garantido</div>
        </div>
      </div>

      <div
        id="nossos-planos"
        className="text-black text-3xl text-center font-poppins bg-[rgba(133,198,231,0.4)]  pt-12 pb-8"
      >
        Nossos planos
      </div>

      <div className="flex flex-wrap font-poppins justify-around p-4 pb-16 text-[color:#676767] bg-[rgba(133,198,231,0.4)] gap-8">
        <div className="shadow-lg rounded-md p-6 border bg-white w-[320px]">
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
            <div className="mt-4 text-xl text-[color:#0a3e5d]">
              {`* Comprando a pesquisa você obterá desconto no plano duplo em até 30 dias`}
            </div>
            <a
              href="https://jade-marcas.pay.yampi.com.br/r/4T9AGTU83X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 px-6 py-3 text-white bg-green-600 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300">
                Comprar
              </button>
            </a>
          </div>
        </div>

        <div className="shadow-lg rounded-md p-6 border bg-white w-[320px]">
          <div className="mt-2 text-center text-[color:#0a3e5d] text-2xl mb-4">
            Plano Registro
          </div>

          <div className="flex justify-center items-end text-[color:#3DA4CD] items-end font-semibold ">
            <span className="text-4xl">R$</span>
            <span className="text-6xl">949</span>
            <span className="text-4xl">,90</span>
          </div>
          <div className="text-center text-[color:#0a3e5d] pt-1">
            em até 12x sem juros de R$74,16
          </div>

          <div className="h-[1px] bg-[color:#3DA4CD]"></div>

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

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Certificação da marca</div>
          </div>

          <div className="flex flex-col items-end gap-1 mt-4 items-center">
            <a
              href="https://jade-marcas.pay.yampi.com.br/r/4T9AGTU83X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 px-6 py-3 text-white bg-green-600 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300">
                Comprar
              </button>
            </a>
          </div>
        </div>

        <div className="shadow-lg rounded-md p-6 border bg-white w-[320px]">
          <div className="mt-2 text-center text-[color:#0a3e5d] text-2xl mb-4">
            Plano Duplo
          </div>

          <div className="flex justify-center items-end text-[color:#3DA4CD] items-end font-semibold ">
            <span className="text-4xl">R$</span>
            <span className="text-6xl ">1129</span>
            <span className="text-4xl">,80</span>
          </div>
          <div className="text-center text-[color:#0a3e5d] pt-1">
            em até 12x sem juros de R$24,16
          </div>

          {/* <div className="h-[1px] bg-[color:#3DA4CD] m-5"></div> */}

          {/* <div className="text-center text-[color:#3DA4CD] p-3 font-bold">
            R$949,50 se você já pagou pelo plano pesquisa
          </div> */}

          <div className="h-[1px] bg-[color:#3DA4CD] "></div>

          <div className="text-center text-[color:#3DA4CD] p-3 font-bold">
            A pesquisa fica por R$ 190,00 nesse plano
          </div>

          <div className="h-[1px] bg-[color:#3DA4CD] "></div>

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
            <div className="mt-2">Atualizações semanais</div>
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
            <div className="mt-2">Certificação da marca</div>
          </div>
          <div className="flex flex-col items-end gap-1 mt-4 items-center">
            {/* <div className="mt-4 text-xl text-[color:#0a3e5d]">
              {`* Comprando esse plano você terá desconto nos outros`}
            </div> */}
            <a
              href="https://jade-marcas.pay.yampi.com.br/r/4T9AGTU83X"
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
          <div>Sua Marca Segura</div>
          <div>© 2024 por Sua Marca Segura - Todos os direitos reservados.</div>
        </div>
        <div className="flex flex-wrap justify-between mb-16">
          <div className="text-sm mb-4">
            <p>CNPJ: 40.209.319/0001-46</p>
            <p>Nome da Empresa: Sua Marca Segura</p>
            <p>Endereço Comercial: Rua dos Andradas 175, Sorocaba-SP</p>
            <p>Entraremos em contato em até 24h</p>
          </div>

          <div className="text-sm">
            <p className="text-base pb-2">Informações para contato :</p>
            <p>Email: suamarcasegura@gmail.com</p>
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
