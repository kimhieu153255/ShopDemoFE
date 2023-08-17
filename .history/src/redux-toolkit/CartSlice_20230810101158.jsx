import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
};

export const CartSlice = createSlice({
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
    checkedStore: (state, action) => {
      state.CartItems.map((item) => {
        if (item.store === action.payload) {
          item.checked = !item.checked;
          item.items.map((el) => (el.check = item.checked));
        }
      });
    },
  },
});

export const { AddToCart, setCartItems, checkedStore } = CartSlice.actions;
export default CartSlice.reducer;
