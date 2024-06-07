import AiSwiper from "./AiSwiper";
import cmn from "/src/assets/yolov8-perfomance/confusion_matrix_normalized.png";
import cm from "/src/assets/yolov8-perfomance/confusion_matrix.png";
import f1c from "/src/assets/yolov8-perfomance/F1_curve.png";
import pcurve from "/src/assets/yolov8-perfomance/P_curve.png";
import prcuve from "/src/assets/yolov8-perfomance/PR_curve.png";
import rcurve from "/src/asses/yolov8-perfomance/R_curve.png";
import result from "/src/assets/yolov8-perfomance/results.png";
const Ai = () => {
  return (
    <div className="mt-40">
      <div className="grid grid-cols-4 justify-center gap-20">
        <div className="col-span-2">
          <AiSwiper />
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center pe-40">
          <h1 className="text-4xl font-bold text-white">
            Underwater AI: Employing YOLOv8 Object Detection to Monitor Giant
            Clam Populations
          </h1>
          <div className="text-xl mt-5 text-white">
            Integrating YOLOv8 object detection with our ROV has revolutionized
            giant clam monitoring, enabling accurate and efficient data
            collection while minimizing human effort and time spent on manual
            surveys.
          </div>
        </div>
      </div>
      <div className="mt-40">
        <div className="text-center text-white text-4xl font-bold">
          Our AI Perfomance
        </div>
        <div className="text-xl mt-5 text-center text-white">
          <div className="grid grid-cols-3 gap-5">
            <div className="stats bg-primary">
              <div className="stat">
                <div className="text-base-100 stat-title">mAP50 results</div>
                <div className="text-base-100 stat-value">90%</div>
                <div className="text-base-100 stat-desc">at 30% confidence</div>
              </div>
            </div>
            <div className="stats bg-primary">
              <div className="stat">
                <div className="text-base-100 stat-title">Dataset size</div>
                <div className="text-base-100 stat-value">1149</div>
                <div className="text-base-100 stat-desc">of image</div>
              </div>
            </div>
            <div className="stats bg-primary">
              <div className="stat">
                <div className="text-base-100 stat-title">Accuracy</div>
                <div className="text-base-100 stat-value">88%</div>
                <div className="text-base-100 stat-desc">at 30% confidence</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-center">
            <div className="carousel w-3/4">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src={cmn}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide7" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src={cm}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src={f1c}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src={pcurve}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide5" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide5" className="carousel-item relative w-full">
                <img
                  src={prcuve}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide6" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide6" className="carousel-item relative w-full">
                <img
                  src={rcurve}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide5" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide7" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide7" className="carousel-item relative w-full">
                <img
                  src={result}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide6" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40">
        <div>
          <div className="text-center text-white text-4xl font-bold">
            Use Case: YOLOv8 Object Detection in Action
          </div>
          <div className="text-xl mt-5 text-center text-white">
            Our AI-powered ROV employs YOLOv8 object detection to efficiently
            identify and count giant clams in their natural habitats,
            <br /> enabling accurate population assessment and growth
            monitoring. Below is footage from our Tioman Island deployment.
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <iframe
            src="https://drive.google.com/file/d/1Pe-fnu9KWVZjF4VHR0yI8VQyOADWBNOT/preview"
            width="1365px"
            height="768px"
            allow="autoplay"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ai;

