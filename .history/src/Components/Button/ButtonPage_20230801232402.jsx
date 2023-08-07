import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ButtonPage = ({ numPage, total }) => {
  const [Num, setNum] = useState(numPage);
  return (
    <div>
      <div className="flex w-32">
        <button
          className={
            `px-3 py-2 bg-gray-100 border rounded-l-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white` +
            (Num <= 1 && `hidden`)
          }
          onClick={() => {
            setNum((Num) => {
              if (Num > 1) return Num - 1;
              return Num;
            });
          }}
        >
          <FaCaretLeft />
        </button>
        <input
          type="text"
          className="w-16 text-center border-t border-b text-md font-semibold"
          onChange={(e) => {
            if (e.target.value <= 0) return setNum(1);
            setNum(e.target.value);
          }}
          value={{ Num } + "/" + { total }}
          readOnly={true}
        ></input>
        <button
          className={
            `px-3 py-2 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white` +
            (Num >= total && `hidden`)
          }
          onClick={() => {
            setNum((Num) => Num + 1);
          }}
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default ButtonPage;
