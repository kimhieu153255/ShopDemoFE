// import React from "react";

// eslint-disable-next-line react/prop-types
const CartItem = ({ img, color, size }) => {
  return (
    <div>
      <div>
        <input type="checkbox" />
        <div>
          <img src={img} alt="img" />
        </div>
        <button>
          button
          <div>{color}</div>
          <div>{size}</div>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
