import Card from "./Card";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const urlGetAllProByStoreId = `http://localhost:20474/product/api/getAllProductsByStoreId`;

const CardList = ({ storeId, url, page, setTotalPage }) => {
  console.log("vào CardList");
  const [data, setData] = useState([]);

  const getAllProducts = async (token, page) => {
    try {
      const response = await axios.get(urlGetAllProByStoreId + url, {
        params: { storeId, page },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data) {
        console.log("response", response.data);
        setTotalPage(response.data?.totalPage);
        setData(response.data?.data || []);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const funcRef = useRef();
  funcRef.current = getAllProducts;

  useEffect(() => {
    funcRef.current(Cookies.get("token"), page);
  }, [page, storeId, url]);

  return (
    <div className="grid gap-2 grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      {data &&
        data.map((card, index) => (
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
  url: PropTypes.string,
  page: PropTypes.number,
  totalPage: PropTypes.number,
  setTotalPage: PropTypes.func,
};

export default CardList;
