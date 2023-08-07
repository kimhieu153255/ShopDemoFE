import React from "react";

const Card = (props) => {
  return (
    <div>
      <div>
        <img
          src={props.imgSrc ? props.imgSrc : "../../../public/defaultImage.png"}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Card;
