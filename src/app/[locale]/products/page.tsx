import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Products } from "../../../lib/Database";

export default function page() {
	return (
		<div className="grid grid-cols-2 gap-4">
			{Products.map((group) => <Test id={group.id} img={group.img} subChildren={group.subChildren} />)}
		</div>
	)
}

async function Test(props: { id: string; img: string; subChildren: any[]; }) {
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
							{props.subChildren.map((ch) => <li>{t(`${ch.id}`)}</li>)}
						</ul>
					</div>

				</li>
			</ul>
		</div>)
}
