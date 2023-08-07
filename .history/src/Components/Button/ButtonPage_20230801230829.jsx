import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const ButtonPage = (num, total) => {
  const [count, setCount] = useState(num);
  return (
    <div>
      <div className="flex w-32">
        <button
          className={
            `px-3 py-2 bg-gray-100 border rounded-l-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white` +
            (count <= 1 && `hidden`)
          }
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
          onChange={(e) => {
            if (e.target.value <= 0) return setCount(1);
            setCount(e.target.value);
          }}
          readOnly={true}
        >
          {count}/{total}
        </input>
        <button
          className={
            `px-3 py-2 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white` +
            (count >= total && `hidden`)
          }
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
