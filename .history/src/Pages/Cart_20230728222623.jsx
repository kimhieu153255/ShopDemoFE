// import React from 'react';

import CartList from "../Components/Cart/CartList";
import { CartProvider } from "../Components/Contexts/CartContext";

const Cart = () => {
  return (
    <div>
      <CartProvider>
        <CartList></CartList>
      </CartProvider>
      <Payment></Payment>
    </div>
  );
};

export default Cart;
