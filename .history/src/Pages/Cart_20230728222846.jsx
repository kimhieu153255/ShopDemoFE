// import React from 'react';

import CartList from "../Components/Cart/CartList";
import { CartProvider } from "../Components/Contexts/CartContext";

const Cart = () => {
  return (
    <div className="flex flex-col min-w-max">
      <CartProvider>
        <CartList></CartList>
      </CartProvider>
    </div>
  );
};

export default Cart;
