import React, { FC } from 'react';
import styles from './TransactionsPage.module.scss';
import Table from '../../ui/table';
import SearchIco from '../../ui/icons/SearchIco';


const TransactionsPage: FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.headAndSearch}>
        <h2>Recent Transactions</h2>
        <div className={styles.search}>
          <input type='text' placeholder={'Search'}/>
          <SearchIco />
        </div>
      </div>
      <Table />
      <button>Download the Excel File</button>
    </main>
  );
};

export default TransactionsPage;