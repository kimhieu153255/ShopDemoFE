import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  FaAngleRight,
  FaChevronRight,
  FaMinus,
  FaPlus,
  FaWindowMinimize,
} from "react-icons/fa";
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
    <div>
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
      <div className="flex">
        {/* change product2 to inforProducts */}
        <div>
          <div>
            <img src={product?.product?.image} alt="image" />
          </div>
          <div>
            <img src={product?.product?.image} alt="imageSmall" />
          </div>
        </div>
        <div>
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
            <span>Quality: </span>
            <div className="flex items-center justify-center">
              <button className="px-3 py-1 bg-gray-100 border rounded-l-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white">
                <FaMinus />
              </button>
              <input
                type="number"
                min="1"
                defaultValue="1"
                readOnly
                className="bg-gray-200 w-14 text-center border border-gray-300"
              />
              <button className="px-3 py-1 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white">
                <FaPlus></FaPlus>
              </button>
            </div>
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
