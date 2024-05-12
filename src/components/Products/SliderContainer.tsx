import React from "react";
import Slider from "../MainSlider/Slider";
import { MainSliderImages } from "../../lib/MainSliderImages"



export default function SliderContainer() {
    const imgIndex = 0;
    return (<div className="w-full">
        {MainSliderImages.map(image => <Slider key={image.id} index={imgIndex} src={image.src} title={image.title} description={image.description} />)}
    </div>);
}
