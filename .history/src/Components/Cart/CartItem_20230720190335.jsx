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
        <ButtonCart number={number} />
        <div>{number * price}</div>
        <div>Delete</div>
      </div>
    </div>
  );
};

export default CartItem;
