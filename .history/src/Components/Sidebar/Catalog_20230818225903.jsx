import { FaAngleDown, FaAngleUp, FaList, FaListUl } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import axios from "axios";
import Cookies from "js-cookie";
import { CategoryArr } from "../../helpers/data";

const Catalog = () => {
  const storeId = Cookies.get("storeId");
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const urlCategory = `http://localhost:20474/store/api/getAllCategories`;
  const getAllCategories = async (token, storeId) => {
    try {
      const response = await axios.get(urlCategory, {
        params: {
          storeId: storeId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data) return response.data?.data?.categories || [];
      return [];
    } catch (err) {
      return [];
    }
  };
  const ref = useRef();
  ref.current = getAllCategories;

  useEffect(() => {
    const Categories = ref.current(token, storeId);
    Categories.then((res) => setData(res));
  }, [token, storeId]);

  return (
    <div className="flex flex-col h-fit bg-gray-100 p-3 rounded-md border min-w-max">
      <div className="flex items-center justify-center text-lg gap-3 border-b-[1.5px] border-gray-300 pb-2 mb-3 w-44 font-semibold">
        <FaListUl></FaListUl>
        Category
      </div>
      <div className="px-2 flex flex-col ml-10">
        {CategoryArr.map((el, ind) => {
          if (ind < 5 * count)
            return (
              <div
                key={ind}
                className="hover:text-green-500 py-1 w-full font-semibold cursor-pointer text-base"
                onClick={(e) => {
                  e.preventDefault();
                  setUrl(`/category/${el.name}`);
                }}
              >
                <span className="w-40">{el.name}</span>
              </div>
            );
        })}
      </div>
      <div className="flex justify-center gap-1 mt-2 ">
        {count < total && (
          <span
            className="py-1 px-2 cursor-pointer flex gap-1 items-center font-semibold border border-gray-300 rounded-md hover:bg-green-500 text-sm bg-gray-200"
            onClick={() =>
              setCount((count) => {
                if (count < total) return count + 1;
                return count;
              })
            }
          >
            <FaAngleDown className="text-sm"></FaAngleDown>
            Extend
          </span>
        )}
        {count > 1 && (
          <span
            className="p-1 cursor-pointer flex gap-1 items-center font-semibold border border-gray-300 rounded-md hover:bg-green-500 text-sm"
            onClick={() =>
              setCount((count) => {
                if (count > 1) return count - 1;
                return count;
              })
            }
          >
            <FaAngleUp className="text-sm"></FaAngleUp>
            Collapse
          </span>
        )}
      </div>
    </div>
  );
};

export default Catalog;
