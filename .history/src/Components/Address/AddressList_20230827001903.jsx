import { useEffect, useState } from "react";
import AddressItem from "./AddressItem";
import axios from "axios";

const list = [
  {
    username: "John Doe",
    phone: "0123456789",
    address: "207/1 linh đông, đường linh đông, quận thủ đức, tp hồ chí minh",
    isDefault: true,
  },
  {
    username: "John Doe",
    phone: "0123456789",
    address: "123, Street, City, Country",
    isDefault: false,
  },
];

const AddressList = () => {
  const [data, setData] = useState([]);

  const funcGetAddressList = async () => {
    try {
      const res = await axios.get(
        `http://localhost:20474/user/api/address/get`
      );
      if (res.data) {
        console.log(res.data);
        setData(res.data);
      } else setData([]);
    } catch (err) {
      console.log(err);
      setData([]);
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1 className="font-bold text-xl mb-5">Address</h1>
      {list && (
        <div className="flex flex-col">
          {list.map((item, index) => (
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
