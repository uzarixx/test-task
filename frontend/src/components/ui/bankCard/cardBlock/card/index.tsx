import React, { FC, useEffect, useState } from 'react';
import styles from './Card.module.scss';
import MasterCardIco from '../../../icons/MasterCardIco';
import CardLogoIco from '../../../icons/CardLogoIco';
import ClipboardIco from '../../../icons/ClipboardIco';
import EyeIco from '../../../icons/EyeIco';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import WalletIco from '../../../icons/WalletIco';
import { setAddCardPopup } from '../../../../../store/counter/popupsSlice';

interface props {
  userName: string;
  userLastName: string;
  selectCard: number;
}


const Card: FC<props> = ({ userName, userLastName, selectCard }) => {
  const cards: any = useSelector((state: RootState) => state.cardSlice.cards);
  const dispatch = useDispatch();
  const [cvvOpen, setCvvOpen] = useState(false);
  const onClickCopy = (e: any) => {
    navigator.clipboard.writeText(`${e.target.id}`);
  };
  const onClickEye = () => {
    setCvvOpen(true);
  };

  useEffect(() => {
    setCvvOpen(false);
  }, [selectCard]);

  const openAddCardPopup = () => {
    dispatch(setAddCardPopup(true));
  };
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <MasterCardIco />
        <p>{userName?.toUpperCase()} {userLastName?.toUpperCase()}</p>
        <div className={styles.logo}>
          <CardLogoIco />
        </div>
      </div>
      {cards?.rows && cards?.rows[selectCard] !== undefined ?
        <div className={styles.cardInfo}>
          <h4>Card Information</h4>
          <div className={styles.cardData}><p>Card No.</p>
            <p onClick={(e) => onClickCopy(e)}>
              <ClipboardIco
                text={String(cards.rows[selectCard].cardNumber)} /> {cards.rows[selectCard].cardNumber.split(/(\d{4})/).filter((item: string) => item !== '').join(' ')}
            </p>
          </div>
          <div className={styles.cardData}><p>Expiry date</p>
            <p>{cards.rows[selectCard].expireDateCard}</p>
          </div>
          <div className={styles.cardData}><p>CVV (3-digit security code)</p>
            <p onClick={onClickEye}>
              {cvvOpen ? cards.rows[selectCard].cvvCard : <><EyeIco /> ***</>}
            </p>
          </div>
        </div> :
        <div className={styles.cardInfo}>
          <h4>Add New Card</h4>
          <button className={styles.cardButton} onClick={openAddCardPopup}>
            <span>+</span>
            New Card
          </button>
        </div>
      }
    </div>
  );
};

export default Card;