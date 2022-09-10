import { PricedProduct } from "../businessLogic/Idea";
import { ProductDetails } from "../ui/ProductDetails";

export const example: PricedProduct = {
  alt: "testAlt",
  description: "testDescription",
  id: "testId",
  image: "/testImage",
  price: {
    amount: 999,
    id: "testPriceId",
  },
  subTitle: "testSubTitle",
  title: "testTitle",
  type: "Test Idea Type",
};

export const ExampleProductDetails = () => <ProductDetails idea={example} />;
