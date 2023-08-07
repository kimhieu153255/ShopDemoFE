import Banner from "../Components/Banner/Banner";
import CategoryList from "../Components/Category/CategoryList";

const Home = () => {
  return (
    <div className="Home w-[800px] md:w-[600px]">
      <Banner></Banner>
      <CategoryList></CategoryList>
    </div>
  );
};

export default Home;
