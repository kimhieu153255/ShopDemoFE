import { useContext, useEffect } from "react";
import Card from "./Card";
import { StoreContext } from "../Contexts/StoreContext";
import { useParams } from "react-router-dom";
import { set } from "lodash";

// eslint-disable-next-line react/prop-types
const CardList = () => {
  const { products, setStoreId } = useContext(StoreContext);
  const id = useParams().id;
  useEffect(() => {
    console.log("cartlist StoreId: ", id);
    setStoreId(id);
  }, [id]);
  return (
    <div className="grid gap-2 grid-cols-4 lg:grid-cols-5 p-2 xl:grid-cols-7">
      {
        // eslint-disable-next-line react/prop-types
        products.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            events={card.events}
            cost={card.cost}
            num={card.num}
            rate={card.rate}
          ></Card>
        ))
      }
    </div>
  );
};

export default CardList;
