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
        color: "red",
        size: "S",
        quantity: 1,
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
        color: "blue",
        size: "M",
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
        color: "green",
        size: "L",
        quantity: 3,
      },
      {
        id: 4,
        name: "Product 4",
        price: 400,
        img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
        color: "yellow",
        size: "XL",
        quantity: 4,
      },
    ],
  },
];

const CartList = () => {
  return (
    <div>
      {ListCart.map((item, index) => (
        <div key={index}>
          <h1>{item.store}</h1>
          {item.items.map((pro, ind) => (
            <CartItem
              img={data.img}
              color={data.color}
              size={data.size}
              price={data.price}
              name={data.name}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CartList;
