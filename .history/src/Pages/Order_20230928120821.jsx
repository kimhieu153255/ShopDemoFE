import { useEffect, useRef, useState } from "react";
import OrderItem from "../Components/Order/OrderItem";
import axios from "axios";
import Cookies from "js-cookie";

const orderDate = [
  {
    nameStore: "Store 1",
    state: "Đang giao",
    totalPrice: 400,
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        quantity: 2,
        color: "red",
        size: "L",
        img: "https://picsum.photos/200/300",
      },
      {
        id: 2,
        name: "Product 2",
        price: 100,
        quantity: 2,
        color: "Blue",
        size: "S",
        img: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    nameStore: "Store 2",
    state: "Đang giao",
    totalPrice: 400,
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        quantity: 2,
        color: "Brown",
        size: "L",
        img: "https://picsum.photos/200/300",
      },
    ],
  },
];

const Order = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const userId = Cookies.get("user")._id;
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
      {orderDate.map((item, index) => (
        <OrderItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Order;
