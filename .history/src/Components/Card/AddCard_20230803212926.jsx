const AddCard = () => {
  return (
    <div>
      <div>Add Product</div>
      <div className="flex">
        {/* form */}
        <div className="flex flex-col min-w-max">
          <div className="flex flex-col items-center justify-center ">
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
            {/* category product */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="category" className="font-semibold">
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
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
        </div>
        {/* add img */}
        <div className="w-2/5 min-w-max flex flex-col justify-center items-center gap-2 border-l-2 border-gray-300 px-5">
          <div className="w-32 h-32 rounded-full">
            <img
              src={"/avatar.avif"}
              alt="avatar"
              className="w-32 h-32 rounded-full object-cover  "
            ></img>
          </div>
          <div>
            <button className="border border-green-200 bg-green-500 p-1.5 rounded-md hover:bg-green-600 text-white">
              Change
            </button>
          </div>
          <div>
            Maximum file size 1 MB <br /> Format: .JPEG, .PNG
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
