import { useRef } from "react";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";

// eslint-disable-next-line react/prop-types
const Card = ({ id, imgSrc, title, events, cost, num, rate }) => {
  const user = JSON.parse(Cookies.get("user")?.toString() || null);
  const token = Cookies.get("token");
  const addToCart = async (productId) => {
    try {
      const res = await axios.post(
        `http://localhost:20474/cart/api/add`,
        {
          userId: JSON.parse(Cookies.get("user")?.toString() || null)._id,
          productId,
          quantity: 1,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data) {
        window.location.reload();
        //navigate về trang hiện tại
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const displayRef = useRef();
  const dispatch = useDispatch();
  return (
    <div
      className="inline-block w-44 bg-gray-200 shadow-md hover:border hover:border-green-500 hover:ring-green-500 rounded-lg cursor-pointer hover:scale-105 hover:border-b-0 hover:rounded-b-none transition-all duration-300"
      onMouseOver={() => displayRef.current.classList.remove("hidden")}
      onMouseLeave={() => displayRef.current.classList.add("hidden")}
    >
      <div className="rounded-lg h-48 m-1">
        <img
          src={imgSrc || "/defaultImage.png"}
          alt="image"
          className="inline-block rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 py-2 text-sm">
        <div className="word-break line-clamp-2 overflow-hidden font-semibold text-base">
          {title || "this is a title"}
        </div>
        <div className="h-6">
          {events &&
            // eslint-disable-next-line react/prop-types
            events.map((event) => (
              <div
                key={event}
                className="p-1 border shadow-sm inline-block bg-red-500 visible rounded-md text-white text-xs"
              >
                {event}
              </div>
            ))}
        </div>
        <Rating rate={rate}></Rating>
        <div className="flex justify-between bottom-0 font-semibold ">
          <span>{cost || "xxxxx đ"}</span>
          <span>Sold: {num || "0"}</span>
        </div>
      </div>
      <div
        className="hidden w-full z-10 border border-green-500 rounded-b-lg ring-1 hover:ring-green-600 ring-green-500 transition-all duration-300 absolute"
        ref={displayRef}
      >
        <button
          className="w-full bg-green-500 text-white font-semibold py-1.5 rounded-lg rounded-t-none hover:bg-green-600 z-10 duration-300 transition-all"
          onClick={(e) => {
            e.preventDefault();
            addToCart(id);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
