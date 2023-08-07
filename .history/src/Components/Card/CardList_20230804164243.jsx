import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { StoreContext } from "../Contexts/StoreContext";

// eslint-disable-next-line react/prop-types
const CardList = () => {
  const { dataCurrentPage } = useContext(StoreContext);
  const [data, setData] = useState();
  // console.log("dataCurrentPage", dataCurrentPage);

  useEffect(() => {
    setData(dataCurrentPage);
    console.log("CardList data: ", data);
  }, [dataCurrentPage]);

  return (
    <div className="grid gap-2 grid-cols-4 lg:grid-cols-5 p-2 xl:grid-cols-7">
      {data &&
        // eslint-disable-next-line react/prop-types
        data.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            events={card.events}
            cost={card.cost}
            num={card.num}
            rate={card.rate}
          ></Card>
        ))}
    </div>
  );
};

export default CardList;
