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
    {
      price: {
        amount: 50,
        id: "price_1LV01JJvxKuslv8gnJWklB18",
        maxQuantity: 3,
      },
    },
    balsamicPotion
  ),
  Object.assign(
    { price: { amount: 500, id: "price_1LNkCqJvxKuslv8gltFewqHU" } },
    spaceAgeMug
  ),
  Object.assign(
    { price: { amount: 1.5, id: "price_1LW5MqJvxKuslv8gY5k6T3vr" } },
    losAtlantisColouring
  ),
  Object.assign(
    { price: { amount: 1.5, id: "price_1LW5MIJvxKuslv8gYtWXPOJS" } },
    eyesOnTheBlindfoldColouring
  ),
  Object.assign(
    { price: { amount: 1.5, id: "price_1LW5LYJvxKuslv8gxJIn9bbk" } },
    beardedStrangeFaceColouring
  ),
];

export default products;
