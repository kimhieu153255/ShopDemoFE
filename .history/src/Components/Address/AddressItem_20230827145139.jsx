import axios from "axios";
import Cookies from "js-cookie";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addMessage, removeMessage } from "../../redux-toolkit/MessageSlice";

const AddressItem = ({
  addressId,
  setIsChange,
  username,
  phone,
  address,
  isDefault,
}) => {
  const dispatch = useDispatch();
  const token = Cookies.get("token")?.toString() || null;

  const funcDeleteAddress = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:20474/address/api/delete?addressId=${addressId}&token=${token}`
      );
      if (res.data) {
        dispatch(addMessage(res.data.message));
        setTimeout(() => {
          dispatch(removeMessage());
        }, 1000);
        setIsChange(true);
        
      } else console.log(res.data);
    } catch (err) {
      console.log(err);
      dispatch(addMessage("Something went wrong!"));
      setTimeout(() => {
        dispatch(removeMessage());
      }, 1000);
    }
  };

  return (
    <div className="flex justify-between items-center">
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
          <button
            className="px-3 w-20 py-1.5 bg-red-500 rounded-md hover:bg-red-600 transition-all"
            onClick={() => funcDeleteAddress()}
          >
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
  addressId: propTypes.string,
  setIsChange: propTypes.func,
  username: propTypes.string,
  phone: propTypes.string,
  address: propTypes.string,
  isDefault: propTypes.bool,
};

export default AddressItem;
