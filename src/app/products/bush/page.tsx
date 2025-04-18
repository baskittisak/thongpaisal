"use client";
import { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bush from "@/components/Products/Bush";

export default function BushPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <NavBar type="fixed" />
      <Bush />
      <Footer />
    </>
  );
}
