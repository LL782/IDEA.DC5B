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
  type: "Original prototype" | "Printable Download";
};
