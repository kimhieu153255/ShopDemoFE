import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateArray: [],
};

const MessageSlice = createSlice({
  name: "MessageSlice",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.stateArray = action.payload;
    },
  },
});
