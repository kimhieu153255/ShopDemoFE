import { createContext, useState } from "react";
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

const CartContext = createContext();
function CartProvider(props) {
  const [checkOneStore, setCheckOneStore] = useState(
    new Array(ListCart.length).fill(false)
  );
  const [cartItems, setCartItems] = useState(ListCart);
  const [buyList, setBuyList] = useState([]);

  function checkedStore(nameStore, index) {
    let updateCheckOneStore = [...checkOneStore];
    updateCheckOneStore[index] = !updateCheckOneStore[index];
    setCheckOneStore(updateCheckOneStore);
    let updateCartItems = cartItems.map((e) => {
      if (e.store === nameStore)
        e.items.map((e) => {
          e.check = updateCheckOneStore[index];
        });
      return e;
    });
    setCartItems(updateCartItems);
  }

  function checkedProduct(id) {
    let updateCartItems = cartItems.map((pro) => {
      pro.items?.map((e) => {
        if (e.id === id) e.check = !e.check;
      });
      return pro;
    });
    setCartItems(() => updateCartItems);
  }

  function encreaseQuantity(id, isEncrease) {
    let updateCartItems = cartItems.map((pro) => {
      pro.items?.map((e) => {
        if (e.id === id)
          if (isEncrease) e.quantity++;
          else if (e.quantity > 1) e.quantity--;
      });
      return pro;
    });
    setCartItems(updateCartItems);
  }

  async function deleteProduct(id) {
    let updateCartItems = cartItems.map((pro) => {
      pro.items = pro.items.filter((e) => e.id !== id);
      return pro;
    });
    let index = updateCartItems.findIndex((e) => e.items.length === 0);
    updateCartItems = updateCartItems.filter((e, ind) => ind !== index);
    console.log(index);
    console.log(updateCartItems);
    setCheckOneStore((checkOneStore) =>
      checkOneStore.filter((e, ind) => ind !== index)
    );
    await setCartItems(updateCartItems);
    await deleteProductOrder(id);
    console.log("buyList", buyList);
    console.log("cartItems", cartItems);
    console.log("checkOneStore", checkOneStore);
  }

  function buyProduct(isChecked, id, color, size, quantity, price) {
    if (!isChecked) {
      if (buyList.filter((e) => e.id === id).length !== 0) return;
      setBuyList((buyList) => [
        ...buyList,
        { id, color, size, quantity, price },
      ]);
    } else deleteProductOrder(id);
  }

  function deleteProductOrder(id) {
    setBuyList((buyList) => buyList.filter((e) => e.id !== id));
  }

  function updateSize(id, size) {
    let updateBuyList = buyList.map((e) => {
      if (e.id === id) e.size = size;
      return e;
    });
    setBuyList(updateBuyList);
  }

  function updateColor(id, color) {
    let updateBuyList = buyList.map((e) => {
      if (e.id === id) e.color = color;
      return e;
    });
    setBuyList(updateBuyList);
  }

  function updateQuantity(id, quantity) {
    let updateBuyList = buyList.map((e) => {
      if (e.id === id) e.quantity = quantity;
      return e;
    });
    setBuyList(updateBuyList);
  }

  function totalPayment() {
    let total = 0;
    buyList.map((e) => {
      total += e.price * e.quantity;
    });
    return total;
  }

  const value = {
    checkOneStore,
    setCheckOneStore,
    checkedStore,
    cartItems,
    setCartItems,
    checkedProduct,
    encreaseQuantity,
    deleteProduct,
    buyProduct,
    deleteProductOrder,
    updateSize,
    updateColor,
    updateQuantity,
    totalPayment,
  };
  return <CartContext.Provider value={value} {...props}></CartContext.Provider>;
}

export { CartContext, CartProvider };
