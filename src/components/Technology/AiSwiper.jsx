import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import image1 from "/src/assets/detected-gc/1.jpg";
import image2 from "/src/assets/detected-gc/2.jpg";
import image3 from "/src/assets/detected-gc/3.JPG";
import image4 from "/src/assets/detected-gc/4.JPG";
import image5 from "/src/assets/detected-gc/5.JPG";
import image6 from "/src/assets/detected-gc/6.JPG";
import image7 from "/src/assets/detected-gc/7.JPG";
import image8 from "/src/assets/detected-gc/8.JPG";
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
            <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={image6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={image7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={image8} alt="" /></SwiperSlide>
          </Swiper>
        </div>
      );

}

export default AiSwiper;