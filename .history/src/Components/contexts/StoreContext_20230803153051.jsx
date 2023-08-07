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
    createdAt: "2021-09-01T00:00:00.000Z",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Quần jean nam",
    events: ["holiday", "sale"],
    cost: 1200000,
    rate: 4.5,
    num: 10,
    createdAt: "2021-09-02T00:00:00.000Z",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Quần kaki nam",
    events: ["holiday", "sale"],
    cost: 1000000,
    rate: 4.1,
    num: 90,
    createdAt: "2021-09-03T00:00:00.000Z",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: 102000,
    rate: 5,
    num: 101,
    createdAt: "2021-09-04T00:00:00.000Z",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: 600000,
    rate: 3,
    num: 100,
    createdAt: "2021-09-05T00:00:00.000Z",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: 1100000,
    rate: 2.1,
    num: 100,
    createdAt: "2021-09-06T00:00:00.000Z",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1300000",
    rate: "2.5",
    num: "100",
    createdAt: "2021-09-07T00:00:00.000Z",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    rate: 4.5,
    num: "81",
    createdAt: "2021-09-08T00:00:00.000Z",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    rate: 3,
    num: "101",
    createdAt: "2021-09-09T00:00:00.000Z",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1010000",
    rate: 3.5,
    num: "100",
    createdAt: "2021-09-10T00:00:00.000Z",
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
    // get data from server
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
    return arr;
  };

  const loadStore = (id) => {
    setStoreId(id);
  };

  const SortByPrice = (isAsc) => {
    if (isAsc) {
      const temp = [...products];
      temp.sort((a, b) => {
        return a.cost - b.cost;
      });
      setProducts(temp);
    } else {
      const temp = [...products];
      temp.sort((a, b) => {
        return b.cost - a.cost;
      });
      setProducts(temp);
    }
  };

  const SortBySold = (isAsc) => {
    if (isAsc) {
      const temp = [...products];
      temp.sort((a, b) => {
        return a.num - b.num;
      });
      setProducts(temp);
    } else {
      const temp = [...products];
      temp.sort((a, b) => {
        return b.num - a.num;
      });
      setProducts(temp);
    }
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
    SortByPrice,
    SortBySold,
  };
  return (
    <StoreContext.Provider value={value} {...props}></StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
