"use client";
import { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import AboutUs from "@/components/Home/AboutUs";
import AboutUsDetails from "@/components/AboutUs/AboutUsDetails";

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
    </>
  );
}
