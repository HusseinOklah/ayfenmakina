
import React from "react";
import SectionWrapper from "../Wrappers/SectionWrapper";
import ProductsSwipper from "./ProductsSwipper";

export default function ProductsSection({ props }) {
    return (
        <SectionWrapper>
            {props.kind === 'plate' ? <ProductsSwipper /> : <ProductsSwipper />}
        </SectionWrapper>
    );
}
