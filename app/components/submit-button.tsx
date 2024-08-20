"use client";
import { useEffect } from "react";
import { sendEmail } from "../actions/send_email";

import { useFormState, useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-[rgb(0,40,80)] text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors"
    >
      Enviar
      {/* {pending ? "Enviando..." : isSuccess ? "Enviado!" : "Enviar"} */}
    </button>
  );
};
