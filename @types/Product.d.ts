export type Product = {
  alt: string;
  description: string;
  image: string;
  price: {
    amount: number;
    id: string;
  };
  maxQuantity?: number;
  subTitle: string;
  title: string;
  type: "A3 Glossy Paper" | "Original prototype" | "Printable Download";
};

export type BagItem = {
  id: string;
  maxQuantity?: number;
  pricePerItem: number;
  quantity: number;
};
