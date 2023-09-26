import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Pay = () => {
  const user = JSON.parse(Cookies.get("user")?.toString() || "{}");
  const [addresses, setAddresses] = useState([]);
  const [choosenAddress, setchoosenAddress] = useState({});
  const [isHidden, setIsHidden] = useState(true);

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
      <div className="relative">
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
          <button
            className="ml-2 px-2 py-1 border-green-500 bg-green-500 font-semibold text-white rounded-md border text-sm hover:bg-green-600"
            onClick={() => setIsHidden(false)}
          >
            Change
          </button>
        </div>
        {!isHidden && (
          <div className="fixed top-0 left-0 h-screen w-full">
            <div className="bg-gray-500 opacity-50 inset-0 fixed z-10"></div>
            <div className="m-auto py-2 z-20 absolute inset-0 w-[600px] h-[600px] bg-white">
              <div className="text-xl px-5 py-3 font-bold border-b h-[50px]">
                My Addresses
              </div>
              <div className="overflow-y-scroll h-[450px] border-b">
                {addresses.map((item, ind) => {
                  return (
                    <label className="mt-2 " key={ind}>
                      <div className="flex px-5 items-center gap-3 py-2 hover:bg-green-400">
                        <input
                          type="radio"
                          name="address"
                          className="inline-block w-4 h-4"
                          value={item._id}
                          checked={item._id === choosenAddress._id}
                          onChange={() => setchoosenAddress(item)}
                        />
                        <div>
                          <span className="font-semibold">
                            {item.name} {item.phone}
                          </span>
                          <span className="line-clamp-2">
                            {item.specific} - {item.ward} - {item.province}
                          </span>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
              <div className="absolute bottom-5 right-5 border-t">
                <button className="px-3 py-2 w-28 border-red-500 border rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 mr-5">
                  Cancle
                </button>
                <button className="px-3 py-2 w-28 border-green-500 border rounded-md bg-green-500 text-white font-semibold hover:bg-green-600">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pay;
