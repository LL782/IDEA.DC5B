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
    { price: { amount: 0.5, id: "price_1ILcCGJvxKuslv8gGjmwU6P2" } },
    losAtlantisColouring
  ),
  Object.assign(
    { price: { amount: 0.5, id: "price_1ILcBtJvxKuslv8gqTi6Z9tQ" } },
    eyesOnTheBlindfoldColouring
  ),
  Object.assign(
    { price: { amount: 0.5, id: "price_1ILcBUJvxKuslv8gmfBuEG5K" } },
    beardedStrangeFaceColouring
  ),
];

export default products;
