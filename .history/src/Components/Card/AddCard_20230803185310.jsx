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
                min={1}
                required
              />
            </div>
            {/* quantity product */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="quantity" className="font-semibold">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                min={1}
                required
              />
            </div>
            {/* description product */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="description" className="font-semibold">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                cols={30}
                rows={10}
                className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                required
              ></textarea>

          </div>
        </div>
        {/* add img */}
        <div></div>
      </div>
    </div>
  );
};

export default AddCard;
