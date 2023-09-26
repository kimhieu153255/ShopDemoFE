import React from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import AddressInput from "./AddressInput";

const AddressForm = (
  name,
  setName,
  phone,
  setPhone,
  province,
  setProvince,
  district,
  setDistrict,
  ward,
  setWard,
  specific,
  setSpecific
) => {
  return (
    <div className="absolute bg-gray-100 p-5 rounded-md">
      <div className="font-bold text-2xl text-center mb-5">New Address</div>
      <div className="flex gap-2 ">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="fullname" className="font-semibold text-lg">
            Fullname
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Fullname"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            onChange={debounce((e) => setName(e.target.value), 500)}
          ></input>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="phone" className="font-semibold text-lg">
            Phone number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone number"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
            onChange={debounce((e) => setPhone(e.target.value), 500)}
          ></input>
        </div>
      </div>
      <div className="my-3">
        <div className="font-semibold text-lg mb-2">Address</div>
        <AddressInput
          disChoice = {disChoice}
          proChoice = {proChoice}
          wardChoice = {wardChoice}
          
          setDisChoice={setDisChoice}
          setProChoice={setProChoice}
          setWardChoice={setWardChoice}
        ></AddressInput>
      </div>
      <div className="my-3 flex flex-col gap-2">
        <label htmlFor="specificAddress" className="font-semibold text-lg">
          Specific address
        </label>
        <input
          type="text"
          id="specificAddress"
          name="specificAddress"
          placeholder="Specific Address"
          ref={specificRef}
          className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
          onChange={debounce((e) => setSpecificAddress(e.target.value), 300)}
        ></input>
      </div>
      <button
        className="mt-10 w-full py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-md border transition-all"
        onClick={handleSubmit}
      >
        Add
      </button>

      <span
        className="absolute right-1 top-1 bg-gray-100 border translate-x-1/2 -translate-y-1/2 w-fit h-fit p-1 rounded-full border-gray-400 hover:bg-green-500 hover:text-black text-gray-400"
        onClick={() => {
          setIsHidden(true);
        }}
      >
        <FaTimes />
      </span>
    </div>
  );
};

AddressForm.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  phone: PropTypes.string,
  setPhone: PropTypes.func,
  province: PropTypes.string,
  setProvince: PropTypes.func,
  district: PropTypes.string,
  setDistrict: PropTypes.func,
  ward: PropTypes.string,
  setWard: PropTypes.func,
  specific: PropTypes.string,
  setSpecific: PropTypes.func,
};

export default AddressForm;
