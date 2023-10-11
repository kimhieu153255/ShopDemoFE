const orderDate = [
  {
    nameStore: "Store 1",
    state: "Đang giao",
    totalPrice: 400,
    products: [
      {
        id: 1,
        name: "Product 1 asdg gsdg we aksd gá sskd gwowok dkdg saweis nskdj ajsjdgi jajso lsldg slsldk alsldkg ádlgkasd asgiiwq qgwogoq qư fq we qwe gqw gq we fqw è qư eg qư egqwefqwe qgw e gqwfqw  qwg qư eg ",
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
        <div className="box bg-gray-100 border rounded-md p-5 mb-2" key={index}>
          <div className="topTitle flex justify-between pb-5 pl-2 border-b-2">
            <div className=" flex gap-2 items-center">
              <span className="font-semibold text-lg">{item.nameStore}</span>
              <span className="border border-green-500 rounded-md px-2 hover:bg-green-500 hover:border-green-600">
                View Shop
              </span>
            </div>
            <span className="text-lg font-semibold text-green-500">
              {item.state}
            </span>
          </div>
          {item?.products?.map((product, ind) => (
            <div
              className="item flex items-center justify-between mb-2 border-b-2 py-5"
              key={ind}
            >
              <div className="flex gap-3">
                <div className="w-20 h-20">
                  <img
                    src={product?.img || "https://picsum.photos/200/300"}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="xl:w-[600px] lg:w-[400px] md:w-[300px] line-clamp-2">
                    {product?.name || "Product name"}
                  </div>
                  <div>
                    Product classification: {product?.color}{" "}
                    {product?.color && ", "} {product?.size}
                  </div>
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
