"use client";

declare const fbq: (event: string, action: string) => void;

import { WhatsAppIcon } from "../icons/whatsapp-icon";

const textWhatsApp =
  "Ol%C3%A1%2C%20tenho%20interesse%20em%20registrar%20minha%20marca%20e%20gostaria%20de%20come%C3%A7ar";

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
      <span>Converse com a gente</span>
    </a>
  );
};
