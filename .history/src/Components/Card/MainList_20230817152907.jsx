import Card from "./Card";

const MainList = ({ list }) => {
  return (
    <div>
      {list.map((el, ind) => (
        <Card
          key={ind}
          id={list._id}
          imgSrc={list.imgSrc}
          title={list.name}
          events={list.events}
          cost={list.price}
          num={list.soldCount}
          rate={list.rate}
        ></Card>
      ))}
    </div>
  );
};

export default MainList;
