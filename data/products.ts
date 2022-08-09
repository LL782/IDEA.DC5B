import { Product } from "../@types/Product";
import dev from "./products.dev";
import prod from "./products.prod";

const products: Product[] = process.env.NODE_ENV === "production" ? prod : dev;

export default products;
