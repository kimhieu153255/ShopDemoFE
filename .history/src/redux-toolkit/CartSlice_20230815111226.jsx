import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
  BuyList: [],
  total: 0,
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
      console.log(action.payload);
      console.log(state);
      state.CartItems = action.payload;
    },

    checkedStore: (state, action) => {
      state.CartItems.map((item) => {
        if (item.store === action.payload) {
          item.checked = !item.checked;
          item.items.map((el) => (el.check = item.checked));
        }
      });
      let tempCartItems = state.CartItems.filter(
        (item) => item.store === action.payload
      );
      tempCartItems.map((item) => {
        item.items.map((el) => {
          if (el.check) {
            state.BuyList.push({
              id: el.id,
              color: el.colorChosen,
              size: el.sizeChosen,
              quantity: el.quantity,
              price: el.price,
            });
            state.total += el.price * el.quantity;
          } else {
            state.BuyList = state.BuyList.filter((item) => item.id !== el.id);
            if (state.total !== 0) state.total -= el.price * el.quantity;
          }
        });
      });
    },

    checkedProduct: (state, action) => {
      console.log(state);
      state.CartItems.map((item) => {
        item.items.map((el) => {
          if (el.id === action.payload) el.check = !el.check;
        });
      });
    },

    encreaseQuantity: (state, action) => {
      const { id, isEncrease } = action.payload;
      state.CartItems.map((item) => {
        item.items.map((el) => {
          if (el.id === id) {
            if (isEncrease) {
              el.quantity += 1;
              if (el.check) {
                state.total += el.price;
              }
            } else if (el.quantity > 1) {
              el.quantity -= 1;
              if (el.check) {
                state.total -= el.price;
              }
            }
          }
        });
      });
    },

    deleteProduct: (state, action) => {
      console.log("deleteProduct");
      state.BuyList = state.BuyList.filter(
        (item) => item.id !== action.payload.id
      );
    },

    buyProduct: (state, action) => {
      console.log("buyProduct");
      const { check, id, colorChosen, sizeChosen, num, price } = action.payload;
      if (!check) {
        if (state.BuyList.filter((e) => e.id === id).length !== 0) return;
        state.total += price * num;
        state.BuyList.push({
          id,
          color: colorChosen,
          size: sizeChosen,
          quantity: num,
          price,
        });
      } else {
        console.log("deleteProduct");
        state.total -= price * num;
        state.BuyList = state.BuyList.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    updateColor: (state, action) => {
      const { id, color } = action.payload;
      state.BuyList.map((item) => {
        if (item.id === id) {
          item.color = color;
        }
      });
    },

    updateSize: (state, action) => {
      const { id, size } = action.payload;
      state.BuyList.map((item) => {
        if (item.id === id) {
          item.size = size;
        }
      });
    },

    updateQuantity: (state, action) => {
      const { id, num } = action.payload;
      state.BuyList.map((item) => {
        if (item.id === id) {
          item.quantity = num;
        }
      });
    },

    resetQuantity: (state, action) => {
      const { id } = action.payload;
      state.BuyList.map((item) => {
        if (item.id === id) item.quantity = 1;
      });
      state.CartItems.map((item) => {
        item.items.map((el) => {
          if (el.id === id) el.quantity = 1;
        });
      });
    },

    totalQuantiy: (state) => {
      let total = 0;
      state.CartItems?.map((item) => {
        item.items.map(() => {
          total += 1;
        });
      });
      return total;
    },

    payment: (state, action) => {
      const { id } = action.payload;
      console.log(id);
      const temp = state.BuyList.map((item) => {
        console.log(item);
        if (!item.color || !item.size) {
          console.log("not chosen color and size");
          return "chosen color and size";
        }
      });
      if (temp.includes("chosen color and size")) return;
      console.log("payment");
    },

    removeCart: (state, action) => {
      console.log("removeCart");
      const { id, size, color } = action.payload;
      console.log(id, size, color);
      state.BuyList = state.BuyList.filter(
        (item) => item.id !== id && item.size !== size && item.color !== color
      );
      state.CartItems.map((item) => {
        item.items.filter(
          (el) => el.id !== id && el.size !== size && el.color !== color
        );
      });
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const {
  AddToCart,
  setCartItems,
  checkedStore,
  checkedProduct,
  buyProduct,
  deleteProduct,
  totalPayment,
  encreaseQuantity,
  updateColor,
  updateSize,
  resetQuantity,
  payment,
  removeCart,
  totalQuantiy,
} = CartSlice.actions;
export default CartSlice.reducer;
