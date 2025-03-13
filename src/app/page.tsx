"use client";
import { useEffect, useState } from "react";
import AboutUs from "@/components/Home/AboutUs";
import Cover from "@/components/Home/Cover";
import Details from "@/components/Home/Details";

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
    </>
  );
}
