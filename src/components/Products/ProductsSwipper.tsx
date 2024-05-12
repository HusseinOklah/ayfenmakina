// "use client";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { Products } from "../../lib/Database";
import ProductsBigCard from "./ProductsBigCard";
export default async function ProductsSwipper() {
  // const [shift, setShift] = useState(0);
  const t = await getTranslations('Navigation.products.gategories')
  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-[30px]/[48px]">Product Groups</h1>
      <div className="relative">
        {Products.map((group) => <ProductsBigCard id={group.id} img={group.img} subChildren={group.subChildren} />)}
      </div>
    </div>
  )
}