// eslint-disable-next-line react/prop-types
const ButtonCart = ({ number }) => {
  return (
    <div className="flex w-32">
      <input
        type="button"
        value="-"
        className="w-12 p-2 text-4xl text-center items-center justify-center"
      />
      <input type="text" defaultValue={number} />
      <input type="text" value="+" />
    </div>
  );
};

export default ButtonCart;
