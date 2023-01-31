import React, { FC } from 'react';
import styles from './RoutesLink.module.scss';
import NavigationIcon from '../icons/NavigationIcon';
import { Link, useLocation } from 'react-router-dom';

interface props {
  title: string;
  pathname: string;
}


const RoutesLink: FC<props> = ({ title, pathname }) => {
  const location = useLocation();
  const isActive = location.pathname === pathname
  return (
    <Link to={pathname} className={`${styles.cardWrapper} ${isActive && styles.active}`}>
      <NavigationIcon />
      <p>{title}</p>
    </Link>
  );
};

export default RoutesLink;