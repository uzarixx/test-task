import React, { FC, useEffect, useState } from 'react';
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

interface props {
  chartType: boolean;
}

const dateNow = new Date();
const nameOfMonth = dateNow.toLocaleString(
  'eng',
  { month: 'long' },
);
const monthNow = nameOfMonth.toString().slice(0, 3);

const Chart: FC<props> = ({ chartType }) => {
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
          labels: chartType ?
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
            : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: '',
              pointRadius: 0,
              data: balances.map((el: { userBalance: number, createdAt: string }) => {
                return {
                  x: date(el.createdAt, false) === monthNow ? date(el.createdAt, chartType) : null,
                  y: el.userBalance,
                };
              }),
              borderColor: '#4F46E5',
            },
          ],
        }}
      />
      <ChartInfo balances={balances} />
    </>
  );
};

export default Chart;