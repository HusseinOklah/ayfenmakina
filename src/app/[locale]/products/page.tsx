import {products} from "../../../../messages/en.json"
export default function page(){
    return (
        <main>
            <h1 className=" mb-5 text-blue-100 text-[48px]/[72px] text-center">Product Groups</h1>
            <ul className="grid grid-cols-3 gap-4 my-10 mx-4 p-4 bg-blue-800">
                <li className="p-4 odd:bg-blue-200 even:bg-blue-100 h-40 ">
                    <a href={`products/${products.product1.link}`}>{products.product1.name}</a>
                </li>
                <li className="p-4 odd:bg-blue-200 even:bg-blue-100 h-40 ">
                <a href={`products/${products.product2.link}`}>{products.product2.name}</a>
                </li>
                <li className="p-4 odd:bg-blue-200 even:bg-blue-100 h-40 ">
                <a href={`products/${products.product3.link}`}>{products.product3.name}</a>
                </li>
                <li className="p-4 odd:bg-blue-200 even:bg-blue-100 h-40 ">
                <a href={`products/${products.product4.link}`}>{products.product4.name}</a>
                </li>
            </ul>
        </main>
    );
}