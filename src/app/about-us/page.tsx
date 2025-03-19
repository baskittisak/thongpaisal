"use client";
import { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import AboutUs from "@/components/Home/AboutUs";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 76px;
`;

export default function AboutUsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <NavBar type="fixed" />
      <Container>
        <AboutUs />
      </Container>
    </>
  );
}
