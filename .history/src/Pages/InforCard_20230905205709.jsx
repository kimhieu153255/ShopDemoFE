import PropTypes from "prop-types";

const InforCard = ({ proId }) => {
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
