import { FC } from 'react';
import styles from './Navigation.module.scss';
import LogoIco from '../../ui/icons/LogoIco';
import NavRoutes from './navRoutes';
import SettingsIco from '../../ui/icons/SettingsIco';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppSelector } from '../../../store/store';
import UserIco from '../../ui/icons/UserIco';
import { setNavigationPopup } from '../../../store/counter/popupsSlice';
import { fetchAuthUser } from '../../../store/counter/userSlice';


const Navigation: FC = () => {
  const dispatch = useDispatch<any>();
  const user = useAppSelector((state: RootState) => state.userSlice.authUser);
  const isOpen = useSelector((state: RootState) => state.popupsSlice.navigationPopup);
  const onClickLogout = () => {
    localStorage.removeItem('authToken');
    dispatch(fetchAuthUser());
  };
  const onClickNavigation = () => {
    dispatch(setNavigationPopup(!isOpen));
  };
  return (
    <nav className={`${styles.navigationWrapper} ${isOpen && styles.active}`}>
      <div className={styles.navTop}>
        <div className={styles.head}>
          <div className={styles.logo}>
            <LogoIco />
          </div>
          <div className={styles.burger} onClick={onClickNavigation}>
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
          <p className={styles.logout} onClick={onClickLogout}>Logout</p>
        </div>}
    </nav>
  );
};


export default Navigation;