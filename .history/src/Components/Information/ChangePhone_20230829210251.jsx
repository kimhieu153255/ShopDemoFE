const ChangePhone = () => {
  return (
    <div className="flex flex-col gap-3 justify-center bg-gray-100 border rounded-md w-2/3 mx-auto">
      <h2 className="font-bold text-xl text-center my-5">
        Change Phone Number
      </h2>
      <div className="flex flex-col justify-center px-8 gap-3 text-base">
        <div className="flex flex-col gap-2">
          <label htmlFor="oldPhone" className="font-semibold text-lg">
            Old Phone Number
          </label>
          <input
            type="text"
            id="oldPhone"
            name="oldPhone"
            placeholder="Old Phone Number"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newPhone" className="font-semibold text-lg">
            New Phone Number
          </label>
          <input
            type="text"
            id="newPhone"
            name="newPhone"
            placeholder="New Phone Number"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmNewPhone" className="font-semibold text-lg">
            Confirm New Phone Number
          </label>
          <input
            type="text"
            id="confirmNewPhone"
            name="confirmNewPhone"
            placeholder="Confirm New Phone Number"
            className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
          ></input>
        </div>
        <div className="flex justify-center">
          <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-all">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePhone;
