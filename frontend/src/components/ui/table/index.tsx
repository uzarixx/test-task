import React, { FC } from 'react';
import styles from './Table.module.scss';

const arr = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];


const Table: FC = () => {
  const test = 1 + 1;
  return (
    <table className={styles.table}>
      <tbody>
      <tr className={styles.title}>
        <th>Transactions ID</th>
        <th>Name</th>
        <th>Date</th>
        <th>Status</th>
        <th>Amount</th>
      </tr>
      <tbody className={styles.infoWrapper}>
      {arr.map((_, i) =>
        <tr className={styles.info} key={i}>
          <th>14214</th>
          <th>Sherman Blankenship</th>
          <th>08 Jan, 2022</th>
          <th>Pending</th>
          <th className={`${test ? styles.active : styles.inactive}`}>{test ? '-$215.90' : '$217.90'} </th>
        </tr>,
      )}
      </tbody>
      </tbody>
    </table>
  );
};

export default Table;