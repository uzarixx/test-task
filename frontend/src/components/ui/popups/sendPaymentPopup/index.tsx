import React, { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './SendPaymentPopup.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { setSendPaymentPopup } from '../../../../store/counter/popupsSlice';
import { fetchWallets } from '../../../../store/counter/walletSlice';
import FormInput from '../../inputs/formInput';
import WalletsService from '../../../../services/fetchServices/wallets';
import { fetchAuthUser } from '../../../../store/counter/userSlice';
import PopupWrapper from '../PopupWrapper';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { paymentValidate } from '../../../../utils/validations/paymentValidate';

const SendPaymentPopup: FC = () => {
  const wallets: any = useSelector((state: RootState) => state.walletSlice.wallets) || [];
  const [selectWallet, setSelectWallet] = useState(wallets[0].id);
  const dispatch = useDispatch<any>();
  const requestPopup = useSelector((state: RootState) => state.popupsSlice.sendPaymentPopup);
  const methods = useForm({
    resolver: yupResolver(paymentValidate)
  });
  const onSubmit = async (data: any) => {
    try {
      await WalletsService.updateBalanceWallet(selectWallet, data.amount);
      await dispatch(fetchWallets());
      await dispatch(fetchAuthUser());
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
    if (wallets.length <= 0) dispatch(fetchWallets());
  }, [requestPopup]);

  const onClickWallet = (i: number) => () => {
    setSelectWallet(i);
  };

  return (
    <PopupWrapper closePopup={closePopup} popup={requestPopup}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
          <h2>Send a payment</h2>
          <span>To Wallet</span>
          <div className={styles.walletWrapper}>
            {wallets.map((el: { walletName: string, id: number }) =>
              <div key={el.id} className={`${styles.wallet} ${selectWallet === el.id && styles.active}`}
                   onClick={onClickWallet(el.id)}>
                <p>{el.walletName}</p></div>,
            )}
          </div>
          <FormInput placeholder={'Amount'} name={'amount'} error={methods.formState.errors}/>
          <button>Send pay</button>
        </form>
      </FormProvider>
    </PopupWrapper>
  );
};

export default SendPaymentPopup;