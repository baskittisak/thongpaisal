"use client";
import { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import Products from "@/components/Home/Products";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <NavBar type="fixed" />
      <Products />
      <Footer />
    </>
  );
}
