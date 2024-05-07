import React from "react";
import { useTranslations } from "next-intl";
import { Products } from "../lib/Lists";
import Link from "next/link";
import Image from "next/image";

export default function ProductsDropMenu() {
	const t = useTranslations('ProductList')
	return (
		<div className='absolute group-hover:block -left-10 z-20 bg-transparent pt-[20px] w-[1100px] h-[520px]'>
			<div className="bg-black/65 rounded-lg">
				<ul className='relative  h-[500px] w-[400px] py-1 pl-1'>
					{Products.map((category) =>
						<li key={category.id} className="group/category bg-transparent py-2 hover:bg-red-800 rounded-md">
							<Link className="" href="/products">
								<p className="text-base/4 p-2">{t(`${category.id}`)}</p>
							</Link>
							<ul className="top-0 left-[400px] w-[400px] h-[500px] absolute py-1 pl-1 hidden group-hover/category:block">
								{category.subChildren.map((subCategory) =>
									<li key={subCategory.id} className="group/subCategory bg-transparent py-2 hover:bg-red-800  rounded-md">
										<Link className="" href="/products">
											<p className="text-base/4 p-2">{t(`${subCategory.id}`)}</p>
										</Link>
										{subCategory.product && (
											<div className="h-[500px] absolute top-0 left-[400px] w-[300px] py-2 pl-2 hidden group-hover/subCategory:block">
												<ul className="inline-grid grid-cols-2 gap-2">
													{subCategory.product.map((product) =>
														<li key={product.id} className="opacity-50 hover:opacity-100">
															<Image src={product.img} alt={product.name} width={140} height={140} />
														</li>
													)}
												</ul>
											</div>
										)}
									</li>
								)}
							</ul>
						</li>
					)}
				</ul>
			</div>
		</div>);
}
