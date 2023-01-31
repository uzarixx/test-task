import React, { FC } from 'react';
import styles from './UserMenu.module.scss';
import Hello from '../../../../assets/images/png/Hello.png';
import SendPaymentIco from '../../icons/SendPaymentIco';
import RequestPaymentIco from '../../icons/RequestPaymentIco';

const UserMenu: FC = () => {
  return (
    <div className={styles.userMenuWrapper}>
      <div className={styles.mainUserBlock}>
        <div className={styles.head}>
          <div className={styles.user}>
            <img src={Hello} alt={'hello-ico'} />
            <h3>Hi `[username]`!</h3>
          </div>
        </div>
        <span className={styles.balance}>$124,543</span>
      </div>
      <div className={styles.userPayment}>
        <div className={styles.paymentBlock}>
          <SendPaymentIco />
          <p>Send a payment</p>
        </div>
        <div className={styles.paymentBlock}>
          <RequestPaymentIco />
          <p>Request a payment</p>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;