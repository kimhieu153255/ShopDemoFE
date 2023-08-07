import { useContext } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { PageContext } from "../Contexts/PageContext";

// eslint-disable-next-line react/prop-types
const ButtonPage = () => {
  const { page, setPage, total } = useContext(PageContext);
  return (
    <div>
      <div className="flex w-32">
        <button
          className={
            `px-3 py-2 bg-gray-100 border rounded-l-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white` +
            (page <= 1 && `hidden`)
          }
          onClick={() => {
            setPage((Num) => {
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
          value={Num + "/" + total}
          readOnly={true}
        ></input>
        <button
          className={
            `px-3 py-2 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white` +
            (Num >= total && `hidden`)
          }
          onClick={() => {
            setNum((Num) => {
              if (Num < total) return Num + 1;
              return Num;
            });
          }}
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default ButtonPage;
