interface Category {
  id: number;
  attributes: {
    name;
  };
}

interface Product {
  id: number;
  attributes: {
    name: string;
    price: number;
    description: number;
    images: {
      data: Image[];
    };
    category: {
      data: Category;
    };
    sizes: {
      data: Size[];
    };
  };
}

interface Image {
  id: number;
  attributes: {
    name: string;
    url: string;
  };
}

interface Size {
  id: number;
  name: string;
}
