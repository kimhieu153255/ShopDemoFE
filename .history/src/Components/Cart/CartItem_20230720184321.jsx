// import React from "react";

// eslint-disable-next-line react/prop-types
const CartItem = ({ img }) => {
  return (
    <div>
      <div>
        <input type="checkbox" />
        <div>
          <img src={img} alt="img" />
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default CartItem;
