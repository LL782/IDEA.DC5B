import type { PricedProduct, RawIdea } from "../../businessLogic/Idea";
import {
  balsamicPotion,
  beardedStrangeFaceColouring,
  eyesOnTheBlindfoldColouring,
  fastMoving,
  losAtlantisColouring,
  niceBitOfWrapping,
  rodwellHatTrick004,
  rodwellHatTrick005,
  rodwellHatTrick006,
  rodwellHatTrick007,
  spaceAgeMug,
} from "./ideas.base";

const ideas: (RawIdea | PricedProduct)[] = [
  fastMoving,
  Object.assign(
    { price: { amount: 82, id: "price_1LYzqJJvxKuslv8gtYKXewqD" } },
    rodwellHatTrick007
  ),
  Object.assign(
    { price: { amount: 81, id: "price_1LYznUJvxKuslv8gjag9d2Fd" } },
    rodwellHatTrick006
  ),
  Object.assign(
    { price: { amount: 80, id: "price_1LYda3JvxKuslv8gUkH7LrRX" } },
    rodwellHatTrick005
  ),
  Object.assign(
    { price: { amount: 79, id: "price_1LYI7pJvxKuslv8gcdXWGQMe" } },
    rodwellHatTrick004
  ),
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

export const exampleProduct = Object.assign(
  { price: { amount: 1.5, id: "price_1LW5LYJvxKuslv8gxJIn9bbk" } },
  beardedStrangeFaceColouring
);

export default ideas;
