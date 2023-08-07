import { createContext, useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import { change2D } from "../../helpers/helper";
import { CheckContext } from "../Contexts/CheckContext";

const CartList = () => {
  const [checkOneStore, setCheckOneStore] = useContext(CheckContext);
  const [, , items, setItems] = useContext(CheckContext);
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
                isCheck={items[index][ind]}
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
