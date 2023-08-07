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
          // eslint-disable-next-line react/prop-types
          <img src={props.avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
