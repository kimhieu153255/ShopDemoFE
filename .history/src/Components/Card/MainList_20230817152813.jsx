const MainList = ({ list }) => {
  return (
    <div>
      {list.map((el, ind) => (
        <div key={ind}></div>
      ))}
    </div>
  );
};

export default MainList;
