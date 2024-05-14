import React from "react";
import Swipper from "../../components/MainSlider/Swipper";
import ProductsSection from "../../components/Products/ProductsSection";
export default function page() {
  return (
    <>

      <svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg">
        <defs />
        {/* <text className="svg" transform="matrix(2.4, 0, 0, 2.5, -50, -25)" x="0" y="85" id="id1">A<animateTransform type="translate" additive="sum" attributeName="transform" values="0 0;40 0" dur="2s" fill="freeze" keyTimes="0; 1" end="2s" max="10s" begin="0.0s" /></text>
        <text className="svg" transform="matrix(2.4, 0, 0, 2.5, -50, -25)" x="0" y="85" id="id2">Y<animateTransform type="translate" additive="sum" attributeName="transform" values="0 0;70 0" dur="2s" fill="freeze" keyTimes="0; 1" end="4s" max="10s" begin="2.0s" /></text>
        <text className="svg" transform="matrix(2.4, 0, 0, 2.5, -50, -25)" x="0" y="85" id="id3">F<animateTransform type="translate" additive="sum" attributeName="transform" values="0 0;100 0" dur="2s" fill="freeze" keyTimes="0; 1" end="6s" max="10s" begin="4.0s" /></text>
        <text className="svg" transform="matrix(2.4, 0, 0, 2.5, -50, -25)" x="0" y="85" id="id4">E<animateTransform type="translate" additive="sum" attributeName="transform" values="0 0;130 0" dur="2s" fill="freeze" keyTimes="0; 1" end="8s" max="10s" begin="6.0s" /></text>
        <text className="svg" transform="matrix(2.4, 0, 0, 2.5, -50, -25)" x="0" y="85" id="id5">N<animateTransform type="translate" additive="sum" attributeName="transform" values="0 0;160 0" dur="2s" fill="freeze" keyTimes="0; 1" end="10s" max="10s" begin="8.0s" /></text> */}
        <text className="svg" transform="translate(0, 0)" x="-40" y="40" id="id1">A<animateTransform type="translate" additive="sum" attributeName="transform" values="0 0;40 0" dur="2s" fill="freeze" keyTimes="0; 1" end="2s" max="10s" begin="0.0s" /></text>
      </svg>
      <Swipper />
      <ProductsSection props={'plate'} />
    </>
  );
}
