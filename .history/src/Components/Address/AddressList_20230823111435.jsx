import AddressItem from "./AddressItem";

const list = [
  {
    username: "John Doe",
    phone: "0123456789",
    address: "123, Street, City, Country",
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
        <div className="flex">
          {list.map((item, index) => (
            <AddressItem
              key={index}
              username={item.username}
              phone={item.phone}
              address={item.address}
              isDefault={item.isDefault}
            ></AddressItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressList;
