import React, { useEffect } from 'react';
import AppLayout from './components/layouts/appLayout';
import { useDispatch } from 'react-redux';
import { fetchAuthUser } from './store/counter/userSlice';
import { fetchNotificationTransaction } from './store/counter/transactionSlice';


const App = () => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchAuthUser());
    dispatch(fetchNotificationTransaction());
  }, []);
  return (
    <AppLayout />
  );
};

export default App;
