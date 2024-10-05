"use server";

import nodemailer from "nodemailer";

type PreviousState = {
  success: boolean;
};

export async function sendEmail(
  previousState: PreviousState,
  formData: FormData
) {
  const name = formData.get("name");
  const whatsapp = formData.get("whatsapp");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "Jade Marcas - Contato",
      text: `Name: ${name}\nWhatsApp: ${whatsapp}\nMessage: ${message} \nEmail: ${email}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false };
  }
}
