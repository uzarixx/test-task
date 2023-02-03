import React, { FC } from 'react';
import styles from './Header.module.scss';
import QuestionIco from '../../ui/icons/QuestionIco';
import ExpandIco from '../../ui/icons/ExpandIco';
import { useDispatch, useSelector } from 'react-redux';
import { setMainActive } from 'src/store/counter/popupsSlice';
import { RootState } from '../../../store/store';
import InboxIco from '../../ui/icons/InboxIco';

const Header: FC = () => {
  const isOpen = useSelector((state: RootState) => state.popupsSlice.mainActive);
  const dispatch = useDispatch();
  const onClickFullWidth = () => {
    dispatch(setMainActive(!isOpen));
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <InboxIco/>
        <ExpandIco onClick={onClickFullWidth} />
      </div>
      <div className={styles.headerRight}>
        <QuestionIco />
        <span>What kind of information</span>
      </div>
    </header>
  );
};
export default Header;