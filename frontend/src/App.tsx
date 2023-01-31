import React, { useEffect } from 'react';
import AppLayout from './components/layouts/appLayout';
import { useDispatch } from 'react-redux';
import { fetchWallets } from './store/counter/walletSlice';


const App = () => {
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchWallets())
  }, [])
  return (
    <AppLayout />
  );
};

export default App;
