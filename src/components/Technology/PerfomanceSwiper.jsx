import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const PerfomanceSwiper = () => {
  return (
    <div className="rounded-xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PerfomanceSwiper;
