import React from "react";

const Rating = () => {
  return (
    <div>
      <div className="flex items-center">
        <span className="mr-2">Đánh giá:</span>
        <div className="flex">
          <input
            type="radio"
            id="star5"
            name="rating"
            value="5"
            className="hidden"
          />
          <label htmlFor="star5" className="text-yellow-500 cursor-pointer">
            &#9733;
          </label>
          <input
            type="radio"
            id="star4"
            name="rating"
            value="4"
            className="hidden"
          />
          <label for="star4" className="text-yellow-500 cursor-pointer">
            &#9733;
          </label>
          <input
            type="radio"
            id="star3"
            name="rating"
            value="3"
            className="hidden"
          />
          <label for="star3" className="text-yellow-500 cursor-pointer">
            &#9733;
          </label>
          <input
            type="radio"
            id="star2"
            name="rating"
            value="2"
            className="hidden"
          />
          <label for="star2" className="text-yellow-500 cursor-pointer">
            &#9733;
          </label>
          <input
            type="radio"
            id="star1"
            name="rating"
            value="1"
            className="hidden"
          />
          <label for="star1" className="text-yellow-500 cursor-pointer">
            &#9733;
          </label>
        </div>
      </div>
    </div>
  );
};

export default Rating;
