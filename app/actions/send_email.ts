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
  const email = formData.get("email");
  const whatsapp = formData.get("whatsapp");
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
      subject: "Sua marca segura - Contato",
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
