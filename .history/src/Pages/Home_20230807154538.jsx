import Banner from "../Components/Banner/Banner";
import CategoryList from "../Components/Category/CategoryList";

const Home = () => {
  return (
    <div className="Home w-screen md:w-[800px">
      <Banner></Banner>
      <CategoryList></CategoryList>
    </div>
  );
};

export default Home;
