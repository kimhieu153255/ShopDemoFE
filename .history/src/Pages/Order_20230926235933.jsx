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
      {orderDate.map((item, index) => {
        <div className="box p-5" key={index}>
          <div className="topTitle flex justify-between">
            <div>
              <span className="font-semibold text-xl">{item.nameStore}</span>
              <span>View Shop</span>
            </div>
            <div>
              <span>state</span>
            </div>
          </div>
          <div className="item">
            <div>
              <img src="https://picsum.photos/200/300" alt="img" />
            </div>
            <div>
              <div>Title</div>
              <div>Product classification: red, L</div>
              <div>x 2</div>
            </div>
            <div>
              VND <span>200</span>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Order;
