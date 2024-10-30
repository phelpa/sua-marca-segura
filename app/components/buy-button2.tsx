"use client";

declare const fbq: (event: string, action: string) => void;

export function BuyButton2() {
  return (
    <a
      href="https://jade-marcas.pay.yampi.com.br/r/180JRPOZYR"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        onClick={() => {
          fbq("track", "Purchase");
        }}
        className="mt-4 px-6 py-3 text-white bg-green-600 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300"
      >
        Comprar
      </button>
    </a>
  );
}
