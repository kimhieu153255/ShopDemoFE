// import React from 'react';

import CartList from "../Components/Cart/CartList";
import Payment from "../Components/Cart/Payment";
import { CartProvider } from "../Components/Contexts/CartContext";

const Cart = () => {
  return (
    <div className="flex flex-col min-w-max">
      <CartProvider>
        <CartList></CartList>
      </CartProvider>
      <div>
        <Payment></Payment>
      </div>
    </div>
  );
};

export default Cart;
