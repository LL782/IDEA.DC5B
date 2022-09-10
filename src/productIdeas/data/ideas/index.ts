import type { Idea, PricedProduct } from "../../businessLogic/Idea";
import dev from "./ideas.dev";
import prod from "./ideas.prod";

const ideas: Array<Idea | PricedProduct> =
  process.env.NODE_ENV === "production" ? prod : dev;

export default ideas;
