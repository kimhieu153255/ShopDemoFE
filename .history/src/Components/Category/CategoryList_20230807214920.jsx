import { Swiper, SwiperSlide } from "swiper/react";
import CategoryItem from "./CategoryItem";

import "swiper/css";
import { useRef } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

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
        pagination={{
          clickable: true,
        }}
        spaceBetween={1}
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
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
      </Swiper>
      <button
        onClick={handlePrevSlide}
        className="text-center absolute left-0 top-1/2 z-10 rounded-full shadow-lg hover:scale-125 transform transition-all duration-200 ease-in-out bg-gray-50"
      >
        <FaCaretLeft className="text-3xl pr-1" />
      </button>
      <button
        onClick={handleNextSlide}
        className={`text-center absolute right-0 top-1/2 z-10 rounded-full shadow-lg hover:scale-125 transform transition-all duration-300 ease-in-out bg-gray-50`}
      >
        <FaCaretRight className="text-3xl pl-1 " />
      </button>
    </div>
  );
};

export default CategoryList;
