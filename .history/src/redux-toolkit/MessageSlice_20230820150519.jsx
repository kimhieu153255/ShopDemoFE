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
      removeMessage(state);
    },
    removeMessage: (state) => {
      console.log("remove after 200ms");
      state.stateArray = state.stateArray.pop();
    },
  },
});

export const { addMessage, removeMessage } = MessageSlice.actions;
export default MessageSlice.reducer;
