const Card = (props) => {
  return (
    <div>
      <div>
        <img
          // eslint-disable-next-line react/prop-types
          src={props.imgSrc ? props.imgSrc : "../../../public/defaultImage.png"}
          alt="image"
        />
      </div>
      <div>
        <div>{props.title || "this is a title"}</div>
      </div>
    </div>
  );
};

export default Card;
