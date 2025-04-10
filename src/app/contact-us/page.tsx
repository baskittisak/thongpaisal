"use client";
import { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import ContactUsMap from "@/components/ContactUs/ContactUsMap";

export default function ContactUsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <NavBar type="fixed" />
      <ContactUsForm />
      <ContactUsMap />
      <Footer />
    </>
  );
}
