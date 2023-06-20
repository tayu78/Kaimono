import Categories from "@/components/Categories";
import Products from "@/components/Product/Products";

export default function Home() {
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Categories />
      {/* @ts-expect-error Async Server Component */}
      <Products />
    </main>
  );
}
