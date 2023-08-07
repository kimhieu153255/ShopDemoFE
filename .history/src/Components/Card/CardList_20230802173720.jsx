import Card from "./Card";

const CardList = ({ listCard }) => {
  return (
    <div className="grid gap-2 grid-cols-4 lg:grid-cols-5 p-2 xl:grid-cols-7">
      {
        // eslint-disable-next-line react/prop-types
        listCard.map((card, index) => (
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
