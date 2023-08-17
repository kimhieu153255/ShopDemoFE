import { Swiper, SwiperSlide } from "swiper/react";
import CategoryItem from "./CategoryItem";

import "swiper/css";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoryList = () => {
  const swiperRef = useRef();
  const btnEndRef = useRef();
  const btnStartRef = useRef();

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

  const handleSlideChangeTransitionEnd = () => {
    const isEnd = swiperRef.current.isEnd;
    const isBeginning = swiperRef.current.isBeginning;
    isEnd
      ? btnEndRef.current.classList.add("hidden")
      : btnEndRef.current.classList.remove("hidden");
    isBeginning
      ? btnStartRef.current.classList.add("hidden")
      : btnStartRef.current.classList.remove("hidden");
  };

  return (
    <div className="relative">
      <Swiper
        grabCursor={true}
        breakpoints={{
          380:
            slidesPerView: 3, // Hiển thị 3 slide trên màn hình nhỏ (md)
          ,
          750: {
            slidesPerView: 4, // Hiển thị 4 slide trên màn hình lớn hơn (lg)
          },
          900: {
            slidesPerView: 5, // Hiển thị 5 slide trên màn hình cực lớn (xl)
          },
          // Thêm breakpoints khác nếu cần
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onReachBeginning={handleSlideChangeTransitionEnd}
        onReachEnd={handleSlideChangeTransitionEnd}
        onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
        className="pb-5 pt-2"
      >
        <SwiperSlide>
          <CategoryItem id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem id={2} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem id={3} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem id={4} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem id={5} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem id={6} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem id={7} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem id={8} />
        </SwiperSlide>
        <button
          onClick={handlePrevSlide}
          className="text-center absolute left-0 top-1/2 z-10 rounded-full shadow-lg hover:scale-125 hover:text-gray-500 transform transition-all duration-200 ease-in-out bg-gray-50 p-1 text-gray-400 hidden"
          ref={btnStartRef}
        >
          <FaChevronLeft className="text-xl pr-1" />
        </button>
        <button
          onClick={handleNextSlide}
          className={`text-center absolute right-0 top-1/2 z-10 rounded-full shadow-lg hover:scale-125 hover:text-gray-500 transform transition-all duration-300 ease-in-out bg-gray-50 p-1 text-gray-400`}
          ref={btnEndRef}
        >
          <FaChevronRight className="text-xl pl-1 " />
        </button>
      </Swiper>
    </div>
  );
};

export default CategoryList;
