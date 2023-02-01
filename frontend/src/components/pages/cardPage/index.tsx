import React, { FC } from 'react';
import styles from './CardPage.module.scss';
import Main from '../../semantic/main';
import PagesHead from 'src/components/semantic/pagesHead';
import CardBlock from '../../ui/bankCard/cardBlock';
import Accordion from '../../ui/accordion';

const CardPage: FC = () => {
  return (
    <Main>
      <PagesHead title={'My card'} subtitle={'Keep track your financial plan'} />
      <div className={styles.wrapper}>
        <CardBlock />
        <Accordion />
      </div>
    </Main>
  );
};

export default CardPage;