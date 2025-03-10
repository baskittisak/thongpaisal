"use client";
import { useEffect, useState } from "react";
import AboutUs from "@/components/Home/AboutUs";
import Cover from "@/components/Home/Cover";

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
    </>
  );
}
