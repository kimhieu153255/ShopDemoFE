// import React from "react";

import {
  FaCommentAlt,
  FaPlus,
  FaShoppingBag,
  FaStar,
  FaUserCheck,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { CountProvider } from "../Components/Contexts/CountContext";
import SortBar from "../Components/Layouts/SortBar";
import Catalog from "../Components/Sidebar/Catalog";
import CardList from "../Components/Card/CardList";

// const list = [
//   {
//     store: "Store 1",
//     items: [
//       {
//         id: 1,
//         name: "Product 1",
//         price: 100,
//         img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
//         color: ["red", "blue", "green"],
//         size: ["S", "M", "L"],
//         quantity: 1,
//       },
//       {
//         id: 2,
//         name: "Product 2",
//         price: 200,
//         img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
//         color: ["red", "blue", "green"],
//         size: ["S", "M", "L"],
//         quantity: 2,
//       },
//     ],
//   },
//   {
//     store: "Store 2",
//     items: [
//       {
//         id: 3,
//         name: "Product 3",
//         price: 300,
//         img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
//         color: ["red", "blue", "green"],
//         size: ["S", "M", "L"],
//         quantity: 3,
//       },
//       {
//         id: 4,
//         name: "Product 4",
//         price: 400,
//         img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
//         color: ["red", "blue", "green"],
//         size: ["S", "M", "L"],
//         quantity: 4,
//       },
//     ],
//   },
// ];

const cardList = [
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo thun nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Quần jean nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Quần kaki nam",
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
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo khoác nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
];

const Store = () => {
  return (
    <div className="min-w-max w-full">
      <div className="flex m-4 gap-5 bg-gray-100 rounded-md min-w-max shadow-md">
        <img
          src="/logoShop.avif"
          alt="bg"
          className="brightness-50 opacity-70 inline-block w-[350px] h-[150px] object-cover rounded-md absolute"
        />
        <div className=" flex flex-col p-3 w-[350px] h-[150px] text-white font-semibold z-10 shadow-md">
          <div className="flex gap-5 justify-start items-start m-1 w-[350px]">
            <img
              src="/avatar.avif"
              alt="logoShop"
              className="w-20 h-20 object-cover rounded-full ring-gray-300 ring-4 ring-opacity-50"
            />
            <div className="inline-block mt-4">
              <span className="text-xl ">GUGOSTART</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-1 min-w-max">
            <span className="px-3 py-1 border rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-green-500">
              <FaPlus></FaPlus>
              Follow
            </span>
            <span className="px-3 py-1 border rounded-md flex justify-center items-center gap-2 cursor-pointer hover:bg-green-500">
              <FaCommentAlt></FaCommentAlt>
              Chat
            </span>
          </div>
        </div>
        <div className="flex justify-around gap-10 text-xl items-center p-4 font-semibold h-full w-full mr-40">
          <div>
            <div>
              <FaShoppingBag className="inline-block mr-2"></FaShoppingBag>
              Products: {}
            </div>
            <div>
              <FaUserPlus className="inline-block mr-2"></FaUserPlus>Following:
              {}
            </div>
          </div>
          <div>
            <div>
              <FaUsers className="inline-block mr-2"></FaUsers>Followers: {}
            </div>
            <div>
              <FaStar className="inline-block mr-2"></FaStar>Rating: {}
            </div>
            <div>
              <FaUserCheck className="inline-block mr-2"></FaUserCheck>Joined:{" "}
              {}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mx-4">
        <Catalog></Catalog>
        <div className="flex flex-col w-full">
          <CountProvider>
            <SortBar></SortBar>
            <CardList></CardList>
          </CountProvider>
        </div>
      </div>
    </div>
  );
};

export default Store;
