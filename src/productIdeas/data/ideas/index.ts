import type { PricedProduct, RawIdea } from "../../businessLogic/Idea";
import dev from "./ideas.dev";
import prod from "./ideas.prod";

const ideas: (RawIdea | PricedProduct)[] =
  process.env.NODE_ENV === "production" ? prod : dev;

export default ideas;

export const products = ideas.filter(
  ({ type }) => type !== "Raw idea"
) as PricedProduct[];
