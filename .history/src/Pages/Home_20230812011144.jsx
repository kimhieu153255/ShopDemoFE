import axios from "axios";
import Banner from "../Components/Banner/Banner";
import SwiperCard from "../Components/Card/SwiperCard";
import CategoryList from "../Components/Category/CategoryList";
import { useEffect, useState } from "react";

const Home = () => {
  const [popularProduct, setPopularProduct] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const LoadPopularProduct = async () => {
    const url = "http://localhost:20474/product/api/getPopularProducts";
    try {
      const res = await axios.get(url, {
        params: { limit: 10 },
      });
      if (res.data) {
        console.log(res.data.data);
        setPopularProduct(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const LoadNewProduct = async () => {
    const url = "http://localhost:20474/product/api/getNewProducts";
    try {
      const res = await axios.get(url, {
        params: { limit: 10 },
      });
      if (res.data) {
        console.log(res.data.data);
        setPopularProduct(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("Home");
    LoadPopularProduct();

  }, []);


  return (
    <div className="Home md:w-[1000px] w-[750px]  mx-auto bg-white py-2">
      <Banner></Banner>

      <div className="mt-5 p-2 border bg-gray-100 rounded-lg">
        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-xl mb-3 inline-block ml-5">
            Category
          </span>
          <button className="bg-gray-200 rounded-lg px-3 py-2 text-sm font-semibold hover:bg-green-500 hover:text-white hover:border-green-500 mr-5">
            See all
          </button>
        </div>
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
        <SwiperCard list={popularProduct}></SwiperCard>
      </div>

      <div className="mt-5 p-2 border bg-gray-100 rounded-lg">
        <div className="flex justify-between items-center mt-3">
          <span className="font-semibold text-xl mb-3 inline-block ml-5">
            New Product
          </span>
          <button className="bg-gray-200 rounded-lg px-3 py-2 text-sm font-semibold hover:bg-green-500 hover:text-white hover:border-green-500 mr-5">
            See all
          </button>
        </div>
        <SwiperCard list={popularProduct}></SwiperCard>
      </div>
    </div>
  );
};

export default Home;
