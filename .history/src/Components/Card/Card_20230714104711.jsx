// eslint-disable-next-line react/prop-types
const Card = ({ imgSrc, title, events, cost, num }) => {
  return (
    <div className="inline-block w-44 bg-gray-200 shadow-md hover:border hover:border-green-500 hover:ring-green-200 hover:outline-none rounded-lg hover:shadow-sm cursor-pointer">
      <div className="rounded-lg h-48">
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
        <div>
          {events &&
            // eslint-disable-next-line react/prop-types
            events.map((event) => (
              {/* <div
                key={event}
                className="p-1 border shadow-sm inline-block bg-red-500"
              >
                {event}
              </div> */}
              <div class="bg-gray-200 rounded-lg p-4 shadow-md">
  <div class="flex items-center">
    <div class="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.414a6.586 6.586 0 01-4.95-2.22L15.78 5.05A6.586 6.586 0 0115.414 10H13a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0v-2.414A6.586 6.586 0 0110 16.586z" clip-rule="evenodd" />
      </svg>
    </div>
    <h3 class="text-lg font-semibold ml-2">Ticket Title</h3>
  </div>
            ))
            }
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
