import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Pay = () => {
  const user = JSON.parse(Cookies.get("user")?.toString() || "{}");
  const [addresses, setAddresses] = useState([]);
  const [defaultAddress, setDefaultAddress] = useState({});

  const funcGetAddresses = async () => {
    const res = await axios.get(
      `http://localhost:20474/address/api/get?userId=${user._id}`
    );
    if (res.data) {
      console.log(res.data);
      setAddresses(res.data.data);
      setDefaultAddress(res.data.data.filter((item) => item.isDefault)[0]);
    }
  };
  const getAddressesRef = useRef();
  getAddressesRef.current = funcGetAddresses;

  useEffect(() => {
    getAddressesRef.current();
  }, []);

  return (
    <div className=" w-full xl:w-4/5 px-2 mx-auto bg-gray-100">
      <div>
        <div className="flex items-center gap-2 text-xl font-semibold text-green-500">
          <FaLocationDot></FaLocationDot>
          Delivery Address
        </div>
        <div>
          <span className="font-semibold">
            {defaultAddress.name} {defaultAddress.phone}
          </span>
          <span className="pl-2 ">
            {defaultAddress.specific}, {defaultAddress.ward},{" "}
            {defaultAddress.province}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pay;
