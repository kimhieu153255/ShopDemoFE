import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { FaCartPlus, FaChevronRight, FaMinus, FaPlus } from "react-icons/fa";
import Rating from "../Components/Card/Rating";

const quantityOfInforProduct = (inforProducts, color, size) => {
  const inforProduct = inforProducts.find(
    (item) => item.color === color && item.size === size
  );
  return inforProduct ? inforProduct.quantity : 0;
};

const InforCard = ({ proId }) => {
  proId = "64ce67c9807550b7861e00c3";
  const [product, setProduct] = useState();
  const [colorArr, setColorArr] = useState([]);
  const [sizeArr, setSizeArr] = useState([]);

  const [colorChosen, setColorChosen] = useState();
  const [sizeChosen, setSizeChosen] = useState();

  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [available, setAvailable] = useState(0);

  const getColorBySize = async (size) => {
    try {
      const res = await axios.get(
        `http://localhost:20474/product/api/getColorBySize?id=${proId}&size=${size}`
      );
      if (res.data) {
        console.log(res.data.data);
        setColors(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getSizeByColor = async (color) => {
    try {
      const res = await axios.get(
        `http://localhost:20474/product/api/getSizeByColor?id=${proId}&color=${color}`
      );
      if (res.data) {
        console.log(res.data.data);
        setSizes(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:20474/product/api/getProductById?productId=${proId}`
        );
        if (res.data) {
          console.log(res.data.data);
          setProduct(res.data.data);

          const colors = res.data.data.inforProducts.map((item) => item.color);
          const sizes = res.data.data.inforProducts.map((item) => item.size);
          setColorArr([...new Set(colors)]);
          setSizeArr([...new Set(sizes)]);
          setColorChosen(res.data.data?.inforProducts[0].color);
          setSizeChosen(res.data.data?.inforProducts[0].size);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [proId]);

  const getColorBySizeRef = useRef();
  getColorBySizeRef.current = getColorBySize;
  useEffect(() => {
    if (sizeChosen) {
      getColorBySizeRef.current(sizeChosen);
    }
  }, [sizeChosen]);

  const getSizeByColorRef = useRef();
  getSizeByColorRef.current = getSizeByColor;
  useEffect(() => {
    if (colorChosen) {
      getSizeByColorRef.current(colorChosen);
    }
  }, [colorChosen]);

  const quantityOfInforProductRef = useRef();
  quantityOfInforProductRef.current = quantityOfInforProduct;
  useEffect(() => {
    if (colorChosen && sizeChosen) {
      setAvailable(
        quantityOfInforProductRef.current(
          product?.inforProducts,
          colorChosen,
          sizeChosen
        )
      );
    }
  }, [colorChosen, product?.inforProducts, sizeChosen]);

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
      <div className="flex py-5 bg-gray-50 rounded-sm">
        {/* change product2 to inforProducts */}
        <div className="flex flex-col gap-3 items-center justify-center mx-10 ">
          {/* sửa thành object-contain */}
          <div className="border">
            <img
              src={product?.product?.imgSrc}
              alt="image"
              className=" object-cover  w-[650px] h-[450px]"
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
          <div className="text-2xl font-semibold mb-5">
            {product?.product?.name}
          </div>
          <div className="flex items-center">
            <Rating rate={product?.product?.rate}></Rating>
            <span className="text-gray-500 px-3 border-x-2 mx-2">
              Rating: <b>{product?.product?.numberRate}</b>
            </span>
            <span className="text-gray-500">
              Sold: <b>{product?.product?.soldCount}</b>
            </span>
          </div>
          <div className="font-semibold text-amber-600 text-3xl p-5 bg-gray-200 my-5 rounded-md">
            {product?.product?.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
          <div className="my-14">
            {colorArr?.length > 0 && (
              <div className="flex gap-5 items-center mb-2 text-gray-500">
                <span className="font-semibold w-20">Color</span>
                <div className="flex gap-2">
                  {colorArr.map((color, index) => (
                    <div
                      key={index}
                      style={{ backgroundColor: color }}
                      className={
                        `w-8 h-8 rounded-full border border-gray-300 hover:border-green-500 ` +
                        (colorChosen === color
                          ? "border-green-500 ring-1 ring-green-500 "
                          : " ") +
                        (colors.includes(color) ? "" : `opacity-50`)
                      }
                      onClick={() => {
                        if (!colors.includes(color) || colorChosen === color)
                          return;
                        setColorChosen(color);
                        setQuantity(1);
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
            {sizeArr?.length > 0 && (
              <div className="flex gap-5 items-center mb-2 text-gray-500">
                <span className="font-semibold w-20">Size:</span>
                <div className="flex gap-2">
                  {sizeArr.map((size, index) => (
                    <div
                      key={index}
                      className={
                        `w-8 h-8 rounded-full border border-gray-300 text-center font-semibold text-lg hover:text-white hover:bg-green-500 ` +
                        (sizeChosen === size ? "bg-green-400 " : " ") +
                        (sizes.includes(size) ? "" : `opacity-50`)
                      }
                      onClick={() => {
                        if (!sizes.includes(size) || sizeChosen === size)
                          return;
                        setSizeChosen(size);
                        setQuantity(1);
                      }}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* button */}
          <div className="flex gap-10 items-center text-gray-500">
            <span className="font-semibold">Quality </span>
            <div className="flex">
              <button
                className="px-3 bg-gray-200 border rounded-l-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white py-1 text-gray-700"
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                <FaMinus />
              </button>
              <input
                type="text"
                min="1"
                value={quantity}
                readOnly
                className="bg-gray-100 w-14 text-center border border-gray-300 py-1"
              />
              <button
                className="px-3 py-1 bg-gray-200 border rounded-r-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white text-gray-700"
                onClick={() => {
                  if (
                    quantity <
                    quantityOfInforProduct(
                      product?.inforProducts,
                      colorChosen,
                      sizeChosen
                    )
                  ) {
                    setQuantity((count) => count + 1);
                  }
                }}
              >
                <FaPlus />
              </button>
            </div>
            <div className="font-semibold min-w-max">
              Available: {available}
            </div>
          </div>
          <div className="mt-5 flex gap-5">
            <button className="bg-green-500 border border-green-600 text-white font-semibold py-2 px-5 rounded-md hover:bg-green-600 flex items-center gap-3 text-xl">
              <FaCartPlus className="inline-block"></FaCartPlus>
              <div>Add to cart</div>
            </button>
            <button className="bg-green-500 border border-green-600 text-white font-semibold py-2 px-5 rounded-md hover:bg-green-600 text-xl">
              Buy now
            </button>
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
