"use client";
import { useParams, usePathname } from "next/navigation";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetails from "@/components/Products/ProductDetails";

export default function BushPage() {
  const { productType } = useParams();
  const pathName = usePathname();

  return (
    <>
      <NavBar type="fixed" />
      <ProductDetails
        type="bush"
        productType={productType}
        pathName={pathName}
      />
      <Footer />
    </>
  );
}
