import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(req: Request) {
  const { email, message } = await req.json();

  const emailServerUrl = process.env.EMAIL_SERVER;
  if (!emailServerUrl) {
    throw new Error("EMAIL_SERVER env var not set");
  }
  const emailServerUrlObject = new URL(emailServerUrl);

  const smtpHost = emailServerUrlObject.hostname;
  const smtpPort = emailServerUrlObject.port || 587;
  const smtpUser = emailServerUrlObject.username;
  const smtpPass = emailServerUrlObject.password;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  } as SMTPTransport.Options);

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: "Contact Form Message",
    text: `
    Message from: ${email}
    Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return NextResponse.json(
        {
          status: "error",
          message: "Failed to send mail",
        },
        { status: 500 },
      );
    }

    console.log("Email sent: " + info.response);
    return NextResponse.json({
      status: "success",
      message: "Email sent successfully",
    });
  });
  return NextResponse.json(message);
}
