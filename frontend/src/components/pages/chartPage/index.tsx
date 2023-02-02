import React, { FC, useState } from 'react';
import Main from 'src/components/semantic/main';
import styles from './ChartPage.module.scss';
import PagesHead from '../../semantic/pagesHead';
import InfoIco from '../../ui/icons/InfoIco';
import Chart from '../../ui/chart';

const ChartPage: FC = () => {
  const [pin, setPin] = useState(localStorage.getItem('pin') === '1');
  const onClickCardPin = () => {
    localStorage.setItem('pin', '1');
    setPin(true);
  };


  return (
    <Main>
      <PagesHead title={'Finance Chart'} subtitle={'Keep track your financial plan'} />
      {pin || <div className={styles.cardPin} onClick={onClickCardPin}>
        <div className={styles.left}>
          <InfoIco />
          <p>Please remember to fill that data that required for your debit card</p>
        </div>
        <div className={styles.right}>
          <button>Got it</button>
        </div>
      </div>}
      <Chart />
    </Main>
  );
};

export default ChartPage;