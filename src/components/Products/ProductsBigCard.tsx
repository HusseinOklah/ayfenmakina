
import Image from "next/image";
import React from "react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function ProductsBigCard(props: { id: string; img: string; subChildren: any[]; }) {
    const t = await getTranslations('ProductList')
    return <div className="flex flex-row justify-between h-[360px] w-full border-b-2 first:border-t-2 py-4">
        <div className="w-[360px] flex justify-center items-center px-4">
            <Image src={props.img} alt={""} width={350} height={350} />
        </div>
        <div className="flex grow flex-col float-left border-x px-4">
            <Link href="/" className="text-[20px]/[32px] border-b mb-4">{t(`${props.id}`)}</Link>
            <ul className="flex flex-col gap-1">
                {props.subChildren.map((ch, index) =>
                    <li key={index} className="group text-[16px]/[24px] relative hover:bg-secondry-300">
                        <span className="absolute right-0 -top-1 block w-0 group-hover:w-full transition-all duration-300 ease-linear h-[2px] bg-transparent group-hover:bg-secondry-800"></span>
                        <Link href="/" className="group-hover:text-secondry-800 ">{t(`${ch.id}`)}</Link>
                        <span className="absolute left-0 -bottom-1 block w-0 group-hover:w-full transition-all duration-300 ease-linear h-[2px] bg-transparent group-hover:bg-secondry-800"></span>
                    </li>)}
            </ul>
        </div>
        <div className="w-[360px] px-4">{t(`${props.id}`)}</div>
    </div>;
}
