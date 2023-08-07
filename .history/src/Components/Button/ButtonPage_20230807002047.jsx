import { useContext } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { PageContext } from "../Contexts/PageContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ButtonPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const pagex = searchParams.get("page");
  const sort = searchParams.get("sort");

  const { page, setPage, total } = useContext(PageContext);
  const navigate = useNavigate();
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
            if (page > 1) navigate(`?page=${page - 1}`);
          }}
        >
          <FaCaretLeft />
        </button>
        <input
          type="text"
          className="w-16 text-center border-t border-b text-md font-semibold"
          value={page + "/" + total}
          readOnly={true}
        ></input>
        <button
          className={
            `px-3 py-2 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white` +
            (page >= total && `hidden`)
          }
          onClick={() => {
            setPage((Num) => {
              if (Num < total) return Num + 1;
              return Num;
            });
            if (page < total) navigate(`?page=${page + 1}`);
          }}
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default ButtonPage;
