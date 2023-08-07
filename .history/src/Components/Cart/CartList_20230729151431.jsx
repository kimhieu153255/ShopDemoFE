import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../Contexts/CartContext";
import { FaShoppingBasket } from "react-icons/fa";

const CartList = () => {
  const { checkedStore, cartItems, setCartItems } = useContext(CartContext);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setCartItems(cartItems.filter((e) => e.items.length > 0));
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, [isMounted]);
  return (
    <div className="flex flex-col gap-2 p-5 min-w-max">
      {cartItems.length === 0 && (
        <div className="m-auto h-full">
          <div className="text-9xl text-gray-400">
            <FaShoppingBasket></FaShoppingBasket>
          </div>
        </div>
      )}
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="w-4/5 m-auto p-5 border rounded-md bg-gray-50 min-w-max"
        >
          <div className="flex gap-2 items-center px-3">
            <div className="inline-block">
              <input
                type="checkbox"
                className="text-lg w-5 h-5 "
                defaultChecked={false}
                onChange={() => checkedStore(item.store)}
              />
            </div>
            <h1 className="font-semibold text-xl mb-2">{item.store}</h1>
          </div>
          <div className="flex flex-col gap-3">
            {item.items.map((pro, ind) => (
              <CartItem
                ind={index}
                // img={pro.img}
                num={pro.quantity}
                id={pro.id}
                check={pro.check}
                key={ind}
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
