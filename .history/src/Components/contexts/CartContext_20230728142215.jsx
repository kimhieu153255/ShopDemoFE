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
    const updateCheckOneStore = [...checkOneStore];
    updateCheckOneStore[index] = !updateCheckOneStore[index];
    setCheckOneStore(updateCheckOneStore);
    const updateCartItems = cartItems.map((e) => {
      if (e.store === nameStore)
        e.items.map((e) => {
          e.check = updateCheckOneStore[index];
        });
      return e;
    });
    //buy all product of store
    if (updateCheckOneStore[index])
      buyAllProductInStore(!updateCheckOneStore[index], nameStore);
    else buyAllProductInStore(updateCheckOneStore[index], nameStore);
    setCartItems(updateCartItems);
  }

  function checkedProduct(id) {
    const updateCartItems = cartItems.map((pro) => {
      pro.items?.map((e) => {
        if (e.id === id) e.check = !e.check;
      });
      return pro;
    });
    setCartItems(updateCartItems);
  }

  function encreaseQuantity(id, isEncrease) {
    const updateCartItems = cartItems.map((pro) => {
      pro.items?.map((e) => {
        if (e.id === id)
          if (isEncrease) e.quantity++;
          else if (e.quantity > 1) e.quantity--;
      });
      return pro;
    });
    setCartItems(updateCartItems);
  }

  function deleteProduct(id) {
    const updateCartItems = cartItems.map((pro) => {
      pro.items = pro.items.filter((e) => e.id !== id);
      return pro;
    });
    if (updateCartItems[0].items.length === 0) updateCartItems.shift();
    setCartItems(updateCartItems);
    deleteProductOrder(id);
  }

  function buyProduct(isChecked, id, color, size, quantity, price) {
    if (!isChecked)
      setBuyList([...buyList, { id, color, size, quantity, price }]);
    else deleteProductOrder(id);
    console.log(buyList);
  }

  function deleteProductOrder(id) {
    const updateBuyList = buyList.filter((e) => e.id !== id);
    setBuyList(updateBuyList);
  }

  function updateSize(id, size) {
    const updateBuyList = buyList.map((e) => {
      if (e.id === id) e.size = size;
      return e;
    });
    console.log(updateBuyList);
    setBuyList(updateBuyList);
  }

  function updateColor(id, color) {
    const updateBuyList = buyList.map((e) => {
      if (e.id === id) e.color = color;
      return e;
    });
    console.log(updateBuyList);
    setBuyList(updateBuyList);
  }

  function updateQuantity(id, quantity) {
    const updateBuyList = buyList.map((e) => {
      if (e.id === id) e.quantity = quantity;
      return e;
    });
    console.log(updateBuyList);
    setBuyList(updateBuyList);
  }

  function buyAllProductInStore(ischecked, nameStore) {
    const Products = cartItems
      .filter((e) => e.store === nameStore)
      .map((e) => e.items);
    for (let i = 0; i < Products.length; i++) {
      buyProduct(
        ischecked,
        Products[i].id,
        Products[i]?.color[0],
        Products[i]?.size[0],
        Products[i].quantity,
        Products[i].price
      );
    }
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
    buyAllProductInStore,
  };
  return <CartContext.Provider value={value} {...props}></CartContext.Provider>;
}

export { CartContext, CartProvider };
