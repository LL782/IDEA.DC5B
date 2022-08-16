export type Idea = {
  alt: string;
  blogPost?: string;
  description: string;
  id: string;
  image: string;
  maxQuantity?: number;
  price?: Price;
  subTitle: string;
  title: string;
  type: "A3 Glossy Paper" | "Original prototype" | "Printable Download";
};

type Price = {
  amount: number;
  id: string;
};

export type BagItem = {
  id: string;
  maxQuantity?: number;
  pricePerItem: number;
  quantity: number;
};
