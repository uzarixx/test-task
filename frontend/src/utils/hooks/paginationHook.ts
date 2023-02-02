import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransactions } from '../../store/counter/transactionSlice';

export const usePaginationHook = (count: string) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [limit, setLimit] = useState(Number(searchParams.get('limit')) || 10);
  const pageQuery = String(page);
  const limitQuery = String(limit);
  const pages = Math.ceil(Number(count) / Number(limit));
  const query = new URLSearchParams();
  useEffect(() => {
    query.append('page', `${page}`);
    query.append('limit', `${limit}`);
    navigate({
      pathname: '/transactions',
      search: `${query}`,
    });
    dispatch(fetchTransactions({ page: pageQuery, limit: limitQuery, name: '' }));
  }, [page, limit]);

  const onClickPlusOne = () => {
    page >= pages || setPage((s: number) => s + 1);
  };
  const onClickPlusTwo = () => {
    page + 1 >= pages || setPage((s: number) => s + 2);
  };
  const onClickMinusOne = () => {
    page >= 2 && setPage((s: number) => s - 1);
  };
  const onClickMinusTwo = () => {
    page >= 3 && setPage((s: number) => s - 2);
  };

  const onChangeLimit = (element: string) => {
    setLimit(Number(element));
  };

  return {
    onClickPlusOne,
    onClickMinusOne,
    onClickMinusTwo,
    onClickPlusTwo,
    limit,
    onChangeLimit,
    page,
  };
};