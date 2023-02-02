import React, { FC, useState } from 'react';
import Main from 'src/components/semantic/main';
import styles from './ChartPage.module.scss';
import PagesHead from '../../semantic/pagesHead';
import InfoIco from '../../ui/icons/InfoIco';
import Chart from '../../ui/chart';

const ChartPage: FC = () => {
  const [chartType, setChartType] = useState(false);
  const [pin, setPin] = useState(localStorage.getItem('pin') === '1');
  const onClickCardPin = () => {
    localStorage.setItem('pin', '1');
    setPin(true);
  };
  const onChangeChartType = (e: string) => {
    console.log(e);
    setChartType(e === 'This year' ? false : true);
  };
  return (
    <Main>
      <PagesHead title={'Finance Chart'} subtitle={'Keep track your financial plan'} />
      {pin || <div className={styles.cardPin}>
        <div className={styles.left}>
          <InfoIco />
          <p>Please remember to fill that data that required for your debit card</p>
        </div>
        <div className={styles.right}>
          <button onClick={onClickCardPin}>Got it</button>
        </div>
      </div>}
      <div className={styles.chartHead}>
        <h3 className={styles.chartTitle}>Statistic</h3>
        <select onChange={(e) => onChangeChartType(e.target.value)}>
          <option defaultValue={'This year'}>This year</option>
          <option defaultValue={'This month'}>This month</option>
        </select>
      </div>
      <Chart chartType={chartType} />
    </Main>
  );
};

export default ChartPage;