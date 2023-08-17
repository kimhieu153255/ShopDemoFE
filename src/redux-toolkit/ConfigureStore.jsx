import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CartSlice from "./CartSlice";

const reducer = combineReducers({
  auth: AuthSlice,
  cart: CartSlice,
});

const store = configureStore({
  reducer,
});

export default store;
