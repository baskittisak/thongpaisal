import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, purpose, other } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "thongpaisalgroup@gmail.com",
      subject: `Contact Us Form: ${purpose}`,
      text: `
        ชื่อ-สกุล: ${name}
        อีเมล์ผู้ติดต่อ: ${email}
        วัตถุประสงค์: ${purpose}
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
