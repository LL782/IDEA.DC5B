import { BiShoppingBag } from "react-icons/bi";
import styles from "./Bag.module.css";
import { PrimaryLink } from "../atomic-ui/PrimaryLink";
import { useBag } from "./useBag";
import { Table } from "./Table";
import products from "../data/products";
import { displayPrice } from "./displayPrice";
import { PrimaryButton } from "../atomic-ui/PrimaryButton";
import { SecondaryLink } from "../atomic-ui/SecondaryLink";
import { BagItemQuantity } from "./BagItemQuantity";

export const BAG_COLUMNS = {
  title: "Item",
  quantity: "Quantity",
  price: "Price",
  lineTotal: "Total",
};

export const Bag = () => {
  const { bagItems, checkout, checkoutDisabled } = useBag();

  const rows = bagItems.map((bagItem) => {
    const { id, pricePerItem, quantity } = bagItem;
    const product = products.find(({ price }) => price.id === id);

    return {
      id,
      title: product.title,
      quantity: <BagItemQuantity bagItem={bagItem} />,
      price: displayPrice(pricePerItem),
      lineTotal: displayPrice(quantity * pricePerItem),
    };
  });

  const totalOfRows = bagItems.reduce(
    (accumulator, { pricePerItem, quantity }) => {
      return accumulator + quantity * pricePerItem;
    },
    0
  );

  const footer = { Total: displayPrice(totalOfRows) };

  return (
    <div className={styles.container}>
      <h1>
        <BiShoppingBag />
      </h1>
      {rows.length > 0 ? (
        <>
          <Table columns={BAG_COLUMNS} rows={rows} footer={footer}></Table>
          <PrimaryButton onClick={checkout} disabled={checkoutDisabled}>
            Checkout
          </PrimaryButton>
          <p>
            <SecondaryLink href="/">Back to the shop</SecondaryLink>
          </p>
        </>
      ) : (
        <>
          <h2>Your bag is empty</h2>
          <p>Let&apos;s find something to go in it?</p>
          <PrimaryLink href="/">Go shopping</PrimaryLink>
        </>
      )}
    </div>
  );
};
