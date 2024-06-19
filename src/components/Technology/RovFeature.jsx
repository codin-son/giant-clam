import RovCustomSwiper from "./RovCustomSwiper";
import ThrusterViewer from "./ThrusterViewer";
const RovFeature = () => {
  return (
    <div className="mt-20">
      <div className="text-center text-white text-4xl font-bold ">
        BlueROV 2 Features
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-3 grid-rows-2 gap-6">
          <div className="rounded-xl w-full h-full  p-5 bg-base-300">
            <div
              className="text-5xl font-bold text-center text-white"
              style={{
                // background:" linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
                // background: "linear-gradient(to right top, #d8b4fe, #cc9efb, #bf88f8, #b271f4, #a559f0, #915df5, #7960f9, #5b63fc, #1e79ff, #008bfd, #0099f5, #0ea5e9)",
                // background: "radial-gradient(circle, #e0e7ff, #d8dfff, #d1d6ff, #cbcdff, #c7c3ff, #c2c0ff, #bcbdff, #b6baff, #acbdff, #a3c0ff, #9bc3ff, #93c5fd)",
                background:
                  " radial-gradient(circle, #cffafe, #b8f3fa, #a0ecf6, #85e4f3, #66ddf1, #51daec, #37d8e6, #00d5e0, #00d6d2, #00d5c1, #01d5ae, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Modular design
            </div>
            <div className="text-white text-2xl text-center font-bold">
              for seamless integration of <br />
              additional devices
            </div>
            <div className="mt-5">
              <RovCustomSwiper />
            </div>
          </div>
          <div className="rounded-xl w-full col-span-2 p-5 bg-base-300 flex flex-col items-center">
            <div
              className="text-6xl font-bold text-center "
              style={{
                background:
                  " radial-gradient(circle, #cffafe, #b8f3fa, #a0ecf6, #85e4f3, #66ddf1, #51daec, #37d8e6, #00d5e0, #00d6d2, #00d5c1, #01d5ae, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Six powerful T200 thrusters
            </div>
            <div className="text-white text-2xl text-center mb-5">
              for unrivaled maneuverability and stability
            </div>
            <ThrusterViewer />
          </div>

          <div className="rounded-xl w-full p-5 bg-base-300 flex flex-col items-center">
            <div
              className="text-6xl font-bold text-center"
              style={{
                background:
                  " radial-gradient(circle, #cffafe, #b8f3fa, #a0ecf6, #85e4f3, #66ddf1, #51daec, #37d8e6, #00d5e0, #00d6d2, #00d5c1, #01d5ae, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Robust
            </div>
            <div className="text-white text-2xl text-center font-bold">
              tether system for real-time communication and power
            </div>
            <img
              src="/gif/sammy-no-connection-ezgif.com-crop.gif"
              alt=""
              style={{ width: "70%", height: "70%" }}
            />
          </div>
          <div className="grid grid-rows-2 gap-5">
            <div className="rounded-xl w-full bg-base-300 p-5 flex flex-col justify-center">
              <div
                className="text-7xl font-bold text-center text-white"
                style={{
                  // background:" linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
                  // background: "linear-gradient(to right top, #d8b4fe, #cc9efb, #bf88f8, #b271f4, #a559f0, #915df5, #7960f9, #5b63fc, #1e79ff, #008bfd, #0099f5, #0ea5e9)",
                  // background: "radial-gradient(circle, #e0e7ff, #d8dfff, #d1d6ff, #cbcdff, #c7c3ff, #c2c0ff, #bcbdff, #b6baff, #acbdff, #a3c0ff, #9bc3ff, #93c5fd)",
                  background:
                    " radial-gradient(circle, #cffafe, #b8f3fa, #a0ecf6, #85e4f3, #66ddf1, #51daec, #37d8e6, #00d5e0, #00d6d2, #00d5c1, #01d5ae, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                300m
              </div>
              <div className="text-white text-2xl text-center mt-5 font-bold">
                depth rating for cost-effective underwater exploration
              </div>
            </div>
            <div className="rounded-xl w-full bg-base-300 p-5 flex flex-col justify-center">
              <div className="text-white text-2xl text-center font-bold">
                <span
                  className="text-6xl"
                  style={{
                    background:
                      " radial-gradient(circle, #cffafe, #b8f3fa, #a0ecf6, #85e4f3, #66ddf1, #51daec, #37d8e6, #00d5e0, #00d6d2, #00d5c1, #01d5ae, #34d399)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  High-definition
                </span>{" "}
                camera for clear images and videos in low-light conditions
              </div>
            </div>
          </div>
          <div className="rounded-xl w-full p-5 bg-base-300">
            <div
              className="text-5xl font-bold text-center"
              style={{
                background:
                  " radial-gradient(circle, #cffafe, #b8f3fa, #a0ecf6, #85e4f3, #66ddf1, #51daec, #37d8e6, #00d5e0, #00d6d2, #00d5c1, #01d5ae, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              QGroundControl
            </div>
            <div className="text-white text-2xl text-center mt-5 font-bold">
              User-friendly interface for easy navigation using
            </div>
            <div>
              <img
                src="/gif/qgroundcontrol.gif"
                alt=""
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RovFeature;
