import { useEffect, useRef, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AddressInput = ({
  setProChoice,
  proRef,
  setDisChoice,
  disRef,
  setWardChoice,
  wardRef,
}) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [code, setCode] = useState({});
  const defaultProvinceRef = useRef();

  const funcGetProvince = async () => {
    try {
      const res = await axios.get(
        `https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1`
      );
      if (res.data) {
        const arr = await res.data?.data?.data.map((item) => {
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
        console.log(res.data);
        const arr = await res.data?.data?.data?.map((item) => {
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
        const arr = await res.data?.data?.data.map((item) => {
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
    if (code.codePro) districtRef.current(code.codePro);
    return () => {
      setDistricts([]);
    };
  }, [code.codePro]);

  useEffect(() => {
    if (code.codeDis) wardRef.current(code.codeDis);
    return () => {
      setWards([]);
    };
  }, [code.codeDis]);

  const handleProvince = async (e) => {
    const selectedProvinceCode = e.target.value;
    const selectedProvince = provinces.find(
      (item) => item.code === selectedProvinceCode
    );
    setCode({
      codePro: selectedProvinceCode,
    });
    setProChoice(selectedProvince?.name || "");
    setDisChoice("");
    setWardChoice("");
  };

  const handleDistrict = (e) => {
    const selectedDistrictCode = e.target.value;
    const selectedDistrict = districts.find(
      (item) => item.code === selectedDistrictCode
    );
    setCode((prev) => ({
      ...prev,
      codeDis: selectedDistrictCode,
    }));
    setDisChoice(selectedDistrict.name || "");
    setWardChoice("");
  };

  const handleWard = (e) => {
    const selectedWardCode = e.target.value;
    const selectedWard = wards.find((item) => item.code === selectedWardCode);
    setCode((prev) => ({
      ...prev,
      codeWard: selectedWardCode,
    }));
    setWardChoice(selectedWard.name || "");
  };

  return (
    <div className="flex items-center gap-1">
      <div className="w-52">
        <select
          name="province"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          ref={defaultProvinceRef}
          onChange={handleProvince}
        >
          <option value="-1"> -- Chosen province -- </option>
          {provinces.map((item, index) => (
            <option key={index} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-48">
        <select
          type="text"
          name="district"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          onChange={handleDistrict}
        >
          <option value="-1"> -- Chosen district -- </option>
          {districts.map((item, index) => (
            <option key={index} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-48">
        <select
          type="text"
          name="ward"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          placeholder="--Chosen ward--"
          onChange={handleWard}
        >
          <option value="-1"> -- Chosen ward -- </option>
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

AddressInput.propTypes = {
  setProChoice: PropTypes.func,
  setDisChoice: PropTypes.func,
  setWardChoice: PropTypes.func,
  proRef: PropTypes.object,
  disRef: PropTypes.object,
  wardRef: PropTypes.object,
};

export default AddressInput;
