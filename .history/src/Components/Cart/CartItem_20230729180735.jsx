import { useContext, useRef, useState } from "react";
import { FaCaretDown, FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../Contexts/CartContext";

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const CartItem = ({ img, color, size, price, name, check, id, num }) => {
  const CaretRef = useRef();
  const DropRef = useRef();
  const [count, setCount] = useState(num);
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
  } = useContext(CartContext);

  return (
    <div className="min-w-max flex justify-around items-center gap-3 w-full m-auto py-2 px-4 hover:bg-gray-50 border rounded-lg">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="inline-block text-lg w-5 h-5"
          defaultChecked={!check}
          onClick={() => {
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
        <div className="flex w-32">
          <button
            className="px-3 py-2 bg-gray-100 border rounded-l-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white"
            onClick={() => {
              setCount((count) => {
                if (count > 1) return count - 1;
                return count;
              });
              if (count > 1) {
                encreaseQuantity && encreaseQuantity(id, false);
                updateQuantity && updateQuantity(id, count - 1);
              }
            }}
          >
            <FaMinus />
          </button>
          <input
            type="text"
            className="w-16 text-center border-t border-b text-md font-semibold"
            value={count}
            onChange={(e) => {
              if (e.target.value <= 0) return setCount(1);
              setCount(e.target.value);
              if (e.target.value > 1) {
                encreaseQuantity(id, false);
                updateQuantity && updateQuantity(id, e.target.value);
              }
            }}
          ></input>
          <button
            className="px-3 py-2 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white"
            onClick={() => {
              setCount((count) => count + 1);
              if (encreaseQuantity) encreaseQuantity(id, true);
              updateQuantity && updateQuantity(id, count + 1);
            }}
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="w-20 font-bold text-red-500 ml-5"> {count * price}</div>
      <button
        className="border p-2 px-3 rounded-lg bg-green-500 hover:bg-green-600 hover:ring-green-300 text-white font-semibold"
        onClick={() => deleteProduct(id)}
      >
        Delete
      </button>
      {/* </CountProvider> */}
    </div>
  );
};

export default CartItem;
