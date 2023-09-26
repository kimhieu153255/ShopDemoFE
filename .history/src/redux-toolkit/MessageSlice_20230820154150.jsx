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
        removeMessage(state);
      }, 300);
    },
    removeMessage: (state) => {
      state.stateArray.pop();
    },
  },
});

export const { addMessage, removeMessage } = MessageSlice.actions;
export default MessageSlice.reducer;
