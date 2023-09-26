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
      <div className="flex flex-col">
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-green-500 rounded-md hover:bg-green-600 transition-all">
            Edit Address
          </button>
          <button className="px-3 py-1.5 bg-red-500 rounded-md hover:bg-red-600 transition-all">
            Delete
          </button>
        </div>
        <button className="px-3 py-1.5 bg-green-500 rounded-md hover:bg-green-600 transition-all">
          Set Default
        </button>
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
