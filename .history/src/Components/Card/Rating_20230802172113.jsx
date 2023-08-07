import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Rating = ({ rate }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        if (index + 1 <= rate)
          return (
            <div className="inline-block">
              <FaStar className="text-xl text-yellow-400 inline-block"></FaStar>
            </div>
          );
        else if (index - rate + 1 < 1 && index - rate + 1 > 0)
          return (
            <div className="inline-block" key={index}>
              <FaStarHalfAlt className="text-xl text-yellow-400 inline-block"></FaStarHalfAlt>
            </div>
          );
        else
          return (
            <div className="inline-block">
              <FaStar className="text-xl text-yellow-400 inline-block"></FaStar>
            </div>
          );
      })}
      <span className="inline-block"> {rate}</span>
    </div>
  );
};

export default Rating;
