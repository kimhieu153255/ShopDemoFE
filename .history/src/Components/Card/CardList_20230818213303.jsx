import Card from "./Card";
import Cookies from "js-cookie";
import axios from "axios";
import useSWR from "swr";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ShopContext } from "../Contexts/ShopContext";
import PropTypes from "prop-types";

const url = `http://localhost:20474/product/api/getAllProductsByStoreId`;

const CardList = ({ storeId }) => {
  console.log("vào CardList");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const page = searchParams.get("page");
  const sort = searchParams.get("sort");
  const { setTotal } = useContext(ShopContext);

  const getAllProducts = async (url, token, page, category, sort) => {
    try {
      const response = await axios.get(url, {
        params: { storeId: storeId, page, category, sort },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response?.data || [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  // let { data, error, isLoading, mutate } = useSWR(
  //   url,
  //   async (url) =>
  //     await getAllProducts(url, Cookies.get("token"), page, category, sort)
  // );

  useEffect(() => {
    console.log("vào useEffect1 CardList");
    const newData = getAllProducts(
      url,
      Cookies.get("token"),
      page,
      category,
      sort
    );
    if (!newData) return;
    // mutate(newData);
  }, [page, category, sort, mutate]);

  // useEffect(() => {
  //   console.log("vào useEffect2 CardList");
  //   if (data?.totalPage === undefined) return;
  //   if (data?.totalPage !== page) setTotal(data?.totalPage);
  // }, [data?.totalPage, setTotal]);
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  // const list = data?.data || [];

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

CardList.propTypes = {
  storeId: PropTypes.string,
};

export default CardList;
