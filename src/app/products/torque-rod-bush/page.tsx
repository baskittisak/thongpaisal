"use client";
import { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TorqueRodBush from "@/components/Products/TorqueRodBush";

export default function TorqueRodBushPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <NavBar type="fixed" />
      <TorqueRodBush />
      <Footer />
    </>
  );
}
