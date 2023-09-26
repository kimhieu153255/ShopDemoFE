import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaChevronRight, FaMinus, FaPlus } from "react-icons/fa";
import Rating from "../Components/Card/Rating";

const InforCard = ({ proId }) => {
  proId = "64ce67c9807550b7861e00c3";
  const [product, setProduct] = useState();
  const [colorArr, setColorArr] = useState([]);
  const [sizeArr, setSizeArr] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:20474/product/api/getProductById?productId=${proId}`
        );
        if (res.data) {
          console.log(res.data.data);
          setProduct(res.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    const getAllSizeAndColor = async () => {
      try {
        const res = await axios.get(
          `http://localhost:20474/product/api/getAllSizeAndColor?id=${proId}`
        );
        console.log(res.data.data);
        if (res.data) {
          setColorArr(res.data.data.colors);
          setSizeArr(res.data.data.sizes);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
    getAllSizeAndColor();
  }, [proId]);

  return (
    <div className="mx-auto 2xl:mx-40 ">
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
      <div className="flex py-5 bg-gray-50">
        {/* change product2 to inforProducts */}
        <div className="flex flex-col gap-3 items-center justify-center mx-10 ">
          {/* sửa thành object-contain */}
          <div className="border">
            <img
              src={product?.product?.imgSrc}
              alt="image"
              className=" object-cover  w-[700px] h-[450px]"
            />
          </div>
          <div className=" w-20 h-24 hover:border-green-500 hover:border">
            <img
              src={product?.product?.imgSrc}
              alt="imageSmall"
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full mx-5">
          <div>{product?.product?.name}</div>
          <div className="flex items-center">
            <Rating rate={product?.product?.rate}></Rating>
            <hr className="border-gray-300 w-full"></hr>
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
            {colorArr?.length > 0 && (
              <div className="flex gap-5 items-center">
                <span className="font-semibold w-20">Color</span>
                <div className="flex gap-2">
                  {colorArr.map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full border border-gray-300 hover:border-green-500"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
            {sizeArr?.length > 0 && (
              <div className="flex gap-5 items-center">
                <span className="font-semibold w-20">Size:</span>
                <div className="flex gap-2">
                  {sizeArr.map((size, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full border border-gray-300 text-center font-semibold text-lg hover:text-white hover:bg-green-500"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            )}
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
