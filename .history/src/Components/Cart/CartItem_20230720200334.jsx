import { createContext, useState } from "react";
import ButtonCart from "../Button/ButtonCart";

const countContext = createContext();

// eslint-disable-next-line no-unused-vars
function countProvider(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(1);
  return (
    <countContext.Provider
      value={[count, setCount]}
      {...props}
    ></countContext.Provider>
  );
}
// eslint-disable-next-line react/prop-types
const CartItem = ({ img, color, size, price, number, name }) => {
  return (
    <div className="flex justify-around items-center gap-3 w-4/5 m-auto p-2 hover:bg-gray-50 border rounded-lg">
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
        <button>
          <div>Button</div>
          <span>{color[0]}, </span>
          <span>{size[0]}</span>
        </button>
        <div className="hidden">
          {color &&
            // eslint-disable-next-line react/prop-types
            color.map((item) => <div key={item}>{item}</div>)}
          {size &&
            // eslint-disable-next-line react/prop-types
            size.map((item) => <div key={item}>{item}</div>)}
        </div>
      </div>
      <div>{price}</div>
      <countProvider>
        <div>
          <ButtonCart number={number} />
        </div>
        <div>{number * price}</div>
      </countProvider>
      <button className="border p-2 px-3 rounded-lg bg-green-500 hover:bg-green-600 hover:ring-green-300">
        Delete
      </button>
    </div>
  );
};

export default CartItem;
