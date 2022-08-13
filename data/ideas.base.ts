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
  subTitle: "Test artwork on a big mug",
  title: "Space Age Mug",
  type: "Original prototype",
};

export const losAtlantisColouring: BaseIdea = {
  alt: "Black and white artists impression of a Toltec warrior standing in from of Los Atlantis statues with a flying saucer hovering above.",
  description:
    "In Tula you can see them. Very strange! In 2008 we draw them with a UFO and a Toltec Warrior on the scene. Now you can spend 50p or £1 or £1.50, etc. and print copies till your heart's content",
  image: "/product-images/los-atlantis-02.png",
  subTitle: "Colouring in sheet",
  title: "Los Atlantis",
  type: "Printable Download",
};

export const beardedStrangeFaceColouring: BaseIdea = {
  alt: "A coloured in drawing of a strange bearded face.",
  description:
    "This bearded face, of ambigious adornment, is shown here in colour but I've since redrawn it in black and white at a bigger size to give you a colouring in version. Let me know if you like it and about other ideas for the artwork. We can do anything!",
  image: "/product-images/orange-splash-01.jpg",
  title: "Bearded Strangeface",
  type: "Printable Download",
  subTitle: "Colouring in sheet",
};

export const eyesOnTheBlindfoldColouring: BaseIdea = {
  alt: "Ink drawing of an unusual face with a blindfold covering the eyes, with eyes printed on the blindfold.",
  description:
    "Imagine having faces on the front and the back of the head. Now imagine one face has been blindfolded, and on the blindfold are the only open eyes. I drew the original in 2009 (shown here). I'll redraw just the lines so you can print it at home or at the library and apply your own colours. Yum",
  image: "/product-images/orange-splash-03.jpg",
  title: "Eyes On The Blindfold",
  type: "Printable Download",
  subTitle: "Colouring in sheet",
};
