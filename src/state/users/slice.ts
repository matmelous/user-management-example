import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './constants';

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clear: ()=> initialState,
    authenticate: (state,action: PayloadAction<string>)=>{
      state.currentUser= action.payload;
    }
  },
});

export const actions = slice.actions;
export const reducer =  slice.reducer;
