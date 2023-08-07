import { useContext } from "react";
import Card from "./Card";
import { StoreContext } from "../Contexts/StoreContext";
import useSWR from "swr";
import Cookies from "js-cookie";

// eslint-disable-next-line react/prop-types
const CardList = () => {
  const { dataCurrentPage } = useContext(StoreContext);

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
