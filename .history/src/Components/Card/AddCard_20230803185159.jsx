const AddCard = () => {
  return (
    <div>
      <div>Add Product</div>
      <div>
        {/* form */}
        <div>
          <div className="flex flex-col items-center justify-center">
            {/* name product */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                required
              />
            </div>
            {/* price product */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="price" className="font-semibold">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                required
              />
            </div>
          </div>
        </div>
        {/* add img */}
        <div></div>
      </div>
    </div>
  );
};

export default AddCard;
