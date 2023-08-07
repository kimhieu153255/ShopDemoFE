import Card from "./Card";
import Cookies from "js-cookie";
import axios from "axios";
import useSWR from "swr";

const url = `http://localhost:20474/store/api/getAllProducts`;

const getAllProducts = async (url, token, storeId) => {
  const response = await axios.get(url, {
    params: {
      storeId: storeId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const CardList = () => {
  const { data, error, isLoading } = useSWR(
    url,
    async (url) =>
      await getAllProducts(url, Cookies.get("token"), Cookies.get("storeId"))
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const list = data.data;

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
