import { ReactElement } from "react";
import { BAG_COLUMNS } from "./Bag";
import styles from "./Table.module.css";

interface Props {
  columns: typeof BAG_COLUMNS;
  rows: {
    id: string;
    title: string;
    quantity: ReactElement;
    price: string;
    lineTotal: string;
  }[];
  footer: { Total: string };
}

export const Table = ({ columns, rows, footer }: Props) => {
  const columnIds = Object.keys(columns);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {Object.values(columns).map((column, i) => (
            <th key={`${column}_${i}`} scope="col">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {Object.keys(row)
              .filter((r) => columnIds.includes(r))
              .map((key: string) => (
                // @ts-expect-error row[key]
                <td key={key}>{row[key]}</td>
              ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {Object.keys(footer).map((key) => (
          <tr key={key}>
            <th colSpan={Object.keys(columns).length - 1} scope="row">
              {key}
            </th>
            {
              // @ts-expect-error footer[key]
              <td>{footer[key]}</td>
            }
          </tr>
        ))}
      </tfoot>
    </table>
  );
};
