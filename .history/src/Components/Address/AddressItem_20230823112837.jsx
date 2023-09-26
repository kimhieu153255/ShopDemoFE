import propTypes from "prop-types";

const AddressItem = ({ username, phone, address, isDefault }) => {
  return (
    <div className="flex justify-between">
      <div className="flex-col items-center">
        <div className="flex gap-2 items-center">
          <div className="font-bold">{username}</div>
          <div className="text-gray-400">|</div>
          <div className="text-gray-400">{phone}</div>
        </div>
        <div className="text-base text-gray-400 break-words w-96 line-clamp-2 overflow-hidden">
          {address}
        </div>
        {isDefault && (
          <span className="text-sm text-green-500 border border-green-500 px-3 py-0.5 rounded-md">
            Default
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="px-3 w-20 py-1.5 bg-green-500 rounded-md hover:bg-green-600 transition-all">
            Edit
          </button>
          <button className="px-3 w-20 py-1.5 bg-red-500 rounded-md hover:bg-red-600 transition-all">
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
