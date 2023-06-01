import axios from "axios";
import Link from "next/link";

const Categories = async () => {
  const { data: categories } = await axios.get<{ data: Category[] }>(
    "http://127.0.0.1:1337/api/categories"
  );

  return (
    <div>
      <div className="flex justify-center gap-10 overflow-x-scroll border-b pb-3 text-lg md:text-2xl">
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
