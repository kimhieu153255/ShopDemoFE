import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { StoreContext } from "../Contexts/StoreContext";

// eslint-disable-next-line react/prop-types
const CardList = () => {
  const { products, LoadPage, page } = useContext(StoreContext);
  const [data, setData] = useState(products);
  console.log(products);

  useEffect(() => {
    setData(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  useEffect(() => {
    const temp = LoadPage(page, data);
    console.log(temp);
    setData(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
