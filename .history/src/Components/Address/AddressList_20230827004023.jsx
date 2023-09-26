import { useEffect, useRef, useState } from "react";
import AddressItem from "./AddressItem";
import axios from "axios";
import Cookies from "js-cookie";
import propTypes from "prop-types";

const AddressList = ({ isHidden }) => {
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
    if (isHidden) funcRef.current();
  }, [isHidden]);

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
                username={item.name}
                phone={item.phone}
                address={`${item.address}-${item.ward}-${item.district}-${item.province}`}
                isDefault={item.isDefault}
              ></AddressItem>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

AddressList.propTypes = {
  isHidden: propTypes.bool,
};

export default AddressList;
