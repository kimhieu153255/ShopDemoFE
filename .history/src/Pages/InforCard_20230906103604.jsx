import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";

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
        <div className="flex items-center font-semibold">
          <a href="/home">Home</a>
          <FaChevronRight className="font-mono"></FaChevronRight>
          <a href="/category/">{product?.product?.category}</a>
          <FaChevronRight></FaChevronRight>
          <a href={product?.product?.name}>{product?.product?.name}</a>
        </div>
      )}
    </div>
  );
};

InforCard.propTypes = {
  proId: PropTypes.string,
};

export default InforCard;
