import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const index = state.CartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.CartItems[index].quantity += action.payload.quantity;
      } else {
        state.CartItems.push(action.payload);
      }
    },
    setCartItems: (state, action) => {
      state.CartItems = action.payload;
    },
  },
});
