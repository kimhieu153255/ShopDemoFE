import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateArray: [],
};

const MessageSlice = createSlice({
  name: "MessageSlice",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      console.log("addMessage", action.payload);
      state.stateArray = [action.payload, ...state.stateArray];
      setTimeout(() => {
        state.stateArray = state.stateArray.filter(
          (item) => item !== action.payload
        );
      }, 2000);
    },
  },
});

export const { addMessage } = MessageSlice.actions;
export default MessageSlice.reducer;
