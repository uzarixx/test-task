import { createSlice } from '@reduxjs/toolkit';


export interface CounterState {
  createWalletPopup: boolean;
  addCardPopup: boolean;
  authorizePopup: boolean;
  sendPaymentPopup: boolean;
  requestPaymentPopup: boolean;
  navigationPopup: boolean;
  mainActive: boolean;
}

const initialState: CounterState = {
  createWalletPopup: false,
  addCardPopup: false,
  authorizePopup: false,
  sendPaymentPopup: false,
  requestPaymentPopup: false,
  navigationPopup: true,
  mainActive: false,
};

const popupsSlice = createSlice({
  name: 'popupCounter',
  initialState,
  reducers: {
    setWalletPopup: (state, action) => {
      state.createWalletPopup = action.payload;
    },
    setAddCardPopup: (state, action) => {
      state.addCardPopup = action.payload;
    },
    setAuthorizePopup: (state, action) => {
      state.authorizePopup = action.payload;
    },
    setSendPaymentPopup: (state, action) => {
      state.sendPaymentPopup = action.payload;
    },
    setRequestPaymentPopup: (state, action) => {
      state.requestPaymentPopup = action.payload;
    },
    setNavigationPopup: (state, action) => {
      state.navigationPopup = action.payload;
    },
    setMainActive: (state, action) => {
      state.mainActive = action.payload
    }
  },
});


export default popupsSlice.reducer;
export const {
  setWalletPopup,
  setAddCardPopup,
  setAuthorizePopup,
  setSendPaymentPopup,
  setRequestPaymentPopup,
  setNavigationPopup,
  setMainActive,
} = popupsSlice.actions;