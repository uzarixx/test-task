import React, { FC, useEffect } from 'react';
import styles from './Chart.module.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { fetchTransactions } from '../../../store/counter/transactionSlice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

const Chart: FC = () => {
  const dispatch = useDispatch<any>();
  const transactions: any = useSelector((state: RootState) => state.transactionSlice.transactions);
  useEffect(() => {
    if (transactions.rows.length <= 0) dispatch(fetchTransactions());
  }, [transactions]);
  console.log(transactions);
  return (
    <>
      <Line
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: '',
              data: [1000, 1500, 500, 2500, 1490, 3000, 1000, 500],
            },
          ],
        }}
      />
    </>
  );
};

export default Chart;