import AddressList from "../Address/AddressList";

const Address = () => {
  return (
    <div className="mx-auto border w-full h-full bg-gray-100 rounded-md">
      <div className="flex justify-between  border-b-2 pb-3 items-center">
        <h2 className="font-bold text-xl">My Address</h2>
        <button className="px-3 py-1.5 bg-green-500 rounded-md">
          Add new Address
        </button>
      </div>
      <AddressList />
    </div>
  );
};

export default Address;
