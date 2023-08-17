import { Swiper, SwiperSlide } from "swiper/react";
import CategoryItem from "./CategoryItem";

import "swiper/css";
import { useRef } from "react";
import { FaCaretRight } from "react-icons/fa";
// import SwiperCore, { Navigation } from "swiper/modules/navigation";
// SwiperCore.use([Navigation]);

const CategoryList = () => {
  const swiperRef = useRef();

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="relative">
      <Swiper
        grabCursor={true}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={1}
        className="w-full"
        allowSlideNext={true}
        allowSlidePrev={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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

        {/* <button onClick={handlePrevSlide}>prev</button> */}
      </Swiper>
      <button
        onClick={handleNextSlide}
        className="text-center absolute right-0 top-1/2 z-10 bg-white rounded-full shadow-md p-1"
      >
        <FaCaretRight className="text-4xl block" />
      </button>
    </div>
  );
};

export default CategoryList;