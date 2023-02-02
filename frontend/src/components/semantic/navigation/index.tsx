import { FC } from 'react';
import styles from './Navigation.module.scss';
import LogoIco from '../../ui/icons/LogoIco';
import NavRoutes from './navRoutes';
import SettingsIco from '../../ui/icons/SettingsIco';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import UserIco from '../../ui/icons/UserIco';


const Navigation: FC = () => {
  const user: any = useSelector((state: RootState) => state.userSlice.authUser);
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
      {localStorage.getItem('authToken') &&
        <div className={styles.navBottom}>
          <div className={styles.settings}><SettingsIco /> Settings</div>
          <div className={styles.user}><UserIco /> <p>{user?.userName} {user?.userLastName}</p></div>
        </div>}
    </nav>
  );
};


export default Navigation;