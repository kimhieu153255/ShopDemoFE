// eslint-disable-next-line react/prop-types
const Card = ({ imgSrc, title, events, cost, num }) => {
  return (
    <div className="inline-block w-44 bg-gray-200 shadow-md hover:border-green-500">
      <div className="rounded-lg h-48">
        <img
          src={imgSrc || "defaultImage.png"}
          alt="image"
          className="inline-block rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 px-4 py-2 text-sm">
        <div className="word-break line-clamp-2 overflow-hidden">
          {title || "this is a title"}
        </div>
        <div>
          {events && events.map((event) => <div key={event}>{event}</div>)}
        </div>
        <div className="flex justify-between">
          <span>{cost || "xxxxx đ"}</span>
          <span>Đã bán {num || "0"}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
