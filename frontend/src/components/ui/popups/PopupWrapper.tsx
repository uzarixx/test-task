import React, { FC } from 'react';
import styles from './PopupWrapper.module.scss';

interface props {
  children: React.ReactNode;
  popup: boolean;
  closePopup: () => void
}

const PopupWrapper: FC<props> = ({ children, popup, closePopup }) => {
  return (
    <div className={`${styles.popupWrapper} ${popup && styles.active}`} onClick={closePopup}>
      <div className={styles.popupForm}>
      {children}
      </div>
    </div>
  );
};

export default PopupWrapper;