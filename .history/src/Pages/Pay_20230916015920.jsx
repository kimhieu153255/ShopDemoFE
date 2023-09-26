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
      setAddresses(res.data.data);
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
        <select className="px-5 py-2">
          {addresses.map((item, ind) => {
            console.log(item);
            return (
              <option key={ind} value={item._id}>
                {item} {item.phone} - {item.address} -
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Pay;
