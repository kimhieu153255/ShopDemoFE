import AddressInput from "./AddressInput";

const AddAddress = () => {
  return (
    <div>
      <h1>New Address</h1>
      <div>
        <input type="text" placeholder="Fullname"></input>
        <input type="text" placeholder="Phone number"></input>
      </div>
      <AddressInput></AddressInput>
      <input type="text" placeholder="Address"></input>
    </div>
  );
};

export default AddAddress;
