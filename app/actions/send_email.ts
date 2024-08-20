"use server";

import nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";

type PreviousState = {
  success: boolean;
};

export async function sendEmail(
  previousState: PreviousState,
  formData: FormData
) {
  const name = formData.get("name");
  const whatsapp = formData.get("whatsapp");
  const message = formData.get("message");

  console.log({ name, whatsapp, message });

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
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nWhatsApp: ${whatsapp}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false };
  }
}
