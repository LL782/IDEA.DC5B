import { MdShoppingCart } from "react-icons/md";
import styles from "./Bag.module.css";
import { PrimaryButton } from "../atomic-ui/PrimaryButton";
import { useBag } from "./useBag";
import { Table } from "./Table";
import products from "../data/products";
import { displayPrice } from "./displayPrice";

export const Bag = () => {
  const { bagItems, checkout, checkoutDisabled } = useBag();
  console.log(`bagItems: `, bagItems);

  const columns = {
    title: "Item",
    quantity: "Quantity",
    pricePerItem: "Price",
    total: "Total",
  };

  const rows = bagItems.map(({ id, pricePerItem, quantity }) => {
    const product = products.find(({ price }) => price.id === id);

    return {
      id,
      title: product.title,
      quantity,
      pricePerItem: displayPrice(pricePerItem),
      total: displayPrice(quantity * pricePerItem),
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
        <MdShoppingCart />
      </h1>
      <Table columns={columns} rows={rows} footer={footer}></Table>
      <PrimaryButton onClick={checkout} disabled={checkoutDisabled}>
        Checkout
      </PrimaryButton>
    </div>
  );
};
