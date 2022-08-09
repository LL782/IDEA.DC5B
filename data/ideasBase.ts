import { Product } from "../@types/Product";

type BaseIdea = Omit<Product, "price">;

export const niceBitOfWrapping: BaseIdea = {
  alt: "Photograph of a little box nicely wrapped up in glossy, black and white paper. There's a plant and a heavy kitchen mortar in the composition too, all on top of a wooden desk",
  description:
    "So I have some A3 sheets of paper which are prints of some completed artwork. Reckon these would make nice wrapping paper. If it's a good idea I could look into a proper print run to bring the cost down",
  image: "/product-images/niceBitOfWrapping.jpg",
  subTitle: "Heavy weight, super limited edition prototype",
  title: "Nice bit of wrapping paper",
  type: "A3 Glossy Paper",
};
export const balsamicPotion: BaseIdea = {
  alt: "Crisp, clean photograph of a hand decorated bottle of Balsamic Vinegar",
  description:
    "Bit of a weird one. Do you like this bottle? It looks a bit like a magic potion. In actual fact it's balsamic vinegar.",
  image: "/product-images/balsamo.jpg",
  subTitle: "Magic Beans",
  title: "Balsamo",
  type: "Original prototype",
};

export const spaceAgeMug: BaseIdea = {
  alt: "A white porceline mug that I've drawn on with a black chinagraph pencil",
  description:
    "This is chinagraph pencil on porceline so don't smudge it. Recommended for a careful collector. If people like it I'll do a print run of non-unique, cheaper ones. Let me know",
  image: "/product-images/spaceAgeMug.jpg",
  title: "Space Age Mug",
  subTitle: "Test artwork on a big mug",
  type: "Original prototype",
};
