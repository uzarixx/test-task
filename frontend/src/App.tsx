import React, { useEffect } from 'react';
import AppLayout from './components/layouts/appLayout';
import { useDispatch } from 'react-redux';
import { fetchAuthUser } from './store/counter/userSlice';


const App = () => {
  const dispatch = useDispatch<any>()
  useEffect(() => {
    dispatch(fetchAuthUser())
  }, [])
  return (
    <AppLayout />
  );
};

export default App;
