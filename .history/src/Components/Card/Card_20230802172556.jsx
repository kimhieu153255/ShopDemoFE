import Rating from "./Rating";

// eslint-disable-next-line react/prop-types
const Card = ({ imgSrc, title, events, cost, num, rate }) => {
  return (
    <div className="inline-block w-44 bg-gray-200 shadow-md hover:border hover:border-green-500 hover:ring-green-500 hover:outline-none rounded-lg cursor-pointer hover:scale-105">
      <div className="rounded-lg h-48 m-1">
        <img
          src={imgSrc || "defaultImage.png"}
          alt="image"
          className="inline-block rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 py-2 text-sm">
        <div className="word-break line-clamp-2 overflow-hidden font-semibold">
          {title || "this is a title"}
        </div>
        <div className="h-6">
          {events &&
            // eslint-disable-next-line react/prop-types
            events.map((event) => (
              <div
                key={event}
                className="p-1 border shadow-sm inline-block bg-red-500 visible rounded-md text-white text-xs"
              >
                {event}
              </div>
            ))}
        </div>
        <Rating rate={rate}></Rating>
        <div className="flex justify-between bottom-0">
          <span>{cost || "xxxxx đ"}</span>
          <span>Sold {num || "0"}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
