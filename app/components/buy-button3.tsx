"use client";

declare const fbq: (event: string, action: string) => void;
declare const gtag: (event: string, action: string, data: any) => void;

export function BuyButton3({
  title = "QUERO GARANTIR O MEU REGISTRO AGORA",
  className = "",
}: {
  title?: string;
  className?: string;
}) {
  const handleClick = () => {
    fbq("track", "Purchase");
    gtag("event", "conversion", {
      send_to: "AW-16845087666/QPkRCPad_ZYaELLHruA-",
      transaction_id: "",
    });
  };

  return (
    <a
      href="https://sun.eduzz.com/40Q3175K0B"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <button
        className={`bg-gradient-to-r from-green-400 to-green-500 text-white font-bold py-4 px-8 rounded-lg text-xl transform transition duration-200 hover:scale-105 hover:shadow-lg hover:from-green-500 hover:to-green-600 animate-pulse ${className}`}
      >
        {title}
      </button>
    </a>
  );
}
