import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Halwaiwala Website" <support@halwaiwala.in>`,
      to: "support@halwaiwala.in",
      subject: "New Event Inquiry",
      html: `
        <h2>New Event Inquiry</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Event Type:</strong> ${data.eventType}</p>
        <p><strong>Event Date:</strong> ${data.eventDate}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Guests:</strong> ${data.guests}</p>
        <p><strong>Services:</strong> ${data.services}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Email failed" },
      { status: 500 }
    );
  }
}
