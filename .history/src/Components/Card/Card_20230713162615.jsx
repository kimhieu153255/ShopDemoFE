const Card = ({ imgSrc, title }) => {
  return (
    <div>
      <div>
        <img src={props.imgSrc || "defaultImage.png"} alt="image" />
      </div>
      <div>
        <div>{props.title || "this is a title"}</div>
      </div>
    </div>
  );
};

export default Card;
