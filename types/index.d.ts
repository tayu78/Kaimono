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
    description: string;
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
  attributes: {
    name: string;
  };
}
