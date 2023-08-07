import { SwiperSlide, Swiper } from "swiper/react";

const Home = () => {
  return (
    <div>
      <div className="banners h-[350px] bg-gray-700 max-w-[800px] mx-auto rounded-lg  overflow-hidden">
        <Swiper grabCursor="true">
          <SwiperSlide className="h-full w-full">
            <BannerItem></BannerItem>
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem></BannerItem>
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem></BannerItem>
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem></BannerItem>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const BannerItem = () => {
  return (
    <div className="banner h-full w-full select-none rounded-lg relative">
      <img
        src="/logoShop.avif"
        alt="img"
        className="object-cover w-full h-full rounded-lg"
      />
    </div>
  );
};

export default Home;
