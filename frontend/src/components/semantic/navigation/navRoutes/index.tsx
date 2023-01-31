import React, { FC } from 'react';
import RoutesLink from '../../../ui/routesLink';

const routesArray = [
  {title: 'My Wallet', pathname: '/'},
  {title: 'My Card', pathname: '/card'},
  {title: 'Finance Chart', pathname: '/finance'},
  {title: 'Recent Transactions', pathname: '/transactions'},
]


const NavRoutes: FC = () => {
  return (
    <>
      {routesArray.map((el: {title: string, pathname: string;}, i) =>
        <RoutesLink title={el.title} pathname={el.pathname} key={i}/>
      )}
    </>
  );
};

export default NavRoutes;