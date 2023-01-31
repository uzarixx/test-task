import React, { FC } from 'react';
import WalletIco from '../../icons/WalletIco';
import styles from './WalletCard.module.scss';

interface props {
  walletName: string;
  limit: number;
  balance: number;
}

const WalletCard: FC<props> = ({ walletName, limit, balance }) => {
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
          Last paid on August 28, 2022
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