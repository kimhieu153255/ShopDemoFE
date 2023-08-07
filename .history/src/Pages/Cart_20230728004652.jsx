// import React from 'react';

import CartList from "../Components/Cart/CartList";
import { CheckProvider } from "../Components/Contexts/CartContext";

const Cart = () => {
  return (
    <div>
      <CheckProvider>
        <CartList></CartList>
      </CheckProvider>
    </div>
  );
};

export default Cart;
