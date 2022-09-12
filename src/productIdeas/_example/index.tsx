import { PricedProduct } from "../businessLogic/Idea";
import { products } from "../data/ideas";
import { ProductDetails } from "../ui/ProductDetails";

export const example: PricedProduct = products[0];

export const ExampleProductDetails = () => <ProductDetails idea={example} />;
