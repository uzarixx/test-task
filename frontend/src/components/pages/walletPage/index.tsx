import React, { FC } from 'react';
import styles from './WalletPage.module.scss';
import Main from '../../semantic/main';
import PagesHead from '../../semantic/pagesHead';
import UserMenu from '../../ui/wallet/userMenu';

import WalletMenu from '../../ui/wallet/walletMenu';

const WalletPage: FC = () => {
  return (
    <Main>
      <div className={styles.walletPage}>
        <PagesHead title={'My Wallet'} subtitle={'Keep track your financial plan'} />
        <UserMenu />
        <WalletMenu />
      </div>
    </Main>
  );
};

export default WalletPage;