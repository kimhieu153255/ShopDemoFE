import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
  BuyList: [],
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
    deleteProduct: (state, action) => {
      state.BuyList = state.BuyList.filter(
        (item) => item.id !== action.payload
      );
    },
    buyProduct: (state, action) => {
      console.log("buyProduct");
      const { check, id, colorChosen, sizeChosen, num, price } = action.payload;
      console.log(check, id, colorChosen, sizeChosen, num, price);
      if (!check) {
        if (state.BuyList.filter((e) => e.id === id).length !== 0) return;
        state.BuyList.push({
          id,
          color: colorChosen,
          size: sizeChosen,
          quantity: num,
          price,
        });
      } else deleteProduct(state, action);
      console.log(state.BuyList);
    },
    // updateColor,
    // updateSize,
    // updateQuantity,
  },
});

export const {
  AddToCart,
  setCartItems,
  checkedStore,
  checkedProduct,
  buyProduct,
  deleteProduct,
} = CartSlice.actions;
export default CartSlice.reducer;
