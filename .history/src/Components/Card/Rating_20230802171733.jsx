import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Rating = ({ rate }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        if (index + 1 < rate)
          return (
            <FaStar className="text-xl text-yellow-400 inline-block"></FaStar>
          );
        else if (index - rate + 1 < 1 && index - rate + 1 > 0)
          return (
            <div className="inline-block">
              <FaStarHalfAlt className="text-xl text-yellow-400 inline-block"></FaStarHalfAlt>
            </div>
          );
        else
          return (
            <span key={index} className="text-gray-400 text-2xl">
              &#9733;
            </span>
          );
      })}
      <span> {rate}</span>
    </div>
  );
};

export default Rating;
