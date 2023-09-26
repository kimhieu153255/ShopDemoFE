import Card from "./Card";

// eslint-disable-next-line react/prop-types
const MainList = ({ list }) => {
  return (
    <div className="w-full">
      {
        // eslint-disable-next-line react/prop-types
        list?.map((el, ind) => (
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
        ))
      }
    </div>
  );
};

export default MainList;
