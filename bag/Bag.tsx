import { BiShoppingBag } from "react-icons/bi";
import styles from "./Bag.module.css";
import { PrimaryLink } from "../atomic-ui/PrimaryLink";
import { useBag } from "./useBag";
import { Table } from "./Table";
import products from "../data/products";
import { displayPrice } from "./displayPrice";
import { PrimaryButton } from "../atomic-ui/PrimaryButton";
import { ChangeEvent } from "react";

export const BAG_COLUMNS = {
  title: "Item",
  quantity: "Quantity",
  price: "Price",
  lineTotal: "Total",
};

const BagItemQuantity = ({ bagItem }) => {
  const { id, quantity, maxQuantity = 5 } = bagItem;
  const { updateItem } = useBag();

  const handleQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = Number.parseInt(e.target.value);
    updateItem({ id, quantity: newQuantity });
  };

  const options = [];
  for (let i = 0; i <= maxQuantity; i++) {
    options.push(<option value={i} key={i}>{`${i}`}</option>);
  }

  return (
    <select value={quantity} onChange={handleQuantity}>
      {options}
    </select>
  );
};

export const Bag = () => {
  const { bagItems, checkout, checkoutDisabled, updateItem } = useBag();

  const rows = bagItems.map((bagItem) => {
    const { id, pricePerItem, quantity, maxQuantity } = bagItem;
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
