import { Product } from "../@types/Product";
import {
  balsamicPotion,
  beardedStrangeFaceColouring,
  eyesOnTheBlindfoldColouring,
  losAtlantisColouring,
  niceBitOfWrapping,
  spaceAgeMug,
} from "./ideas.base";

const products: Product[] = [
  Object.assign(
    { price: { amount: 15, id: "price_1LV0VbJvxKuslv8gTkTZVnNt" } },
    niceBitOfWrapping
  ),
  Object.assign(
    { price: { amount: 50, id: "price_1LV02sJvxKuslv8gC3vUIyoA" } },
    balsamicPotion
  ),
  Object.assign(
    { price: { amount: 500, id: "price_1LNkKpJvxKuslv8gZDbyb8CM" } },
    spaceAgeMug
  ),
  Object.assign(
    { price: { amount: 1.5, id: "price_1LW5SzJvxKuslv8gQQreWilp" } },
    losAtlantisColouring
  ),
  Object.assign(
    { price: { amount: 1.5, id: "price_1LW5O2JvxKuslv8gUsgjcsL8" } },
    eyesOnTheBlindfoldColouring
  ),
  Object.assign(
    { price: { amount: 1.5, id: "price_1LW5OKJvxKuslv8gxEGbnCmF" } },
    beardedStrangeFaceColouring
  ),
];

export default products;
