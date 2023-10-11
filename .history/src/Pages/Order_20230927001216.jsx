const orderDate = [
  {
    nameStore: "Store 1",
    state: "Đang giao",
    totalPrice: 400,
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        quantity: 2,
        color: "red",
        size: "L",
        img: "https://picsum.photos/200/300",
      },
      {
        id: 2,
        name: "Product 2",
        price: 100,
        quantity: 2,
        color: "red",
        size: "L",
        img: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    nameStore: "Store 2",
    state: "Đang giao",
    totalPrice: 400,
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        quantity: 2,
        color: "red",
        size: "L",
        img: "https://picsum.photos/200/300",
      },
    ],
  },
];

const Order = () => {
  return (
    <div className="w-full h-full">
      {orderDate.map((item, index) => (
        <div className="box bg-gray-100 p-5" key={index}>
          <div className="topTitle flex justify-between mb-2">
            <div className=" flex gap-2">
              <span className="font-semibold text-lg">{item.nameStore}</span>
              <span className="border rounded-md px-3 py-0.5 hover:bg-green-500 hover:border-green-600">
                View Shop
              </span>
            </div>
            <span className="text-lg font-semibold text-green-500">
              {item.state}
            </span>
          </div>
          {item?.products?.map((product, ind) => (
            <div
              className="item flex items-center justify-between gap-3 mb-2"
              key={ind}
            >
              <div>
                <div className="w-20 h-20">
                  <img
                    src="https://picsum.photos/200/300"
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div>Title</div>
                  <div>Product classification: red, L</div>
                  <div>x 2</div>
                </div>
              </div>
              <div>
                VND <span>200</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Order;
