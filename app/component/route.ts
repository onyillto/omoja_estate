import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL_ADDRESS || "achomaduonyinye@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, email, phone, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Omoja Estate <onboarding@resend.dev>", // This must be a verified domain in production
      to: [toEmail],
      subject: `New Contact Form Submission from ${firstName}`,
      reply_to: email,
      text: `You have a new message from your website contact form.\n
Name: ${firstName}
Email: ${email}
Phone: ${phone || "Not provided"}
Message:
${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully!", data });
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
