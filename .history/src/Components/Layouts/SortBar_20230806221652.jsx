// import React from 'react';

import {
  FaChevronDown,
  FaSortAmountDown,
  FaSortAmountUpAlt,
} from "react-icons/fa";
import { useRef, useState } from "react";
import ButtonPage from "../Button/ButtonPage";
// import { StoreContext } from "../Contexts/StoreContext";
import { useLocation, useNavigate } from "react-router-dom";

const SortBar = () => {
  const DropRef = useRef();
  const caretRef = useRef();
  const [isDropdown, setIsDropdown] = useState(false);
  // const { SortByPrice, SortBySold, SortByRate, SortByCreatedAt } =
  //   useContext(StoreContext);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const sort = query.get("sort");
  

  const [state, setState] = useState();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between w-full h-fit items-center bg-gray-200 px-10 rounded-md font-semibold py-2 min-w-max gap-5">
      <div className="flex gap-4">
        <span className="py-1 cu">Sort by:</span>
        <span
          className={
            "hover:bg-green-500 hover:text-white px-2 py-1 border bg-gray-100 rounded-md cursor-pointer " +
            (state === "Popularity" ? "bg-green-500 text-white" : "")
          }
          onClick={() => {
            setState("Popularity");
            // SortBySold(false);
            navigate(`/shop?sort=soldCount`);
          }}
        >
          Popularity
        </span>
        <span
          className={
            "hover:bg-green-500 hover:text-white px-2 py-1 border bg-gray-100 rounded-md cursor-pointer " +
            (state === "lastest" ? "bg-green-500 text-white" : "")
          }
          onClick={() => {
            setState("lastest");
            // SortByCreatedAt(true);
            navigate(`/shop?sort=latest`);
          }}
        >
          Lastest
        </span>
        <span
          className={
            "hover:bg-green-500 hover:text-white p-1 border bg-gray-100 rounded-md cursor-pointer " +
            (state === "rate" ? "bg-green-500 text-white" : "")
          }
          onClick={() => {
            setState("rate");
            // SortByRate(true);
            navigate(`/shop?sort=rate`);
          }}
        >
          top rating
        </span>
        <div
          onMouseOver={() => {
            setIsDropdown(true);
            caretRef.current.classList.add("rotate-180");
          }}
          onMouseLeave={() => {
            setIsDropdown(false);
            caretRef.current.classList.remove("rotate-180");
          }}
        >
          <div
            className={
              "flex justify-between items-center gap-2 hover:bg-green-500 hover:text-white border bg-gray-100 rounded-md px-2 py-1 cursor-pointer w-44 " +
              (state === "Low to high" || state === "High to low"
                ? "bg-green-500 text-white"
                : "")
            }
          >
            <span>
              Price
              {state === "Low to high"
                ? ": Low to high"
                : state === "High to low"
                ? ": High to low"
                : ""}
            </span>
            {/* độ trễ 0.3s */}
            <div ref={caretRef} className="duration-300">
              <FaChevronDown></FaChevronDown>
            </div>
          </div>
          {isDropdown && (
            <div
              className="absolute px-4 py-2 border rounded-md bg-gray-100 flex flex-col"
              ref={DropRef}
            >
              <span
                className="hover:text-green-500 cursor-pointer"
                onClick={() => {
                  setState("Low to high");
                  // SortByPrice(true);
                  navigate(`/shop?sort=Low-to-high`);
                }}
              >
                <FaSortAmountUpAlt className="inline-block mr-3"></FaSortAmountUpAlt>
                Low to high
              </span>
              <span
                className="hover:text-green-500 cursor-pointer"
                onClick={() => {
                  setState("High to low");
                  // SortByPrice(false);
                  navigate(`/shop?sort=High-to-low`);
                }}
              >
                <FaSortAmountDown className="inline-block mr-3"></FaSortAmountDown>
                High to low
              </span>
            </div>
          )}
        </div>
      </div>
      <div>
        <ButtonPage></ButtonPage>
      </div>
    </div>
  );
};

export default SortBar;
