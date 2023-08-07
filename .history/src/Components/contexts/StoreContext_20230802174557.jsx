import { createContext, useEffect, useState } from "react";

const cardList1 = [
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo thun nam",
    events: ["holiday", "sale"],
    cost: 1100000,
    rate: 4.5,
    num: 100,
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Quần jean nam",
    events: ["holiday", "sale"],
    cost: 1200000,
    rate: 4.5,
    num: 10,
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Quần kaki nam",
    events: ["holiday", "sale"],
    cost: 1000000,
    rate: 4.1,
    num: 90,
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: 102000,
    rate: 5,
    num: 101,
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: 1000000,
    rate: 3,
    num: 100,
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: 1000000,
    rate: 1,
    num: 100,
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    rate: "2.5",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    rate: 4.5,
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    rate: 3,
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    rate: 3.5,
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
];

const cardList2 = [
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo thun nam",
    events: ["holiday", "sale"],
    cost: 1100000,
    rate: 5,
    num: 100,
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Quần jean nam",
    events: ["holiday", "sale"],
    cost: 1200000,
    rate: 4.5,
    num: 10,
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Quần kaki nam",
    events: ["holiday", "sale"],
    cost: 1000000,
    rate: 4.1,
    num: 90,
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: 102000,
    rate: 5,
    num: 101,
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: 1000000,
    rate: 3,
    num: 100,
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: 1000000,
    rate: 1,
    num: 100,
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    rate: "2.5",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    rate: 4.5,
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    rate: 3,
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    rate: 3.5,
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
];

const StoreContext = createContext();
const StoreProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  useEffect(() => {
    setProducts(cardList);
    setCategories(["Category 1", "Category 2", "Category 3"]);
    // eslint-disable-next-line react/prop-types
  }, [props.id]);

  const value = {
    products,
    setProducts,
    categories,
    setCategories,
    page,
    setPage,
    total,
    setTotal,
  };
  return (
    <StoreContext.Provider value={value} {...props}></StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
