import styles from "./Table.module.css";

export const Table = ({ columns, rows }) => {
  const columnIds = Object.keys(columns);

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.row}>
          {Object.values(columns).map((column, i) => (
            <th key={`${column}_${i}`} className={styles.columnHeading}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} className={styles.row}>
            {Object.keys(row)
              .filter((r) => columnIds.includes(r))
              .map((key) => (
                <td key={key} className={styles.cell}>
                  {row[key]}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
