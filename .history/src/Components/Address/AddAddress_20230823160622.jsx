import { useState } from "react";
import AddressInput from "./AddressInput";

const AddAddress = () => {
  const [proChoice, setProChoice] = useState("");
  const [disChoice, setDisChoice] = useState("");
  const [wardChoice, setWardChoice] = useState("");
  const [specificAddress, setSpecificAddress] = useState("");

  return (
    <div className="relative">
      <h1>New Address</h1>
      <div className="flex items-center">
        <label htmlFor="fullname">Fullname</label>
        <input
          type="text"
          name="fullname"
          placeholder="Fullname"
          className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
        ></input>
        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
        ></input>
      </div>
      <AddressInput
        setDisChoice={setDisChoice}
        setProChoice={setProChoice}
        setWardChoice={setWardChoice}
      ></AddressInput>
      <input
        type="text"
        placeholder="Address"
        className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
        onChange={(e) => setSpecificAddress(e.target.value)}
      ></input>
    </div>
  );
};

export default AddAddress;