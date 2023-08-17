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
      Cookies.set("token", action.payload.token, {
        expires: action.payload.expireAt,
      });
      Cookies.set("user", JSON.stringify(action.payload.user), {
        expires: action.payload.expireAt,
      });
      Cookies.set("storeId", action.payload.storeId, {
        expires: action.payload.expireAt,
      });
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
  },
});

export const { login, logout, setStoreId } = AuthSlice.actions;
export default AuthSlice.reducer;
