import React, { FC, useEffect, useState } from 'react';
import styles from './Chart.module.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import TransactionsService from '../../../services/fetchServices/transactions';
import date from '../../../utils/chartDate';
import ChartInfo from '../chartInfo';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);


const Chart: FC = () => {
  const [balances, setBalances] = useState([]);
  useEffect(() => {
    const fetchBalances = async () => {
      const { data } = await TransactionsService.getTransactionsBalances();
      setBalances(data);
    };
    fetchBalances();
  }, []);
  return (
    <>
      <Line
        width={'700px'}
        height={'150px'}
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: '',
              pointRadius: 0,
              data: balances.map((el: { userBalance: number, createdAt: string }) => {
                return { x: date(el.createdAt), y: el.userBalance };
              }),
              borderColor: '#4F46E5',
            },
          ],
        }}
      />
      <ChartInfo balances={balances}/>
    </>
  );
};

export default Chart;