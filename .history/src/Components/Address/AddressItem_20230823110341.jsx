import propTypes from "prop-types";

const AddressItem = ({ username, phone, address, isDefault }) => {
  return <div></div>;
};

AddressItem.propTypes = {
  username: propTypes.string,
  phone: propTypes.string,
  address: propTypes.string,
  isDefault: propTypes.bool,
};

export default AddressItem;
