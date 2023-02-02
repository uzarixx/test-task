import React, { FC } from 'react';
import styles from './AppLayout.module.scss';
import Navigation from '../../semantic/navigation';
import MainLayout from '../mainLayout';
import Popups from '../../ui/popups';
import NoAuthLayout from '../noAuthLayout';
import { RootState, useAppSelector } from '../../../store/store';

const AppLayout: FC = () => {
  const authUser = useAppSelector((state: RootState) => state.userSlice.authUser);
  const pendingAuthUser = useAppSelector((state: RootState) => state.userSlice.status);
  return (
    <div className={styles.appLayout}>
      <Popups />
      <Navigation />
      {pendingAuthUser ? <h3>Loading...</h3> : authUser ? <MainLayout /> : <NoAuthLayout />}
    </div>
  );
};

export default AppLayout;
