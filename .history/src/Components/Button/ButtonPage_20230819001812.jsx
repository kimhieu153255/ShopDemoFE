import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const ButtonPage = ({ page, setPage, totalPage }) => {
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
            page > 1 && setPage(page - 1);
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
            if (page < total) navigate(link(page + 1));
          }}
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

ButtonPage.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  totalPage: PropTypes.number,
};

export default ButtonPage;
