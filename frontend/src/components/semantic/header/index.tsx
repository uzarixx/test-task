import React, { FC } from 'react';
import styles from './Header.module.scss';
import QuestionIco from '../../ui/icons/QuestionIco';
import InboxIco from '../../ui/icons/InboxIco';
import ExpandIco from '../../ui/icons/ExpandIco';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <InboxIco />
        <ExpandIco />
      </div>
      <div className={styles.headerRight}>
        <QuestionIco />
      </div>
    </header>
  );
};
export default Header;