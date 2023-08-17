import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
  BuyProducts: [],
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
    checkedProduct: (state, action) => {
      state.CartItems.map((item) => {
        item.items.map((el) => {
          if (el.id === action.payload) el.check = !el.check;
        });
      });
    },
    // encreaseQuantity,
    // deleteProduct,
    // buyProduct,
    // updateColor,
    // updateSize,
    // updateQuantity,
  },
});

export const { AddToCart, setCartItems, checkedStore, checkedProduct } =
  CartSlice.actions;
export default CartSlice.reducer;
