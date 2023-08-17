import Banner from "../Components/Banner/Banner";
import CategoryList from "../Components/Category/CategoryList";

const Home = () => {
  return (
    <div className="Home md:w-[900px] w-[600px] mx-auto bg-white py-2">
      <Banner></Banner>
      <div className="mt-2 px-2">
        <CategoryList></CategoryList>
      </div>
    </div>
  );
};

export default Home;
