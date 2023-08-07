import { useState } from "react";
import { FaCaretLeft, FaCaretRight, FaPlus } from "react-icons/fa";

const ButtonPage = (num) => {
  const [count, setCount] = useState(num);
  return (
    <div>
      <div className="flex w-32">
        <button
          className="px-3 py-2 bg-gray-100 border rounded-l-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white"
          onClick={() => {
            setCount((count) => {
              if (count > 1) return count - 1;
              return count;
            });
          }}
        >
          <FaCaretLeft />
        </button>
        <input
          type="text"
          className="w-16 text-center border-t border-b text-md font-semibold"
          value={count}
          onChange={(e) => {
            if (e.target.value <= 0) return setCount(1);
            setCount(e.target.value);
          }}
        ></input>
        <button
          className="px-3 py-2 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default ButtonPage;
