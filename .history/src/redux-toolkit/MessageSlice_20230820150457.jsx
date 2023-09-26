import { createSlice } from "@reduxjs/toolkit";
import { remove } from "lodash";

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
      remove(state);
    },
    remove: (state) => {
      console.log("remove after 200ms");
      state.stateArray = state.stateArray.pop();
    },
  },
});

export const { addMessage } = MessageSlice.actions;
export default MessageSlice.reducer;
