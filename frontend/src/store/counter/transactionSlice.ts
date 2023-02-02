import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TransactionsService from '../../services/fetchServices/transactions';

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

export interface CounterState {
  transactions: {count: number, rows: []};
  transactionsStatus: boolean;
}

const initialState: CounterState = {
  transactions: {count: 0, rows: []},
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
  },
});


export default transactionsSlice.reducer;
export const { setTransactionsData } = transactionsSlice.actions;