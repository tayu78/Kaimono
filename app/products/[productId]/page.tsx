import Product from "@/components/Product";

interface Props {
  params: {
    productId: string;
  };
}
const ProductPage = ({ params }: Props) => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Product productId={params.productId} />
    </>
  );
};

export default ProductPage;
