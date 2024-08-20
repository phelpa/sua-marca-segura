"use client";

import { sendEmail } from "../actions/send_email";
import { SubmitButton } from "./submit-button";
import { useFormState } from "react-dom";

export const EmailForm = () => {
  const [state, action] = useFormState(sendEmail, { success: false });

  return (
    <form action={action} method="POST" className="text-white">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
          WhatsApp
        </label>
        <input
          type="whatsapp"
          id="whatsapp"
          name="whatsapp"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
          rows={4}
        ></textarea>
      </div>
      <SubmitButton />
    </form>
  );
};
