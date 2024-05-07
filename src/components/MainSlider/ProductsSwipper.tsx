// "use client";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";


import image01 from "../../../public/img/products/cat_1.jpg";
import image02 from "../../../public/img/products/cat_2.jpg";
import image03 from "../../../public/img/products/cat_3.jpg";
import image04 from "../../../public/img/products/cat_4.jpg";
import image05 from "../../../public/img/products/cat_5.jpg";
import image06 from "../../../public/img/products/cat_6.jpg";


// import { useState } from "react";
import clsx from "clsx";
import { getTranslations } from 'next-intl/server';

export default async function ProductsSwipper() {
  // const [shift, setShift] = useState(0);
  const t = await getTranslations('Navigation.products.gategories')
  const keys = ['cat_1', 'cat_2', 'cat_3', 'cat_4', 'cat_5', 'cat_6'] as const;
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[40px]">Products</h1>
      <ul className="grid gap-4 grid-cols-3 grid-rows-2 x-2 p-2 border rounded-xl">
        {keys.map((key) => (
          <li key={key} className="flex group relative justify-center items-center flex-col border p-2 bg-red-900 rounded-lg">
            <h2 className="text-xl mb-2 py-3 border-b-2">{t(`${key}.name`)}</h2>
            <Image src={t(`${key}.ImgLink`)} alt="" width={300} height={300} className="opacity-100 group-hover:opacity-50" />
            <div className="absolute bg-black/70 top-[68px] w-[90%] h-[80%] overflow-hidden hidden group-hover:flex flex-col justify-between">
              <p className="text-[16px]/[24px] text-center pt-3">{t(`${key}.description`)}</p>
              <button className="border bottom-1 m-2 p-2 hover:bg-red-500 rounded-lg">Show Details</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}