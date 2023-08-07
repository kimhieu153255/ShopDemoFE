import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
// const ListCart = [
//   {
//     store: "Store 1",
//     checked: false,
//     items: [
//       {
//         id: 1,
//         name: "Product 1",
//         price: 100,
//         img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
//         color: ["red", "blue", "green"],
//         size: ["S", "M", "L"],
//         quantity: 1,
//         check: false,
//       },
//       {
//         id: 2,
//         name: "Product 2",
//         price: 200,
//         img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
//         color: ["red", "blue", "green"],
//         size: ["S", "M", "L"],
//         quantity: 2,
//         check: false,
//       },
//     ],
//   },
//   {
//     store: "Store 2",
//     checked: false,
//     items: [
//       {
//         id: 3,
//         name: "Product 3",
//         price: 300,
//         img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
//         color: ["red", "blue", "green"],
//         size: ["S", "M", "L"],
//         quantity: 3,
//         check: false,
//       },
//       {
//         id: 4,
//         name: "Product 4",
//         price: 400,
//         img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
//         color: ["red", "blue", "green"],
//         size: ["S", "M", "L"],
//         quantity: 4,
//         check: false,
//       },
//       {
//         id: 5,
//         name: "Product 5",
//         price: 500,
//         img: "https://cf.shopee.vn/file/1f6f6f3f0f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
//         color: ["red", "blue", "green"],
//         size: ["S", "M", "L"],
//         quantity: 5,
//         check: false,
//       },
//     ],
//   },
// ];

const CartContext = createContext();
const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [buyList, setBuyList] = useState([]);
  const { user } = useContext(AuthContext);
  const LoadRef = useRef();
  const loadData = async () => {
    if (!user) return;
    try {
      console.log("userId client: ", user._id);
      const res = await axios.get(`http://localhost:20474/cart/api/get`, {
        params: { userId: user._id },
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (res.data) {
        setCartItems(res.data.ListCart);
        console.log("res.data: ", res.data);
      }
    } catch (err) {
      console.log(err.response);
    }
  };
  LoadRef.current = loadData;

  useEffect(() => {
    //get data from be
    LoadRef.current();
    console.log(user?._id);
  }, [user?._id]);

  const checkedStore = (nameStore) => {
    setCartItems(
      cartItems.map((e) => {
        if (e.store === nameStore) {
          e.checked = !e.checked;
          e.items.map((el) => (el.check = e.checked));
        }
        return e;
      })
    );
  };

  const checkedProduct = (id) => {
    setCartItems([
      ...cartItems.map((pro) => {
        pro.items.map((e) => {
          if (e.id === id) e.check = !e.check;
        });
        return pro;
      }),
    ]);
  };

  const encreaseQuantity = (id, isEncrease) => {
    setCartItems(
      cartItems.map((pro) => {
        pro.items?.map((e) => {
          if (e.id === id)
            if (isEncrease) e.quantity++;
            else if (e.quantity > 1) e.quantity--;
        });
        return pro;
      })
    );
    setBuyList(
      buyList.map((e) => {
        if (e.id === id)
          if (isEncrease) e.quantity++;
          else if (e.quantity > 1) e.quantity--;
        return e;
      })
    );
  };

  const deleteProduct = (id) => {
    setCartItems((cartItems) =>
      cartItems
        .map((pro) => {
          pro.items = pro.items.filter((e) => e.id !== id);
          return pro;
        })
        .filter((e) => e.items.length > 0)
    );
    setBuyList(buyList.filter((e) => e.id !== id));
  };

  const buyProduct = (isChecked, id, color, size, quantity, price) => {
    if (!isChecked) {
      if (buyList.filter((e) => e.id === id).length !== 0) return;
      setBuyList((buyList) => [
        ...buyList,
        { id, color, size, quantity, price },
      ]);
    } else deleteProductOrder(id);
  };

  const deleteProductOrder = (id) => {
    setBuyList((buyList) => buyList.filter((e) => e.id !== id));
  };

  const updateSize = (id, size) => {
    setBuyList((buyList) =>
      buyList.map((e) => {
        if (e.id === id) e.size = size;
        return e;
      })
    );
  };

  const updateColor = (id, color) => {
    setBuyList((buyList) =>
      buyList.map((e) => {
        if (e.id === id) e.color = color;
        return e;
      })
    );
  };

  const updateQuantity = (id, quantity) => {
    setBuyList((buyList) =>
      buyList.map((e) => {
        if (e.id === id) e.quantity = quantity;
        return e;
      })
    );
  };

  const totalPayment = () => {
    let total = 0;
    buyList.map((e) => {
      total += e.price * e.quantity;
    });
    return total;
  };

  const totalQuantity = () => {
    let total = 0;
    cartItems.map((e) => {
      e.items.map(() => {
        total += 1;
      });
    });
    return total;
  };

  const addToCart = async (productId) => {
    console.log("productId", productId);
    console.log("user._id", user._id);
    try {
      const res = await axios.post(
        `http://localhost:20474/cart/api/add`,
        {
          userId: user._id,
          productId,
        },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      if (res.data) {
        console.log(res.data);
        window.location.reload();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const value = {
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
    buyList,
    setBuyList,
    totalQuantity,
    addToCart,
  };
  return <CartContext.Provider value={value} {...props}></CartContext.Provider>;
};

export { CartContext, CartProvider };
