// import React from "react";

// eslint-disable-next-line react/prop-types
const CartItem = ({ img, color }) => {
  return (
    <div>
      <div>
        <input type="checkbox" />
        <div>
          <img src={img} alt="img" />
        </div>
        <button>
          <div>{color}</div>
          <div></div>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
