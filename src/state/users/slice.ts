import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { BasicUserType } from "./types";
import { v4 as uuidv4 } from "uuid";

export const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clear: () => initialState,
    authenticate: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
    createUser: (state, action: PayloadAction<BasicUserType>) => {
      const newUser = {
        ...action.payload,
        id: uuidv4(),
      };
      state.data.push(newUser);
    },
  },
});

export const actions = slice.actions;
export const reducer = slice.reducer;
