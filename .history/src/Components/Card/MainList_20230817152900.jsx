import Card from "./Card";

const MainList = ({ list }) => {
  return (
    <div>
      {list.map((el, ind) => (
        <Card
          key={ind}
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

export default MainList;
