import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { StoreContext } from "../Contexts/StoreContext";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardList = () => {
  const { products, setStoreId } = useContext(StoreContext);
  const id = useParams().id;
  const [arrayLoad, setArrayLoad] = useState(products);
  useEffect(() => {
    setStoreId(id);
    setArrayLoad(products);
  }, [products]);
  return (
    <div className="grid gap-2 grid-cols-4 lg:grid-cols-5 p-2 xl:grid-cols-7">
      {
        // eslint-disable-next-line react/prop-types
        arrayLoad.map((card, index) => (
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
