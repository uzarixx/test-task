import React, { FC } from 'react';
import styles from './AddNewCardPopup.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../inputs/formInput';
import { useDispatch, useSelector } from 'react-redux';
import { setAddCardPopup } from '../../../../store/counter/popupsSlice';
import { RootState } from '../../../../store/store';
import CardService from '../../../../services/fetchServices/card';
import { fetchCards } from '../../../../store/counter/cardSlice';

const AddNewCardPopup: FC = () => {
  const cardPopup = useSelector((state: RootState) => state.popupsSlice.addCardPopup);
  const dispatch = useDispatch<any>();
  const closePopup = () => {
    dispatch(setAddCardPopup(false));
  };
  const methods = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
    const expireDateCard = `${data.month}/${data.year}`;
    await CardService.createCard(data.cardNumber, expireDateCard, data.cvvCard);
    await dispatch(fetchCards());
    closePopup();
  };
  return (
    <div className={`${styles.popupWrapper} ${cardPopup && styles.active}`} onClick={closePopup}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.popupForm}
              onClick={(e) => e.stopPropagation()}>
          <h4>Add New Card</h4>
          <FormInput placeholder={'Card Number'} name={'cardNumber'} />
          <div className={styles.detailCardInfo}>
            <FormInput placeholder={'Month'} name={'month'} />
            <FormInput placeholder={'Year'} name={'year'} />
            <FormInput placeholder={'CVV'} name={'cvvCard'} />
          </div>
          <button>Add Card</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddNewCardPopup;