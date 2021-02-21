import { MdShoppingCart } from "react-icons/md";
import styles from "./Bag.module.css";
import { PrimaryButton } from "../atomic-ui/PrimaryButton";
import { useBag } from "./useBag";
import { Table } from "./Table";

export const Bag = () => {
  const { checkout, checkoutDisabled } = useBag();
  const columns = ["Item", "Quantity", "Price", "Item Total"];
  const rows = [
    ["Foo", "2", "50p", "£1.00"],
    ["Foo", "2", "50p", "£1.00"],
  ];
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
