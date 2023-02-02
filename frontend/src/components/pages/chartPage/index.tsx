import React, { FC, useState } from 'react';
import Main from 'src/components/semantic/main';
import styles from './ChartPage.module.scss';
import PagesHead from '../../semantic/pagesHead';
import InfoIco from '../../ui/icons/InfoIco';
import Chart from '../../ui/chart';

const ChartPage: FC = () => {
  const [chartType, setChartType] = useState({ chartTimes: false, chartMode: false });
  const [pin, setPin] = useState(localStorage.getItem('pin') === '1');
  const onClickCardPin = () => {
    localStorage.setItem('pin', '1');
    setPin(true);
  };
  const onChangeChartTime = (e: string) => {
    setChartType({ ...chartType, chartTimes: e === 'This year' ? false : true });
  };
  const onChangeChartMode = (e: string) => {
    setChartType({...chartType, chartMode: e === 'Income chart' ? false : true})
  }
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
        <div className={styles.selects}>
          <select onChange={(e) => onChangeChartMode(e.target.value)}>
            <option defaultValue={'Income chart'}>Income chart</option>
            <option defaultValue={'Outcome chart'}>Outcome chart</option>
          </select>
          <select onChange={(e) => onChangeChartTime(e.target.value)}>
            <option defaultValue={'This year'}>This year</option>
            <option defaultValue={'This month'}>This month</option>
          </select>
        </div>
      </div>
      <Chart chartType={chartType} />
    </Main>
  );
};

export default ChartPage;