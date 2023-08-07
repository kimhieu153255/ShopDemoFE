// import React from "react";

import ButtonCart from "../Button/ButtonCart";

// eslint-disable-next-line react/prop-types
const CartItem = ({ img, color, size, price, number }) => {
  return (
    <div className="flex ">
      <div className="flex">
        <input type="checkbox" className="inline-block text-lg w-3" />
        <div>
          <img
            src={img}
            alt="img"
            className="w-40 h-40 object-cover rounded-lg"
          />
        </div>
      </div>
      <div>
        <button>
          button
          <div>{color[0]}</div>
          <div>{size[0]}</div>
        </button>
        <div>
          {color &&
            // eslint-disable-next-line react/prop-types
            color.map((item) => <div key={item}>{item}</div>)}
          {size &&
            // eslint-disable-next-line react/prop-types
            size.map((item) => <div key={item}>{item}</div>)}
        </div>
      </div>
      <div>{price}</div>
      <div>
        <ButtonCart number={number} />
      </div>
      <div>{number * price}</div>
      <div>Delete</div>
    </div>
  );
};

export default CartItem;
