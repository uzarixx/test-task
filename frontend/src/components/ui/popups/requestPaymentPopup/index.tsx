import React, { FC, useEffect, useState } from 'react';
import PopupWrapper from '../PopupWrapper';
import styles from './RequestPaymentPopup.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppSelector } from '../../../../store/store';
import { setRequestPaymentPopup } from '../../../../store/counter/popupsSlice';
import { FormProvider, useForm } from 'react-hook-form';
import MasterCardIco from '../../icons/MasterCardIco';
import { fetchCards } from '../../../../store/counter/cardSlice';
import FormInput from '../../inputs/formInput';
import TransactionsService from '../../../../services/fetchServices/transactions';
import { fetchAuthUser } from '../../../../store/counter/userSlice';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { paymentValidate } from '../../../../utils/validations/paymentValidate';
import { fetchNotificationTransaction } from '../../../../store/counter/transactionSlice';


const RequestPaymentPopup: FC = () => {
  const [selectCard, setSelectCard] = useState(-0);
  const requestPopup = useSelector((state: RootState) => state.popupsSlice.requestPaymentPopup);
  const cards = useAppSelector((state: RootState) => state.cardSlice.cards) || [];
  const dispatch = useDispatch<any>();
  const methods = useForm({
    resolver: yupResolver(paymentValidate),
  });
  const closePopup = () => {
    dispatch(setRequestPaymentPopup(false));
  };
  useEffect(() => {
    if (cards.rows.length <= 0) dispatch(fetchCards());
  }, [requestPopup]);
  const onSubmit = async (data: any) => {
    try {
      await TransactionsService.requestPayment(data.amount);
      await dispatch(fetchAuthUser());
      await dispatch(fetchNotificationTransaction());
      methods.reset();
      closePopup();
    } catch (e) {
      console.log(e);
    }
  };
  const onClickCard = (i: number) => () => {
    setSelectCard(i);
  };

  return (
    <PopupWrapper popup={requestPopup} closePopup={closePopup}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
          <h4>Request a payment</h4>
          {cards.count === 0 ? <>
              You no have cards
              <Link to={'/card'} onClick={closePopup}>Go To Cards Menu</Link>
            </> :
            <>
              {cards.rows?.map((el: { cardNumber: string }, i: number) =>
                <div key={i} className={`${styles.card} ${selectCard === i && styles.activeCard}`}
                     onClick={onClickCard(i)}>
                  <p>{el.cardNumber.slice(0, 4)} **** **** {el.cardNumber.slice(12, 16)}</p>
                  <MasterCardIco />
                </div>,
              )}
              <FormInput placeholder={'Amount'} name={'amount'} error={methods.formState.errors} />
              <button>Send</button>
            </>}
        </form>
      </FormProvider>
    </PopupWrapper>
  );
};

export default RequestPaymentPopup;