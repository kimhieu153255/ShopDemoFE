import { useEffect, useRef, useState } from "react";
import OrderItem from "../Components/Order/OrderItem";
import axios from "axios";
import Cookies from "js-cookie";

const Order = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const userId = JSON.parse(Cookies.get("user"))._id;
      const res = await axios.get(
        `http://localhost:20474/api/order/get?userId=${userId}`
      );
      console.log(res.data);
      if (res.data.data) setOrders(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getOrdersRef = useRef();
  getOrdersRef.current = getOrders;

  useEffect(() => {
    getOrdersRef.current();
  }, []);

  return (
    <div className="w-full h-full">
      {orders.map((item, index) => (
        <OrderItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Order;
