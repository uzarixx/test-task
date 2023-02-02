import React, { FC } from 'react';
import styles from './NoAuthLayout.module.scss';
import { setAuthorizePopup } from '../../../store/counter/popupsSlice';
import { useDispatch } from 'react-redux';

const NoAuthLayout: FC = () => {
  const dispatch = useDispatch();
  const onClickAuth = () => {
    dispatch(setAuthorizePopup(true));
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>You is not authorize</h2>
      <button onClick={onClickAuth}>Login</button>
    </div>
  );
};

export default NoAuthLayout;