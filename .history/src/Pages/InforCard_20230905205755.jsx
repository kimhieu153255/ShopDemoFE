import PropTypes from "prop-types";
import { useState } from "react";

const InforCard = ({ proId }) => {
  const [product, setProduct] = useState({});

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
