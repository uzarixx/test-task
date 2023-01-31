import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import WalletsService from '../../services/fetchServices/wallets';

export const fetchWallets = createAsyncThunk(
  'counter/wallets',
  async function() {
    try {
      const { data } = await WalletsService.getWallets();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
);

export interface CounterState {
  wallets: [];
  walletsStatus: boolean;
}

const initialState: CounterState = {
  wallets: [],
  walletsStatus: true,
};

const walletSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.wallets = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWallets.pending, (state: any) => {
      state.walletsStatus = true;
    });
    builder.addCase(fetchWallets.fulfilled, (state: any, action: any) => {
      state.walletsStatus = false;
      state.wallets = action.payload;
    });
  },
});


export default walletSlice.reducer;
export const { setUserData } = walletSlice.actions;