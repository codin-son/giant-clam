import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
const RovCustomSwiper = () => {
  return(<div>
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
            style={{ width: "70%", height: "70%" }}
          >
            <SwiperSlide className='object-fill'><img src="/rov-custom/custom1.jpg" alt="" className='h-full object-fill' /></SwiperSlide>
            <SwiperSlide className='object-fill'><img src="/rov-custom/custom2.jpg" alt="" className='h-full object-fill' /></SwiperSlide>
            <SwiperSlide className='object-fill'><img src="/rov-custom/custom3.jpg" alt="" className='h-full object-fill' /></SwiperSlide>
          </Swiper>
  </div>);
};

export default RovCustomSwiper;