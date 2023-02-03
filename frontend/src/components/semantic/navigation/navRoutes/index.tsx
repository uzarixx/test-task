import React, { FC } from 'react';
import styles from './NavRoutes.module.scss'
import RoutesLink from '../../../ui/routesLink';
import { RootState, useAppSelector } from '../../../../store/store';

const routesArray = [
  { title: 'My Wallet', pathname: '/' },
  { title: 'My Card', pathname: '/card' },
  { title: 'Finance Chart', pathname: '/finance' },
  { title: 'Recent Transactions', pathname: '/transactions' },
];


const NavRoutes: FC = () => {
  const countNotifications = useAppSelector((state: RootState) => state.transactionSlice.notifications);
  return (
    <>
      {routesArray.map((el: { title: string, pathname: string; }, i) =>
        <div className={styles.wrapper} key={i} >
        <RoutesLink title={el.title} pathname={el.pathname}  />
          {i === 3 && <span className={styles.notifications}>{`${countNotifications}`}</span>}
        </div>
      )}
    </>
  );
};

export default NavRoutes;