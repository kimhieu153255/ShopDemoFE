import PropTypes from "prop-types";

const List = ({ list }) => {
  return ({list?.map((el, ind) => (
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
  ))});
};

List.propTypes = {
  list: PropTypes.array,
};

export default List;
