import Image from "next/image";
import axios from "axios";

import { STRAPI_URL } from "@/config/constants";

interface Props {
  productId: string;
}

const Product = async ({ productId }: Props) => {
  const { data: product } = await axios.get<{ data: Product }>(
    `${STRAPI_URL}/api/products/${productId}?populate=*`
  );

  const { name, price, description, images, sizes } = product.data.attributes;
  return (
    <div>
      <div className="p-10">
        <h2 className="text-2xl">{name}</h2>
        <p> $ {price}</p>
        <p className="text-sm text-zinc-500">{description}</p>
      </div>
      <div className="relative  h-[550px] ">
        {/* TODO: create image slider instead of showing one image */}
        <Image fill alt={name} src={images.data[0].attributes.url} />
      </div>
      <div className="p-10">
        <h3 className="mb-5 mt-10 text-xl">Select Sizes</h3>
        <ul className="mb-16 grid grid-cols-3 gap-3">
          {sizes.data.map((size) => {
            return (
              <li
                className=" cursor-pointer rounded border py-5 text-center text-lg hover:border-black"
                key={size.id}
              >
                {size.attributes.name}
              </li>
            );
          })}
        </ul>

        <button className="mx-auto mb-5 block w-5/6 rounded-3xl border bg-black p-5 text-white hover:opacity-50">
          Add To Cart
        </button>
        <button className="mx-auto block w-5/6 rounded-3xl  border-2 p-5  hover:border-black ">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Product;
