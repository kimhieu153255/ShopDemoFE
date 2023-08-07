import { createContext, useEffect, useState } from "react";

const cardList1 = [
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo thun nam1",
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
    imgSrc: "/avatar.avif",
    title: "Áo thun nam2",
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
  const [storeId, setStoreId] = useState(1);

  const [dataCurrentPage, setDataCurrentPage] = useState([]);

  useEffect(() => {
    if (storeId === "1") setProducts(cardList1);
    if (storeId === "2") setProducts(cardList2);
    setCategories([
      {
        id: 1,
        name: "Áo",
      },
      {
        id: 2,
        name: "Quần",
      },
      {
        id: 3,
        name: "Giày",
      },
      {
        id: 4,
        name: "Phụ kiện",
      },
    ]);
  }, [storeId]);

  useEffect(() => {
    setTotal(Math.ceil(products.length / 14));
    setPage(1);
    setDataCurrentPage(LoadPage(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  useEffect(() => {
    console.log("storeContext Page: ", page);
    console.log("storeContext products: ", products);
    const temp = LoadPage(page);
    setDataCurrentPage(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const LoadPage = (page) => {
    if (products.length === 0) return [];
    let arr = [];
    for (let i = (page - 1) * 14; i < page * 14; i++) {
      if (i < products.length) arr.push(products[i]);
    }
    console.log("storeContext arr: ", arr);
    return arr;
  };

  const loadStore = (id) => {
    setStoreId(id);
  };

  const value = {
    products,
    setProducts,
    categories,
    setCategories,
    page,
    setPage,
    total,
    setTotal,
    storeId,
    setStoreId,
    loadStore,
    LoadPage,
    dataCurrentPage,
  };
  return (
    <StoreContext.Provider value={value} {...props}></StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
