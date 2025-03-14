"use client";
import { useEffect, useState } from "react";
import AboutUs from "@/components/Home/AboutUs";
import Cover from "@/components/Home/Cover";
import Details from "@/components/Home/Details";
import Products from "@/components/Home/Products";
import Services from "@/components/Home/Services";
import TrustCommitment from "@/components/Home/TrustCommitment";
import ContactUs from "@/components/Home/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <Cover />
      <AboutUs />
      <Details />
      <Products />
      <Services />
      <TrustCommitment />
      <ContactUs />
      <Footer />
    </>
  );
}
