import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";
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
      <div>
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
          <div>
            <Rating rate={product?.product?.rate}></Rating>
            <div className="text-gray-500">
              Rating: {product?.product?.rate}
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
