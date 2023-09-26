import React, { useState } from "react";
import PropTypes from "prop-types";

const Address = () => {
  const [provinces, setProvince] = useState([]);
  const [districts, setDistrict] = useState("");
  const [wards, setWard] = useState("");

  const funcGetProvince = async () => {
    try {
      const res = await axios.get(
        `https://vn-public-apis.fpo.vn/districts/getAll?limit=-1`
      );
      if (res.data) {
        
      }



  return (
    <div className="flex items-center">
      <select
        name="province"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        placeholder="--Chosen province--"
      ></select>
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
