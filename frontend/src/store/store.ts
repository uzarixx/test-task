import { configureStore } from '@reduxjs/toolkit';
import walletSlice from './counter/walletSlice';
import popupsSlice from './counter/popupsSlice';

export const store = configureStore({
  reducer: { walletSlice, popupsSlice},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch