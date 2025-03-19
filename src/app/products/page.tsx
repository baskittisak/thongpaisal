"use client";
import { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";

export default function ProductsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <NavBar type="fixed" />
    </>
  );
}
