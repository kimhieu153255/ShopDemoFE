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
        <div>
          {() => {
            const defaultAddress = addresses.find((item) => item.isDefault);
            if (defaultAddress) {
              return (
                <>
                  <span className="font-semibold">
                    {defaultAddress.name} {defaultAddress.phone}
                  </span>
                  <div></div>
                  <div>{defaultAddress.specific}</div>
                  <div>{defaultAddress.ward}</div>
                  <div>{defaultAddress.province}</div>
                </>
              );
            }
          }}
        </div>
        <select className="px-3 py-2  border border-gray-300 rounded-md font-semibold focus:border-green-500 focus:ring-green-500 focus:ring-1">
          {addresses.map((item, ind) => {
            console.log(item);
            return (
              <option key={ind} value={item._id}>
                {item.name} {item.phone} - {item.specific}, {item.ward},{" "}
                {item.province}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Pay;