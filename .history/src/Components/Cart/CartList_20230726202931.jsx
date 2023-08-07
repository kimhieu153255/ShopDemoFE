import CartItem from "./CartItem";

// import React from "react";


// eslint-disable-next-line react/prop-types
const CartList = ({ListCart}) => {
  return (
    <div className="flex flex-col gap-2 p-5">
      {ListCart.map((item, index) => (
        <div
          key={index}
          className="w-4/5 m-auto p-5 border rounded-md bg-gray-50"
        >
          <h1>{item.store}</h1>
          <div className="flex flex-col gap-3">
            {item.items.map((pro, ind) => (
              <CartItem
                key={ind}
                // img={pro.img}
                color={pro.color}
                size={pro.size}
                price={pro.price}
                name={pro.name}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
