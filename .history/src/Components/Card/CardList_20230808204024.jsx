import Card from "./Card";
import Cookies from "js-cookie";
import axios from "axios";
import useSWR from "swr";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { ShopContext } from "../Contexts/ShopContext";

const url = `http://localhost:20474/store/api/getAllProductsByStoreId`;

const CardList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const page = searchParams.get("page");
  const sort = searchParams.get("sort");
  const { setTotal } = useContext(ShopContext);

  const getAllProducts = async (url, token) => {
    console.log("vào getAllProducts");
    const response = await axios.get(url, {
      params: { storeId: Cookies.get("storeId"), page, category, sort },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  };

  const funRef = useRef();
  funRef.current = getAllProducts;

  let { data, error, isLoading, mutate } = useSWR(
    url,
    async (url) => await getAllProducts(url, Cookies.get("token"))
  );

  useEffect(() => {
    console.log("vào useEffect");
    const newData = funRef.current(url, Cookies.get("token"));
    if (!newData) return;
    mutate(newData);
  }, [mutate]);

  useEffect(() => {
    console.log("vào setTotal");
    if (data?.totalPage === undefined) return;
    if (data?.totalPage !== page) setTotal(data?.totalPage);
  }, [data?.totalPage, page, setTotal]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const list = data?.data || [];

  return (
    <div className="grid gap-2 grid-cols-4 lg:grid-cols-5 p-2 xl:grid-cols-7">
      {list &&
        // eslint-disable-next-line react/prop-types
        list.map((card, index) => (
          <Card
            key={index}
            id={card._id}
            imgSrc={card.imgSrc}
            title={card.name}
            events={card.events}
            cost={card.price}
            num={card.soldCount}
            rate={card.rate}
          ></Card>
        ))}
    </div>
  );
};

export default CardList;
