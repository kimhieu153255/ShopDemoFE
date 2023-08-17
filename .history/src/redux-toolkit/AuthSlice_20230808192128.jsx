import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    storeId: null,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
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
    //clean sau thơi gian timeExpire
    clean: (state) => ({
      ...state,
      token: null,
      user: null,
      storeId: null,
    }),
  },
});

export const { login, logout, setStoreId } = AuthSlice.actions;
export default AuthSlice.reducer;
