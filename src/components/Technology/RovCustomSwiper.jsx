import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import custom1 from "/src/assets/rov-custom/custom1.jpg"
import custom2 from "/src/assets/rov-custom/custom2.png"
import custom3 from "/src/assets/rov-custom/custom3.jpg"
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
            <SwiperSlide className='object-fill'><img src={custom1} alt="" className='h-full object-fill' /></SwiperSlide>
            <SwiperSlide className='object-fill'><img src={custom2} alt="" className='h-full object-fill' /></SwiperSlide>
            <SwiperSlide className='object-fill'><img src={custom3} alt="" className='h-full object-fill' /></SwiperSlide>
          </Swiper>
  </div>);
};

export default RovCustomSwiper;