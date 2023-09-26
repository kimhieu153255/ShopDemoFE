import List from "./List";

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

const MainList = () => {
  

  return (
    <div className="grid gap-2 grid-cols-3 md:grid-cols-4 py-2 xl:grid-cols-5">
      <List list={list}></List>
    </div>
  );
};

export default MainList;
