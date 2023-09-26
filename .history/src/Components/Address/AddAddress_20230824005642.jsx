import { useRef, useState } from "react";
import AddressInput from "./AddressInput";
import { FaTimes } from "react-icons/fa";

const AddAddress = ({ isVisible }) => {
  const [proChoice, setProChoice] = useState("");
  const [disChoice, setDisChoice] = useState("");
  const [wardChoice, setWardChoice] = useState("");
  const [specificAddress, setSpecificAddress] = useState("");
  const panelRef = useRef();

  return (
    <div ref={panelRef}>
      <div className="fixed inset-0 top-0 left-0 z-10  bg-gray-500 opacity-50"></div>
      <div className="fixed w-full h-screen top-0 left-0 z-20 flex justify-center items-center">
        <div className="relative bg-gray-100 p-5 rounded-md">
          <div>New Address</div>
          <div className="flex gap-2 ">
            <div className="flex flex-col w-full">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Fullname"
                className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
              ></input>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="phone">Phone number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone number"
                className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
              ></input>
            </div>
          </div>
          <label>Address</label>
          <AddressInput
            setDisChoice={setDisChoice}
            setProChoice={setProChoice}
            setWardChoice={setWardChoice}
          ></AddressInput>
          <label htmlFor="specificAddress">Specific address</label>
          <input
            type="text"
            id="specificAddress"
            name="specificAddress"
            placeholder="Specific Address"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            onChange={(e) => setSpecificAddress(e.target.value)}
          ></input>
          <span
            className="absolute right-1 top-1 bg-gray-100 border translate-x-1/2 -translate-y-1/2 w-fit h-fit p-1 rounded-full border-gray-400 hover:bg-green-500 hover:text-black text-gray-400"
            onClick={() => {
              panelRef.current.classList.add("hidden");
            }}
          >
            <FaTimes />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
