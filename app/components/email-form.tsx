"use client";

import { sendEmail } from "../actions/send_email";
import { SubmitButton } from "./submit-button";
import { useFormState } from "react-dom";
import { useState } from "react";

export const EmailForm = () => {
  const [state, action] = useFormState(sendEmail, {
    success: false,
  });

  const [emailRequired, setEmailRequired] = useState(true);
  const [whatsappRequired, setWhatsappRequired] = useState(true);

  const handleInputChange = (e: any) => {
    const email = e.target.form.email.value.trim();
    const whatsapp = e.target.form.whatsapp.value.trim();

    if (whatsapp) {
      setEmailRequired(false);
      setWhatsappRequired(true);
      return;
    }

    if (email) {
      setWhatsappRequired(false);
      setEmailRequired(true);
      return;
    }

    setEmailRequired(true);
    setWhatsappRequired(true);
  };

  return (
    <form action={action} method="POST" className="text-white">
      <div className="mb-4">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nome"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black placeholder:text-sm placeholder:text-[rgb(0,40,80)]"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="whatsapp"
          name="whatsapp"
          placeholder="WhatsApp com DDD"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black placeholder:text-sm placeholder:text-[rgb(0,40,80)]"
          required={whatsappRequired}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black placeholder:text-sm placeholder:text-[rgb(0,40,80)]"
          required={emailRequired}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <textarea
          id="message"
          name="message"
          placeholder="Mensagem"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black placeholder:text-sm placeholder:text-[rgb(0,40,80)]"
          rows={4}
          required
        ></textarea>
      </div>
      {!state.success && <SubmitButton />}
      {state.success && (
        <div className="bg-green-500 text-white px-6 py-3 rounded-md inline-block">
          Mensagem enviada!
        </div>
      )}
    </form>
  );
};
