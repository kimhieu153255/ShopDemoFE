import { useContext, useEffect, useRef, useState } from "react";
import ButtonCart from "../Button/ButtonCart";
import { CountContext, CountProvider } from "../Contexts/CountContext";
import { FaCaretDown } from "react-icons/fa";
import { CartContext } from "../Contexts/CartContext";

// eslint-disable-next-line react/prop-types
const Price = ({ price }) => {
  const [count] = useContext(CountContext);
  return (
    <>
      <div className="w-20 font-bold text-red-500 ml-5"> {count * price}</div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const CartItem = ({ img, color, size, price, name, check, id, num, ind,import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../Contexts/CartContext";
import { FaShoppingBasket } from "react-icons/fa";

const CartList = () => {
  const { checkedStore, cartItems, deleteProduct } = useContext(CartContext);
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
                onChange={async () => await checkedStore(item.store, index)}
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
              >
                <button
                  className="border p-2 px-3 rounded-lg bg-green-500 hover:bg-green-600 hover:ring-green-300 text-white font-semibold"
                  onClick={() => deleteProduct(pro.id)}
                >
                  Delete
                </button>
              </CartItem>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
 }) => {
  const CaretRef = useRef();
  const DropRef = useRef();
  const [colorChosen, setColorChosen] = useState(
    color ? color[0]?.toString() : ""
  );
  const [sizeChosen, setSizeChosen] = useState(size ? size[0].toString() : "");
  const {
    checkedProduct,
    encreaseQuantity,
    deleteProduct,
    buyProduct,
    updateColor,
    updateSize,
    updateQuantity,
    checkOneStore,
  } = useContext(CartContext);
  // async function test() {
  //   await buyProduct(
  //     !checkOneStore[ind],
  //     id,
  //     colorChosen,
  //     sizeChosen,
  //     num,
  //     price
  //   );
  // }
  useEffect(() => {
    buyProduct(!checkOneStore[ind], id, colorChosen, sizeChosen, num, price);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkOneStore[ind], colorChosen, sizeChosen, num, price]);

  return (
    <div className="min-w-max flex justify-around items-center gap-3 w-full m-auto py-2 px-4 hover:bg-gray-50 border rounded-lg">
      <CountProvider quantity={num}>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="inline-block text-lg w-5 h-5"
            checked={check}
            onChange={() => {
              checkedProduct(id);
              buyProduct(check, id, colorChosen, sizeChosen, num, price);
            }}
          />
          <div>
            <img
              src={img ? img : "/avatar.avif"}
              alt="img"
              className="w-20 h-20 object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="line-clamp-2 w-40 font-semibold">{name}</div>
          </div>
        </div>
        <div
          onMouseOver={() => {
            DropRef.current.classList.remove("hidden");
            CaretRef.current.classList.add("rotate-180");
          }}
          onMouseLeave={() => {
            CaretRef.current.classList.remove("rotate-180");
            DropRef.current.classList.add("hidden");
          }}
        >
          <button className="border bg-gray-100 px-5 py-2 rounded-lg">
            <div className="flex items-center">
              Button
              <div className="inline-block" ref={CaretRef}>
                <FaCaretDown></FaCaretDown>
              </div>
            </div>
            <span>{colorChosen}, </span>
            <span>{sizeChosen}</span>
          </button>
          <div
            className="hidden absolute bg-gray-100 p-2 border rounded-md shadow-md"
            ref={DropRef}
          >
            <div className="font-semibold">
              Color:
              {color &&
                // eslint-disable-next-line react/prop-types
                color.map((item) => (
                  <div
                    key={item}
                    className={`inline-block border-2 px-2 py-1 rounded-md font-normal hover:border-green-500 hover:text-green-500 mr-1 ${
                      colorChosen === item && "border-green-500 text-green-500"
                    }}`}
                    onClick={() => {
                      setColorChosen(item);
                      updateColor(id, item);
                    }}
                  >
                    {item}
                  </div>
                ))}
            </div>
            {size && (
              <div className="font-semibold mt-1">
                size:
                {
                  // eslint-disable-next-line react/prop-types
                  size.map((item) => (
                    <div
                      key={item}
                      className={`inline-block border-2 px-2 py-1 rounded-md font-normal hover:border-green-500 hover:text-green-500 mr-1 ${
                        sizeChosen === item && `border-green-500 text-green-500`
                      } `}
                      onClick={() => {
                        setSizeChosen(item);
                        updateSize(id, item);
                      }}
                    >
                      {item}
                    </div>
                  ))
                }
              </div>
            )}
          </div>
        </div>
        <div>{price}</div>
        <div>
          <ButtonCart
            quantity={num}
            encreaseQuantity={encreaseQuantity}
            id={id}
            updateQuantity={updateQuantity}
          />
        </div>
        <Price price={price}></Price>



      </CountProvider>
    </div>
  );
};

export default CartItem;
