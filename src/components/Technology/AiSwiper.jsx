import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
const AiSwiper = () =>{
    return (
        <div className='border-primary border-4 rounded-xl bg-primary '>
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
            <SwiperSlide><img src="/detected-gc/1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/detected-gc/2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/detected-gc/3.JPG" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/detected-gc/4.JPG" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/detected-gc/5.JPG" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/detected-gc/6.JPG" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/detected-gc/7.JPG" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/detected-gc/8.JPG" alt="" /></SwiperSlide>
          </Swiper>
        </div>
      );

}

export default AiSwiper;