import dev from "./products.dev";
import prod from "./products.prod";

const products = process.env.NODE_ENV === "production" ? prod : dev;

export default products;
