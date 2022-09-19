import { PricedProduct } from "../businessLogic/Idea";
import { exampleProduct } from "../data/ideas/ideas.dev";
import { ProductDetails } from "../ui/ProductDetails";

export const ExampleProductDetails = () => (
  <ProductDetails idea={exampleProduct as PricedProduct} />
);
