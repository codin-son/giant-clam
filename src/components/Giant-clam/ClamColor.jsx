import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "/src/css/ClamColor.css";

// Import images
import giantClam1 from "/src/assets/giant-clam/P9110765.JPG";
import giantClam2 from "/src/assets/giant-clam/P8130932.JPG";
import giantClam3 from "/src/assets/giant-clam/P6020111.JPG";
import giantClam4 from "/src/assets/giant-clam/IMG_6231.jpg";
import giantClam5 from "/src/assets/giant-clam/IMG_2910.JPG";
import giantClam6 from "/src/assets/giant-clam/P3190491.JPG";
import mantleDetail from "/src/assets/giant-clam/mantle.jpg";

const ClamColor = () => {
  return (
    <div className="mt-24">
      <div className="text-white text-4xl font-bold text-center">
        Discover the Kaleidoscope of Giant Clam Colors
      </div>
      <div className="text-center mt-5 text-lg">
        Exploring Nature's Living Masterpieces in Every Shade and Hue
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="h-fit">
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
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={giantClam1}
                alt="Giant Clam 1"
                className="rounded-md h-fit"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={giantClam2}
                alt="Giant Clam 2"
                className="rounded-md h-fit"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={giantClam3}
                alt="Giant Clam 3"
                className="rounded-md h-fit"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={giantClam4}
                alt="Giant Clam 4"
                className="rounded-md h-fit"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={giantClam5}
                alt="Giant Clam 5"
                className="rounded-md h-fit"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={giantClam6}
                alt="Giant Clam 6"
                className="rounded-md h-fit"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-primary p-10 rounded-xl">
            <div className="text-base-100">
              One interesting fact about the coloration of giant clams is that
              their vibrant hues are primarily the result of the presence of
              symbiotic algae called zooxanthellae within their tissues. These
              tiny algae not only provide the stunning colors but also play a
              crucial role in the clam's nutrition by photosynthesizing and
              producing sugars, which benefit the clam. The colors can change
              depending on the clam's health, the species, and environmental
              factors, making them a living canvas of marine beauty.
            </div>
          </div>
          <div style={{ width: "100%", height: "35%" }}>
            <img
              src={mantleDetail}
              alt="Mantle Detail"
              className="rounded-b-none rounded-t-lg"
              style={{ width: "100%", height: "272px", objectFit: "cover" }}
            />
            <div className="text-base-100 text-lg font-bold text-center bg-primary rounded-tl-none rounded-tr-non rounded-b-lg py-3">
              The detail of mantle
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClamColor;