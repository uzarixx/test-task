import React, { FC } from 'react';
import styles from './AddNewCardPopup.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../inputs/formInput';
import { useDispatch } from 'react-redux';

const AddNewCardPopup: FC = () => {
  const hi = 1 == 1;
  const dispatch = useDispatch();
  const closePopup = () => {
    console.log('1');
  };
  const methods = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
    closePopup();
  };
  return (
    <div className={`${styles.popupWrapper} ${hi && styles.active}`}>
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