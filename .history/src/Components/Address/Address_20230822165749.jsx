import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Address = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [proChoice, setProChoice] = useState("");
  const [disChoice, setDisChoice] = useState("");
  const [wardChoice, setWardChoice] = useState("");

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
      } else setProvinces([]);
    } catch (err) {
      console.log(err);
      setProvinces([]);
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
      } else setDistricts([]);
    } catch (err) {
      console.log(err);
      setDistricts([]);
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
      } else setWards([]);
    } catch (err) {
      console.log(err);
      setWards([]);
    }
  };

  const wardRef = useRef();
  wardRef.current = funcGetWard;

  useEffect(() => {
    provinceRef.current();
  }, []);

  useEffect(() => {
    if (proChoice) {
      districtRef.current(proChoice);
    }
  }, [proChoice]);

  useEffect(() => {
    if (disChoice) {
      wardRef.current(disChoice);
    }
  }, [disChoice]);

  return (
    <div className="flex items-center">
      <select
        name="province"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
      >
        <option value="defaultProvince">--Chosen province--</option>
        {provinces.map((item, index) => (
          <option
            key={index}
            value={item.code}
            onClick={(e) => {
              e.preventDefault();
              setProChoice(item.code);
            }}
          >
            {item.name}
          </option>
        ))}
      </select>
      <select
        type="text"
        name="district"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        placeholder="--Chosen district--"
      >
        <option value="defaultDistrict">--Chosen district--</option>
        {districts.map((item, index) => (
          <option
            key={index}
            value={item.code}
            onClick={(e) => {
              e.preventDefault();
              setDisChoice(item.code);
            }}
          >
            {item.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="ward"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        placeholder="--Chosen ward--"
      ></input>
    </div>
  );
};

export default Address;
