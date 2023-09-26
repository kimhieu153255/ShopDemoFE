import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Pay = () => {
  const user = JSON.parse(Cookies.get("user")?.toString() || "{}");
  const [addresses, setAddresses] = useState([]);
  const [choosenAddress, setchoosenAddress] = useState({});

  const funcGetAddresses = async () => {
    const res = await axios.get(
      `http://localhost:20474/address/api/get?userId=${user._id}`
    );
    if (res.data) {
      console.log(res.data);
      setAddresses(res.data.data);
      setchoosenAddress(res.data.data.filter((item) => item.isDefault)[0]);
    }
  };
  const getAddressesRef = useRef();
  getAddressesRef.current = funcGetAddresses;

  useEffect(() => {
    getAddressesRef.current();
  }, []);

  return (
    <div className=" w-full xl:w-4/5 border p-5 mx-auto bg-gray-100">
      <div>
        <div className="flex items-center gap-2 text-xl font-semibold text-green-500">
          <FaLocationDot></FaLocationDot>
          Delivery Address
        </div>
        <div className="text-lg mt-2">
          <span className="font-semibold">
            {choosenAddress.name} {choosenAddress.phone}
          </span>
          <span className="pl-2 ">
            {choosenAddress.specific}, {choosenAddress.ward},{" "}
            {choosenAddress.province}
          </span>
          {choosenAddress.isDefault && (
            <span className="ml-2 px-2 py-1 border-green-500 text-green-500 rounded-md border text-sm">
              Default
            </span>
          )}
          <button className="ml-2 px-2 py-1 border-green-500 bg-green-500 font-semibold text-white rounded-md border text-sm hover:bg-green-600">
            Change
          </button>
        </div>
        <div className="px-2 py-1">
          {addresses.map((item, ind) => {
            return (
              <label className="mt-2" key={ind}>
                <div>
                  <input type="radio" name="address" value={item._id} />
                  {item.name} {item.phone} - {item.specific}, {item.ward},{" "}
                  {item.province}
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pay;
