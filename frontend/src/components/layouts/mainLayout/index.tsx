import React, { FC } from 'react';
import styles from './MainLayout.module.scss';
import Header from '../../semantic/header';
import { Route, Routes } from 'react-router-dom';
import WalletPage from '../../pages/walletPage';
import CardPage from '../../pages/cardPage';
import TransactionsPage from '../../pages/transactionsPage';

const MainLayout: FC = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Routes>
        <Route path={'/'} element={<WalletPage />} />
        <Route path={'/card'} element={<CardPage />} />

        <Route path={'/transactions'} element={<TransactionsPage/>} />
      </Routes>
    </div>
  );
};

export default MainLayout;