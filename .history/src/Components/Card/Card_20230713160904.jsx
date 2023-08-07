import React from "react";

const Card = (props) => {
  return (
    <div>
      <div>
        <img src={props.img} alt="myPic" />
      </div>
    </div>
  );
};

export default Card;
