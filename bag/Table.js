import styles from "./Table.module.css";

export const Table = ({ columns, rows }) => (
  <table className={styles.table}>
    <thead>
      <tr className={styles.row}>
        {columns.map((column) => (
          <th className={styles.columnHeading}>{column}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr className={styles.row}>
          {row.map((value) => (
            <td className={styles.cell}>{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
