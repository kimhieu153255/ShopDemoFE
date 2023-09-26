import propTypes from "prop-types";

const AddressItem = ({ username, phone, address, isDefault }) => {
  return (
    <div className="flex justify-between">
      <div className="flex-col">
        <div className="flex">
          <div className="font-bold border-r-2">{username}</div>
          <div className="text-gray-300">{phone}</div>
        </div>
        <div className="text-sm text-gray-300">{address}</div>
        {isDefault && <span className="text-sm text-green-500">Default</span>}
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
