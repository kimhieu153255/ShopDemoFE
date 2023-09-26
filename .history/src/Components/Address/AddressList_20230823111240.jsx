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
      {list.map((item, index) => (
        <AddressItem
          key={index}
          username={item.username}
          phone={item.phone}
          address={item.address}
          isDefault={item.isDefault}
        ></AddressItem>
      ))}
      s
    </div>
  );
};

export default AddressList;
