import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../../services/fetchServices/user';

export const fetchAuthUser = createAsyncThunk(
  'counter/authUser',
  async function() {
    try {
      const { data } = await UserService.getAuthUser();
      return data;
    } catch (e) {

      localStorage.removeItem('authToken');
    }
  },
);

export interface CounterState {
  authUser: {userName: string, userLastName: string, balance: number};
  status: boolean;
}

const initialState: CounterState = {
  status: true,
  authUser: {userName: '', userLastName: '', balance: 0},
};

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.authUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthUser.pending, (state: any) => {
      state.status = true;
    });
    builder.addCase(fetchAuthUser.fulfilled, (state: any, action: any) => {
      state.status = false;
      state.authUser = action.payload;
    });
  },
});


export default userSlice.reducer;
export const { setUserData } = userSlice.actions;