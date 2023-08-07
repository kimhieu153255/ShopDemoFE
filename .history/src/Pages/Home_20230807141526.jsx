import { SwiperSlide, Swiper } from "swiper/react";

const Home = () => {
  return (
    <div>
      <div className="banners h-[350px] bg-gray-700 max-w-[800px] mx-auto rounded-lg">
        <div className="banner h-full w-full select-none rounded-lg relative">
          <img
            src="/logoShop.avif"
            alt="img"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
