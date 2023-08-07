import { useContext } from "react";
import Card from "./Card";
import { StoreContext } from "../Contexts/StoreContext";
// eslint-disable-next-line react/prop-types
const CardList = () => {
  const { dataCurrentPage } = useContext(StoreContext);
  const LoadCart = async () => {
    const res = await axios.get(`http://localhost:20474/store/api/getAllProduct`, {
      params: {
        storeId: Cookies.get("storeId"),
      },
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    if (res.data) {
      setCart(res.data.data);
    }
  };

  return (
    <div className="grid gap-2 grid-cols-4 lg:grid-cols-5 p-2 xl:grid-cols-7">
      {dataCurrentPage &&
        // eslint-disable-next-line react/prop-types
        dataCurrentPage.map((card, index) => (
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
