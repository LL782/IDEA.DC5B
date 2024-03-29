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
    { price: { amount: 82, id: "price_1LYzqaJvxKuslv8gQYSsYjJG" } },
    rodwellHatTrick007
  ),
  Object.assign(
    { price: { amount: 81, id: "price_1LYznfJvxKuslv8gEnsqjXPY" } },
    rodwellHatTrick006
  ),
  Object.assign(
    { price: { amount: 80, id: "price_1LYdfRJvxKuslv8gtHi7EgMr" } },
    rodwellHatTrick005
  ),
  Object.assign(
    { price: { amount: 79, id: "price_1LYIBNJvxKuslv8g35g0duQG" } },
    rodwellHatTrick004
  ),
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
    { price: { amount: 1.5, id: "price_1LW5TlJvxKuslv8gGV0tj1P1" } },
    eyesOnTheBlindfoldColouring
  ),
  Object.assign(
    { price: { amount: 1.5, id: "price_1LW5UMJvxKuslv8g0IoWIG28" } },
    beardedStrangeFaceColouring
  ),
];

export default ideas;
