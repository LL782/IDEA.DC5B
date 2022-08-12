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
    { price: { amount: 15, id: "price_1LV0V2JvxKuslv8gXJMJyWgm" } },
    niceBitOfWrapping
  ),
  Object.assign(
    { price: { amount: 50, id: "price_1LV01JJvxKuslv8gnJWklB18" } },
    balsamicPotion
  ),
  Object.assign(
    { price: { amount: 500, id: "price_1LNkCqJvxKuslv8gltFewqHU" } },
    spaceAgeMug
  ),
  Object.assign(
    { price: { amount: 0.5, id: "price_1ILxZ4JvxKuslv8godvKlBvt" } },
    losAtlantisColouring
  ),
  Object.assign(
    { price: { amount: 0.5, id: "price_1ILxbXJvxKuslv8gtLk0vtky" } },
    eyesOnTheBlindfoldColouring
  ),
  Object.assign(
    { price: { amount: 0.5, id: "price_1ILxbyJvxKuslv8gRyvaM2ez" } },
    beardedStrangeFaceColouring
  ),
];

export default products;
