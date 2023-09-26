import Card from "./Card";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
import PropTypes from "prop-types";

const url = `http://localhost:20474/product/api/getAllProductsByStoreId`;

const CardList = ({ storeId, url, setUrl, page, totalPage }) => {
  console.log("vào CardList");

  const getAllProducts = async (url, token, page) => {
    try {
      const response = await axios.get(url, {
        params: { storeId, page },
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

  useEffect(() => {
    const newData = getAllProducts(url, Cookies.get("token"), page);
    if (!newData) return;
    // mutate(newData);
  }, []);



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
