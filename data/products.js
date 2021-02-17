import dev from "./products.dev.json";
import prod from "./products.prod.json";

const products = process.env.NODE_ENV === "production" ? prod : dev;

export default products;
