import React from "react";
import Swipper from "../../components/MainSlider/Swipper";
import ProductsSection from "../../components/Products/ProductsSection";

export default function page() {
  return (
    <>
      <Swipper />
      <ProductsSection props={'plate'} />
    </>
  );
}
