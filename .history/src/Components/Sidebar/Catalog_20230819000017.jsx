import { FaAngleDown, FaAngleUp, FaListUl } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

const Catalog = ({ setUrl, url }) => {
  const storeId = Cookies.get("storeId");
  const token = Cookies.get("token");
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

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
      console.log("response", response.data);
      if (response.data) {
        setData(response.data?.data?.categories || []);
        setTotal(Math.ceil(response.data?.data?.categories?.length) / 5 || 0);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const ref = useRef();
  ref.current = getAllCategories;

  useEffect(() => {
    ref.current(token, storeId);
  }, [token, storeId]);

  return (
    <div className="flex flex-col h-fit bg-gray-100 p-3 rounded-md border min-w-max">
      <div className="flex items-center justify-center text-lg gap-3 border-b-[1.5px] border-gray-300 pb-2 mb-3 w-44 font-semibold">
        <FaListUl></FaListUl>
        Category
      </div>
      <div className="px-2 flex flex-col ml-10">
        {data.map((el, ind) => {
          if (ind < 5 * count)
            return (
              <div
                key={ind}
                className="hover:text-green-500 py-1 w-full font-semibold cursor-pointer text-base"
                onClick={(e) => {
                  e.preventDefault();
                  if(url.includes("category")){
                    setUrl(
                      url.replace(
                        /category=(\w+)/,
                        `category=${el}`
                      )
                    );
                  }else{
                    setUrl((url) => url + `&category=${el}`);
                  }
                }}
              >
                <span className="w-40">{el}</span>
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

Catalog.propTypes = {
  setUrl: PropTypes.func,
  url: PropTypes.string,
};

export default Catalog;
