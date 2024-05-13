
import Image from "next/image";
import React from "react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function ProductsSquereCard(props: { id: string; img: string; subChildren: any[]; }) {
	const t = await getTranslations('ProductList')
	return (
		<div className="w-full">
			<ul className="">
				<li className="group w-full h-[350px] relative border-2 rounded-lg overflow-hidden">
					<div className="h-full w-full flex justify-center items-center pt-8 group-hover:opacity-10">
						<Image src={props.img} alt="" width={350} height={350} style={{ objectFit: "fill" }} />
					</div>
					<div className="absolute top-0 w-full flex flex-col h-full bg-black/10 p-4 opacity-0 group-hover:opacity-100">
						<h1 className="mb-3 text-xl">{t(`${props.id}`)}</h1>
						<ul className="flex flex-col gap-2 text-sm">
							{props.subChildren.map((ch, index) =>
								<li key={index} className="group/item text-[16px]/[24px] relative hover:bg-secondry-300">
									<span className="absolute right-0 -top-1 block w-0 group-hover/item:w-full transition-all duration-300 ease-linear h-[2px] bg-transparent group-hover:bg-secondry-800"></span>
									<Link className="group-hover/item:text-secondry-800 group-hover/item:font-bold " href="/">{t(`${ch.id}`)}</Link>
									<span className="absolute left-0 -bottom-1 block w-0 group-hover/item:w-full transition-all duration-300 ease-linear h-[2px] bg-transparent group-hover:bg-secondry-800"></span>
								</li>)}
						</ul>
					</div>
				</li>
			</ul>
		</div>
	)
}
