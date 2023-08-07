import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { StoreContext } from "../Contexts/StoreContext";

// eslint-disable-next-line react/prop-types
const CardList = () => {
  const { products, page, LoadPage } = useContext(StoreContext);
  console.log("CardList products: ", products);
  console.log("CardList page: ", page);
  const [data, setData] = useState([]);
  console.log("CardList data: ", data);

  useEffect(() => {
    setData(LoadPage(page, products));
  }, [products]);

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
