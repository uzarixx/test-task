import React, { FC, useState } from 'react';
import styles from './AccordionBlock.module.scss';
import ArrowMiniIco from '../../icons/ArrowMiniIco';

interface props {
  title: string;
  info: string;
  color: string;
}

const AccordionBlock: FC<props> = ({ title, info, color, }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.accordionWrapper} onClick={() => setIsActive(!isActive)}>
      <span className={styles.decore} style={{background: `#${color}`}}></span>
      <div className={`${styles.accordion} ${isActive && styles.active}`}>
        <div className={styles.title}>
          <p>{title}</p>
          <ArrowMiniIco />
        </div>
        <div className={`${styles.info} ${isActive && styles.active}`}>
          <span>{info}</span>
        </div>
      </div>
    </div>
  );
};

export default AccordionBlock;