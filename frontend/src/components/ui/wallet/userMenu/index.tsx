import React, { FC } from 'react';
import styles from './UserMenu.module.scss';
import Hello from '../../../../assets/images/png/Hello.png';
import SendPaymentIco from '../../icons/SendPaymentIco';
import RequestPaymentIco from '../../icons/RequestPaymentIco';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

const UserMenu: FC = () => {
  const user: any = useSelector((state: RootState) => state.userSlice.authUser);
  return (
    <div className={styles.userMenuWrapper}>
      <div className={styles.mainUserBlock}>
        <div className={styles.head}>
          <div className={styles.user}>
            <img src={Hello} alt={'hello-ico'} />
            <h3>Hi {user.userName}!</h3>
          </div>
        </div>
        <span className={styles.balance}>{user.balance ?
          new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD',
          }).format(user?.balance) : 'Loading...'}</span>
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