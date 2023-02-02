import { configureStore } from '@reduxjs/toolkit';
import walletSlice from './counter/walletSlice';
import popupsSlice from './counter/popupsSlice';
import userSlice from './counter/userSlice';
import cardSlice from './counter/cardSlice';
import transactionSlice from './counter/transactionSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: { walletSlice, popupsSlice, userSlice, cardSlice, transactionSlice},
});

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch