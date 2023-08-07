// import React from "react";

import ButtonCart from "../Button/ButtonCart";

// eslint-disable-next-line react/prop-types
const CartItem = ({ img, color, size, price, number }) => {
  return (
    <div>
      <div>
        <div>
          <input type="checkbox" />
          <div>
            <img src={img} alt="img" />
          </div>
        </div>
        <button>
          button
          <div>{color}</div>
          <div>{size}</div>
        </button>
        <div>{price}</div>
        <ButtonCart number={number} />
        <div>{number * price}</div>
      </div>
    </div>
  );
};

export default CartItem;
