import axios from "axios";
import Link from "next/link";

import { STRAPI_URL } from "@/config/constants";

const Categories = async () => {
  const { data: categories } = await axios.get<{ data: Category[] }>(
    `${STRAPI_URL}/api/categories`
  );

  return (
    <div>
      <div className="flex justify-center gap-10 overflow-x-scroll border-b pb-3 text-lg md:text-xl">
        {categories.data.map((category) => {
          return (
            <Link href="/" key={category.id}>
              {category.attributes.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
