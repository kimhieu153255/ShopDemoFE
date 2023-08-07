// eslint-disable-next-line react/prop-types
const Card = ({ imgSrc, title, events, cost, num }) => {
  return (
    <div>
      <div>
        <img
          src={imgSrc || "defaultImage.png"}
          alt="image"
          className="inline-block"
        />
      </div>
      <div>
        <div>{title || "this is a title"}</div>
        <div>
          {events && events.map((event) => <div key={event}>{event}</div>)}
        </div>
        <div>
          <span>{cost || "xxxxx đ"}</span>
          <span>Đã bán {num || "0"}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
