// import React from 'react';

import {
  FaChevronDown,
  FaSortAmountDown,
  FaSortAmountUpAlt,
} from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import ButtonPage from "../Button/ButtonPage";
import { StoreContext } from "../Contexts/StoreContext";

const SortBar = () => {
  const DropRef = useRef();
  const caretRef = useRef();
  const [isDropdown, setIsDropdown] = useState(false);
  const { SortByPrice, SortBySold, SortByRate, SortByCreatedAt } =
    useContext(StoreContext);
  const [state, setState] = useState();
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
            SortBySold(false);
          }}
        >
          Popularity
        </span>
        <span
          className={
            "hover:bg-green-500 hover:text-white px-2 py-1 border bg-gray-100 rounded-md cursor-pointer " +
            (state === "Lastest" ? "bg-green-500 text-white" : "")
          }
          onClick={() => {
            setState("Lastest");
            SortByCreatedAt(true);
          }}
        >
          Lastest
        </span>
        <span
          className={
            "hover:bg-green-500 hover:text-white p-1 border bg-gray-100 rounded-md cursor-pointer " +
            (state === "top rating" ? "bg-green-500 text-white" : "")
          }
          onClick={() => {
            setState("top rating");
            SortByRate(true);
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
              Price{" "}
              {state === "Low to high"
                ? "Low to high"
                : state === "High to low"
                ? "High to low"
                : ""}
            </span>
            <div ref={caretRef}>
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
                  SortByPrice(true);
                }}
              >
                <FaSortAmountUpAlt className="inline-block mr-3"></FaSortAmountUpAlt>
                Low to high
              </span>
              <span
                className="hover:text-green-500 cursor-pointer"
                onClick={() => {
                  setState("High to low");
                  SortByPrice(false);
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
