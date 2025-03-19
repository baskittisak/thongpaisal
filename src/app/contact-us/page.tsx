"use client";
import { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import ContactUs from "@/components/Home/ContactUs";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <NavBar type="fixed" />
      <ContactUs />
      <Footer />
    </>
  );
}
