// eslint-disable-next-line react/prop-types
const CategoryItem = ({ id }) => {
  return (
    <div
      className="p-2 text-center inline-block font-semibold text-md border rounded-lg bg-gray-200 ring-gray-300 ring-0 shadow-sm cursor-pointer hover:border-green-500 hover:scale-105 transition-all "
      onClick={() => console.log(id)}
    >
      <img src="/avatar.avif" alt="a" className="w-40 h-40 object-cover" />
      <span>Áo</span>
    </div>
  );
};

export default CategoryItem;
