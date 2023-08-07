import React from "react";

const Rating = () => {
  return (
    <div>
      <div class="flex items-center">
        <span class="mr-2">Đánh giá:</span>
        <div class="flex">
          <input
            type="radio"
            id="star5"
            name="rating"
            value="5"
            class="hidden"
          />
          <label for="star5" class="text-yellow-500 cursor-pointer">
            &#9733;
          </label>
          <input
            type="radio"
            id="star4"
            name="rating"
            value="4"
            class="hidden"
          />
          <label for="star4" class="text-yellow-500 cursor-pointer">
            &#9733;
          </label>
          <input
            type="radio"
            id="star3"
            name="rating"
            value="3"
            class="hidden"
          />
          <label for="star3" class="text-yellow-500 cursor-pointer">
            &#9733;
          </label>
          <input
            type="radio"
            id="star2"
            name="rating"
            value="2"
            class="hidden"
          />
          <label for="star2" class="text-yellow-500 cursor-pointer">
            &#9733;
          </label>
          <input
            type="radio"
            id="star1"
            name="rating"
            value="1"
            class="hidden"
          />
          <label for="star1" class="text-yellow-500 cursor-pointer">
            &#9733;
          </label>
        </div>
      </div>
    </div>
  );
};

export default Rating;
