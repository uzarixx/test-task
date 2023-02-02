import React, { FC } from 'react';
import styles from './ChartInfo.module.scss';
import IncomeIco from '../icons/IncomeIco';
import OutcomeIco from '../icons/OutcomeIco';
import BonusIco from '../icons/BonusIco';
import { NumberFormat } from '../../../utils/numberFormat';

interface props {
  balances: never[];
}

const ChartInfo: FC<props> = ({ balances }) => {
  const resultValue = (minus: boolean) => {
    const result = balances.filter((el: { minus: boolean }) => el.minus === minus).map((el: { userBalance: number }) => el.userBalance).reduce((p: number, c: number) => p + c, 0);
    return NumberFormat(result);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.incomeValue}>
        <IncomeIco />
        <div>
          <p>Lifetime Income</p>
          <span>{resultValue(false)}</span>
        </div>
      </div>
      <div className={styles.incomeValue}>
        <OutcomeIco />
        <div>
          <p>Lifetime Outcome</p>
          <span>{resultValue(true)}</span>
        </div>
      </div>
      <div className={styles.incomeValue}>
        <BonusIco />
        <div>
          <p>Bonus Income</p>
          <span>$40,720</span>
        </div>
      </div>
    </div>
  );
};

export default ChartInfo;