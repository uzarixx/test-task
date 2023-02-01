import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CardService from '../../services/fetchServices/card';

export const fetchCards = createAsyncThunk(
  'counter/cards',
  async function() {
    try {
      const { data } = await CardService.getCards();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
);

export interface CounterState {
  cards: [];
  cardsStatus: boolean;
}

const initialState: CounterState = {
  cards: [],
  cardsStatus: true,
};

const cardSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCardsData: (state, action) => {
      state.cards = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state: any) => {
      state.cardsStatus = true;
    });
    builder.addCase(fetchCards.fulfilled, (state: any, action: any) => {
      state.cardsStatus = false;
      state.cards = action.payload;
    });
  },
});


export default cardSlice.reducer;
export const { setCardsData } = cardSlice.actions;