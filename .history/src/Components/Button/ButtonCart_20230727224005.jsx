// import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CountContext } from "../Contexts/CountContext";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const ButtonCart = ({ id, encreaseQuantity }) => {
  const [count, setCount] = useContext(CountContext);
  return (
    <div className="flex w-32">
      <button
        className="px-3 py-2 bg-gray-100 border rounded-l-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white"
        onClick={() => {
          setCount((count) => {
            if (count > 1) return count - 1;
            return count;
          });
          if (count > 1) encreaseQuantity(id, false);
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
          if (e.target.value > 0) encreaseQuantity(id, false);
        }}
      ></input>
      <button
        className="px-3 py-2 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white"
        onClick={() => {
          setCount((count) => count + 1);
          encreaseQuantity(id, true);
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default ButtonCart;
