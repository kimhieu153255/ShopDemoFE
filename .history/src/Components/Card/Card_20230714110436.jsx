// eslint-disable-next-line react/prop-types
const Card = ({ imgSrc, title, events, cost, num }) => {
  return (
    <div className="inline-block w-44 bg-gray-200 shadow-md hover:border hover:border-green-500 hover:ring-green-200 hover:outline-none rounded-lg hover:shadow-sm cursor-pointer">
      <div className="rounded-lg h-48 m-1">
        <img
          src={imgSrc || "defaultImage.png"}
          alt="image"
          className="inline-block rounded-lg object-cover h-full"
        />
      </div>
      <div className="flex flex-col gap-1 px-4 py-2 text-sm">
        <div className="word-break line-clamp-2 overflow-hidden">
          {title || "this is a title"}
        </div>
        <div className="">
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
        <div className="flex justify-between relative top-0">
          <span>{cost || "xxxxx đ"}</span>
          <span>Đã bán {num || "0"}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
