import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import { STRAPI_URL } from "@/config/constants";

const Products = async () => {
  const { data: products } = await axios.get<{ data: Product[] }>(
    `${STRAPI_URL}/api/products/?populate=*`
  );

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.data.map((product) => {
        return (
          <Link
            key={product.id}
            className="h-fit w-fit cursor-pointer p-5 text-center"
            href={`/products/${product.id}`}
          >
            <Image
              src={product.attributes.images.data[0].attributes.url}
              width={300}
              height={350}
              alt={product.attributes.images.data[0].attributes.name}
            />
            <p className="mt-5 text-sm md:text-lg">{product.attributes.name}</p>
            <p> $ {product.attributes.price}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
