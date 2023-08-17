import { Swiper, SwiperSlide } from "swiper/react";
import CategoryItem from "./CategoryItem";

import "swiper/css";
import { useRef } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

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
    // Check if we are at the end of the Swiper
    const isEnd = swiperRef.current.isEnd;
    console.log("isEnd", isEnd);

    // Check if we are at the beginning of the Swiper
    const isBeginning = swiperRef.current.isBeginning;
    console.log("isBeginning", isBeginning);

    // Enable or disable the next and prev buttons accordingly
    // if (isEnd) {
    //   btnEndRef.current.classList.add("hidden");
    // } else {
    //   btnEndRef.current.classList.remove("hidden");
    // }
    isEnd
      ? btnEndRef.current.classList.add("hidden")
      : btnEndRef.current.classList.remove("hidden");

    // if (isBeginning) {
    //   btnStartRef.current.classList.add("hidden");
    // } else {
    //   btnStartRef.current.classList.remove("hidden");
    // }
    isBeginning
      ? btnStartRef.current.classList.add("hidden")
      : btnStartRef.current.classList.remove("hidden");
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
        onReachBeginning={handleSlideChangeTransitionEnd}
        onReachEnd={handleSlideChangeTransitionEnd}
        onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
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
        <button
          onClick={handlePrevSlide}
          className="text-center absolute left-0 top-1/2 z-10 rounded-full shadow-lg hover:scale-125 transform transition-all duration-200 ease-in-out bg-gray-50"
          ref={btnStartRef}
        >
          <FaCaretLeft className="text-3xl pr-1" />
        </button>
        <button
          onClick={handleNextSlide}
          className={`text-center absolute right-0 top-1/2 z-10 rounded-full shadow-lg hover:scale-125 transform transition-all duration-300 ease-in-out bg-gray-50`}
          ref={btnEndRef}
        >
          <FaCaretRight className="text-3xl pl-1 " />
        </button>
      </Swiper>
    </div>
  );
};

export default CategoryList;
