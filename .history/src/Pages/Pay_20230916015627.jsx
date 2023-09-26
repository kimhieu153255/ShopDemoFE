import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";

const Pay = () => {
  const user = JSON.parse(Cookies.get("user")?.toString() || "{}");
  const [addresses, setAddresses] = useState([]);

  const funcGetAddresses = async () => {
    const res = await axios.get(
      `http://localhost:20474/address/api/get?userId=${user._id}`
    );
    if (res.data) {
      console.log(res.data);
    }
  };
  const getAddressesRef = useRef();
  getAddressesRef.current = funcGetAddresses;

  useEffect(() => {
    getAddressesRef.current();
  }, []);

  return (
    <div>
      <div>
        <div>Delivery Address</div>
        <select>
          {addresses.map((address) => {
            return <option value={address._id}>{address.address}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Pay;
