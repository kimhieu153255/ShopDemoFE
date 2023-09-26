import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import List from "./List";

const urlGetAllProByStoreId = `http://localhost:20474/product/api/getAllProductsByStoreId`;

const CardList = ({ storeId, url, page, setTotalPage }) => {
  console.log("vào CardList");
  const [data, setData] = useState([]);

  const getAllProducts = async (token, page) => {
    try {
      const response = await axios.get(urlGetAllProByStoreId + url, {
        params: { storeId, page },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data) {
        console.log("response", response.data);
        setTotalPage(response.data?.totalPage);
        setData(response.data?.data || []);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const funcRef = useRef();
  funcRef.current = getAllProducts;

  useEffect(() => {
    funcRef.current(Cookies.get("token"), page);
  }, [page, storeId, url]);

  return <List list={data}></List>;
};

CardList.propTypes = {
  storeId: PropTypes.string,
  url: PropTypes.string,
  page: PropTypes.number,
  totalPage: PropTypes.number,
  setTotalPage: PropTypes.func,
};

export default CardList;
