import React, { FC, useEffect, useState } from 'react';
import styles from './CardBlock.module.scss';
import SelectCard from './selectCard';
import Card from './card';
import { useDispatch } from 'react-redux';
import { RootState, useAppSelector } from '../../../../store/store';
import { fetchCards } from '../../../../store/counter/cardSlice';
import Link from './link';


const CardBlock: FC = () => {
  const dispatch = useDispatch<any>();
  const user = useAppSelector((state: RootState) => state.userSlice.authUser);
  const [selectCard, setSelectCard] = useState<any>(0);
  useEffect(() => {
    dispatch(fetchCards());
  }, []);
  return (
    <div className={styles.cardWrapper}>
      <SelectCard setSelectCard={setSelectCard} selectCard={selectCard} />
      <Card
        userName={user.userName}
        userLastName={user.userLastName}
        selectCard={selectCard}
      />
      <Link />
    </div>
  );
};

export default CardBlock;