import { useDispatch, useSelector } from "react-redux";
import Banner from "../Components/Banner/Banner";
import CategoryList from "../Components/Category/CategoryList";

const Home = () => {
  const selector = useSelector((state) => state.auth);
  console.log(selector);
  return (
    <div className="Home md:w-[950px] w-[600px] mx-auto bg-white py-2">
      <Banner></Banner>
      <div className="mt-2 p-2 border bg-gray-100 rounded-lg">
        <span className="font-semibold text-xl mb-3 inline-block ml-5">
          Category
        </span>
        <CategoryList></CategoryList>
      </div>
    </div>
  );
};

export default Home;
