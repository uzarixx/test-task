import React, { FC } from 'react';
import CreateWalletPopup from './createWalletPopup';
import AddNewCardPopup from './addNewCardPopup';

const Popups: FC = () => {
  return (
    <>
      <CreateWalletPopup />
      <AddNewCardPopup />
    </>
  );
};

export default Popups;