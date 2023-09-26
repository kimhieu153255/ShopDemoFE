import AddressItem from "./AddressItem";

const list = [
  {
    username: "John Doe",
    phone: "0123456789",
    address: "207/1 linh đông, đường linh đông, quận thủ đức, tp hồ chí minh",
    isDefault: true,
  },
  {
    username: "John Doe",
    phone: "0123456789",
    address: "123, Street, City, Country",
    isDefault: false,
  },
];

const AddressList = () => {
  return (
    <div>
      <h1>Address</h1>
      {list && (
        <div className="flex flex-col gap-5">
          {list.map(
            (item, index) =>
              index > 0 &&
              (<hr className="flex-1 h-[2.5px] bg-gray-400 mx-2 z-10"></hr>)(
                <AddressItem
                  key={index}
                  username={item.username}
                  phone={item.phone}
                  address={item.address}
                  isDefault={item.isDefault}
                ></AddressItem>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default AddressList;
