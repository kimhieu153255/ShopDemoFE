import { useEffect, useRef, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AddressPay = ({ setProChoice, setDisChoice, setWardChoice }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [code, setCode] = useState({});

  const funcGetProvince = async () => {
    try {
      const res = await axios.get(
        `https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1`
      );
      if (res.data) {
        const arr = res.data?.data?.data.map((item) => {
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
        const arr = res.data?.data?.data.map((item) => {
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
        const arr = res.data?.data?.data.map((item) => {
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
    console.log("province");
    provinceRef.current();
  }, []);

  useEffect(() => {
    console.log("codePro");
    if (code.codePro) {
      districtRef.current(code.codePro);
    }
  }, [code?.codePro]);

  useEffect(() => {
    console.log("codeDis");
    if (code.codeDis) {
      wardRef.current(code.codeDis);
    }
  }, [code?.codeDis]);

  return (
    <div className="flex items-center gap-3">
      <div className="w-56">
        <select
          name="province"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          onChange={(e) => {
            const selectedProvinceCode = e.target.value;
            const selectedProvince = provinces.find(
              (item) => item.code === selectedProvinceCode
            );
            setCode({
              codePro: selectedProvinceCode,
              codeDis: "",
              codeWard: "",
            });
            setProChoice(selectedProvince.name || "");
          }}
        >
          <option value="defaultProvince">--Chosen province--</option>
          {provinces.map((item, index) => (
            <option key={index} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-56">
        <select
          type="text"
          name="district"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          onChange={(e) => {
            const selectedDistrictCode = e.target.value;
            const selectedDistrict = districts.find(
              (item) => item.code === selectedDistrictCode
            );
            setCode({ ...code, codeDis: selectedDistrictCode });
            setDisChoice(selectedDistrict.name || "");
          }}
        >
          <option value="defaultDistrict">--Chosen district--</option>
          {districts.map((item, index) => (
            <option key={index} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-56">
        <select
          type="text"
          name="ward"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          placeholder="--Chosen ward--"
          onChange={(e) => {
            const selectedWardCode = e.target.value;
            const selectedWard = wards.find(
              (item) => item.code === selectedWardCode
            );
            setCode({ ...code, codeWard: selectedWardCode });
            setWardChoice(selectedWard.name || "");
          }}
        >
          <option value="defaultWard">--Chosen ward--</option>
          {wards.map((item, index) => (
            <option key={index} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

AddressPay.propTypes = {
  setProChoice: PropTypes.func,
  setDisChoice: PropTypes.func,
  setWardChoice: PropTypes.func,
};

export default AddressPay;
