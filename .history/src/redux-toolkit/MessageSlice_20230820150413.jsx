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
    },
    remove: () => {
      console.log("remove after 200ms");
    },
  },
});

export const { addMessage } = MessageSlice.actions;
export default MessageSlice.reducer;
