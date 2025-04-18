"use client";
import { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seal from "@/components/Products/Seal";

export default function SealPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <NavBar type="fixed" />
      <Seal />
      <Footer />
    </>
  );
}
