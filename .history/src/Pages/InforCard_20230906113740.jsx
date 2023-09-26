import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaChevronRight, FaMinus, FaPlus } from "react-icons/fa";
import Rating from "../Components/Card/Rating";

const InforCard = ({ proId }) => {
  proId = "64ce67c9807550b7861e00c3";
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `http://localhost:20474/product/api/getProductById?productId=${proId}`
      );
      console.log(res.data.data);
      setProduct(res.data.data);
    };
    getProduct();
  }, [proId]);

  return (
    <div className="mx-auto lg:mx-40 ">
      {product && (
        <div className="flex items-center gap-2 font-semibold">
          <a href="/home" className="hover:text-green-500 text-gray-500">
            Home
          </a>
          <FaChevronRight></FaChevronRight>
          <a
            href={`/category/${product?.product?.category}`}
            className="hover:text-green-500 text-gray-500"
          >
            {product?.product?.category}
          </a>
          <FaChevronRight></FaChevronRight>
          <a href={product?.product?.name} className="text-green-500">
            {product?.product?.name}
          </a>
        </div>
      )}
      <div className="flex py-5 bg-gray-100">
        {/* change product2 to inforProducts */}
        <div className="flex flex-col gap-3 items-center justify-center mx-10 ">
          <div className="w-fit h-fit border">
            <img
              src={product?.product?.imgSrc}
              alt="image"
              className="w-[600px] h-[500px] object-cover"
            />
          </div>
          <div className="p-1 hover:border-green-500 hover:border">
            <img
              src={product?.product?.imgSrc}
              alt="imageSmall"
              className="w-20 h-24 object-cover"
            />
          </div>
        </div>
        <div className="w-full mx-5">
          <div>{product?.product?.name}</div>
          <div className="flex items-center">
            <Rating rate={product?.product?.rate}></Rating>
            <span className="text-gray-500 pr-3 border-r-2 mr-2">
              Rating: <b>{product?.product?.numberRate}</b>
            </span>
            <span className="text-gray-500">
              Sold: <b>{product?.product?.soldCount}</b>
            </span>
          </div>
          <div className="font-semibold text-amber-600 text-3xl p-3 bg-gray-100 rounded-md">
            {product?.product?.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
          <div>
            <span></span>
          </div>
          <div className="flex gap-10 items-center">
            <span className="font-semibold">Quality </span>
            <div className="flex">
              <button className="px-3 bg-gray-200 border rounded-l-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white py-1">
                <FaMinus />
              </button>
              <input
                type="text"
                min="1"
                defaultValue="1"
                readOnly
                className="bg-gray-100 w-14 text-center border border-gray-300 py-1"
              />
              <button className="px-3 py-1 bg-gray-200 border rounded-r-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white">
                <FaPlus></FaPlus>
              </button>
            </div>
            {product?.product?.quantity > 0 && (
              <span className="text-gray-500">
                {product?.product?.quantity} items available
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

InforCard.propTypes = {
  proId: PropTypes.string,
};

export default InforCard;
