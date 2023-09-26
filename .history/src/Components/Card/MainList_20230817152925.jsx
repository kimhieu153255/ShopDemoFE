import Card from "./Card";

const MainList = ({ list }) => {
  return (
    <div>
      {
        list.map((el, ind) => (
        <Card
          key={ind}
          id={el._id}
          imgSrc={el.imgSrc}
          title={el.name}
          events={el.events}
          cost={el.price}
          num={el.soldCount}
          rate={el.rate}
        ></Card>
      ))}
    </div>
  );
};

export default MainList;
