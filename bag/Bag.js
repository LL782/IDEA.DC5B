import { MdShoppingCart } from "react-icons/md";
import styles from "./Bag.module.css";
import { PrimaryButton } from "../atomic-ui/PrimaryButton";
import { useBag } from "./useBag";
import { Table } from "./Table";
import products from "../data/products";

export const Bag = () => {
  const { bagItems, checkout, checkoutDisabled } = useBag();
  console.log(`bagItems: `, bagItems);

  const columns = {
    title: "Item",
    quantity: "Quantity",
    pricePerItem: "Price",
    total: "Item Total",
  };

  const rows = bagItems.map(({ id, pricePerItem, quantity }) => {
    const { title } = products.find(({ price }) => price.id === id);

    return {
      id,
      title,
      quantity,
      pricePerItem,
      total: quantity * pricePerItem,
    };
  });

  return (
    <div className={styles.container}>
      <h1>
        <MdShoppingCart />
      </h1>
      <Table columns={columns} rows={rows}></Table>
      <PrimaryButton onClick={checkout} disabled={checkoutDisabled}>
        Checkout
      </PrimaryButton>
    </div>
  );
};
