// import React from 'react';

import { useContext } from "react";
import CartList from "../Components/Cart/CartList";
import Payment from "../Components/Cart/Payment";
import { CartContext } from "../Components/Contexts/CartContext";

const Cart = () => {
  return (
    <div className="flex flex-col min-w-max mb-5">
      <CartList></CartList>
      <Payment></Payment>
    </div>
  );
};

export default Cart;
