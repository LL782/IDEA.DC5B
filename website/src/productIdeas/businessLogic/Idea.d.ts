export type Idea = PricedProduct | ProductBase | RawIdea;

type PricedProduct = ProductBase & {
  price: Price;
  soldOut?: true;
};

type ProductBase = {
  alt: string;
  blogPost?: string;
  description: string;
  id: string;
  image: string;
  maxQuantity?: number;
  title: string;
  type:
    | "Hand-drawn multiple"
    | "Limited edition"
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
  title: string;
  type: "Raw idea";
};

type Price = {
  amount: number;
  id: string;
};
