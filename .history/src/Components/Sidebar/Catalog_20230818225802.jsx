import { FaList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import axios from "axios";
import Cookies from "js-cookie";

const Catalog = () => {
  const storeId = Cookies.get("storeId");
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const { setPage } = useContext(ShopContext);
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
      src/Components/Sidebar/SidebarFilter.jsx
    </div>
  );
};

export default Catalog;
