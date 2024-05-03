import React from "react";
import Image from "next/image";
import "../../styles/slider.css"
import clsx from "clsx";

export default function Slider(props: { index: number, src: string; title: string; description: string }) {
    return (
        <div className="relative w-[1200px] mx-auto">
            <Image src={props.src} alt="" width={1200} height={285} />
            <div className="absolute top-10 left-10 bg-red-700/50 w-1/2 h-1/2 border-y-4 border-red-800 text-yellow-200 p-6 animate-wiggle">
                <h1 className="text-xl mb-10">{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>);
}
