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
