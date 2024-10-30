"use client";

declare const fbq: (event: string, action: string) => void;

type BuyButtonProps = {
  href: string;
};
export function BuyButton({ href }: BuyButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-0 mb-4"
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      <button
        className="mt-4 px-6 py-3 text-white bg-green-600 rounded-lg shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300"
        onClick={() => {
          fbq("track", "Purchase");
        }}
      >
        Comprar
      </button>
    </a>
  );
}
