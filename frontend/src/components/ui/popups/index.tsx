import React, { FC } from 'react';
import CreateWalletPopup from './createWalletPopup';
import AddNewCardPopup from './addNewCardPopup';
import AuthorizePopup from './authorizePopup';
import RequestPaymentPopup from './sendPaymentPopup';

const Popups: FC = () => {
  return (
    <>
      {localStorage.getItem('authToken') &&
        <>
          <CreateWalletPopup />
          <AddNewCardPopup />
          <RequestPaymentPopup/>
        </>
      }
      <AuthorizePopup />
    </>
  );
};

export default Popups;