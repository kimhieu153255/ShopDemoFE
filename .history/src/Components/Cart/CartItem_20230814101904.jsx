import { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaMinus, FaPlus } from "react-icons/fa";
// import { CartContext } from "../Contexts/CartContext";
import { useDispatch, useSelector } from "react-redux";
import {
  buyProduct,
  checkedProduct,
  encreaseQuantity,
} from "../../redux-toolkit/CartSlice";
import axios from "axios";
import { FaX } from "react-icons/fa6";
import { get } from "lodash";

// eslint-disable-next-line react/prop-types
const CartItem = ({ img, price, name, check, id, num }) => {
  const GetNumberProductBySizeColor = async (id, color, size) => {
    try {
      const res = await axios.get(
        "http://localhost:20474/product/api/getNumberProductBySizeColor",
        {
          params: {
            color,
            size,
            id,
          },
        }
      );
      if (res.data === 0) {
        return res.data.data;
      }
      return 0;
    } catch (err) {
      console.log(err);
      setError("Please Choose Color and Size");
      overlayRef.current?.classList.remove("hidden");
      overlayRef.current?.classList.add("flex");
      return 0;
    }
  };

  const GetSizeByColor = async (id, color) => {
    try {
      const res = await axios.get(
        "http://localhost:20474/product/api/getSizeByColor",
        {
          params: {
            color,
            id,
          },
        }
      );
      if (res.data) {
        setCurrentSize(res.data.data);
      } else setCurrentSize([]);
    } catch (err) {
      console.log(err);
      setCurrentSize([]);
    }
  };

  const GetColorBySize = async (id, size) => {
    try {
      const res = await axios.get(
        "http://localhost:20474/product/api/getColorBySize",
        {
          params: {
            size,
            id,
          },
        }
      );
      if (res.data) {
        setCurrentColor(res.data.data);
      } else setCurrentColor([]);
    } catch (err) {
      console.log(err);
      setCurrentColor([]);
    }
  };

  const GetAllColorAndSize = async (id) => {
    try {
      const res = await axios.get(
        "http://localhost:20474/product/api/getAllSizeAndColor",
        {
          params: {
            id,
          },
        }
      );
      if (res.data) {
        setSizeColor(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const CaretRef = useRef();
  const DropRef = useRef();
  const [count, setCount] = useState(num);
  const [checkItem, setCheckItem] = useState(check);
  const [colorChosen, setColorChosen] = useState();
  const [sizeColor, setSizeColor] = useState({});
  const [currentSize, setCurrentSize] = useState();
  const [currentColor, setCurrentColor] = useState();
  const [sizeChosen, setSizeChosen] = useState();
  const [error, setError] = useState();
  const overlayRef = useRef();

  const dispatch = useDispatch();
  const BuyList = useSelector((state) => state.cart.BuyList);

  useEffect(() => {
    setCount(num);
    setCheckItem(check);
  }, [num, check]);

  useEffect(() => {
    GetAllColorAndSize(id);
  }, [id]);

  useEffect(() => {
    if (colorChosen) {
      GetSizeByColor(id, colorChosen);
    }
  }, [colorChosen]);

  useEffect(() => {
    if (sizeChosen) {
      GetColorBySize(id, sizeChosen);
    }
  }, [sizeChosen]);

  return (
    <div className="min-w-max flex justify-around items-center gap-3 w-full m-auto py-2 px-4 hover:bg-gray-50 border rounded-lg">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="inline-block text-lg w-5 h-5"
          checked={checkItem}
          onChange={() => {
            dispatch(checkedProduct(id));
            dispatch(
              buyProduct({ check, id, colorChosen, sizeChosen, num, price })
            );
            console.log(BuyList);
          }}
        />
        <div>
          <img
            src={img ? img : "/avatar.avif"}
            alt="img"
            className="w-20 h-20 object-cover rounded-lg"
          />
        </div>
        <div>
          <div className="line-clamp-2 w-40 font-semibold">{name}</div>
        </div>
      </div>
      <div
        onMouseOver={() => {
          DropRef.current?.classList.remove("hidden");
          CaretRef.current?.classList.add("rotate-180");
        }}
        onMouseLeave={() => {
          CaretRef.current?.classList.remove("rotate-180");
          DropRef.current?.classList.add("hidden");
        }}
      >
        <button className="border bg-gray-100 px-5 py-2 rounded-lg">
          <div className="flex items-center">
            Button
            <div className="inline-block" ref={CaretRef}>
              <FaCaretDown></FaCaretDown>
            </div>
          </div>
          {colorChosen && <span>{colorChosen}</span>}
          {sizeChosen && <span> {sizeChosen}</span>}
        </button>
        {sizeColor && (
          <div
            className="hidden absolute bg-gray-100 p-2 border rounded-md shadow-md"
            ref={DropRef}
          >
            {sizeColor.colors && (
              <div className="font-semibold">
                color:
                {sizeColor.colors.map((item, ind) => {
                  console.log("item", item);
                  return (
                    <div
                      key={ind}
                      className={`inline-block border-2 px-2 py-1 rounded-md font-normal hover:border-green-500 hover:text-green-500 mr-1 ${
                        colorChosen === item &&
                        "border-green-500 text-green-500"
                      } ${
                        currentColor &&
                        currentColor.indexOf(item) === -1 &&
                        `opacity-50`
                      } `}
                      onClick={async () => {
                        setColorChosen(item);
                        // updateColor(id, item);
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            )}
            {sizeColor.sizes && (
              <div className="font-semibold mt-1">
                size:
                {sizeColor.sizes.map((item) => (
                  <div
                    key={item}
                    className={`inline-block border-2 px-2 py-1 rounded-md font-normal hover:border-green-500 hover:text-green-500 mr-1 ${
                      sizeChosen === item && `border-green-500 text-green-500`
                    } ${
                      currentSize &&
                      currentSize.indexOf(item) === -1 &&
                      `opacity-50`
                    }`}
                    onClick={() => {
                      setSizeChosen(item);
                      // updateSize(id, item);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div>{price}</div>
      <div>
        <div className="flex w-32">
          <button
            className="px-3 py-2 bg-gray-100 border rounded-l-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white"
            onClick={() => {
              setCount((count) => {
                if (count > 1) return count - 1;
                return count;
              });
              if (count > 1) {
                dispatch(encreaseQuantity({ id, isEncrease: false }));
              }
            }}
          >
            <FaMinus />
          </button>
          <input
            type="text"
            className="w-16 text-center border-t border-b text-md font-semibold"
            value={count}
            onChange={(e) => {
              if (e.target.value <= 0) return setCount(1);
              setCount(e.target.value);
              if (e.target.value > 1) {
                // dispatch(encreaseQuantity({ id, isEncrease: true }));
              }
            }}
          ></input>
          <button
            className="px-3 py-2 bg-gray-100 border rounded-r-md text-md text-center items-center justify-center hover:bg-green-500 hover:text-white"
            onClick={async () => {
              const number = await GetNumberProductBySizeColor(
                id,
                colorChosen,
                sizeChosen
              );
              console.log(number);
              if (count < number) {
                setCount((count) => count + 1);
                dispatch(encreaseQuantity({ id, isEncrease: true }));
              }
            }}
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="w-20 font-bold text-red-500 ml-5"> {count * price}</div>
      <button
        className="border p-2 px-3 rounded-lg bg-green-500 hover:bg-green-600 hover:ring-green-300 text-white font-semibold"
        // onClick={() => deleteProduct(id)}
      >
        Delete
      </button>
      {error && (
        <div
          id="overlay"
          className="fixed top-0 left-0 w-full h-full bg-opacity-70 bg-black items-center justify-center"
          ref={overlayRef}
        >
          <div
            id="messageBox"
            className="bg-white m-auto w-80 h-28 p-4 rounded-md relative"
          >
            <p className="mb-4 font-semibold">{error}</p>
            <button
              id="closeButton"
              className="absolute w-5 h-5 text-sm rounded-full bg-red-400 -top-2 -right-2 text-white flex items-center justify-center hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              onClick={() => {
                overlayRef.current?.classList.add("hidden");
                overlayRef.current?.classList.remove("flex");
              }}
            >
              <FaX />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
