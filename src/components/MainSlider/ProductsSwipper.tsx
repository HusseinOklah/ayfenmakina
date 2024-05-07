// "use client";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { Products } from "../../lib/Lists";
export default async function ProductsSwipper() {
  // const [shift, setShift] = useState(0);
  const t = await getTranslations('Navigation.products.gategories')
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[40px]">Products</h1>
      <ul className="grid gap-4 grid-cols-3 grid-rows-2 x-2 p-2 border rounded-xl">
        {Products.map((key) => (
          <li key={key.id} className="flex group relative justify-center items-center flex-col border p-2 bg-red-900 rounded-lg">
            <h2 className="text-xl mb-2 py-3 border-b-2">{t(`${key.id}.name`)}</h2>
            <Image src={key.imgLink} alt="" width={300} height={300} className="opacity-100 group-hover:opacity-50" />
            <div className="absolute bg-black/70 top-[68px] w-[90%] h-[80%] overflow-hidden hidden group-hover:flex flex-col justify-between">
              <p className="text-[16px]/[24px] text-center pt-3">{t(`${key.id}.description`)}</p>
              <button className="border bottom-1 m-2 p-2 hover:bg-red-500 rounded-lg">Show Details</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}