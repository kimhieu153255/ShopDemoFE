import { useNavigate } from "react-router-dom";
import List from "./List";
import PropTypes from "prop-types";

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

const MainList = ({ url, page, setTotalPage, category }) => {
  const navigate = useNavigate();
  const funcGetProductByCategory = async () => {
    const res = await fetch(


  return <List list={list}></List>;
};

MainList.propTypes = {
  url: PropTypes.string,
  page: PropTypes.number,
  setTotalPage: PropTypes.func,
  category: PropTypes.string,
};

export default MainList;
