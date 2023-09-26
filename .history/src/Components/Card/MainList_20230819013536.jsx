import Card from "./Card";

// eslint-disable-next-line react/prop-types
const list = [
  {
    _id: "1",
    imgSrc: "https://cf.shopee.vn/file/1f0f8e3f0f3f0f3f0f3f0f3f0f3f0f3f",
    name: "Áo thun nam",
    events: ["Giảm 20%", "holiday"],
    price: "100.000đ",
    soldCount: 100,
    rate: 4,
  },
  {
    _id: "2",
    imgSrc: "https://cf.shopee.vn/file/1f0f8e3f0f3f0f3f0f3f0f3f0f3f0f3f",
    name: "Áo thun nam",
    events: ["Giảm 20%", "holiday"],
    price: "100.000đ",
    soldCount: 100,
    rate: 4,
  },
  {
    _id: "3",
    imgSrc: "https://cf.shopee.vn/file/1f0f8e3f0f3f0f3f0f3f0f3f0f3f0f3f",
    name: "Áo thun nam",
    events: ["Giảm 20%", "holiday"],
    price: "100.000đ",
    soldCount: 100,
    rate: 4,
  },
];
const MainList = () => {
  return (
    <div className="w-full">
      {
        // eslint-disable-next-line react/prop-types
        list?.map((el, ind) => (
          <Card
            key={ind}
            id={el._id}
            imgSrc={el.imgSrc}
            title={el.name}
            events={el.events}
            cost={el.price}
            num={el.soldCount}
            rate={el.rate}
          ></Card>
        ))
      }
    </div>
  );
};

export default MainList;
