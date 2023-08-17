import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: Cookies.get("token"),
    user: JSON.parse(Cookies.get("user")?.toString() || null),
    storeId: Cookies.get("storeId"),
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
        logout();
      }, action.payload.timeExpire);
    },
  },
});

export const { login, logout, setStoreId } = AuthSlice.actions;
export default AuthSlice.reducer;
