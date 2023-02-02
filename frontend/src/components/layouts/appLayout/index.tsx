import React, { FC, useEffect, useState } from 'react';
import styles from './AppLayout.module.scss';
import Navigation from '../../semantic/navigation';
import MainLayout from '../mainLayout';
import Popups from '../../ui/popups';
import NoAuthLayout from '../noAuthLayout';

const AppLayout: FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem('authToken');
  useEffect(() => {
    if (token) setIsLogin(true);
    else setIsLogin(false);
  }, [token]);


  return (
    <div className={styles.appLayout}>
      <Popups />
      <Navigation />
      {isLogin ? <MainLayout /> : <NoAuthLayout />}
    </div>
  );
};

export default AppLayout;
