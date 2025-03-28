"use client";
import { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import AboutUs from "@/components/Home/AboutUs";
import AboutUsDetails from "@/components/AboutUs/AboutUsDetails";
import Footer from "@/components/Footer";
import Expert from "@/components/AboutUs/Expert";
import Type from "@/components/AboutUs/Type";
import TpsTechnology from "@/components/AboutUs/TpsTechnology";
import Highlights from "@/components/AboutUs/Highlights";

export default function AboutUsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <NavBar type="fixed" />
      <AboutUs />
      <AboutUsDetails />
      <Expert />
      <Type />
      <TpsTechnology />
      <Highlights />
      <Footer />
    </>
  );
}
