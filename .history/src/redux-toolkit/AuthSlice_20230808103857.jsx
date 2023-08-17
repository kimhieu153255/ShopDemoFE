import { CreateSlice, configureStore } from "@reduxjs/toolkit";

const AuthSlice = CreateSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    storeId: null,
  },
  reducers: {
    login: (state, action) => ({
      ...state,
      token: action.payload.token,
      user: action.payload.user,
      storeId: action.payload.storeId,
    }),
    logout: (state) => ({
      ...state,
      token: null,
      user: null,
      storeId: null,
    }),
  },
});
