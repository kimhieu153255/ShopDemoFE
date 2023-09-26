import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

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
      <div>
        <a href="/home">Home</a>
        &lg;
        <a href="/category/">Information</a>
        &lg;
        <a href={product?.product?.name}></a>
      </div>
    </div>
  );
};

InforCard.propTypes = {
  proId: PropTypes.string,
};

export default InforCard;
