import { createContext, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ButtonCart = ({ number }) => {
  const countContext = createContext();
  const countProvider = (props) => {
    const [count, setCount] = useState();
    const value = [count, setCount];
    return (
      <countContext.Provider value={value} {...props}></countContext.Provider>
    );
  };
  return (
    <div className="flex w-32">
      <countProvider
        // eslint-disable-next-line react/no-unknown-property
        number={number}
      >
        <button className=" p-2 text-md text-center items-center justify-center border bg-gray-100 rounded-l-md">
          <FaMinus />
        </button>
        <input
          type="text"
          className="w-16"
          defaultValue={number}
          onChange={(e) => {
            number = e.target.value;
          }}
        />
        <button
          className=" px-3 py-2 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center"
          onClick={() => {
            number++;
          }}
        >
          <FaPlus />
        </button>
      </countProvider>
    </div>
  );
};

export default ButtonCart;
