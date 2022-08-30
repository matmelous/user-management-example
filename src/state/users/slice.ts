import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './constants';
import { UserType } from './types';

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clear: ()=> initialState,
    authenticate: (state,action: PayloadAction<UserType>)=>{
      const {name, password, id} = action.payload;
      const exists = state.data.find(user => user.name===name && user.password===password)
      state.currentUser= !!exists ? id : null;
    }
  },
});

export const actions = slice.actions;
export const reducer =  slice.reducer;
