import React, { FC } from 'react';
import styles from './Table.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import date from '../../../utils/date';
import { NumberFormat } from '../../../utils/numberFormat';

interface ITransactions {
  id: number,
  name: string,
  createdAt: string,
  status: boolean,
  amount: number
  minus: boolean;
}

const Table: FC = () => {
  const transactions: any = useSelector((state: RootState) => state.transactionSlice.transactions);
  return (
    <table className={styles.table}>
      <thead>
      <tr className={styles.title}>
        <th>Transactions ID</th>
        <th>Name</th>
        <th>Date</th>
        <th>Status</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody className={styles.infoWrapper}>
      {transactions.rows && transactions.rows.map((el: ITransactions) =>
        <tr className={styles.info} key={el.id}>
          <th>{el.id}</th>
          <th>{el.name}</th>
          <th>{date(el.createdAt)}</th>
          <th>{el.status ? 'Completed' : 'Pending'}</th>
          <th className={`${el.minus ? styles.active : styles.inactive}`}>{el.minus ? `-${NumberFormat(el.amount)}` : `${NumberFormat(el.amount)}`} </th>
        </tr>)}
      </tbody>
    </table>
  );
};

export default Table;