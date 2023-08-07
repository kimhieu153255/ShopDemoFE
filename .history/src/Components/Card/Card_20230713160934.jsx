import React from "react";

const Card = (props) => {
  return (
    <div>
      <div>
        <img src={props.src} alt="image" />
      </div>
    </div>
  );
};

export default Card;
