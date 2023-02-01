import React, { FC } from 'react';
import styles from './WalletMenu.module.scss';
import WalletCards from '../../cards/walletCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { setWalletPopup } from '../../../../store/counter/popupsSlice';

interface IWallets {
  walletName: string;
  limit: number;
  balance: number;
  id: number;
  updatedAt: string;
}


const WalletMenu: FC = () => {
  const wallets = useSelector((state: RootState) => state.walletSlice.wallets);
  const dispatch = useDispatch();
  const onClickCreateWallet = () => {
    dispatch(setWalletPopup(true));
  };

  return (
    <div className={styles.walletCardsContainer}>
      <div className={styles.walletCardsWrapper}>
        {wallets?.length <= 0 ? <div className={styles.isEmpty}><h2>Sorry, but you don&apos;t have
          wallet&apos;s</h2></div> : <> {wallets?.map((el: IWallets) =>
          <WalletCards walletName={el.walletName} limit={el.limit} balance={el.balance} updatedAt={el.updatedAt} key={el.id} />,
        )}</>}

      </div>
      <button className={styles.addWalletButton} onClick={onClickCreateWallet}>
        <span>+</span>
        Create New Wallet
      </button>
    </div>
  );
};

export default WalletMenu;