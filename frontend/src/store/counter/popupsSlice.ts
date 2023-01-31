import { createSlice } from '@reduxjs/toolkit';


export interface CounterState {
  createWalletPopup: boolean;
}

const initialState: CounterState = {
  createWalletPopup: false,
};

const popupsSlice = createSlice({
  name: 'popupCounter',
  initialState,
  reducers: {
    setWalletPopup: (state, action) => {
      state.createWalletPopup = action.payload;
    },
  }
});


export default popupsSlice.reducer;
export const { setWalletPopup } = popupsSlice.actions;