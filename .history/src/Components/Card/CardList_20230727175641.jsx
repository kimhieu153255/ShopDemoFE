import { useContext } from "react";
import Card from "./Card";
import { CheckContext } from "../Contexts/CheckContext";

// const cardList = [
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo thun nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Quần jean nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Quần kaki nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
//   {
//     imgSrc: "https://picsum.photos/200/300",
//     title: "Áo khoác nam",
//     events: ["holiday", "sale"],
//     cost: "1000000",
//     num: "100",
//   },
// ];

// eslint-disable-next-line react/prop-types
const CardList = () => {
  const { cartItems } = useContext(CheckContext);
  return (
    <div className="grid gap-2 grid-cols-4 lg:grid-cols-5 p-2 xl:grid-cols-7">
      {
        // eslint-disable-next-line react/prop-types
        listCard.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            events={card.events}
            cost={card.cost}
            num={card.num}
          ></Card>
        ))
      }
    </div>
  );
};

export default CardList;
