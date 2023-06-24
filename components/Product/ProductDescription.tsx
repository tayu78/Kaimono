interface Props {
  name: string;
  price: number;
  description: string;
}

const ProductDescription = ({ name, price, description }: Props) => {
  return (
    <div className="p-10 lg:py-0">
      <h2 className="text-2xl">{name}</h2>
      <p> $ {price}</p>
      <p className="text-sm text-zinc-500">{description}</p>
    </div>
  );
};

export default ProductDescription;
