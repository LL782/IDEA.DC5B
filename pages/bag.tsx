import { NextSeo } from "next-seo";

import { Bag } from "../shoppingBag/ui/Bag";

export default function BagPage() {
  return (
    <>
      <NextSeo title="S H O P . D C 5 B / B A G" />
      <Bag />
    </>
  );
}
