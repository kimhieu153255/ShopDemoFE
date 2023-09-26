import { useNavigate, useParams } from "react-router-dom";
import List from "./List";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const list = [
  {
    _id: "1",
    imgSrc: "https://cf.shopee.vn/file/1f0f8e3f0f3f0f3f0f3f0f3f0f3f0f3f",
    name: "Áo thun nam",
    events: ["Giảm 20%", "holiday"],
    price: 100000,
    soldCount: 100,
    rate: 4,
  },
  {
    _id: "2",
    imgSrc: "https://cf.shopee.vn/file/1f0f8e3f0f3f0f3f0f3f0f3f0f3f0f3f",
    name: "Áo thun nam",
    events: ["Giảm 20%", "holiday"],
    price: 100.0,
    soldCount: 100,
    rate: 4,
  },
  {
    _id: "3",
    imgSrc: "https://cf.shopee.vn/file/1f0f8e3f0f3f0f3f0f3f0f3f0f3f0f3f",
    name: "Áo thun nam",
    events: ["Giảm 20%", "holiday"],
    price: 100000,
    soldCount: 100,
    rate: 4,
  },
  {
    _id: "5",
    imgSrc: "https://cf.shopee.vn/file/1f0f8e3f0f3f0f3f0f3f0f3f0f3f0f3f",
    name: "Áo thun nam",
    events: ["Giảm 20%", "holiday"],
    price: 100000,
    soldCount: 100,
    rate: 4,
  },
  {
    _id: "4",
    imgSrc: "https://cf.shopee.vn/file/1f0f8e3f0f3f0f3f0f3f0f3f0f3f0f3f",
    name: "Áo thun nam",
    events: ["Giảm 20%", "holiday"],
    price: 100.0,
    soldCount: 100,
    rate: 4,
  },
  {
    _id: "6",
    imgSrc: "https://cf.shopee.vn/file/1f0f8e3f0f3f0f3f0f3f0f3f0f3f0f3f",
    name: "Áo thun nam",
    events: ["Giảm 20%", "holiday"],
    price: 100000,
    soldCount: 100,
    rate: 4,
  },
  {
    _id: "7",
    imgSrc: "https://cf.shopee.vn/file/1f0f8e3f0f3f0f3f0f3f0f3f0f3f0f3f",
    name: "Áo thun nam",
    events: ["Giảm 20%", "holiday"],
    price: 100000,
    soldCount: 100,
    rate: 4,
  },
];

const MainList = ({ url, page, setTotalPage }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { category } = useParams();
  const funcGetProductByCategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:20474/product/api/getAllProductByCategory${url}`,
        {
          params: { category, page },
        }
      );
      if (res.data) {
        console.log(res.data);
        setTotalPage(res.data.totalPage);
        setData(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const funcRef = useRef();
  funcRef.current = funcGetProductByCategory;

  useEffect(() => {
    funcRef.current();
    console.log(url);
  }, [page, category, url]);

  return <List list={data}></List>;
};

MainList.propTypes = {
  url: PropTypes.string,
  page: PropTypes.number,
  setTotalPage: PropTypes.func,
  category: PropTypes.string,
};

export default MainList;
