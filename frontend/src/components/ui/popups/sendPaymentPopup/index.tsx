import React, { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './SendPaymentPopup.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { setSendPaymentPopup } from '../../../../store/counter/popupsSlice';
import { fetchCards } from '../../../../store/counter/cardSlice';
import MasterCardIco from '../../icons/MasterCardIco';
import { fetchWallets } from '../../../../store/counter/walletSlice';
import FormInput from '../../inputs/formInput';
import WalletsService from '../../../../services/fetchServices/wallets';

const SendPaymentPopup: FC = () => {
  const [selected, setSelected] = useState({ selectCard: -0, selectWallet: -0 });
  const cards: any = useSelector((state: RootState) => state.cardSlice.cards) || [];
  const wallets: any = useSelector((state: RootState) => state.walletSlice.wallets) || [];
  const dispatch = useDispatch<any>();
  const requestPopup = useSelector((state: RootState) => state.popupsSlice.sendPaymentPopup);
  const methods = useForm();
  const onSubmit = async (data: any) => {
    try {
      await WalletsService.updateBalanceWallet(selected.selectWallet, data.amount);
      await dispatch(fetchWallets());
      methods.reset();
      closePopup();
    } catch (e) {
      console.log(e);
    }
  };
  const closePopup = () => {
    dispatch(setSendPaymentPopup(false));
  };
  useEffect(() => {
    if (cards.length <= 0) dispatch(fetchCards());
    if (wallets.length <= 0) dispatch(fetchWallets());
  }, [requestPopup]);

  const onClickCard = (i: number) => () => {
    setSelected({ ...selected, selectCard: i });
  };
  const onClickWallet = (i: number) => () => {
    setSelected({ ...selected, selectWallet: i });
  };


  return (
    <div className={`${styles.popupWrapper} ${requestPopup && styles.active}`} onClick={closePopup}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.popupForm}
              onClick={(e) => e.stopPropagation()}>
          <h2>Send a payment</h2>
          {cards.rows?.map((el: { cardNumber: string }, i: number) =>
            <div key={i} className={`${styles.card} ${selected.selectCard === i && styles.activeCard}`}
                 onClick={onClickCard(i)}>
              <p>{el.cardNumber.slice(0, 5)}*** *** *** {el.cardNumber.slice(15, 19)}</p>
              <MasterCardIco />
            </div>,
          )}
          <span>To Wallet</span>
          <div className={styles.walletWrapper}>
            {wallets.map((el: { walletName: string, id: number }) =>
              <div key={el.id} className={`${styles.wallet} ${selected.selectWallet === el.id && styles.active}`}
                   onClick={onClickWallet(el.id)}>
                <p>{el.walletName}</p></div>,
            )}
          </div>
          <FormInput placeholder={'Amount'} name={'amount'} />
          <button>Send pay</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default SendPaymentPopup;