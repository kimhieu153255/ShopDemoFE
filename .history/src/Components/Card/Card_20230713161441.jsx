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
      
    </div>
  );
};

export default Card;
