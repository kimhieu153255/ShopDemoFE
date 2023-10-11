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
        color: "Blue",
        size: "S",
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
        color: "Brown",
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
        <OrderItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Order;
