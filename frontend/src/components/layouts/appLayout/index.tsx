import React, { FC } from 'react';
import styles from './AppLayout.module.scss';
import Navigation from '../../semantic/navigation';
import MainLayout from '../mainLayout';
import Popups from '../../ui/popups';

const AppLayout: FC = () => {
  return (
    <div className={styles.appLayout}>
      <Popups />
      <Navigation />
      <MainLayout />
    </div>
  );
};

export default AppLayout;
