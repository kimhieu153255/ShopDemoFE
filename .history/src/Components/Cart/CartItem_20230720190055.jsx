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
        <div>

        </div>
        <button>
          button
          <div>{color[0]}</div>
          <div>{size[0]}</div>
        </button>
        <div>{price}</div>
        <ButtonCart number={number} />
        <div>{number * price}</div>
        <div>delete</div>
      </div>
    </div>
  );
};

export default CartItem;
