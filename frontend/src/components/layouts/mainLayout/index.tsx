import React, { FC } from 'react';
import styles from './MainLayout.module.scss';
import Header from '../../semantic/header';
import { Route, Routes } from 'react-router-dom';
import WalletPage from '../../pages/walletPage';

const MainLayout: FC = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Routes>
        <Route path={'/'} element={<WalletPage />} />
      </Routes>
    </div>
  );
};

export default MainLayout;