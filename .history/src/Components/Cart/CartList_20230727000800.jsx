import CartItem from "./CartItem";

// import React from "react";
const ListCart = [
  {
    store: "Store 1",
    items: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
        color: ["red", "blue", "green"],
        size: ["S", "M", "L"],
        quantity: 1,
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
        color: ["red", "blue", "green"],
        size: ["S", "M", "L"],
        quantity: 2,
      },
    ],
  },
  {
    store: "Store 2",
    items: [
      {
        id: 3,
        name: "Product 3",
        price: 300,
        img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
        color: ["red", "blue", "green"],
        size: ["S", "M", "L"],
        quantity: 3,
      },
      {
        id: 4,
        name: "Product 4",
        price: 400,
        img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
        color: ["red", "blue", "green"],
        size: ["S", "M", "L"],
        quantity: 4,
      },
    ],
  },
];

const CartList = () => {
  return (
    <div className="flex flex-col gap-2 p-5">
      {ListCart.map((item, index) => (
        <div
          key={index}
          className="w-4/5 m-auto p-5 border rounded-md bg-gray-50"
        >
          <div className="flex gap-2 items-center px-12">
            <div className="inline-block">
              <input
                type="checkbox"
                className="inline-block text-lg w-5 h-5 checked:bg-green-500 checked:border-transparent"
              />
            </div>
            <h1 className="font-semibold text-xl mb-2">{item.store}</h1>
          </div>
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
