import { useContext, useRef } from "react";
import ButtonCart from "../Button/ButtonCart";
import { CountContext, CountProvider } from "../Contexts/CountContext";
import { FaCaretDown } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Price = ({ price }) => {
  const [count] = useContext(CountContext);
  return (
    <>
      <div className="w-20"> {count * price}</div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const CartItem = ({ img, color, size, price, name }) => {
  const CaretRef = useRef();
  const DropRef = useRef();
  return (
    <div className="min-w-max flex justify-around items-center gap-3 w-4/5 m-auto py-2 px-4 hover:bg-gray-50 border rounded-lg">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="inline-block text-lg w-5 h-5 checked:bg-green-500 checked:border-transparent"
        />
        <div>
          <img
            src={img}
            alt="img"
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>
        <div>
          <div className="line-clamp-2 w-40">{name}</div>
        </div>
      </div>
      <div>
        <button
          className="border bg-gray-100 px-5 py-2 rounded-lg"
          onMouseOver={() => {
            DropRef.current.classList.remove("hidden");
          }}
          onMouseLeave={() => {
            DropRef.current.classList.add("hidden");
          }}
          onClick={() => {
            CaretRef.current.classList.toggle("rotate-180");
          }}
        >
          <div>
            Button
            <div className="inline-block" ref={CaretRef}>
              <FaCaretDown className="inline-block"></FaCaretDown>
            </div>
          </div>
          <span>{color[0]}, </span>
          <span>{size[0]}</span>
        </button>
        <div className="hidden top-0" ref={DropRef}>
          {color &&
            // eslint-disable-next-line react/prop-types
            color.map((item) => <div key={item}>{item}</div>)}
          {size &&
            // eslint-disable-next-line react/prop-types
            size.map((item) => <div key={item}>{item}</div>)}
        </div>
      </div>
      <div>{price}</div>
      <CountProvider>
        <div>
          <ButtonCart />
        </div>
        <Price price={price}></Price>
      </CountProvider>
      <button className="border p-2 px-3 rounded-lg bg-green-500 hover:bg-green-600 hover:ring-green-300">
        Delete
      </button>
    </div>
  );
};

export default CartItem;
