import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, purpose, other } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_HOST,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.NEXT_PUBLIC_MAIL_HOST,
      subject: `Contact Us Form: ${purpose?.value}`,
      text: `
        ชื่อ-สกุล: ${name}
        อีเมล์ผู้ติดต่อ: ${email}
        วัตถุประสงค์: ${purpose?.value}
        ข้อความเพิ่มเติม:
        ${other}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
