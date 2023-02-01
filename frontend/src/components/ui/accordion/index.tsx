import React, { FC } from 'react';
import styles from './Accordion.module.scss';
import AccordionBlock from './accordionBlock';

const AccordionArray = [
  { title: 'Check Your Cash Flow', info: 'Info info', color: 'F93939' },
  { title: 'Change Primary Card', info: 'Info info', color: 'ED1865' },
  { title: 'Pay Tax', info: 'Info info', color: '6B19F1' },
  { title: 'Make Invoice', info: 'Info info', color: '2236EE' },
  { title: 'Refer a Friend', info: 'Info info', color: '0D99C5' },
];


const Accordion: FC = () => {
  return (
    <div className={styles.accordionWrapper}>
      <div className={styles.head}>
        <h3>See Our Help</h3>
      </div>
      {AccordionArray.map((el, i) =>
        <AccordionBlock key={i} title={el.title} info={el.info} color={el.color} />,
      )}
      <button>Look More</button>
    </div>
  );
};

export default Accordion;