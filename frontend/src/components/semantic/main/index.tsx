import React, { FC } from 'react';
import styles from './Main.module.scss';

interface Props {
  children: React.ReactNode;
}


const Main: FC<Props> = ({ children }) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};

export default Main;