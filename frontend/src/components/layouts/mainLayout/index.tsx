import React, { FC } from 'react';
import styles from './MainLayout.module.scss';
import Header from '../../semantic/header';
import { Route, Routes } from 'react-router-dom';
import WalletPage from '../../pages/walletPage';
import CardPage from '../../pages/cardPage';
import TransactionsPage from '../../pages/transactionsPage';
import ChartPage from '../../pages/chartPage';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const MainLayout: FC = () => {
  const isOpen = useSelector((state: RootState) => state.popupsSlice.mainActive);
  return (
    <div className={`${styles.mainLayout} ${isOpen && styles.active}`}>
      <Header />
      <Routes>
        <Route path={'/'} element={<WalletPage />} />
        <Route path={'/card'} element={<CardPage />} />
        <Route path={'/finance'} element={<ChartPage />} />
        <Route path={'/transactions'} element={<TransactionsPage />} />
      </Routes>
    </div>
  );
};

export default MainLayout;