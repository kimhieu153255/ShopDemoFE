import Banner from "../Components/Banner/Banner";
import SwiperCard from "../Components/Card/SwiperCard";
import CategoryList from "../Components/Category/CategoryList";

const Home = () => {
  return (
    <div className="Home md:w-[1000px] w-[750px]  mx-auto bg-white py-2">
      <Banner></Banner>

      <div className="mt-2 p-2 border bg-gray-100 rounded-lg">
        <span className="font-semibold text-xl my-3 inline-block ml-5">
          Category
        </span>
        <CategoryList></CategoryList>
      </div>

      <div className="mt-5 p-2 border bg-gray-100 rounded-lg">
        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-xl mb-3 inline-block ml-5">
            Popularity
          </span>
          <button className="bg-gray-200 rounded-lg px-3 py-2 text-sm font-semibold hover:bg-green-500 hover:text-white hover:border-green-500 mr-5">
            See all
          </button>
        </div>
        <SwiperCard></SwiperCard>
      </div>
    </div>
  );
};

export default Home;