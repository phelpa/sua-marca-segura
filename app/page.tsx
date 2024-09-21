import Image from "next/image";
import { WhatsAppIcon } from "./icons/whatsapp-icon";
import { WhatsAppMonocolorIcon } from "./icons/whatsapp-monocolor-icon";
import { FormPenIcon } from "./icons/form-pen-icon";
import { SafetyIcon } from "./icons/safety-icon";
import { CheckedIcon } from "./icons/checked-icon";
import { EmailForm } from "./components/email-form";

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
            <li className="mb-2">Recurso em caso de indeferimento</li>
            <li className="mb-2">Manutenção da marca por 1 ano</li>
            <li className="mb-2">Agilidade e suporte ilimitado</li>
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
                Tire suas dúvidas entrando em contato conosco
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
          <WhatsAppMonocolorIcon fill="#676767" />
          <div className="mt-2 ">
            Clique em entrar em contato e tire suas dúvidas com a gente pelo
            whatsapp
          </div>
        </a>
        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[250px]  ">
          <FormPenIcon fill="#676767" />
          <div className="mt-2">
            Faremos perguntas para entender melhor o seu negócio e sua
            necessidade
          </div>
        </div>

        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[250px] ">
          <SafetyIcon fill="#676767" />
          <div className="mt-2">
            Buscaremos a melhor solução para que você tenha a sua marca segura!
          </div>
        </div>
        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[250px] ">
          <WhatsAppMonocolorIcon fill="#676767" />
          <div className="mt-2 ">
            Clique em entrar em contato e tire suas dúvidas com a gente pelo
            whatsapp
          </div>
        </div>
        <div className="shadow-lg rounded-md p-6 border border-[color:#676767] w-[250px] ">
          <WhatsAppMonocolorIcon fill="#676767" />
          <div className="mt-2 ">
            Faremos perguntas para entender melhor o seu negócio e sua
            necessidade
          </div>
        </div>
      </div>

      <div
        id="nossos-planos"
        className="text-black text-3xl text-center font-poppins bg-[rgba(133,198,231,0.4)]  pt-12 pb-8"
      >
        Nossos planos
      </div>

      <div className="flex flex-wrap font-poppins justify-around p-4 pb-16 text-[color:#676767] bg-[rgba(133,198,231,0.4)] gap-8">
        <div className="shadow-lg rounded-md p-6 border bg-white w-[440px]">
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
              {`* Comprando esse plano você terá desconto nos outros`}
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

        <div className="shadow-lg rounded-md p-6 border bg-white w-[440px]">
          <div className="mt-2 text-center text-[color:#0a3e5d] text-2xl mb-4">
            Plano Registro
          </div>

          <div className="flex justify-center items-end text-[color:#3DA4CD] items-end font-semibold ">
            <span className="text-4xl">R$</span>
            <span className="text-6xl">889</span>
            <span className="text-4xl">,90</span>
          </div>
          <div className="text-center text-[color:#0a3e5d] pt-1">
            em até 12x sem juros de R$74,16
          </div>

          <div className="h-[1px] bg-[color:#3DA4CD] mt-4"></div>
          <div className="text-center text-[color:#3DA4CD] p-3 font-bold">
            R$600,00 se você já pagou pelo plano pesquisa
          </div>

          <div className="h-[1px] bg-[color:#3DA4CD] mb-5"></div>

          <div className="flex items-end gap-1">
            <div className="mt-2">Tudo do plano pesquisa +</div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">2 anos de Acompanhamento e Vigilância </div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Pedido de Registro</div>
          </div>

          <div className="flex items-end gap-1 mb-4">
            <CheckedIcon />
            <div className="mt-2">Garantia do Registro</div>
          </div>
          <a
            href="https://jade-marcas.pay.yampi.com.br/r/4T9AGTU83X"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:#3DA4CD] underline "
          >
            Compre o plano pesquisa para pesquisarmos a viabilidade da sua marca
          </a>
        </div>

        <div className="shadow-lg rounded-md p-6 border bg-white w-[440px]">
          <div className="mt-2 text-center text-[color:#0a3e5d] text-2xl mb-4  pt-1">
            Plano Monitoramento
          </div>

          <div className="flex justify-center items-end text-[color:#3DA4CD] items-end font-semibold ">
            <span className="text-4xl">R$</span>
            <span className="text-6xl">1239</span>
            <span className="text-4xl">,90</span>
          </div>
          <div className="text-center text-[color:#0a3e5d]">
            em até 12x sem juros de R$103,33
          </div>

          <div className="h-[1px] bg-[color:#3DA4CD] mt-4"></div>
          <div className="text-center text-[color:#3DA4CD] p-3 font-bold">
            R$950,00 se você já pagou pelo plano pesquisa
          </div>
          <div className="h-[1px] bg-[color:#3DA4CD] mb-5"></div>

          <div className="flex items-end gap-1">
            <div className="mt-2">Tudo do plano 02 +</div>
          </div>

          <div className="flex items-end gap-1">
            <CheckedIcon />
            <div className="mt-2">Recursos ilimitados</div>
          </div>

          <div className="flex items-end gap-1 mb-4">
            <CheckedIcon />
            <div className="mt-2">Todos atos no INPI ilimitados</div>
          </div>

          <a
            href="https://jade-marcas.pay.yampi.com.br/r/4T9AGTU83X"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:#3DA4CD] underline  "
          >
            Compre o plano pesquisa para pesquisarmos a viabilidade da sua marca
          </a>
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
