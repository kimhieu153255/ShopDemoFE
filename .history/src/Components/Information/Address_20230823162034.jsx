import { FaPlus } from "react-icons/fa";
import AddressList from "../Address/AddressList";
import AddAddress from "../Address/AddAddress";

const Address = () => {
  return (
    <div className="mx-auto border w-full h-full bg-gray-100 rounded-md">
      <div className="flex justify-between m-3 border-b-2 pb-3 items-center">
        <h2 className="font-bold text-xl">My Address</h2>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-green-500 rounded-md text-white hover:bg-green-600 transition-all">
          <FaPlus />
          Add new Address
        </button>
      </div>
      <div className="m-3">
        <AddressList />
      </div>
      <div>
        <div className="fixed inset-0 top-0 left-0 z-10 flex bg-gray-500 opacity-50 justify-center items-center"></div>
        <div className="fixed inset-0 top-0 left-0 z-20">
          <AddAddress></AddAddress>
        </div>
      </div>
    </div>
  );
};

export default Address;
