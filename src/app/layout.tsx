import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ผู้ผลิตชิ้นส่วน อะไหล่ ช่วงล่าง | Manufacturer of suspension parts",
  description: "Thongpaisal Co.,Ltd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={prompt.variable}>{children}</body>
    </html>
  );
}
