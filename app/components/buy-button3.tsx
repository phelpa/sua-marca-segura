"use client";

declare const fbq: (event: string, action: string) => void;

export function BuyButton3() {
  return (
    <a
      href="https://jade-marcas.pay.yampi.com.br/r/TU1ZPZWXG3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        onClick={() => {
          fbq("track", "Purchase");
        }}
        className="bg-gradient-to-r from-green-400 to-green-500 text-white font-bold py-4 px-8 rounded-lg text-xl transform transition duration-200 hover:scale-105 hover:shadow-lg hover:from-green-500 hover:to-green-600 animate-pulse"
      >
        QUERO GARANTIR O MEU REGISTRO AGORA
      </button>
    </a>
  );
}
