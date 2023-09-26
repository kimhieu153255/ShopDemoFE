import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useRef } from "react";

const Pay = () => {
  const user = JSON.parse(Cookies.get("user")?.toString() || "{}");

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
        <div>{}</div>
      </div>
    </div>
  );
};

export default Pay;
