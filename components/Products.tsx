import axios from "axios";
import Image from "next/image";

const Products = async () => {
  const { data: products } = await axios.get<{ data: Product[] }>(
    "http://127.0.0.1:1337/api/products/?populate=*"
  );

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.data.map((product) => {
        return (
          <div key={product.id} className="h-fit w-fit p-5 text-center">
            <Image
              src={product.attributes.images.data[0].attributes.url}
              width={300}
              height={350}
              alt={product.attributes.images.data[0].attributes.name}
            />
            <p className="mt-5 text-sm md:text-lg">{product.attributes.name}</p>
            <p> $ {product.attributes.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
