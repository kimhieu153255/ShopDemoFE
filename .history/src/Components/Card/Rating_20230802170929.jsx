// eslint-disable-next-line react/prop-types
const Rating = ({ rate }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        if (index < rate)
          return (
            <span key={index} className="text-yellow-400 text-2xl">
              &#9733;
            </span>
          );
        else if (index - rate < 1 && index - rate > 0)
          return (
            <span key={index} className="text-yellow-400 text-2xl">
              &#9734;
            </span>
          );
        else
          return (
            <span key={index} className="text-gray-400 text-2xl">
              &#9733;
            </span>
          );
      })}
    </div>
  );
};

export default Rating;
