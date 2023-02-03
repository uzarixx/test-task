import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TransactionsService from '../../services/fetchServices/transactions';
import NotificationsService from '../../services/fetchServices/notifications';

export const fetchTransactions = createAsyncThunk(
  'counter/transactions',
  async function({ page, limit, name }: { page: string, limit: string, name: string }) {
    try {
      const { data } = await TransactionsService.getTransactions({ page, limit, name });
      return data;
    } catch (e) {
      console.error(e);
    }
  },
);


export const fetchNotificationTransaction = createAsyncThunk(
  'counter/notifications',
  async function() {
    try {
      const { data } = await NotificationsService.getCountNotifications();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
);
export interface CounterState {
  notifications: number,
  transactions: {count: number, rows: []};
  transactionsStatus: boolean;
}

const initialState: CounterState = {
  transactions: {count: 0, rows: []},
  notifications: 0,
  transactionsStatus: true,
};

const transactionsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTransactionsData: (state, action) => {
      state.transactions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.pending, (state: any) => {
      state.transactionsStatus = true;
    });
    builder.addCase(fetchTransactions.fulfilled, (state: any, action: any) => {
      state.transactionsStatus = false;
      state.transactions = action.payload;
    });
    builder.addCase(fetchNotificationTransaction.fulfilled, (state: any, action: any) => {
      state.notifications = action.payload;
    });
  },
});


export default transactionsSlice.reducer;
export const { setTransactionsData } = transactionsSlice.actions;