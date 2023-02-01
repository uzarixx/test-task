import React, { FC, useEffect } from 'react';
import Main from '../../semantic/main';
import PagesHead from '../../semantic/pagesHead';
import UserMenu from '../../ui/wallet/userMenu';
import WalletMenu from '../../ui/wallet/walletMenu';
import { fetchWallets } from '../../../store/counter/walletSlice';
import { useDispatch } from 'react-redux';

const WalletPage: FC = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchWallets());
  }, []);
  return (
    <Main>
      <PagesHead title={'My Wallet'} subtitle={'Keep track your financial plan'} />
      <UserMenu />
      <WalletMenu />
    </Main>
  );
};

export default WalletPage;