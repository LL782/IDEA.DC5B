import { NextSeo } from "next-seo";

import { Bag } from "../shoppingBag/ui/Bag";

export default function BagPage() {
  return (
    <>
      <NextSeo title="Bag // DC5B Ideas" />
      <Bag />
    </>
  );
}
