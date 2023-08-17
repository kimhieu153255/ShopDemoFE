import { FaList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import useSWR from "swr";
// import axios from "axios";
// import Cookies from "js-cookie";
import { useContext } from "react";
import { ShopContext } from "../Contexts/ShopContext";

// eslint-disable-next-line react/prop-types
const Catalog = ({ categories }) => {
  const navigate = useNavigate();
  const { setPage } = useContext(ShopContext);
  return (
    <div className="flex flex-col h-fit bg-gray-100 p-3 rounded-md border min-w-max">
      <div className="flex gap-2 items-center font-semibold py-1">
        <FaList></FaList>
        <span>Catalog</span>
      </div>
      <hr className="my-2"></hr>
      <div className="flex flex-col">
        {
          // eslint-disable-next-line react/prop-types
          categories.map((item, index) => (
            <div
              key={index}
              className="hover:text-green-500 py-1 px-3 font-semibold cursor-pointer"
              onClick={() => {
                setPage(1);
                navigate(`/shop?category=${item}`);
              }}
            >
              {item}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Catalog;
