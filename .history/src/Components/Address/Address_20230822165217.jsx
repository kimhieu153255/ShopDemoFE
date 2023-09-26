import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Address = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const funcGetProvince = async () => {
    try {
      const res = await axios.get(
        `https://vn-public-apis.fpo.vn/districts/getAll?limit=-1`
      );
      if (res.data) {
        const arr = res.data.data.map((item) => {
          return {
            name: item.name,
            code: item.code,
          };
        });
        setProvinces(arr || []);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const provinceRef = useRef();
  provinceRef.current = funcGetProvince;

  const funcGetDistrict = async (code) => {
    try {
      const res = await axios.get(
        `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${code}&limit=-1`
      );
      if (res.data) {
        const arr = res.data.data.map((item) => {
          return {
            name: item.name,
            code: item.code,
          };
        });
        setDistricts(arr || []);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const districtRef = useRef();
  districtRef.current = funcGetDistrict;

  const funcGetWard = async (code) => {
    try {
      const res = await axios.get(
        `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${code}&limit=-1`
      );
      if (res.data) {
        const arr = res.data.data.map((item) => {
          return {
            name: item.name,
            code: item.code,
          };
        });
        setWards(arr || []);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const wardRef = useRef();
  wardRef.current = funcGetWard;

  

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
