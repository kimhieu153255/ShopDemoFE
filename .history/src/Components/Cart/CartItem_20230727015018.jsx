import { useContext, useRef, useState } from "react";
import ButtonCart from "../Button/ButtonCart";
import { CountContext, CountProvider } from "../Contexts/CountContext";
import { FaCaretDown } from "react-icons/fa";

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
const CartItem = ({ img, color, size, price, name, check }) => {
  const CaretRef = useRef();
  const DropRef = useRef();
  const [colorChosen, setColorChosen] = useState(
    color ? color[0]?.toString() : ""
  );
  const [sizeChosen, setSizeChosen] = useState(size ? size[0].toString() : "");

  return (
    <div className="min-w-max flex justify-around items-center gap-3 w-full m-auto py-2 px-4 hover:bg-gray-50 border rounded-lg">
      <CountProvider>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="inline-block text-lg w-5 h-5"
            checked={check}
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
            <div>
              Button
              <div className="inline-block" ref={CaretRef}>
                <FaCaretDown className="inline-block"></FaCaretDown>
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
                    className="inline-block border-2 px-2 py-1 rounded-md font-normal hover:border-green-500 hover:text-green-500 mr-1"
                    onClick={() => setColorChosen(item)}
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
                      className="inline-block border-2 px-2 py-1 rounded-md font-normal hover:border-green-500 hover:text-green-500 mr-1"
                      onClick={() => setSizeChosen(item)}
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
          <ButtonCart />
        </div>
        <Price price={price}></Price>
        <button className="border p-2 px-3 rounded-lg bg-green-500 hover:bg-green-600 hover:ring-green-300">
          Delete
        </button>
      </CountProvider>
    </div>
  );
};

export default CartItem;
