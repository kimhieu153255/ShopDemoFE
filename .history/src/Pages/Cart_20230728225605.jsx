// import React from 'react';

import CartList from "../Components/Cart/CartList";
import Payment from "../Components/Cart/Payment";
import { CartProvider } from "../Components/Contexts/CartContext";

const Cart = () => {
  return (
    <div className="flex flex-col min-w-max">
      <CartProvider>
        <div>
          <CartList></CartList>
          <Payment></Payment>
        </div>
      </CartProvider>
    </div>
  );
};

export default Cart;
