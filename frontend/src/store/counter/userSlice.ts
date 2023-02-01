import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../../services/fetchServices/user';

export const fetchAuthUser = createAsyncThunk(
  'counter/authUser',
  async function() {
    try {
      const { data } = await UserService.getAuthUser();
      return data;
    } catch (e) {
      console.log(e);
      localStorage.removeItem('authToken');
    }
  },
);

export interface CounterState {
  authUser: [];
  authUserStatus: boolean;
}

const initialState: CounterState = {
  authUser: [],
  authUserStatus: true,
};

const walletSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.authUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthUser.pending, (state: any) => {
      state.authUserStatus = true;
    });
    builder.addCase(fetchAuthUser.fulfilled, (state: any, action: any) => {
      state.authUserStatus = false;
      state.authUser = action.payload;
    });
  },
});


export default walletSlice.reducer;
export const { setUserData } = walletSlice.actions;