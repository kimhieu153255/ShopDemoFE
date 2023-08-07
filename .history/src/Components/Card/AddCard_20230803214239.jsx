const AddCard = () => {
  return (
    <div className="w-full border bg-gray-100 p-5 rounded-md">
      <div className="text-center font-bold text-2xl">Add Product</div>
      <div className="flex w-full">
        {/* form */}
        <div className="flex flex-col min-w-max w-2/3">
          <form className="mx-auto ">
            <div className="flex flex-col justify-center self-center">
              {/* name product */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-semibold ml-2">
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
                <label htmlFor="price" className="font-semibold ml-2">
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
                  rows={7}
                  className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                  required
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        {/* add img */}
        <div className="w-1/3 flex flex-col justify-center items-center gap-2 border-l-2 border-gray-300 px-5">
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
