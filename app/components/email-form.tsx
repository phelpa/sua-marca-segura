"use client";

import { sendEmail } from "../actions/send_email";
import { SubmitButton } from "./submit-button";
import { useFormState } from "react-dom";

export const EmailForm = () => {
  const [state, action] = useFormState(sendEmail, {
    success: false,
  });

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
          type="email"
          id="email"
          name="email"
          placeholder="Email"
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
          required
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
