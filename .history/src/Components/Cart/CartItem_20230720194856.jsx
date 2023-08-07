// import React from "react";

import ButtonCart from "../Button/ButtonCart";

// eslint-disable-next-line react/prop-types
const CartItem = ({ img, color, size, price, number, name }) => {
  return (
    <div className="flex justify-center items-center gap-3 w-4/5 m-auto">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="inline-block text-lg w-5 h-5 checked:bg-green-500 checked:border-transparent"
        />
        <div>
          <img
            src={img}
            alt="img"
            className="w-40 h-40 object-cover rounded-lg"
          />
        </div>
        <div>
          <div className="line-clamp-2 w-40">{name}</div>
        </div>
      </div>
      <div>
        <button>
          <div>Button </div>
          <span>{color[0]}, </span>
          <span>{size[0]}</span>
        </button>
        <div className="hidden">
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
