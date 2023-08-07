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
        <div>
          <img
            // eslint-disable-next-line react/prop-types
            src={
              props.avatar ? props.avatar : "../../../public/defaultImage.png"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
