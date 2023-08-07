import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { change2D } from "../../helpers/helper";
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
      // {
      //   id: 5,
      //   name: "Product 5",
      //   price: 500,
      //   img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
      //   color: ["red", "blue", "green"],
      //   size: ["S", "M", "L"],
      //   quantity: 5,
      // },
    ],
  },
];

const CartList = () => {
  const [checkOneStore, setCheckOneStore] = useState(
    new Array(ListCart.length).fill(false)
  );
  const [items, setItems] = useState(change2D(ListCart));
  useEffect(() => {
    let result = [];
    for (let i = 0; i < items.length; i++) {
      let temp = [];
      for (let j = 0; j < items[i].length; j++) temp.push(checkOneStore[i]);
      result.push(temp);
    }
    setItems(result);
    console.log(items);
    console.log(checkOneStore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkOneStore]);
  return (
    <div className="flex flex-col gap-2 p-5 min-w-max">
      {ListCart.map((item, index) => (
        <div
          key={index}
          className="w-4/5 m-auto p-5 border rounded-md bg-gray-50 min-w-max"
        >
          <div className="flex gap-2 items-center px-3">
            <div className="inline-block">
              <input
                type="checkbox"
                className="text-lg w-5 h-5 checked:bg-green-500 checked:border-transparent"
                onClick={() => {
                  let temp = [...checkOneStore];
                  temp[index] = !temp[index];
                  setCheckOneStore(temp);
                }}
              />
            </div>
            <h1 className="font-semibold text-xl mb-2">{item.store}</h1>
          </div>
          <div className="flex flex-col gap-3">
            {item.items.map((pro, ind) => (
              <CartItem
                check={items[index][ind]}
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
