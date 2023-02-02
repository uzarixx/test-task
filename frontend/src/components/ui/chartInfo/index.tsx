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
    return result;
  };
  const bonus = () => {
    const startValue = resultValue(false);
    const endValue = startValue / 100;
    return Math.ceil(endValue * 5);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.incomeValue}>
        <IncomeIco />
        <div>
          <p>Lifetime Income</p>
          <span>{NumberFormat(resultValue(false))}</span>
        </div>
      </div>
      <div className={styles.incomeValue}>
        <OutcomeIco />
        <div>
          <p>Lifetime Outcome</p>
          <span>{NumberFormat(resultValue(true))}</span>
        </div>
      </div>
      <div className={styles.incomeValue}>
        <BonusIco />
        <div>
          <p>Bonus Income</p>
          <span>{NumberFormat(bonus())}</span>
        </div>
      </div>
    </div>
  );
};

export default ChartInfo;