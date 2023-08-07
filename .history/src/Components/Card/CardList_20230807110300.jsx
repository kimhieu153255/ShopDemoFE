import Card from "./Card";
import Cookies from "js-cookie";
import axios from "axios";
import useSWR from "swr";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PageContext } from "../Contexts/PageContext";

const url = `http://localhost:20474/store/api/getAllProductsByStoreId`;

const CardList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const page = searchParams.get("page");
  const sort = searchParams.get("sort");
  const { setTotal } = useContext(PageContext);

  const getAllProducts = async (url, token, page, category, sort) => {
    const response = await axios.get(url, {
      params: { storeId: Cookies.get("storeId"), page, category, sort },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  };

  let { data, error, isLoading, mutate } = useSWR(
    url,
    async (url) =>
      await getAllProducts(url, Cookies.get("token"), page, category, sort)
  );

  useEffect(() => {
    const newData = getAllProducts(
      url,
      Cookies.get("token"),
      page,
      category,
      sort
    );
    if (!newData) return;
    mutate(newData);
  }, [page, category, sort, mutate]);

  useEffect(() => {
    // Update the total value after rendering is completed
    setTotal(data?.totalPage);
  }, [data?.totalPage, setTotal]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const list = data?.data;

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
