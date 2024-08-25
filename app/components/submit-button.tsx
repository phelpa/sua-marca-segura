"use client";

import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-[rgb(0,40,80)] text-white px-6 py-3 rounded-md hover:bg-blue-900 transition-colors text-lg"
    >
      {status.pending ? "Enviando..." : "Enviar"}
    </button>
  );
};
