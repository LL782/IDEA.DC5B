import { BAG_COLUMNS } from "./Bag";
import styles from "./Table.module.css";

interface Props {
  columns: typeof BAG_COLUMNS;
  rows: any;
  footer: any;
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
              .map((key) => (
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
            <td>{footer[key]}</td>
          </tr>
        ))}
      </tfoot>
    </table>
  );
};
