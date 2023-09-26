import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const InforCard = ({ proId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(`http://localhost:20474/product/api/getProductById?productId=${proId}`);


  return (
    <div>
      <div>
        <a href="/home">Home</a>

        <a href="/category/">Information</a>
      </div>
    </div>
  );
};

InforCard.propTypes = {
  proId: PropTypes.string,
};

export default InforCard;
