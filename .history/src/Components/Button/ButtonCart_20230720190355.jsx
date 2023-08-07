// eslint-disable-next-line react/prop-types
const ButtonCart = ({ number }) => {
  return (
    <div className="flex">
      <input type="text" value="-" />
      <input type="text" defaultValue={number} />
      <input type="text" value="+" />
    </div>
  );
};

export default ButtonCart;
