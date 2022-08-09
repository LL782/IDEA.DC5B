export type Product = {
  alt: string;
  description: string;
  image: string;
  price: {
    amount: number;
    id: string;
  };
  subTitle: string;
  title: string;
  type: "A3 Glossy Paper" | "Original prototype" | "Printable Download";
};
