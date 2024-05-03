import React from "react";
import Image from "next/image";
import "../styles/slider.css"

export default function Slider(props: { index: number, src: string; title: string; description: string }) {
    return (
        <div className="relative border-4 border-red-600 w-[1200px] mx-auto">
            <Image src={props.src} alt="" width={1200} height={300} />
            <div style={{ backgroundColor: 'red', height: '100px', width: '300px', position: "absolute", top: "50px", left: "50px" }}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>);
}
