import { createSlice } from '@reduxjs/toolkit';


export interface CounterState {
  createWalletPopup: boolean;
  addCardPopup: boolean;
}

const initialState: CounterState = {
  createWalletPopup: false,
  addCardPopup: false
};

const popupsSlice = createSlice({
  name: 'popupCounter',
  initialState,
  reducers: {
    setWalletPopup: (state, action) => {
      state.createWalletPopup = action.payload;
    },
    setAddCardPopup: (state, action) => {
      state.addCardPopup = action.payload
    }
  }
});


export default popupsSlice.reducer;
export const { setWalletPopup, setAddCardPopup } = popupsSlice.actions;