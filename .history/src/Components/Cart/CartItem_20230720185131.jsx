// import React from "react";

// eslint-disable-next-line react/prop-types
const CartItem = ({ img, color, size, price, count }) => {
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
        <div>{count}</div>
      </div>
    </div>
  );
};

export default CartItem;
