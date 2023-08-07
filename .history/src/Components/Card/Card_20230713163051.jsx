// eslint-disable-next-line react/prop-types
const Card = ({ imgSrc, title, events }) => {
  return (
    <div>
      <div>
        <img src={imgSrc || "defaultImage.png"} alt="image" />
      </div>
      <div>
        <div>{title || "this is a title"}</div>
        <div>{}</div>
      </div>
    </div>
  );
};

export default Card;
