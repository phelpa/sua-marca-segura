"use client";

declare const fbq: (event: string, action: string) => void;

import { WhatsAppIcon } from "../icons/whatsapp-icon";

const textWhatsApp =
  "Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20benef%C3%ADcios%20em%20ter%20uma%20marca%20registrada";

const sendToWhatsApp = `https://wa.me/5515991349679?text=${textWhatsApp}`;

export const WhatsappButton = () => {
  return (
    <a
      className="fixed right-0 translate-x-[-2rem] bottom-[1.4rem] bg-[#1faf38] px-3 py-1.5 rounded-full transition-all duration-300 z-10 flex justify-center items-center gap-2"
      target="_blank"
      href={sendToWhatsApp}
      onClick={() => {
        fbq("track", "Contact");
      }}
    >
      <WhatsAppIcon />
      <span>Precisa de ajuda?</span>
    </a>
  );
};
