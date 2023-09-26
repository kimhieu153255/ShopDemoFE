import Card from "./Card";

const MainList = ({ list }) => {
  return (
    <div>
      {list.map((el, ind) => (
        <Card key={ind}></Card>
      ))}
    </div>
  );
};

export default MainList;
