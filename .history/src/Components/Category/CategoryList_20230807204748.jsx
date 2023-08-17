import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import CategoryItem from "./CategoryItem";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);

const CategoryList = () => {
  const btnSwiper = useSwiper();

  const handleNextSlide = () => {
    if (btnSwiper) {
      btnSwiper.slideNext();
    }
  };

  return (
    <div className="">
      <Swiper
        grabCursor={true}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
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

        <button onClick={handleNextSlide} className="px-2">
          next
        </button>
      </Swiper>
    </div>
  );
};

export default CategoryList;
