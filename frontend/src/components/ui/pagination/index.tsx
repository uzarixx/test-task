import React, { FC } from 'react';
import styles from './Pagination.module.scss';
import ArrowMiniDoubleIco from '../icons/ArrowMiniDoubleIco';
import ArrowMiniIco from '../icons/ArrowMiniIco';
import { usePaginationHook } from '../../../utils/hooks/paginationHook';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const Pagination: FC = () => {
  const transactions: any = useSelector((state: RootState) => state.transactionSlice.transactions);
  const count = transactions.count;
  const {
    onClickPlusOne,
    onClickMinusOne,
    onClickMinusTwo,
    onClickPlusTwo,
    limit,
    onChangeLimit,
    page,
    pages,
  } = usePaginationHook(count);
  return (
    <div className={styles.paginationWrapper}>
      <p>Items per page: </p>
      <select name='per-page' id='1' defaultValue={limit} onChange={(e) => onChangeLimit(e.target.value)}>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <p>{page} - {limit} of {count}</p>
      <div className={styles.buttons}>
        <div className={styles.left}>
          <ArrowMiniDoubleIco onClick={onClickMinusTwo} active={page <= 2} />
          <ArrowMiniIco onClick={onClickMinusOne} active={page === 1} />
        </div>
        <div className={styles.right}>
          <ArrowMiniDoubleIco onClick={onClickPlusTwo} active={page >= (pages - 1)} />
          <ArrowMiniIco onClick={onClickPlusOne} active={page === pages} />
        </div>
      </div>
    </div>
  );
};

export default Pagination;