import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMessage, removeMessage } from "../redux-toolkit/MessageSlice";

const Pay = () => {
  const BuyList = useSelector((state) => state.cart.BuyList);
  const user = JSON.parse(Cookies.get("user")?.toString() || "{}");
  const [addresses, setAddresses] = useState([]);
  const [choosenAddressTemp, setchoosenAddressTemp] = useState({});
  const [choosenAddress, setchoosenAddress] = useState({});
  const [isHidden, setIsHidden] = useState(true);
  const [method, setMethod] = useState("payment on delivery");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const funcGetAddresses = async () => {
    const res = await axios.get(
      `http://localhost:20474/address/api/get?userId=${user?._id}`
    );
    if (res.data) {
      console.log(res.data);
      setAddresses(res.data.data);
      setchoosenAddress(res.data.data.filter((item) => item.isDefault)[0]);
      setchoosenAddressTemp(res.data.data.filter((item) => item.isDefault)[0]);
    }
  };
  const getAddressesRef = useRef();
  getAddressesRef.current = funcGetAddresses;

  useEffect(() => {
    if (BuyList.length === 0) {
      navigate("/");
      dispatch(addMessage("Please choose product to buy!"));
      setTimeout(() => {
        dispatch(removeMessage());
      }, 3000);
      return;
    }
    getAddressesRef.current();
  }, [BuyList.length, dispatch, navigate]);

  return (
    <div className=" w-full xl:w-4/5  mx-auto min-w-max">
      <div className=" border bg-gray-100 p-5">
        <div className="relative">
          <div className="flex items-center gap-2 text-xl font-semibold text-green-500">
            <FaLocationDot></FaLocationDot>
            Delivery Address
          </div>
          <div className="text-lg mt-2 flex justify-between">
            <div>
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
            </div>
            <button
              className="ml-2 px-3 py-2 border-green-500 bg-green-500 font-semibold text-white rounded-md border text-sm hover:bg-green-600"
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
                {addresses.length > 0 && (
                  <div
                    className={`${
                      addresses.length > 6 && "overflow-y-scroll"
                    } h-[450px] border-b`}
                  >
                    {addresses.map((item, ind) => {
                      return (
                        <label className="mt-2" key={ind}>
                          <div className="flex px-5 items-center gap-3 h-[75px] hover:bg-green-400">
                            <input
                              type="radio"
                              name="address"
                              className="inline-block w-4 h-4"
                              value={item._id}
                              checked={item._id === choosenAddressTemp._id}
                              onChange={() => setchoosenAddressTemp(item)}
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
                )}
                <div className="absolute bottom-5 right-5 border-t">
                  <button
                    className="px-3 py-2 w-28 border-red-500 border rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 mr-5"
                    onClick={() => {
                      setchoosenAddressTemp(choosenAddress);
                      setIsHidden(true);
                    }}
                  >
                    Cancle
                  </button>
                  <button
                    className="px-3 py-2 w-28 border-green-500 border rounded-md bg-green-500 text-white font-semibold hover:bg-green-600"
                    onClick={() => {
                      setchoosenAddress(choosenAddressTemp);
                      setIsHidden(true);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className=" border bg-gray-100 p-5 mt-2">
        <div className="flex justify-between font-semibold py-2">
          <span className="w-3/5 text-xl">Product</span>
          <div className="w-2/5 flex text-center text-gray-500 text-lg">
            <span className="w-full">Price</span>
            <span className="w-full">Quantity</span>
            <span className="w-full text-right">Total</span>
          </div>
        </div>

        {BuyList.length > 0 &&
          BuyList.map((item, ind) => (
            <div
              className="flex items-center justify-between font-semibold mt-2 py-1"
              key={ind}
            >
              <span className="w-3/5 text-lg flex items-center">
                <div className="w-10 h-10">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded-md"
                  />
                </div>
                <span className="pl-2 line-clamp-1 w-[480px]">{item.name}</span>
                <div className="pl-2 w-40 text-gray-500">
                  Color: {item.color}
                </div>
              </span>
              <div className="w-2/5 flex text-center ">
                <span className="w-full">₫{item.price}</span>
                <span className="w-full">{item.quantity}</span>
                <span className="w-full text-right">
                  {item.price * item.quantity}
                </span>
              </div>
            </div>
          ))}
      </div>

      <div className=" border bg-gray-100 p-5 mt-2">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">Payment methods</span>
          <div>
            <div
              className={
                `px-3 py-2  border rounded-md font-semibold hover:text-green-500 hover:border-green-500 ml-5 inline-block cursor-pointer ` +
                (method === "payment on delivery"
                  ? " border-green-500 text-green-500"
                  : "border-gray-500")
              }
              onClick={() => setMethod("payment on delivery")}
            >
              Payment on delivery
            </div>
            <div
              className={
                `px-3 py-2  border rounded-md font-semibold hover:text-green-500 hover:border-green-500 ml-5 inline-block cursor-pointer ` +
                (method === "payment by card"
                  ? " border-green-500 text-green-500"
                  : "border-gray-500")
              }
              onClick={() => setMethod("payment by card")}
            >
              Payment by card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
