import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateArray: [],
};

const MessageSlice = createSlice({
  name: "MessageSlice",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.stateArray = [action.payload, ...state.stateArray];
      setTimeout(() => {
        state.stateArray.pop();
      }, 2000);
    },
  },
});

export const { setMessage, pushMessage } = MessageSlice.actions;
