import React, { FC } from 'react';
import styles from './Link.module.scss';
import ArrowIco from '../../../icons/ArrowIco';

const Link: FC = () => {
  return (
    <div className={styles.linkWrapper}>
      <p>See how we can personalize your account:</p>
      <ArrowIco />
    </div>
  );
};

export default Link;