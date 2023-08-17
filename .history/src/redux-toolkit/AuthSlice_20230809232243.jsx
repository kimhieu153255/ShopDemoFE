import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    storeId: null,
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        storeId: action.payload.storeId,
      };
    },
    logout: (state) => ({
      ...state,
      token: null,
      user: null,
      storeId: null,
    }),
    setStoreId: (state, action) => ({
      ...state,
      storeId: action.payload.storeId,
    }),
    clean: (state, action) => {
      setTimeout(() => {
        Cookies.remove("token");
        Cookies.remove("user");
        Cookies.remove("storeId");
        state.token = null;
        state.user = null;
        state.storeId = null;
      }, action.payload.timeExpire);
    },
  },
});

export const { login, logout, setStoreId, clean } = AuthSlice.actions;
export default AuthSlice.reducer;