import { createContext, useState } from "react";
import { change2D } from "../../helpers/helper";
const ListCart = [
  {
    store: "Store 1",
    items: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
        color: ["red", "blue", "green"],
        size: ["S", "M", "L"],
        quantity: 1,
        check: false,
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
        color: ["red", "blue", "green"],
        size: ["S", "M", "L"],
        quantity: 2,
        check: false,
      },
    ],
  },
  {
    store: "Store 2",
    items: [
      {
        id: 3,
        name: "Product 3",
        price: 300,
        img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
        color: ["red", "blue", "green"],
        size: ["S", "M", "L"],
        quantity: 3,
        check: false,
      },
      {
        id: 4,
        name: "Product 4",
        price: 400,
        img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
        color: ["red", "blue", "green"],
        size: ["S", "M", "L"],
        quantity: 4,
        check: false,
      },
      // {
      //   id: 5,
      //   name: "Product 5",
      //   price: 500,
      //   img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
      //   color: ["red", "blue", "green"],
      //   size: ["S", "M", "L"],
      //   quantity: 5,
      // },
    ],
  },
];

const CheckContext = createContext();
function CheckProvider(props) {
  const [checkOneStore, setCheckOneStore] = useState(
    new Array(ListCart.length).fill(false)
  );
  const [items, setItems] = useState(change2D(ListCart));
  const [cartItems, setCartItems] = useState(ListCart);

  function checkStore(nameStore) {
    cartItems.map((e, i) => {
      if (e.store === nameStore) {
        checkOneStore[i] = !checkOneStore[i];
        e.items?.map((e) => {
          return { ...e, check: checkOneStore[i] };
        });
      }
    });

    let result = [];
    for (let i = 0; i < items.length; i++) {
      let temp = [];
      for (let j = 0; j < items[i].length; j++) temp.push(checkOneStore[i]);
      result.push(temp);
    }
    setItems(result);
  }

  function checkProduct(id) {
    cartItems.map((e) => {
      e.items?.map((e) => {
        if (e.id === id) e.check = !e.check;
      });
    });
    console.log(cartItems);
  }

  const value = {
    checkOneStore,
    setCheckOneStore,
    items,
    setItems,
    checkStore,
    cartItems,
    setCartItems,
    checkProduct,
  };
  return (
    <CheckContext.Provider value={value} {...props}></CheckContext.Provider>
  );
}

export { CheckContext, CheckProvider };
