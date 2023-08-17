import { Swiper, SwiperSlide } from "swiper/react";
import CategoryItem from "./CategoryItem";
import "swiper/css";

const CategoryList = () => {
  return (
    <div className="flex flex-shrink-0">
      <Swiper
        slidesPerView={3}
        grabCursor={false}
        navigation
        spaceBetween={50}
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
      </Swiper>
    </div>
  );
};

export default CategoryList;
