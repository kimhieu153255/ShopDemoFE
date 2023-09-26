import { useEffect, useRef, useState } from "react";
import AddressItem from "./AddressItem";
import axios from "axios";
import Cookies from "js-cookie";

// const list = [
//   {
//     username: "John Doe",
//     phone: "0123456789",
//     address: "207/1 linh đông, đường linh đông, quận thủ đức, tp hồ chí minh",
//     isDefault: true,
//   },
//   {
//     username: "John Doe",
//     phone: "0123456789",
//     address: "123, Street, City, Country",
//     isDefault: false,
//   },
// ];

const AddressList = () => {
  const [data, setData] = useState([]);
  const user = JSON.parse(Cookies.get("user")?.toString() || null);
  const token = Cookies.get("token")?.toString() || null;

  const funcGetAddressList = async () => {
    try {
      const res = await axios.get(
        `http://localhost:20474/address/api/get?userId=${user._id}&token=${token}`
      );
      if (res.data) {
        console.log(res.data.data);
        setData(res.data.data);
      } else setData([]);
    } catch (err) {
      console.log(err);
      setData([]);
    }
  };
  const funcRef = useRef();
  funcRef.current = funcGetAddressList;

  useEffect(() => {
    funcRef.current();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-xl mb-5">Address</h1>
      {data && (
        <div className="flex flex-col">
          {data.map((item, index) => (
            <div key={index}>
              {index > 0 && (
                <hr className="flex-1 h-[1.5px] bg-gray-200 z-10 my-3"></hr>
              )}
              <AddressItem
                username={item.username}
                phone={item.phone}
                address={item.address}
                isDefault={item.isDefault}
              ></AddressItem>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressList;
