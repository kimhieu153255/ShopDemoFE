import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";

const SwiperCard = () => {
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
          <div className="">
            <Card id={1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-1 mb-[52px] mt-2">
            <Card id={2} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-fit">
          <div className="">
            <Card id={3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Card id={4} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Card id={5} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Card id={6} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Card id={7} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Card id={8} />
          </div>
        </SwiperSlide>
        <button
          onClick={handlePrevSlide}
          className="text-center absolute left-0 top-1/2 z-10 rounded-full shadow-lg hover:scale-125 hover:text-gray-500 transform transition-all duration-200 ease-in-out bg-gray-50 p-1 text-gray-400"
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

export default SwiperCard;
