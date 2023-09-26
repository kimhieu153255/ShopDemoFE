import PropTypes from "prop-types";
import Card from "./Card";

const List = ({ list }) => {
  return (
    <div className="flex flex-shrink">
      {list?.map((el, ind) => (
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

List.propTypes = {
  list: PropTypes.array,
};

export default List;
