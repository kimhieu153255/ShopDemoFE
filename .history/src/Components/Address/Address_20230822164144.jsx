import React from "react";
import PropTypes from "prop-types";

const Address = () => {
  const [province, setProvince] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [ward, setWard] = React.useState("");
  return (
    <div className="flex items-center">
      <input
        type="text"
        name="province"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        placeholder="--Chosen province--"
      ></input>
      <input
        type="text"
        name="district"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        placeholder="--Chosen district--"
      ></input>
      <input
        type="text"
        name="ward"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        placeholder="--Chosen ward--"
      ></input>
    </div>
  );
};

// Address.propTypes = {
//   type: PropTypes.string,
// };

export default Address;
