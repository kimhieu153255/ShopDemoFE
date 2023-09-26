import axios from "axios";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";

const Success = () => {
  const Order = JSON.parse(localStorage.getItem("Order"));
  const SaveBuyList = async () => {
    try {
      const res = await axios.post("http://localhost:20474/api/order/save", Order);
      if(res.data.)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    localStorage.removeItem("BuyList");
  }, []);

  return (
    <div className="text-center my-32">
      <FaCheck className="inline-block text-9xl text-green-500"></FaCheck>
      <h1 className="text-3xl font-semibold mt-5">Placed order successfully</h1>
    </div>
  );
};

export default Success;
