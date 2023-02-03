import React, { FC, useEffect, useRef } from 'react';
import styles from './TransactionsPage.module.scss';
import Table from '../../ui/table';
import SearchIco from '../../ui/icons/SearchIco';
import Pagination from '../../ui/pagination';
import { debounce } from 'src/utils/debounce';
import { useDispatch } from 'react-redux';
import { fetchNotificationTransaction, fetchTransactions } from '../../../store/counter/transactionSlice';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppSelector } from '../../../store/store';


const TransactionsPage: FC = () => {
  const dispatch = useDispatch<any>();
  const notifications = useAppSelector((state: RootState) => state.transactionSlice.notifications);
  const navigate = useNavigate();
  const fetch = async (name: string) => {
    dispatch(fetchTransactions({ page: '1', limit: '10', name }));
    navigate({
      pathname: '/transactions',
      search: '?page=1&limit=10',
    });
  };
  const fetching = debounce(fetch, 300);
  const linkRef = useRef<null | HTMLAnchorElement>(null);
  const onClickExcel = () => {
    if (linkRef.current) {
      linkRef.current.href = 'data:text/html,test';
      linkRef.current.setAttribute('download', 'data.xlsx');
      linkRef.current.click();
    }
  };

  useEffect(() => {
    notifications >= 1 && dispatch(fetchNotificationTransaction());
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.headAndSearch}>
        <h2>Recent Transactions</h2>
        <div className={styles.search}>
          <input type='text' placeholder={'Search'} onChange={(e) => fetching(e.target.value)} />
          <SearchIco />
        </div>
      </div>
      <Table />
      <button onClick={onClickExcel}>
        <a ref={linkRef} href={''}></a>
        Download the Excel File
      </button>
      <Pagination />
    </main>
  );
};

export default TransactionsPage;