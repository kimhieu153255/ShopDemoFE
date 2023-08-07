// import React from 'react';

import CartList from "../Components/Cart/CartList";
import Payment from "../Components/Cart/Payment";
import { CartProvider } from "../Components/Contexts/CartContext";

const Cart = () => {
  return (
    <div className="flex flex-col">
      <CartProvider>
        <CartList></CartList>
      </CartProvider>
      <Payment></Payment>
    </div>
  );
};

export default Cart;
