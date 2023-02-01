import React, { FC } from 'react';
import WalletIco from '../../icons/WalletIco';
import styles from './WalletCard.module.scss';
import date from '../../../../utils/date';

interface props {
  walletName: string;
  limit: number;
  balance: number;
  updatedAt: string;
}

const WalletCard: FC<props> = ({ walletName, limit, balance, updatedAt }) => {
  const startValue = limit / 100
  const endValue = balance / startValue
  return (
    <div className={styles.walletWrapper}>
      <div className={styles.head}>
        <div className={styles.title}>
          <WalletIco />
          <h4>{walletName}</h4>
        </div>
        <div className={styles.subtitle}>
          Last paid on {date(updatedAt)}
        </div>
      </div>
      <div className={styles.balance}>
        <div className={styles.balanceValue}>
          <span>${balance}<p>/ ${limit}</p></span>
          <p>{endValue}%</p>
        </div>
        <div className={styles.balanceProgress}>
          <div className={styles.balanceProgressValue} style={{width: `${endValue}%`}}/>
        </div>
      </div>
    </div>
  );
};
export default WalletCard;