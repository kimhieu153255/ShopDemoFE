import Card from "./Card";

const cardList = [
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Áo thun nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Quần jean nam",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Le Kim Hieu",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    title: "Le Kim Hieu",
    events: ["holiday", "sale"],
    cost: "1000000",
    num: "100",
  },
];

const CardList = () => {
  return (
    <div className="grid gap-2 sm:grid-cols-4 lg:grid-cols-5 p-2 xl:grid-cols-8">
      {cardList.map((card) => (
        <Card
          key={card.title}
          imgSrc={card.imgSrc}
          title={card.title}
          events={card.events}
          cost={card.cost}
          num={card.num}
        ></Card>
      ))}
    </div>
  );
};

export default CardList;
