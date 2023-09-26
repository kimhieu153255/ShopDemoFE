import { useEffect, useState } from "react";
import AddressInput from "./AddressInput";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { debounce } from "lodash";

const AddAddress = ({ isHidden, setIsHidden }) => {
  const [proChoice, setProChoice] = useState("");
  const [disChoice, setDisChoice] = useState("");
  const [wardChoice, setWardChoice] = useState("");
  const [specificAddress, setSpecificAddress] = useState("");

  useEffect(() => {
    console.log("proChoice", proChoice);
    console.log("disChoice", disChoice);
    console.log("wardChoice", wardChoice);
    console.log("specificAddress", specificAddress);
  }, [disChoice, proChoice, wardChoice, specificAddress]);

  return (
    <div className={isHidden === true ? "hidden" : ""}>
      <div className="fixed inset-0 top-0 left-0 z-10  bg-gray-500 opacity-50"></div>
      <div className="fixed w-full h-screen top-0 left-0 z-20 flex justify-center items-center">
        <div className="relative bg-gray-100 p-5 rounded-md">
          <div className="font-bold text-2xl text-center mb-5 font">New Address</div>
          <div className="flex gap-2 ">
            <div className="flex flex-col w-full">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                defaultValue={""}
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
          <span>Address</span>
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
            onChange={debounce((e) => setSpecificAddress(e.target.value), 500)}
          ></input>
          <span
            className="absolute right-1 top-1 bg-gray-100 border translate-x-1/2 -translate-y-1/2 w-fit h-fit p-1 rounded-full border-gray-400 hover:bg-green-500 hover:text-black text-gray-400"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            <FaTimes />
          </span>
        </div>
      </div>
    </div>
  );
};

AddAddress.propTypes = {
  isHidden: PropTypes.bool,
  setIsHidden: PropTypes.func,
};

export default AddAddress;
