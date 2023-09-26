import AddressInput from "./AddressInput";

const AddAddress = () => {
  return (
    <div>
      <h1>New Address</h1>
      <input type="text" placeholder="Fullname"></input>
      <input type="tel" placeholder="Phone number"></input>
      <AddressInput></AddressInput>
      <input type='text' placeholder='Address'></input>
    </div>
  );
};

export default AddAddress;
