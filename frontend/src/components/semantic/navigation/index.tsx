import { FC } from 'react';
import styles from './Navigation.module.scss';
import LogoIco from '../../ui/icons/LogoIco';
import NavRoutes from './navRoutes';


const Navigation: FC = () => {
  return (
    <nav className={styles.navigationWrapper}>
      <div className={styles.navTop}>
        <div className={styles.head}>
          <div className={styles.logo}>
            <LogoIco />
          </div>
          <div className={styles.burger}>
            {[...new Array(3)].map((_, i: number) =>
              <span key={i}></span>,
            )}
          </div>
        </div>
        <div className={styles.router}>
          <NavRoutes />
        </div>
      </div>
      <div className={styles.navBottom}>

      </div>
    </nav>
  );
};


export default Navigation;