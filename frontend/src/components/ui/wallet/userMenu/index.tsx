import React, { FC } from 'react';
import styles from './UserMenu.module.scss';
import Hello from '../../../../assets/images/png/Hello.png';
import SendPaymentIco from '../../icons/SendPaymentIco';
import RequestPaymentIco from '../../icons/RequestPaymentIco';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppSelector } from '../../../../store/store';
import { NumberFormat } from 'src/utils/numberFormat';
import { setRequestPaymentPopup, setSendPaymentPopup } from '../../../../store/counter/popupsSlice';

const UserMenu: FC = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state: RootState) => state.userSlice.authUser);
  const onClickSendPayment = () => {
    dispatch(setSendPaymentPopup(true));
  };
  const onClickRequestPayment = () => {
    dispatch(setRequestPaymentPopup(true));
  };
  return (
    <div className={styles.userMenuWrapper}>
      <div className={styles.mainUserBlock}>
        <div className={styles.head}>
          <div className={styles.user}>
            <img src={Hello} alt={'hello-ico'} />
            <h3>Hi {user.userName}!</h3>
          </div>
        </div>
        <span className={styles.balance}>{user.balance >= 0 ?
          `${NumberFormat(user.balance)}` : 'Loading...'}</span>
      </div>
      <div className={styles.userPayment}>
        <div className={styles.paymentBlock} onClick={onClickSendPayment}>
          <SendPaymentIco />
          <p>Send a payment</p>
        </div>
        <div className={styles.paymentBlock} onClick={onClickRequestPayment}>
          <RequestPaymentIco />
          <p>Request a payment</p>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;