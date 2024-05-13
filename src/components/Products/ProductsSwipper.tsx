import { Products } from "../../lib/Database";
import ProductsBigCard from "./ProductsBigCard";
import ProductsSquereCard from "./ProductsSquereCard";
export default async function ProductsSwipper(props: { type?: string }) {
  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-[30px]/[48px]">Product Groups</h1>
      <div className="relative">
        {props.type === 'wide' ?
          Products.map((group, index) => <ProductsBigCard key={index} id={group.id} img={group.img} subChildren={group.subChildren} />)
          :
          <div className="grid grid-cols-3 gap-4">
            {Products.map((group, index) => <ProductsSquereCard key={index} id={group.id} img={group.img} subChildren={group.subChildren} />)}
          </div>
        }
      </div>
    </div>
  )
}