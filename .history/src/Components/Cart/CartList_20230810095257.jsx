import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../Contexts/CartContext";
import { FaShoppingBasket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setCartItems } from "../../redux-toolkit/CartSlice";
//có children
const CartList = () => {
  const { checkedStore, cartItems } = useContext(CartContext);
  const checkedStore = (cartItems, name) => {
    const newCartItems = cartItems.map((item) => {
      if (item.store === name) {
        item.checked = !item.checked;
        item.map((pro) => {
          pro.checked = item.checked;
        });
      }
      return item;
    });
    dispatch(setCartItems(newCartItems));
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 p-5 min-w-max">
      {cartItems.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-400 text-9xl h-full inline-block">
            <FaShoppingBasket></FaShoppingBasket>
          </div>
          <button
            onClick={() => navigate("/")}
            className="border-green-500 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
          >
            back to Home
          </button>
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
                checked={item.checked}
                onChange={() => checkedStore(item.store)}
              />
            </div>
            <h1 className="font-semibold text-xl mb-2">{item.store}</h1>
          </div>
          <div className="flex flex-col gap-3">
            {item.items.map((pro, ind) => (
              <CartItem
                ind={index}
                img={pro.img}
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
