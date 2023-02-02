import React, { FC, useState } from 'react';
import styles from './CreateWalletPopup.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { setWalletPopup } from 'src/store/counter/popupsSlice';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../inputs/formInput';
import WalletsService from '../../../../services/fetchServices/wallets';
import { fetchWallets } from '../../../../store/counter/walletSlice';
import PopupWrapper from '../PopupWrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import { createWalletValidate } from '../../../../utils/validations/createWalletValidate';

const CreateWalletPopup: FC = () => {
  const [error, setError] = useState('');
  const walletPopup = useSelector((state: RootState) => state.popupsSlice.createWalletPopup);
  const dispatch = useDispatch<any>();
  const closePopup = () => {
    dispatch(setWalletPopup(false));
    methods.reset();
    setError('')
  };
  const methods = useForm(
    { resolver: yupResolver(createWalletValidate) },
  );

  const onSubmit = async (data: any) => {
    try {
      await WalletsService.createWallet(data.limit, data.walletName);
      dispatch(fetchWallets());
      closePopup();
    } catch (e: any) {
      e.response.data && setError(e.response.data);
    }
  };

  return (
    <PopupWrapper popup={walletPopup} closePopup={closePopup}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.popupForm}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}>
          <h4>Create New Wallet</h4>
          <FormInput placeholder={'Wallet Name'} name={'walletName'} error={methods.formState.errors} />
          <FormInput placeholder={'Wallet Limit'} name={'limit'} error={methods.formState.errors} />
          {error && <p>{error}</p>}
          <button>Create Wallet</button>
        </form>
      </FormProvider>
    </PopupWrapper>
  );
};

export default CreateWalletPopup;