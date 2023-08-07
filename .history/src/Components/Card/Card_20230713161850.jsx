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
            src={
              // eslint-disable-next-line react/prop-types
              props.avatar ? props.avatar : "../../../public/defaultImage.png"
            }
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
