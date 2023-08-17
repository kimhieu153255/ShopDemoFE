import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import CategoryItem from "./CategoryItem";
import "swiper/css";

const CategoryList = () => {
  const btnSwiper = useSwiper();

  return (
    <div className="flex flex-shrink-0">
      <btnSwiper
        grabCursor={true}
        slidesPerView={5}
        navigation
        spaceBetween={1}
        className="w-full"
      >
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
      </btnSwiper>
      <button onClick={() => btnSwiper.slideNext()}>></button>
    </div>
  );
};

export default CategoryList;
