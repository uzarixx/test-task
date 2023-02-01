import React, { FC, useState } from 'react';
import styles from './SelectCard.module.scss';
import ArrowMiniIco from '../../../icons/ArrowMiniIco';

interface props {
  setSelectCard: (e: number) => void;
  selectCard: number;
}

const SelectCard: FC<props> = ({ setSelectCard, selectCard }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickSelect = () => {
    setIsOpen(!isOpen);
  };
  const onClickCard = () => {
    setSelectCard(selectCard === 0 ? 1 : 0);
  };
  return (
    <div className={`${styles.selectCardWrapper} ${isOpen && styles.active}`} onClick={onClickSelect}>
      <p>{selectCard === 0 ? 'Primary Card' : 'Secondary Card'} </p>
      <ArrowMiniIco />
      <div onClick={onClickCard} className={`${styles.tooltip} ${isOpen && styles.active}`}>
        {selectCard === 0 ? <p>Secondary Card</p> : <p>Primary Card</p>}
      </div>
    </div>
  );
};

export default SelectCard;