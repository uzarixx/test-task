import React, { FC } from 'react';
import styles from './PopupWrapper.module.scss';
import CreateWalletPopup from './createWalletPopup';
import AddNewCardPopup from './addNewCardPopup';
import AuthorizePopup from './authorizePopup';
import SendPaymentPopup from './sendPaymentPopup';
import RequestPaymentPopup from './requestPaymentPopup';

const Popups: FC = () => {
  return (
    <>
      {localStorage.getItem('authToken') &&
        <>
          <CreateWalletPopup />
          <AddNewCardPopup />
          <SendPaymentPopup />
          <RequestPaymentPopup />
        </>
      }
      <AuthorizePopup />
    </>
  );
};

export default Popups;