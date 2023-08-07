import React from "react";

const ButtonCart = ({ number }) => {
  return (
    <div>
      <input type="text" value="-" />
      <input type="text" defaultValue={number} />
      <input type="text" value="+" />
    </div>
  );
};

export default ButtonCart;
