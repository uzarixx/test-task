import React, { FC, useEffect, useRef } from 'react';
import styles from './CreateWalletPopup.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { setWalletPopup } from 'src/store/counter/popupsSlice';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../inputs/formInput';
import WalletsService from '../../../../services/fetchServices/wallets';
import { fetchWallets } from '../../../../store/counter/walletSlice';

const CreateWalletPopup: FC = () => {
  const walletPopup = useSelector((state: RootState) => state.popupsSlice.createWalletPopup);
  const dispatch = useDispatch<any>();
  const closePopup = () => {
    dispatch(setWalletPopup(false));
    methods.reset();
  };
  const methods = useForm();

  const onSubmit = async (data: any) => {
    await WalletsService.createWallet(data.limit, data.walletName);
    dispatch(fetchWallets());
    closePopup();
  };

  return (
    <div className={`${styles.popupWrapper} ${walletPopup && styles.active}`} onClick={closePopup}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.popupForm}
              onClick={(e) => e.stopPropagation()}>
          <h4>Create New Wallet</h4>
          <FormInput placeholder={'Wallet Name'} name={'walletName'} />
          <FormInput placeholder={'Wallet Limit'} name={'limit'} />
          <button>Create Wallet</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateWalletPopup;