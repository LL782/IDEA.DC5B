import { Product } from "../@types/Product";

export const balsamicPotion: Omit<Product, "price"> = {
  alt: "Crisp, clean photograph of a hand decorated bottle of Balsamic Vinegar",
  description:
    "Bit of a weird one. Do you like this bottle? It looks a bit like a magic potion. In actual fact it's balsamic vinegar.",
  image: "/product-images/balsamo.jpg",
  subTitle: "Magic Beans",
  title: "Balsamo",
  type: "Original prototype",
};
