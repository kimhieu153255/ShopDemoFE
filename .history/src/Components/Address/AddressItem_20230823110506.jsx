import propTypes from "prop-types";

const AddressItem = ({ username, phone, address, isDefault }) => {
  return (
    <div className="flex justify-between">
      <div>
        <div>
          <div className="font-bold border-r-2">{username}</div>
          <div>{phone}</div>
        </div>
      </div>
    </div>
  );
};

AddressItem.propTypes = {
  username: propTypes.string,
  phone: propTypes.string,
  address: propTypes.string,
  isDefault: propTypes.bool,
};

export default AddressItem;
