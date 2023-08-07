const AddCard = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
          <div className="text-2xl font-semibold">Add Card</div>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Card Number"
              className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
            />
            <input

              type="text"
              placeholder="Card Number"
              className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
            />
            <input
              type="text"
              placeholder="Card Number"
      </div>
      <div></div>
    </div>
  );
};

export default AddCard;
