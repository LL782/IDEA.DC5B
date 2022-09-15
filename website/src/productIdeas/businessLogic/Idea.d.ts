export type Idea = PricedProduct | ProductBase | RawIdea;

type PricedProduct = ProductBase & {
  price: Price;
};

type ProductBase = {
  alt: string;
  blogPost?: string;
  description: string;
  id: string;
  image: string;
  maxQuantity?: number;
  subTitle: string;
  title: string;
  type:
    | "A3 Glossy Paper"
    | "Framed ink on paper"
    | "Original prototype"
    | "Printable Download"
    | "Test Idea Type";
};

type RawIdea = {
  alt: string;
  blogPost?: string;
  description: string;
  id: string;
  image: string;
  subTitle: string;
  title: string;
  type: "Raw idea";
};

type Price = {
  amount: number;
  id: string;
};
